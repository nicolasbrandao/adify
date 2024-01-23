import { PresentationChartLineIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

export default function Products() {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-center mt-8 gap-4 items-center bg-base-100 w-full p-4'>
      <ProductCard />
      <ProductCard />
      <ProductCard /> 
    </section>
  )
}

function ProductCard() {
  return (
      <div className="card flex flex-col items-center mask mask-hexagon-2 bg-base-content shadow-xl w-[384px] p-4 text-base-100">
        <figure>
          <PresentationChartLineIcon className='h-24 w-24 mt-6' />
        </figure>
        <div className="card-body max-w-[300px]">
          <h2 className="card-title">Um Produto!</h2>
          <p>Breve descrição sobre o excelente produto que a Adify oferece.</p>
          <div className="card-actions justify-center">
            <button className="btn">
            Ver
            <ArrowTopRightOnSquareIcon className='w-6'/>
          </button>
          </div>
        </div>
      </div>
  )
}
