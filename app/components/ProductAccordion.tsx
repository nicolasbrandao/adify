import Link from "next/link";

type Props = {
  button?: boolean;
};

export default function ProductAccordion({ button = false }: Props) {
  return (
    <div className="flex flex-col lg:justify-between">
      <div className="w-full mt-10">
        <h2 className="text-accent my-1 mx-4 text-xl">Título de um Produto</h2>
        <div className="border-b border-slate-500">
          <div className="collapse collapse-arrow border-t border-slate-500 rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Click to open this</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-t border-slate-500 rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Click to open this</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-t border-slate-500 rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Click to open this</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-t border-slate-500 rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Click to open this</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
      {button && (
        <Link
          href="/produtos/teste"
          className="btn btn-primary btn-xs m-2 w-fit"
        >
          Ler mais
        </Link>
      )}
    </div>
  );
}
