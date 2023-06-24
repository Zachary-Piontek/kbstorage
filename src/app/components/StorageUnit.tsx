import Image from "next/image";
import formatPrice from "../util/PriceFormat";
import Link from "next/link";
import { StorageType } from "../types/StorageType";

export default function StorageUnit({
  id,
  name,
  image,
  description,
  unit_amount,
}: StorageType) {
  return (
    <div>
      {/* added pathname and query to get the url to work properly */}
      <Link
        href={{
          pathname: `/storage/${id}`,
          query: { id, name, image, unit_amount, description },
        }}
      >
        <h1 className="text-amber-100 text-2xl flex justify-center">{name}</h1>
        <Image
          className="rounded-md border-2 border-amber-200 max-w-full h-auto"
          src={image}
          alt={name}
          width={800}
          height={800}
        />
        {/* had error for null of number, needed to check to see if it exists or does not not, this fixed error */}
        {unit_amount !== null ? formatPrice(unit_amount) : "No price available"}
      </Link>
    </div>
  );
}
