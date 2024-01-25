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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <a>Sobre</a>
            </li>
            <li>
              <a>Produtos</a>
              <ul className="p-2">
                <li>
                  <a>Produto 1</a>
                </li>
                <li>
                  <a>Produto 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contato</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Adify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <details>
              <summary>Produtos</summary>
              <ul className="p-2 bg-base-200 z-10">
                <li>
                  <a>Produto</a>
                </li>
                <li>
                  <a>Produto</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contato</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base-300">
          Contato
        </a>
      </div>
    </nav>
  );
}
