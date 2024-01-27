import Link from "next/link"

export default function ProductAccordion() {
  return (
    <div className="flex flex-col lg:justify-between">
      <div className="w-full mt-10">
        <h2 className="text-accent my-1 mx-4 text-xl">Título de um Produto</h2>
        <div className="border-b border-slate-500">
          <div className="collapse collapse-arrow text-base-100 border-t border-slate-500 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title">
              Click to open this
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow text-base-100 border-t border-slate-500 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title">
              Click to open this
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow text-base-100 border-t border-slate-500 rounded-none">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title">
              Click to open this
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/produtos/teste" className="btn btn-primary btn-xs text-base-100 m-2 w-fit">Ler mais</Link>
    </div>
  )
}