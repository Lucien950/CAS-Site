import { ReactNode } from "react";

const Banner = ({children, subtitle, number, bgimage, className}: {
    children: ReactNode[],
    subtitle: string,
    number: string,
    bgimage: string
    className?: string,
}) => {
    console.log(children)
    const [head, paragraph] = children
    return (
        <div className={"relative " + className}>
            <img src={bgimage} className="w-full max-h-[500px] object-cover object-top grayscale-[40%]" alt="" />
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-7 text-white">
                <div className="col-span-2 pt-36 pl-10 pr-20 ">
                    <div className="flex flex-row justify-between items-center gap-x-5">
                        <p className="drop-shadow">{subtitle}</p>
                        <hr className="flex-1 drop-shadow" />
                        <p className="drop-shadow">{number}</p>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col justify-end pt-36 pb-20 drop-shadow-2xl">
                    <h1 className="font-bold text-8xl mb-4">
                        {head}
                    </h1>
                    <p className="text-2xl">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;