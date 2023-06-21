import Image from "next/image";

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
      <h1 className="text-amber-100 text-2xl">{name}</h1>
      <Image
        className="rounded-md border-2 border-amber-200"
        src={image}
        alt={name}
        width={400}
        height={400}
      />
      <p>Price: {price}</p>
    </div>
  );
}
