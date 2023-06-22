import Image from "next/image";
import formatPrice from "../util/PriceFormat";

export default function StorageUnit({
  name,
  price,
  image,
}: {
  name: string;
  price: number | null;
  image: string;
}) {
  return (
    <div>
      <h1 className="text-amber-100 text-2xl flex justify-center">{name}</h1>
      <Image
        className="rounded-md border-2 border-amber-200 max-w-full h-auto"
        src={image}
        alt={name}
        width={800}
        height={800}
      />
      {/* had error for null of number, needed to check to see if it exists or does not not, this fixed error */}
      {price !== null ? formatPrice(price) : "No price available"}
    </div>
  );
}
