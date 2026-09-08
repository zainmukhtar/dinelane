"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui";
import { User, ShoppingBag, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
] as const;

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white z-50">
      <Link href="/" className="text-xl font-bold">
        Dinelane
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg font-bold uppercase"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-6">
        <a
          href="/sign-in"
          className="flex items-center gap-2 text-sm font-bold uppercase"
        >
          <User size={20} />
          Sign In / Join
        </a>
        <a href="/cart">
          <ShoppingBag size={22} />
        </a>
      </div>

      <div className="flex md:hidden items-center gap-4">
        <a href="/sign-in">
          <User size={22} />
        </a>
        <a href="/cart">
          <ShoppingBag size={22} />
        </a>
        <Sheet>
          <SheetTrigger>
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Dinelane</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a href="/sign-in" className="text-sm font-bold uppercase">
                Sign In / Join
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
