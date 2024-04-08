import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-8">
      {/* Tailwind class for width */}
      <Image
        src="/images/penguin_purp_cropped.png"
        width={328} // Original image width
        height={516} // Original image height
        alt="HeaderIcon"
      />
    </div>
  );
}
