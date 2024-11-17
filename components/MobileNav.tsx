"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-white flex flex-col gap-4 p-4"
        >
          {/* Logo Link */}
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
            <h4 className="text-2xl font-semibold text-black">BankSphere</h4>
          </Link>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-4">

            {sidebarLinks.map((item) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`);

              return (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.route}
                    className={`flex items-center gap-4 p-2 rounded-md ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "bg-transparent text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        layout="fill"
                        className={`object-contain ${
                          isActive ? "brightness-[3] invert-0" : ""
                        }`}
                      />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
