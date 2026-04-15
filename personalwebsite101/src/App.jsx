export default function App() {
  const profile = {
    name: "Shaahid Fawzi",
    title: "building projects until I get a job",
    github: "https://github.com/basicShaahid",
    email: "you@example.com",
    linkedin: "https://www.linkedin.com/in/shaahid-fawzi-690741195",
  };

  const projects = [
    {
      name: "gem_porto",
      description:
        "A live portfolio project from my work, linked directly so visitors can open the deployed website.",
      tech: ["React", "Portfolio", "Web"],
      url: "https://gem-porto.vercel.app/",
    },
    {
      name: "psychbot",
      description:
        "A live project from my portfolio, linked directly so visitors can open the deployed website.",
      tech: ["Web App", "AI", "Vercel"],
      url: "https://psychbot-pi.vercel.app/",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,0,0,0.22),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.18),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full border border-red-600/30" />
      <div className="absolute right-[-60px] top-40 h-96 w-96 rotate-12 border border-white/10" />
      <div className="absolute bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-red-700/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute -top-20 left-[10%] h-72 w-72 rounded-full bg-red-600/10 blur-3xl animate-[floatOne_10s_ease-in-out_infinite]" />
      <div className="absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-white/5 blur-3xl animate-[floatTwo_14s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-40px] left-[35%] h-64 w-64 rounded-full bg-red-500/10 blur-3xl animate-[floatThree_12s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-20%] top-16 h-px w-1/2 rotate-6 bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-[slideOne_9s_linear_infinite]" />
        <div className="absolute right-[-20%] top-1/2 h-px w-1/3 -rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[slideTwo_11s_linear_infinite]" />
        <div className="absolute bottom-24 left-[-10%] h-px w-1/4 rotate-12 bg-gradient-to-r from-transparent via-red-400/50 to-transparent animate-[slideThree_8s_linear_infinite]" />

        <span className="absolute left-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80 animate-[sparkle_5s_ease-in-out_infinite]" />
        <span className="absolute left-[22%] top-[70%] h-1 w-1 rounded-full bg-red-500/80 animate-[sparkle_7s_ease-in-out_infinite]" />
        <span className="absolute left-[38%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/70 animate-[sparkle_6s_ease-in-out_infinite]" />
        <span className="absolute left-[52%] top-[60%] h-1 w-1 rounded-full bg-red-400/80 animate-[sparkle_8s_ease-in-out_infinite]" />
        <span className="absolute left-[68%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/80 animate-[sparkle_5.5s_ease-in-out_infinite]" />
        <span className="absolute left-[82%] top-[74%] h-1 w-1 rounded-full bg-red-500/80 animate-[sparkle_6.5s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes floatOne {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(40px, 30px, 0) scale(1.08); }
        }
        @keyframes floatTwo {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-50px, 40px, 0) scale(1.12); }
        }
        @keyframes floatThree {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(30px, -35px, 0) scale(1.06); }
        }
        @keyframes slideOne {
          0% { transform: translateX(0) rotate(6deg); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(140%) rotate(6deg); opacity: 0; }
        }
        @keyframes slideTwo {
          0% { transform: translateX(0) rotate(-12deg); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(-140%) rotate(-12deg); opacity: 0; }
        }
        @keyframes slideThree {
          0% { transform: translateX(0) rotate(12deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(180%) rotate(12deg); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
      `}</style>

      <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
              Personal Portfolio
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold uppercase tracking-tight md:text-7xl">
              {profile.name}
            </h1>
            <div className="mt-6 h-px w-28 bg-red-600" />
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200 md:text-3xl">
              {profile.title}
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-none border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-500"
              >
                View Projects
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="rounded-none border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="rounded-none border border-red-600/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400 transition hover:bg-red-600 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="absolute -left-px top-0 h-20 w-px bg-red-600" />
            <div className="absolute left-0 top-0 h-px w-20 bg-red-600" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Signature Direction
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Visual Tone
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Abstract, sharp, high-contrast, and minimal with red, white, and black as the core identity.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Purpose
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  A direct portfolio where the work stands out first and every project opens straight to the live project site.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  GitHub
                </p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm text-red-400 underline underline-offset-4"
                >
                  github.com/basicShaahid
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-500">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-white md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:bg-white hover:text-black"
          >
            All Repositories
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-red-500/60 hover:bg-[#f5f1e8]"
            >
              <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-red-600/50 transition group-hover:border-red-700/70" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-red-700">
                0{index + 1}
              </p>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold uppercase text-white transition group-hover:text-red-700">
                  {project.name}
                </h3>
                <span className="border border-red-600/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400 transition group-hover:border-red-700 group-hover:text-red-700">
                  Live Site
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-400 transition group-hover:text-red-800">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-300 transition group-hover:border-red-300 group-hover:text-red-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white transition group-hover:text-red-700">
                Open Project
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
