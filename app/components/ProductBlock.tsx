import Image from "next/image";
import classNames from "classnames";

type PropsType = {
  reverse?: boolean;
}

export default function ProductBlock({ reverse }: PropsType) {
  const mainContainer = classNames(
    'flex flex-col lg:items-center',
    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
  )

  return (
    <div className={mainContainer}>
      <Image
        src="https://picsum.photos/700/384"
        width={700}
        height={384}
        alt="Shoes"
        className="w-full h-[384px] object-cover"
      />
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-base-100 text-[2rem]">Este é um produto!</h2>
        <p className="text-base-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          voluptatem eveniet quasi, tempore adipisci distinctio fugiat accusamus
          porro provident rerum corrupti quas repellendus vero, eligendi
          voluptatum. Expedita nesciunt ratione ad?
        </p>
        <button className="btn btn-primary max-w-[250px] text-base-100">Ver mais</button>
      </div>
    </div>
  );
}
