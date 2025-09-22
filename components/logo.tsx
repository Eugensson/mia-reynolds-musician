import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative mb-4 xl:mb-0 w-57 h-10 block transition-all cursor-pointer"
    >
      <Image
        src="/assets/header/logo.svg"
        fill
        alt="Logo"
        className="object-contain"
      />
    </Link>
  );
};
