import React from "react"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router";

type PageEnum = "home" | "blog" | "portfolio" | "photos";

type LinkType = {
  name: string;
  path: Url;
  activePage: PageEnum;
  active?: boolean;
}

const linkArray: LinkType[] = [
  { name: "Home", path: "/", activePage: "home" },
  { name: "Blog", path: "/blog", activePage: "blog" },
  { name: "Portfolio", path: "/portfolio", activePage: "portfolio" },
  { name: "Photos", path: "/photos", activePage: "photos", active: false },
]

type Props = { activePath: PageEnum, showTitle?: boolean, dots?: string };

const Header: React.FunctionComponent<Props> = ({ activePath, showTitle = true, dots }) => {
  return <div className="flex flex-col justify-center items-center lg:items-start">
    {showTitle && <h1 className="font-titles leading-tight">ZELDA&apos;S LAIR</h1>}
    <div className={`font-germania-one font-bold text-2xl flex flex-row lg:flex-col gap-3 lg:gap-0 mb-2`}>
      {linkArray.map((link) => {
        const isActivePath = link.activePage === activePath;

        return link.active !== false
          ? <div key={link.name} className="flex flex-row gap-1">
            {dots !== undefined && isActivePath ? <div className="block lg:hidden text-center h-1">·</div> : null}
            <Link
              className={`cursor-pointer flex flex-row gap-1 ${isActivePath ? "opacity-100" : "opacity-75"} ${link.active ? "text-gray-500" : ""} ${dots !== undefined ? "opacity-75" : ""}`}
              href={link.path}
            >
              {link.name}
            </Link>
            {dots !== undefined && isActivePath ? <div className="block lg:hidden text-center h-1">·</div> : null}
            {dots !== undefined && isActivePath ? <div className="hidden lg:block text-center h-1">···</div> : null}
          </div>
          : <span
            key={link.name}
            className={`cursor-not-allowed opacity-40`}
          >
            {link.name}
          </span>
      })}
    </div>
  </div>
}

export default Header