import {
  PresentationChartLineIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

export default function ProductCard() {
  return (
    <div className="card flex flex-col items-center mask mask-hexagon-2 bg-base-content shadow-xl w-[384px] h-fit p-4 text-base-100">
      <figure>
        <PresentationChartLineIcon className="h-24 w-24 mt-6 text-accent" />
      </figure>
      <div className="card-body max-w-[300px]">
        <h2 className="card-title">Um Produto!</h2>
        <p>Breve descrição sobre o excelente produto que a Adify oferece.</p>
        <div className="card-actions justify-center w-fit mx-auto">
          <button className="btn btn-primary">
            Ver
            <ArrowTopRightOnSquareIcon className="w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
