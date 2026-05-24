import NoteCard from "./components/NoteCard";

export default async function Home() {
  const backendUrl =
    process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  let notes = [];
  let fetchError = "";

  if (!backendUrl) {
    fetchError = "Backend URL is missing. Set BACKEND_URL in .env.local.";
  } else {
    try {
      const baseUrl = backendUrl.endsWith("/api")
        ? backendUrl
        : `${backendUrl}/api`;
      const response = await fetch(`${baseUrl}/notes`, {
        cache: "no-store",
      });

      if (!response.ok) {
        fetchError = `Fetch failed with status ${response.status}.`;
      } else {
        const payload = await response.json();
        notes = payload?.data ?? [];
      }
    } catch (error) {
      fetchError = "Unable to reach the backend server.";
    }
  }
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
          {fetchError ? (
            <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-8 text-sm text-neutral-500">
              {fetchError}
            </div>
          ) : (
            <NoteCard notes={notes} />
          )}
        </div>
      </section>
    </main>
  );
}
