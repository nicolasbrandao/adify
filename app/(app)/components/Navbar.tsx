"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/public/logo_transparent.png";
import { sanity } from "@/sanity/lib/client";
import FadeIn from "./animated/FadeIn";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Service } from "@/types/types";

export default function Navbar() {
  const [services, setServices] = useState<Service[]>([]);
  const [openMenu, setOpenMenu] = useState<"mobile" | "1" | "2" | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement>(null);
  const menu1Ref = useRef<HTMLUListElement>(null);
  const menu2Ref = useRef<HTMLUListElement>(null);
  const [menu1ChevronRotation, setMenu1ChevronRotation] = useState(0);
  const [menu2ChevronRotation, setMenu2ChevronRotation] = useState(0);

  const toggleMenu = (menuNumber: "mobile" | "1" | "2" | null) => {
    setOpenMenu((prev) => (prev === menuNumber ? null : menuNumber));
    if (menuNumber === "1") {
      setMenu1ChevronRotation((prevRotation) => (prevRotation === 0 ? 180 : 0));
      setMenu2ChevronRotation(0);
    } else if (menuNumber === "2") {
      setMenu2ChevronRotation((prevRotation) => (prevRotation === 0 ? 180 : 0));
      setMenu1ChevronRotation(0);
    } else {
      setMenu1ChevronRotation(0);
      setMenu2ChevronRotation(0);
    }
  };

  const closeMenus = useCallback(() => {
    setOpenMenu(null);
    if (openMenu === "1") {
      setMenu1ChevronRotation((prevRotation) => (prevRotation === 0 ? 180 : 0));
      setMenu2ChevronRotation(0);
    } else if (openMenu === "2") {
      setMenu2ChevronRotation((prevRotation) => (prevRotation === 0 ? 180 : 0));
      setMenu1ChevronRotation(0);
    } else {
      setMenu1ChevronRotation(0);
      setMenu2ChevronRotation(0);
    }
  }, [openMenu]);

  const closeOutsideMenus = useCallback(
    (e: MouseEvent) => {
      if (
        openMenu &&
        ![mobileMenuRef, menu1Ref, menu2Ref].some((ref) =>
          ref.current?.contains(e.target as Node),
        )
      ) {
        closeMenus();
      }
    },
    [openMenu, closeMenus],
  );

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await sanity.fetchServices();
      setServices(servicesData);
    };
    fetchServices();

    document.addEventListener("click", closeOutsideMenus);

    return () => {
      document.removeEventListener("click", closeOutsideMenus);
    };
  }, [openMenu, closeOutsideMenus]);

  return (
    <FadeIn>
      <nav className="absolute z-40 flex w-full items-center justify-between p-2 text-sm">
        <div className="flex">
          <div>
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost btn lg:hidden"
              onClick={() => toggleMenu("mobile")}
            >
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
            <AnimatePresence>
              {openMenu === "mobile" && (
                <motion.ul
                  ref={mobileMenuRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute mt-3 flex w-fit max-w-[210px] flex-col gap-2 rounded-box bg-primary px-4 py-2 shadow lg:hidden"
                >
                  <li className="ml-[-8px] rounded-box px-2 hover:bg-neutral/[.2]">
                    <Link href="/" className="block">
                      Home
                    </Link>
                  </li>
                  <li className="ml-[-8px] rounded-box px-2 hover:bg-neutral/[.2]">
                    <Link href="/sobre" className="block">
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={() => toggleMenu("1")}
                      className="ml-[-8px]   rounded-box px-2 hover:bg-neutral/[.2]"
                    >
                      <Link href={"/servicos"} className="block">
                        Serviços
                      </Link>
                    </div>
                    <ul className="flex flex-col gap-2 p-2">
                      {services.map((service) => (
                        <li
                          key={service._id}
                          onClick={closeMenus}
                          className="rounded-box px-2 hover:bg-neutral/[.2]"
                        >
                          <Link
                            href={`/servicos/${service.slug.current}`}
                            className="block"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div onClick={() => toggleMenu("2")}>
                      <p className="pointer-events-none">Recursos</p>
                    </div>
                    <ul className="flex flex-col gap-2 p-2">
                      <li
                        onClick={closeMenus}
                        className="rounded-box px-2 hover:bg-neutral/[.2]"
                      >
                        <Link href="/blog" className="block">
                          Blog
                        </Link>
                      </li>
                      <li
                        onClick={closeMenus}
                        className="rounded-box px-2 hover:bg-neutral/[.2]"
                      >
                        <Link href="/materiais" className="block">
                          Materiais
                        </Link>
                      </li>
                    </ul>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <Link
            className="btn-ghost btn bg-gradient-to-r from-cyan-300 to-gray-200 bg-clip-text text-xl text-transparent"
            href="/"
          >
            <Image src={Logo} height={20} width={20} alt="Adify logo" />
            Adify
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 px-1">
            <li className="rounded-lg p-2 hover:bg-neutral/[.1]">
              <Link href="/">Home</Link>
            </li>
            <li className="rounded-lg p-2 hover:bg-neutral/[.1]">
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <div
                className="flex cursor-pointer items-center gap-1 rounded-lg p-2 hover:bg-neutral/[.1]"
                onClick={() => toggleMenu("1")}
              >
                <p>Serviços</p>
                <ChevronDownIcon
                  className="h-5"
                  style={{
                    transform: `rotate(${menu1ChevronRotation}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
              <AnimatePresence>
                {openMenu === "1" && (
                  <motion.ul
                    ref={menu1Ref}
                    className="absolute z-10 mt-2 flex w-fit flex-col gap-2 rounded-box bg-primary p-4 shadow"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <li
                      onClick={closeMenus}
                      className="rounded-box px-2 hover:bg-neutral/[.2]"
                    >
                      <Link
                        href="/servicos"
                        className="relative block whitespace-nowrap"
                      >
                        Ver todos
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li
                        key={service._id}
                        onClick={closeMenus}
                        className="rounded-box px-2 hover:bg-neutral/[.2]"
                      >
                        <Link
                          href={`/servicos/${service.slug.current}`}
                          className="block whitespace-nowrap"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <div
                className="flex cursor-pointer items-center gap-1 rounded-lg p-2 hover:bg-neutral/[.1]"
                onClick={() => toggleMenu("2")}
              >
                <p>Recursos</p>
                <ChevronDownIcon
                  className="h-5"
                  style={{
                    transform: `rotate(${menu2ChevronRotation}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
              <AnimatePresence>
                {openMenu === "2" && (
                  <motion.ul
                    ref={menu2Ref}
                    className="absolute z-10 mt-2 flex flex-col gap-2 rounded-box bg-primary p-2 shadow"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <li
                      onClick={closeMenus}
                      className="rounded-box px-2 hover:bg-neutral/[.2]"
                    >
                      <Link href="/blog" className="block">
                        Blog
                      </Link>
                    </li>
                    <li
                      onClick={closeMenus}
                      className="rounded-box px-2 hover:bg-neutral/[.2]"
                    >
                      <Link href="/materiais" className="block">
                        Materiais
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>
        <div className="">
          <Link
            href="/contato"
            className="btn border-none bg-gradient-to-r from-cyan-300 to-gray-200 text-base-300"
          >
            Contato
          </Link>
        </div>
      </nav>
    </FadeIn>
  );
}
