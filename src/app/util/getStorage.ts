import Stripe from "stripe";

export default async function getStorageUnits() {
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
          unit_amount: prices.data[0].unit_amount,
        };
      })
    );
    return storageUnitWithPrices;
  };