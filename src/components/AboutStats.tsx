import { Stats } from "@/constants"

const AboutStats = () => {
  return (
    <section className="container px-16 py-5 flex flex-col md:flex-row justify-center gap-10 items-center mb-10">
        {Stats.map((stat) => (
        <div className="flex flex-col items-center justify-center p-7 bg-slate-900/10 rounded-md" key={stat.title}>
            <h1 className="text-5xl">{stat.number}</h1>
            <p className="font-semibold text-xl">{stat.title}</p>
        </div>
        ))}
    </section>
  )
}

export default AboutStats