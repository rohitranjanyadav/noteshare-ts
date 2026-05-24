import { Note } from "@/types";
import Image from "next/image";

const NoteCard = ({ notes }: { notes: Note[] }) => {
  if (!notes?.length) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-8 text-sm text-neutral-500">
        No notes yet. Share the first one.
      </div>
    );
  }

  return (
    <>
      {notes.map((note) => (
        <article
          key={note._id}
          className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_12px_30px_-24px_rgba(15,23,42,0.5)]"
        >
          <div className="relative h-44 w-full overflow-hidden bg-neutral-100">
            <Image
              src={note.file || "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1400&auto=format&fit=crop"}
              alt={note.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              width={200}
              height={400}
            />
          </div>
          <div className="space-y-4 p-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {note.subtitle || "Untitled"}
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
              {note.file ? (
                <a
                  className="font-semibold text-neutral-800 transition hover:text-neutral-900"
                  href={note.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open file
                </a>
              ) : (
                <span className="font-semibold text-neutral-300">No file</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default NoteCard;
