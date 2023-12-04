"use client";
import Link from "next/link";
import React from "react";
import { IoIosBug } from "react-icons/io";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", title: "Dashboard" },
    { href: "/issues", title: "Issues" },
  ];

  return (
    <nav className="flex space-x-6 mb-5 border-b h-14 items-center px-5">
      <Link href="/">
        <IoIosBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            // className="text-zinc-500 hover:text-zinc-800 transition-colors"
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              " hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
