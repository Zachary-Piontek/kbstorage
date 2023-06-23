import getStorageUnits from "./util/getStorage";
import StorageUnit from "./components/StorageUnit";

export default async function Home() {
  const storages = await getStorageUnits();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center m-4">
      {storages.map((storage) => (
        <StorageUnit key={storage.id} {...storage} />
      ))}
    </main>
  );
}
