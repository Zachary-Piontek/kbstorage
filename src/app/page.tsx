import Stripe from "stripe";

const getStorageUnits = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const storageUnits = await stripe.products.list();
  console.log(storageUnits);
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
