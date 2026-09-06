export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-8 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Amar Kant Nayak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}