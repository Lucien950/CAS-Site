import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'

const Box = ({ children, link }: { children: React.ReactNode, link: string }) => {
	return(
		<Link href={link}>
			<a>
				<div className="h-full p-6 border-2 cursor-pointer hover:bg-gray-300 transition-colors duration-100">
					{children}
				</div>
			</a>
		</Link>
	)
}

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>CAS</title>
			</Head>
			<div>
				{/* TITLE */}
				<Banner subtitle="CBCAS" number="01" bgimage="/landscapeCut.jpg">
					<h1 className="font-bold text-8xl mb-4">CAS</h1>
					<p className="text-2xl">A guide to CAS at Colonel By</p>
				</Banner>

				{/* Question Boxes */}
				<div className="grid grid-cols-7">
					<div className="col-span-2"></div>
					<div className="col-span-5 grid grid-cols-3 grid-rows-2">
						<Box link="https://www.youtube.com/watch?v=6sWlG-1FMoE">
							<h1 className="font-bold text-lg">What is CAS all about at CB</h1>
							<p>(Youtube Video)</p>
						</Box>
						<Box link="/experience">
							<h1 className="font-bold text-lg">What is a CAS Experience?</h1>
						</Box>
						<Box link="/project">
							<h1 className="font-bold text-lg">What is a CAS Project?</h1>
						</Box>
						<Box link="/outcomes">
							<h1 className="font-bold text-lg">What are the CAS Learning Outcomes</h1>
						</Box>
						<Box link="/requirements">
							<h1 className="font-bold text-lg">What are the CAS requirements for graduation?</h1>
						</Box>
						<Box link="/evidence">
							<h1 className="font-bold text-lg">What types of evidence are required?</h1>
						</Box>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home