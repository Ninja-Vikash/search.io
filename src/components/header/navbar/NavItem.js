"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ text, link }) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <Link
      href={`${link}`}
      className={`text-xs font-bold px-3 py-1 rounded ${
        isActive
          ? "bg-blue-500 text-white"
          : "hover:bg-blue-500/50 hover:text-white"
      }`}
    >
      {text}
    </Link>
  );
}
