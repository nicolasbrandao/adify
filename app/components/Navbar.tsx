import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar absolute z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
              <ul className="p-2">
                <li>
                  <a>Marketing</a>
                </li>
                <li>
                  <a>SEO</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/produtos">Recursos</Link>
              <ul className="p-2">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/materiais">Materiais</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost text-xl bg-gradient-to-r from-cyan-300 to-gray-200 text-transparent bg-clip-text"
          href="/"
        >
          Adify
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="active:text-red-500">
            <Link href="/" className="active:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <details>
              <summary>Produtos</summary>
              <ul className="p-2 bg-primary z-10">
                <li>
                  <Link href="/produtos/teste" className="text-nowrap w-fit">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/produtos/teste">SEO</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Recursos</summary>
              <ul className="p-2 bg-primary z-10">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/materiais">Materiais</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/contato"
          className="btn bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300 border-none"
        >
          Contato
        </Link>
      </div>
    </nav>
  );
}
