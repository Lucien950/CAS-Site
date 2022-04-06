import Banner from "../components/Banner";
import Head from "next/head";

const evidence = () => {
    return (
        <>
            <Head>
                <title>CAS Evidence</title>
            </Head>
            <div>
                <Banner subtitle="EVIDENCE" number="02" bgimage="/banner.jpg" className="mb-10">
                    <h1 className="font-bold text-8xl mb-4">CAS Evidence</h1>
                    <p className="text-2xl">What counts as evidence for a CAS Experience/Project?</p>
                </Banner>

                <div className="container prose">
                    <blockquote>
                        There are four levels of evidence required depending on where and when your CAS Experience
                        is taking place.
                    </blockquote>

                    <h1>
                        1. In-School, Established Club or Team with a Lead Teacher Supervisor
                    </h1>
                    <p>
                        This is the lowest level of evidence required because it is taking place at Colonel By with
                        a trusted teacher supervisor. The supervising teacher leads activities and ensures that
                        students are present and accountable. Examples would include debating or the school
                        basketball team. No CAS Completion or Supervisor Review Form is required. A record
                        of attendance and activities would suffice as evidence.
                    </p>

                    <h1>
                        2. In-School Student Initiated Club
                    </h1>
                    <p>
                        This requires a medium amount of evidence. Examples might verify participation,
                        provide pictures, learning documents, planning documents, practice, permission forms
                        and a final product. An example of this would be the dance club or tutoring.
                    </p>
                    
                    <h1>
                        3. Out-of-School CAS Experience
                    </h1>
                    <p>
                        This requires a high level of evidence. This is because I have no direct way of verifying
                        your claims. Examples of evidence here might include photos of your workplace,
                        activities you're involved in, your scheduled shifts, uniform, ID Pass, parking pass,
                        training manual, work pamphlets, productions, applications, certificates, and a CAS
                        Completion Form completed by your local supervisor. Examples of this may be
                        volunteering at the library or hospital.
                    </p>

                    <h1>
                        4. Self-Supervised Exercise
                    </h1>

                    <p>
                        This requires the highest level of evidence. Self-supervised exercise needs to
                        demonstrate perseverance and have specific goals and strategies. It needs to be
                        ongoing for 3-6 months and take place on a regular weekly basis. Preferably more than
                        once a week to really gain any health benefits. Evidence might include your gym pass,
                        your entrance log, list of physical goals, details of your training regiment, a log or diary
                        of your resting and active heart rates as you become more fit, and your exercise
                        frequency and intensity. There are also several apps which help you train and track your
                        progress. Regular screen shots are helpful as well.
                    </p>

                    <a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise-intensity/art-20046887"></a> 
                </div>
            </div>
        </>
    );
}

export default evidence;