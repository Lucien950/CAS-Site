import Head from "next/head";
import Banner from "../components/Banner";

const outcomes = () => {
	return (
		<>
			<Head>
				<title>Outcomes for CAS</title>
			</Head>
			<div>   
				<Banner subtitle="OUTCOMES" number="02" bgimage="/banner.jpg" className="mb-10">
					{"CAS Outcomes"}
					{"The outcomes of the CAS Program"}
				</Banner>
				<div className="prose container mb-24">
					<blockquote>
						Please Note – Only choose the 3 or 4 most relevant Learning Outcomes for each entry. If you
						check off too many you will not be able to adequately justify and give evidence that you
						achieved all of them in your reflections.
					</blockquote>

					<p>
						For those of you who are IB students, teachers or parents the term “7 Learning Outcomes” has
						surely been thrown around during your assemblies, or parent-teacher conferences by your IB
						Coordinator. You may be familiar with term, but what are the 7 Learning Outcomes and how
						are they defined?
					</p>

					<h1>
						1. Identify your own strengths and develop areas for personal growth.
					</h1>
					<p>
						What it <strong>REALLY</strong> means: When you leave your comfort zone, you learn things about yourself. For
						example, when you organized the fundraiser for <a href="https://castrips.org/destinations/bhutan/">Bhutan</a>, were you patient with other people? If
						not, why not? Maybe you could try to improve this area of personal growth. When you saw
						those homeless people in <a href="https://www.castrips.org/prague/">Prague</a>, were you shocked? If yes, why? Could this help you improve
						your perception of the world and help you become a more open-minded individual?
					</p>
					
					<h1>
						2. Demonstrate that challenges have been undertaken, developing new skills in the process.
					</h1>
					<p>
						What it <strong>REALLY</strong> means: What have you done to push yourself? What was unfamiliar about it?
						What skills do you think you developed? For example, have you run a marathon? Set yourself a
						goal before embarking to <a href="https://www.castrips.org/prague/">Prague</a> and develop new skills to achieve your goal.
					</p>
					
					<h1>
						3. Demonstrate how to initiate and plan a CAS experience.
					</h1>
					<p>
						What it <strong>REALLY</strong> means: This one's easy! When you are organizing your CAS events or activities,
						just make sure you keep notes on how you organized them, who you contacted and what the
						organizational process was like.
					</p>
					
					<h1>
						4. Show commitment to and perseverance in CAS experiences.
					</h1>
					<p>
						What it <strong>REALLY</strong> means: All IB diploma students are thinking the same thing - why do we have
						to do this when we have so much to do already? You are not alone. We know this sounds
						unbelievable now, but you will benefit from it so much in the future. Whatever happens, keep
						going! Take one step at a time and you will reach your end goal.	
					</p>
					<h1>
						5. Demonstrate the skills and recognize the benefits of working collaboratively.
					</h1>
					<p>
						What it <strong>REALLY</strong> means: Participate in team activities. Simple. One of the best and most fun
						parts of CAS Trips is the team work. This can range from learning a new collaborative activity
						such as Salsa in <a href="https://www.castrips.org/colombia/">Colombia</a> to being involved in a volunteer group. You are stronger when you
						work in a team. Think of Cristiano Ronaldo or Lionel Messi - they are soccer stars but without
						their teammates they wouldn't have accomplished what they have today.
					</p>
					
					<h1>
						6. Demonstrate engagement with issues of global significance.
					</h1>

					<p>
						What it <strong>REALLY</strong> means: There are so many global issues right now it's hard to know which one
						to support most. Global warming, the refugee crisis, homelessness, cancer research? CAS Trips
						advice - pick one per year and think what you can do to help that cause from where you are.
						Plan it. Initiate it. Do it. That's CAS, folks! You can also have a look at the <a href="https://www.castrips.org/unsdg/">UN Sustainable Development goals</a>
						and see which issue you are interested in and can tackle.
					</p>
					
					<h1>
						7. Recognize and consider the ethics of choices and actions.
					</h1>
					<p>
						What it <strong>REALLY</strong> means: Your parents have been telling you this for as long as you can
						remember, and your teachers joined in a little later: The things you do and the choices you
						make have consequences. Think about the CAS activities you are doing and how they affect
						others. Is what you are doing right or wrong? How?
					</p>
				</div>
			</div>
		</>
	);
}

export default outcomes;