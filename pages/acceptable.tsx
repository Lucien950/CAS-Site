import Head from "next/head";
import Banner from "../components/Banner";
const acceptable = () => {
	return (
		<>
			<Head>
				<title>Acceptable CAS Projects</title>
			</Head>
			<div>
				<Banner subtitle="ACCEPTABLES" number="02" bgimage="/banner.jpg" className="mb-10">
					<h1 className="font-bold text-8xl mb-4">Acceptable CAS Projects</h1>
					<p className="text-2xl">What are acceptable CAS projects?</p>
				</Banner>

				<div className="mx-auto max-w-5xl">
					<div className="prose max-w-none mb-24 text-xl">
						<p> In general, an experience/project may be acceptable if: </p>
						<ul>
							<li> The experience falls under one or more of the CAS strands (creativity, activity, service). </li>
							<li> The student can demonstrate how one or more of the learning outcomes will be met. </li>
							<li> The student can demonstrate how they will personally grow from the experience. </li>
							<li> The activity has real consequences or benefits for the student and/or other people. </li>
						</ul>
						<p> Unacceptable experiences/projects include: </p>
						<ul>
							<li> Anything for which money is paid. </li>
							<li> Anything that is for a grade or needed for high school/IB credit. Time spent on simple, tedious, and/or repetitive tasks (ex. filing), replacing books on library shelves, shredding paper). Family duties, religious devotions, or proselytizing. </li>
							<li> Passive pursuits (ex. going to a museum or concert will not count as creative). </li>
							<li> Activities that cause division among different groups in the community. Any course that is part of your IB Diploma Programme </li>
						</ul>

						<h1> Political and Religious Activities </h1>
						<p>
							Due to the fact that this is an international program of study, the IB has no view on whether or not it is appropriate for students to be involved in political/religious activities as part of their educational experience. When trying to determine if an activity within one or both of these areas should be submitted for CAS approval please take into consideration the following:
						</p>
						<ul>
							<li> Does the activity meet the requirements above for something that counts as CAS? </li>
							<li> Could the activity be interpreted as proselytizing by others? </li>
							<li> Does the religious activity take place during regularly scheduled worship? Is it an activity that will cause, or worsen, social divisions? </li>
							<li> Is the activity safe and secure, given the local circumstances? What are the learning opportunities for the student? </li>
						</ul>
					</div>
				</div>

			</div>
		</>
	);
}

export default acceptable;