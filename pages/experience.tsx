import Head from "next/head";
import Banner from "../components/Banner";

const experience = () => {
	return (
		<>
			<Head>
				<title>CAS Experiences</title>
			</Head>
			<div>
				<Banner subtitle="EXPERIENCES" number="02" bgimage="/banner.jpg" className="mb-10">
					{"CAS Experiences"}
					{"Examples of CAS Experiences"}
				</Banner>
				<div className="grid grid-cols-3">
					<div className="prose container mb-24 text-xl">
						<h1>Creativity</h1>
						<ul>
							<li>Art</li>
							<ul>
								<li>Drawing & Painting</li> 
								<li>Sculpture</li> 
								<li>Ceramics</li> 
								<li>Graphic Design</li> 
							</ul>
							<li>Writing</li>
							<ul>
								<li>Journalism</li> 
								<li>Slam Poetry</li> 
								<li>Creative Writing</li> 
								<li>Rapping</li>
							</ul>
							
							<li>Improvisation</li> 
							<ul>
								<li>Freestyling</li> 
								<li>Improv Games</li> 
								<li>Jamming</li>
							</ul>

							<li>Dance</li>
							<ul>
								<li>Choreography</li>
								<li>Creative Movement</li>
							</ul>

							<li>Music</li>
							<ul>
								<li>Composing</li>
								<li>DJing</li>
								<li>Improvisation</li>
								<li>Performing</li>
								<li>Rehearsing</li>
								<li>Production</li>
							</ul>

							<li>Drama</li>
							<ul>
								<li>Set Building</li>
								<li>Blocking & Staging</li>
								<li>Costume Design</li>
								<li>Performing</li>
								<li>Makeup</li>
							</ul>
						</ul>
						<h2>Other Examples</h2>
						<ul>
							<li>Problem Solving, Planning, and Organizing</li>
							<li>Hosting, Entertaining, and Event Planning</li>
							<li>Cooking & Baking</li>
							<li>Management & Leadership</li>
							<li>Tutoring, Teaching, and Coaching</li>
							<li>Fashion & Esthetics</li>
							<li>Web Developing</li>
							<li>Photography</li>
							<li>Sewing & Knitting</li>
							<li>Debating</li>
							<li>Reading Aloud</li>
							<li>Games like Chess and D&D</li>
						</ul>
					</div>

					<div className="prose container mb-24 text-xl">
						<h1>Activity</h1>
						<ul>
							<li>Team Sports</li>
							<li>Solo Sports</li>
							<li>Hiking, Canoeing</li>
							<li>Yoga</li>
							<li>Dance</li>
							<li>Martial Arts</li>
							<li>Skateboarding</li>
							<li>Rock Climbing</li>
							<li>Scuba Diving</li>
							<li>Weightlifting</li>
							<li>Cheerleading</li>
							<li>Bowling</li>
							<li>Gardening</li>
							<li>Working Out</li>
							<li>Playing an Instrument</li>
							<li>Building/Construction</li>
							<li>Maintenance</li>
							<li>Home Renovation</li>
							<li>Chopping Wood</li>
						</ul>
					</div>

					<div className="prose container mb-24 text-xl">
						<h1>Service</h1>
						<blockquote className="not-italic">💡 Note: You can not be paid for your service activities.</blockquote>
						<ul>
							<li>Tutoring</li>
							<li>Volunteering</li>
							<li>Coaching</li>
							<li>Fundraising</li>
							<li>Assisting/Helping</li>
							<li>Editing/Arranging</li>
							<li>Hosting/Entertaining</li>
							<li>Promoting/Awareness</li>
							<li>Lifeguard Qualifications</li>
							<li>CPR/First Aid Training</li>
							<li>Reading Aloud</li>
							<li>Designing</li>
							<li>Organizing</li>
							<li>Planning</li>
							<li>Translating</li>
							<li>Score Keeping</li>
							<li>Recycling/Composting</li>
							<li>Gardening/Planting Trees</li>
							<li>Canvassing/Campaigning</li>
							<li>Initiating Club/Organization</li>
						</ul>
					</div>

				</div>
			</div>
		</>
	);
}

export default experience;