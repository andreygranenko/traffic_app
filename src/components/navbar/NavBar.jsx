import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 px-8 xl:px-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href={'/noteikumi'}>Noteikumi</Link></li>
            <li><Link href={'/zimes'}>Ceļa zīmes</Link></li>

            <li>
              <a>Tests</a>
              <ul className="p-2">
                <li><Link href={'/tests/b-kategorija'}>B kategorija</Link></li>
                <li><a>C kategorija</a></li>
              </ul>
            </li>

          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl">EGavs</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href={'/noteikumi'}>Noteikumi</Link></li>
          <li><Link href={'/zimes'}>Ceļa zīmes</Link></li>
          <li>
            <details>
              <summary>Tests</summary>
              <ul className="p-2">
                <li><Link href={'/tests/b-kategorija'}>B kategorija</Link></li>
                <li><a>C kategorija</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}

export default NavBar;