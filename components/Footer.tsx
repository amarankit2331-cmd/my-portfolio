export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-white px-6 py-8 shadow-[0_-3px_0_0_#fcd02c] dark:border-[#f4f2eb]/60 dark:bg-[#1c1c1a] dark:shadow-black">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold text-ink dark:text-cream">
          © {new Date().getFullYear()} Amar Kant Nayak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}