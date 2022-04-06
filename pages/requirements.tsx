import Banner from "../components/Banner";
import Head from "next/head"

const requirements = () => {
	return (
		<>
			<Head>
				<title>Requirements for CAS</title>
			</Head>
			<div>
				<Banner subtitle="REQUIREMENTS" number="02" bgimage="/banner.jpg" className="mb-10">
					<h1 className="font-bold text-8xl mb-4">CAS Requirements</h1>
					<p className="text-2xl">A guide to fulfilling CAS graduation requirements</p>
				</Banner>
				<div className="container prose mb-20">

					<h1>
						FAQ Completing CAS for Graduation Requirements
					</h1>
					
					<h2>
						When is CAS Due?
					</h2>

					<blockquote>
						At the end of May, but you should be wrapping things up by the beginning of May.
					</blockquote>

					<h2>
						How many entries should I have?
					</h2>
					<blockquote>
						6 – 10 minimum, more is fine.
					</blockquote>

					<h2>
						How many of each CAS category should I have?
					</h2>
					<blockquote>
						At least 2 of each Creativity, Activity, and Service. Many activities will combine more than 1.
					</blockquote>

					<h2>
						How many of the 7 CAS Learning Outcomes should I cover?
					</h2>
					<blockquote>
						All of them at least once, and five of them at least twice.
					</blockquote>

					<h2>
						How many reflections including evidence are required?
					</h2>
					<blockquote>
						At least 3, one from the beginning middle and end. Label them reflection 1, 2 and 3.
					</blockquote>
					
					<h2>
						Does the CAS Project count towards these requirements?
					</h2>
					<blockquote>
						Yes, most certainly.
					</blockquote>

					<p>
						I will start reviewing CAS Portfolios for completion around mid-May, but you should have
						everything wrapped up by June 4 th. As there are over 200 students to review, do not expect to
						see your portfolio marked complete by any certain date.
					</p>
					
					<p>
						Please refer to previous messages regarding evidence and what to include in your
						reflections.
					</p>
				</div>
			</div>
		</>
	);
}

export default requirements;