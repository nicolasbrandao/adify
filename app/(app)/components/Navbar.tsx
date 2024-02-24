import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo_transparent.png";
import { sanity } from "@/sanity/lib/client";

export default async function Navbar() {
  const services = await sanity.fetchServices();

  return (
    <nav className="navbar absolute z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn-ghost btn lg:hidden">
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
            className="dropdown-content menu menu-sm z-[1] mt-3 w-52 rounded-box bg-primary p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/servicos">Serviços</Link>
              <ul className="p-2">
                {services.map((service) => (
                  <li key={service._id}>
                    <Link href={`/servicos/${service.slug.current}`}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p className="pointer-events-none">Recursos</p>
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
          className="btn-ghost btn bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-xl text-transparent"
          href="/"
        >
          <Image src={Logo} height={20} width={20} alt="Adify logo" />
          Adify
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <details>
              <summary>Serviços</summary>
              <ul className="z-10 bg-primary p-2">
                <li>
                  <Link href="/servicos" className="whitespace-nowrap">
                    Ver todos
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service._id}>
                    <Link
                      href={`/servicos/${service.slug.current}`}
                      className="whitespace-nowrap"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Recursos</summary>
              <ul className="z-10 bg-primary p-2">
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
          className="btn border-none bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300"
        >
          Contato
        </Link>
      </div>
    </nav>
  );
}
