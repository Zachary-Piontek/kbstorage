import Stripe from "stripe";
import StorageUnit from "./components/StorageUnit";

const getStorageUnits = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  // stripe by default only returns 10 items, so we need to set a limit
  const storageUnits = await stripe.products.list({
    limit: 20,
  });

  const storageUnitWithPrices = await Promise.all(
    storageUnits.data.map(async (storageUnit) => {
      const prices = await stripe.prices.list({
        product: storageUnit.id,
      });
      return {
        id: storageUnit.id,
        name: storageUnit.name,
        price: prices.data[0].unit_amount,
        image: storageUnit.images[0],
        currency: prices.data[0].currency,
        description: storageUnit.description,
      };
    })
  );
  return storageUnitWithPrices;
};

export default async function Home() {
  const storageUnits = await getStorageUnits();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center m-4">
      {storageUnits.map((storageUnit) => (
        <StorageUnit key={storageUnit.id} {...storageUnit} />
      ))}
    </main>
  );
}
