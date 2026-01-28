import Link from "next/link"

export default function Information() {
  return (
    <main>
      <section className="px-2">
        <h1 className="mx-auto text-left font-medium text-4xl mb-4 text-slate-950 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4">
        Information 
        <div className="h-px bg-slate-300 my-6" />
      </h1>
      <div className="mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 prose prose-lg text-slate-700 leading-loose space-y-7 font-normal text-lg">
        <p>
          Hi, I'm Rahul Vardhan Talam, a graduate in computer and data science from India who's now pursuing a master's program in Germany. I enjoy building technology solutions that tackle practical problems, and I'm always looking to broaden my technical expertise.
        </p>
        <p>
          At Gitam University, I was part of the founding leadership team of the Technical Club as its first president. We successfully organized over 30 events, with 9 being national-level initiatives that achieved an 86% participation rate. This role taught me effective team coordination and project execution.
        </p>

        <p>
          My project experience includes building an online platform for real-time bidding and designing a dashboard for sales data analysis that helps businesses track trends and make informed decisions. I've also worked freelance, helping an educational institution build their online presence.
        </p>

        <p>
          Currently, I'm developing a comprehensive application for startups to present their concepts and find potential team members, which has been an excellent learning opportunity in collaborative development and innovation strategies.
        </p>

        <p>
          I'm seeking Werkstudent positions in Koblenz to apply my skills in real-world scenarios and be part of exciting projects. Want to connect? You can reach
          me at:{' '} <br/>
          <Link href="mailto:rahulvardhan2026@gmail.com" className="font-normal underline text-slate-950">rahulvardhan2026@gmail.com</Link>.
        </p>
      </div>

      <Link
      href="/resume.pdf"
      target="_blank"
      className="block my-8 text-slate-500 text-sm font-medium mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 "
      >
        Download resume →
      </Link>
      
      </section>
    </main>
  )
}