import React from "react";

import Link from "next/link";

type Props = {
  button?: boolean;
};

export default function ProductAccordion({ button = false }: Props) {
  return (
    <div className="mb-10 flex flex-col lg:justify-between">
      <div className="mt-10 w-full">
        <h2 className="mx-4 my-1 text-xl text-accent">Título de um Serviço</h2>
        <div className="border-b border-slate-500">
          <div className="collapse-arrow collapse rounded-none border-t border-slate-500">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Click to open this</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse-arrow collapse rounded-none border-t border-slate-500">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Click to open this</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse-arrow collapse rounded-none border-t border-slate-500">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Click to open this</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse-arrow collapse rounded-none border-t border-slate-500">
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
          className="btn-primary btn btn-xs m-2 w-fit"
        >
          Ver mais
        </Link>
      )}
    </div>
  );
}
