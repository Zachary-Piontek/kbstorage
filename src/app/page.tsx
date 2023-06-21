import Stripe from "stripe";

const getStorageUnits = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const storageUnits = await stripe.products.list();

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
      };
    })
  );
  return storageUnitWithPrices;
};

export default async function Home() {
  const storageUnits = await getStorageUnits();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to KB storage 🏢
      </h1>
    </main>
  );
}
