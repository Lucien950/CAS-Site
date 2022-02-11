const Banner = ({children, subtitle, number, bgimage, className}: {
    children: React.ReactNode,
    subtitle: string,
    number: string,
    bgimage: string
    className?: string,
}) => {
    return (
        <div className={"relative " + className}>
            <img src={bgimage} className="w-full" alt="" />
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-7 text-white">
                <div className="col-span-2 pt-36 pl-10 pr-20 ">
                    <div className="flex flex-row justify-between items-center gap-x-5">
                        <p>{subtitle}</p>
                        <hr className="flex-1" />
                        <p>{number}</p>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col pt-36 pb-20">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Banner;