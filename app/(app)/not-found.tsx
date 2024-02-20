import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-[2rem]">
        Infelizmente, a página não foi encontrada 😿
      </h1>
      <Link href={"/"} className="underline">
        Voltar ao início
      </Link>
    </div>
  );
}

export default NotFound;
