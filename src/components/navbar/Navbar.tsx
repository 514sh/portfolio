"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkInterface {
  name: string;
  route: string;
}

const NavBar = () => {
  const pathName = usePathname();
  const links: LinkInterface[] = [
    { name: "About", route: "/" },
    { name: "Contacts", route: "/contacts" },
    { name: "Blogs", route: "/blogs" },
  ];
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-between m-0 pb-8">
        <div className="basis-1/3 grow-4 text-2xl py-8 tracking-tight">
          MARK BALAGTAS
        </div>
        <div className="basis-1/3 grow-4">
          <div className="flex flex-row flex-nowrap justify-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.route}
                className={
                  pathName === link.route
                    ? "bg-stone-800 basis-1/4 text-2xl text-stone-100 text-center tracking-wider p-8 rounded-b-xl"
                    : "bg-stone-200 basis-1/4 text-xl text-stone-800 text-center tracking-wider hover:bg-stone-400 p-8 rounded-b-xl"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="basis-1/3 grow-4"></div>
      </div>
    </>
  );
};

export default NavBar;
