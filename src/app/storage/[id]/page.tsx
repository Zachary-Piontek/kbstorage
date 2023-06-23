import Image from "next/image";
import formatPrice from "../../util/PriceFormat";

export default async function Storage({ searchParams }) {
  console.log(searchParams);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-amber-100 text-2xl flex justify-center">
        {searchParams.name}
      </h1>
      <Image
        className="rounded-md border-2 border-amber-200 max-w-full h-auto p-2"
        src={searchParams.image}
        alt={searchParams.name}
        width={800}
        height={800}
      />
      <p className="flex p-4">{searchParams.description}</p>
      {searchParams.price !== null
        ? formatPrice(searchParams.price)
        : "No price available"}
    </div>
  );
}
