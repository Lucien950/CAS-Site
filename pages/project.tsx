import Head from "next/head";
import Banner from "../components/Banner";

const project = () => {
	return (
		<>
			<Head>
				<title>What is a CAS Project</title>
			</Head>
			<div>
				<Banner subtitle="PROJECT" number="02" bgimage="/banner.jpg" className="mb-10">
					{"CAS Projects"}
					{"A guide to CAS projects at CB"}
				</Banner>
				<div className="container prose mb-24">
					<h1>Intro</h1>
					<p> A CAS Project provides a unique opportunity for you to distinguish yourself from others for your university and college applications, job applications, and scholarships! Many students have high marks and have participated in several teams, clubs and competitions; so universities are looking for other meaningful reasons to accept an applicant. </p>

					<h1>Running Clubs for CAS</h1>
					<h3>
						<strong>Please note: Creating a club as a CAS Project is not recommended.</strong>
					</h3>
					<p>There are a few reasons for this. Even though a club initiative may be well thought out, it is difficult to attract enough students and keep it running for the whole year in a meaningful way. This is because Colonel By typically has over 60 different clubs and there is a sense of 'club fatigue' which can make it difficult to find a teacher supervisor and maintain enough attendance from the school community to make it viable. It will not be marked complete without evidence of meeting all the criteria. </p>

					<ol className="list-decimal">
						<li>The club must run for the entire year. (Oct - April)</li>
						<li>The club must have a clear objective or goal that must be demonstrably achieved to count as a CAS Project.</li>
						<li>There must be minutes and attendance taken at each meeting. Maybe a video blog or something</li>
						<li>There must be service element to the club.</li>
						<li>The club is initiated and run by the students, advertised, and open to all students to join.</li>
						<li>There should be a mission statement and guidelines around ensuring that it is also a safe place for all students participating.</li>
					</ol>

					<p>
						Be Creative!! For example, tutoring initiatives may be very beneficial in
						helping students who find online learning to be challenging. Many students
						really need one-on-one guidance.
					</p>

					<h1>
						What does a CAS project involve?
					</h1>
					<p>
						CAS requires students to take part in a range of experiences and at least one project.
					</p>

					<p>
						These should involve:
					</p>
					<ul className="list-disc">
						<li> A CAS project is collaborative - you must demonstrate teamwork and cooperation. This could be with a group of students or with members of the wider community.</li>
						<li> A CAS Project should come from your own ideas and initiative. This doesn't mean it has to be a completely original concept, just your own ideas about how to implement it.</li>
						<li> A project must last for at least a whole month - this can include the planning stages to completion. But a project of longer than a month is absolutely fine as well and is likely to offer greater possibilities!</li>
						<li> Real, purposeful activities, with significant outcomes</li>
						<li> Personal challenge</li>
						<li> Thoughtful consideration, such as planning, reviewing progress, reporting</li>
						<li> Reflection on Learning Outcomes and personal learning</li>
						<li> Plenty of supporting evidence</li>
					</ul>
					
					<p>
						A meaningful CAS Project really should combine 2 or 3 of the Creativity, Activity, and
						Service categories, but this is not mandatory. In some instances, it may be appropriate
						to only focus on one.
					</p>

					<h1>
						CAS Project Evidence and Reflections Required
					</h1>
					<p> You will need to provide lots of evidence of collaboration, ongoing planning, preparation and promotion of this project. There should also some results-based evidence of completion when possible. Please complete at least three reflections. There should be one from the beginning, middle and end of your CAS Experience. Your reflections must also include an assessment of how well you achieved your chosen Learning Outcomes or what you learned in the process. </p>
					
					<h2> Example of a creativity project </h2>
					<p>For a creativity project, a talented musician could arrange a piece for a group of instruments and then prepare the musicians for a performance. An artist might organize an art show or blog to raise awareness. Read our blog about a group of students in New York who produced and performed a play to raise awareness of a real-world issue. </p>
					
					<h2> Example of an activity project </h2>
					<p> Activity projects do not have to be sports-related or competitive. A valuable activity project could help other students overcome a personal fear, such as rock climbing. Read our blog about a student in Australia who achieved his dream of becoming a youth soccer coach through CAS. </p>

					<h2> Example of a service project </h2>
					<p> Service projects must be beneficial for the community as well as providing a learning opportunity for the student. Read our blog about students in Indiana who organized a huge recycling drive to help an IB World School in Flint, Michigan. </p>
					
					<h1>
						What do I need to do?
					</h1>
					<p>
						The IBO states that “All CAS projects are designed with a defined purpose and goals”.
						So your CAS project should have clearly defined, achievable results, which will
						hopefully make the process easier for everyone to follow. If you're running a charity
						event, your purpose could be your reasons for supporting a specific charity, and one of
						your goals might be the total amount you hope to have raised by the end. Or if you're
						putting on a talent show, or dance performance, your purpose could be to bring together
						multiple year groups in your school to enhance the community, and a goal could be to
						sell a certain number of tickets.
					</p>
					<p>
						Like your other CAS experiences, you're expected to reflect on your progress
						throughout your CAS project/s. As it is collaborative, your CAS project is a good
						opportunity for group reflection, as this can give you different perspectives during the
						process. As I've said before, think about the ways in which you can make CAS more
						fun. If you're creative, and enjoy editing, why not make a video diary throughout the
						duration of your project, and interview other participants to get varied responses of
						reflection. Or you could set up an Instagram account to document the progress of your
						project through photos!
					</p>
				</div>
			</div>
		</>
	);
}

export default project;