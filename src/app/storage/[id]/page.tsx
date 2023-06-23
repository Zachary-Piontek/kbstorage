import Image from "next/image";
import formatPrice from "../../util/PriceFormat";

// added interface to get rid of error
interface SearchParams {
  name: string;
  image: string;
  description: string;
  price: number | null;
}

export default async function Storage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-amber-200 font-bold text-2xl flex justify-center">
        {searchParams.name}
      </h1>
      <Image
        className="rounded-md border-2 border-amber-200 max-w-full h-auto p-2"
        src={searchParams.image}
        alt={searchParams.name}
        width={800}
        height={800}
      />
      <p className="flex p-4 text-amber-100">{searchParams.description}</p>
      <p className="font-bold text-amber-300">
        {searchParams.price !== null
          ? formatPrice(searchParams.price)
          : "No price available"}
      </p>
      <button className="bg-amber-300 text-black rounded-sm p-2 m-2">
        Add to Cart
      </button>
    </div>
  );
}
