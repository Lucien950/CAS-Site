import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>CAS</title>
			</Head>
			<div>
				<div className="relative">
					<img src="/landscapeCut.jpg" className="w-full" alt="" />

					<div className="absolute top-0 left-0 w-full h-full grid grid-cols-7">
						<div className="col-span-2 pt-28 pl-10 pr-20  text-white">
							<div className="flex flex-row justify-between items-center gap-x-5">
								<p>CBCAS</p>
								<hr className="flex-1" />
								<p>01</p>
							</div>
						</div>
						<div className="col-span-3 flex flex-col pt-28 text-white pb-20">
							<h1 className="font-bold text-8xl mb-4">CAS</h1>
							<p className="text-2xl">A guide to CAS at Colonel By</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-7">
					<div className="col-span-2"></div>
					<div className="col-span-5 grid grid-cols-3 grid-rows-2">
						<div className="p-6 border-2">
							<h1 className="font-bold text-lg">What is CAS all about at CB</h1>
						</div>
						<div className="p-6 border-2">
							<h1 className="font-bold text-lg">What is a CAS Experience?</h1>
						</div>
						<div className="p-6 border-2">
							<h1 className="font-bold text-lg">What is a CAS Project?</h1>
						</div>
						<div className="p-6 border-2">
							<h1 className="font-bold text-lg">What are the CAS Learning Outcomes</h1>
						</div>
						<div className="p-6 border-2">
							<h1 className="font-bold text-lg">What are the CAS requirements for graduation?</h1>
						</div>
						<div className="p-6 border-2">
							<h1 className="font-bold text-lg">What types of evidence are required?</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home