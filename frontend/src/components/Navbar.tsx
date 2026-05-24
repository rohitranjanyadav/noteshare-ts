import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 bg-white text-sm font-semibold text-neutral-900">
            NS
          </span>
          <span className="text-base font-semibold tracking-tight text-neutral-900">
            NoteShare
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          <Link href="/" className="transition hover:text-neutral-900">
            Explore
          </Link>
          <Link href="/" className="transition hover:text-neutral-900">
            Collections
          </Link>
          <Link href="/" className="transition hover:text-neutral-900">
            About
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900">
            Share a note
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
