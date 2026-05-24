const NoteCard = () => {
  const note = {
    title: "Frictionless Focus",
    subtitle: "Minimalist study notes",
    description:
      "A lightweight framework for capturing ideas fast, reducing noise, and keeping work sessions calm and intentional.",
    file: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1400&auto=format&fit=crop",
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_12px_30px_-24px_rgba(15,23,42,0.5)]">
      <div className="relative h-44 w-full overflow-hidden bg-neutral-100">
        <img
          src={note.file}
          alt={note.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {note.subtitle}
          </p>
          <h3 className="text-xl font-semibold text-neutral-900">
            {note.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-neutral-600">
          {note.description}
        </p>
        <div className="flex items-center justify-between border-t border-neutral-100 pt-4 text-xs text-neutral-500">
          <span>File preview</span>
          <a
            className="font-semibold text-neutral-800 transition hover:text-neutral-900"
            href={note.file}
            target="_blank"
            rel="noreferrer"
          >
            Open file
          </a>
        </div>
      </div>
    </article>
  );
};

export default NoteCard;
