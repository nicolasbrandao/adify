import {
  PresentationChartLineIcon,
  ChartBarIcon,
  GlobeAmericasIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export default function AboutPage() {
  return (
    <section className="my-auto p-4 max-w-[700px] pt-14">
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
          <p className="flex gap-4 items-center font-bold italic">
            Time Adify
            <PresentationChartLineIcon className="h-8" />
          </p>
          <div className="flex max-h-[150px] text-accent mt-10">
            <BanknotesIcon />
            <GlobeAmericasIcon />
            <ChartBarIcon />
          </div>
        </footer>
      </article>
    </section>
  );
}
