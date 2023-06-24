import Image from "next/image";
import formatPrice from "../../util/PriceFormat";
import { SearchParamsTypes } from "@/app/types/SearchParamsType";
import AddCart from "./AddCart";

export default async function Storage({ searchParams }: SearchParamsTypes) {
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
        {searchParams.unit_amount !== null
          ? formatPrice(searchParams.unit_amount)
          : "No price available"}
      </p>
      <AddCart {...searchParams} />
    </div>
  );
}
