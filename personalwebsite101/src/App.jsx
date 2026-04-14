export default function App() {
  const profile = {
    name: "Shaahid Fawzi",
    title: "building projects until I get a job",
    bio: "A minimal portfolio with a quiet outer-space feel, built to showcase my work and the projects I keep building.",
    github: "https://github.com/basicShaahid",
    email: "you@example.com",
  };

  const projects = [
    {
      name: "gem_porto",
      description: "A GitHub project from my portfolio, linked directly so visitors can open the repository.",
      tech: ["React", "Portfolio", "Web"],
      url: "https://github.com/basicShaahid/gem_porto",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_24%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_35%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(white,rgba(255,255,255,0)_1.2px)] [background-size:32px_32px]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
              Personal Portfolio
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300 md:text-2xl">
              {profile.title}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              {profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Projects
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-md">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            </div>
            <h2 className="text-xl font-semibold text-white">Signature</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-medium text-slate-100">Style</p>
                <p>Minimal, calm, dark, and inspired by space, stars, and the universe.</p>
              </div>
              <div>
                <p className="font-medium text-slate-100">Purpose</p>
                <p>Showcase my GitHub work in a clean way without clutter.</p>
              </div>
              <div>
                <p className="font-medium text-slate-100">GitHub</p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  github.com/basicShaahid
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-500">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Featured GitHub Projects
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur hover:bg-white/10 md:inline-flex"
          >
            See all repos
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-1 hover:border-slate-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  GitHub
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-sm font-semibold text-slate-100 underline underline-offset-4">
                Open repository
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}