import React from "react";
import {
  PresentationChartLineIcon,
  ChartBarIcon,
  GlobeAmericasIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section className="my-auto max-w-[700px] p-4 pt-14">
      <article className="flex flex-col gap-4">
        <header>
          <h1 className="text-[2rem] font-bold">Quem somos?</h1>
        </header>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          aspernatur illo amet harum natus nisi minima, sint ab voluptate
          reprehenderit accusantium nesciunt sequi voluptates? Voluptatum, est.
          Neque voluptate expedita quibusdam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          aspernatur illo amet harum natus nisi minima, sint ab voluptate
          reprehenderit accusantium nesciunt sequi voluptates? Voluptatum, est.
          Neque voluptate expedita quibusdam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          aspernatur illo amet harum natus nisi minima, sint ab voluptate
          reprehenderit accusantium nesciunt sequi voluptates? Voluptatum, est.
          Neque voluptate expedita quibusdam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          aspernatur illo amet harum natus nisi minima, sint ab voluptate
          reprehenderit accusantium nesciunt sequi voluptates? Voluptatum, est.
          Neque voluptate expedita quibusdam?
        </p>
        <footer>
          <p className="flex items-center gap-4 font-bold italic">
            Time Adify
            <PresentationChartLineIcon className="h-8" />
          </p>
          <div className="mt-10 flex max-h-[150px] text-accent">
            <BanknotesIcon />
            <GlobeAmericasIcon />
            <ChartBarIcon />
          </div>
        </footer>
      </article>
    </section>
  );
}
