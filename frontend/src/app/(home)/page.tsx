import NoteCard from "./components/NoteCard";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/notes`);

  if (!response.ok) {
    throw new Error("Error Occurred While Fetching");
  }

  const { data: notes } = await response.json();
  console.log(notes);
  return (
    <main className="flex-1 bg-neutral-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
            Notes
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900">
            Share clear ideas, keep it simple.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
            A calm, minimal space for curated notes. Discover concise insights,
            save your favorites, and share your own.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NoteCard notes={notes} />
        </div>
      </section>
    </main>
  );
}
