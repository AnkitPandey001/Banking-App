"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: User) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="size-[24px] max-xl:size-14"
          />
          <h4 className="sidebar-logo">BankSphere</h4>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              className={`sidebar-link ${isActive ? "bg-blue-500" : ""}`}
              href={item.route}
              key={item.label}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={isActive ? "brightness-[3] invert-0" : ""}
                />
              </div>
              <p className={`sidebar-label ${isActive ? "!text-white" : ""}`}>
                {item.label}
              </p>
            </Link>
          );
        })}

        USER
        USER
       </nav>
        FOOTER
    </section>
  );
};

export default Sidebar;
