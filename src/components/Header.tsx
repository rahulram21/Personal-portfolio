import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-11/12 top-3 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {/* <Moon size={20} /> */}
              Dark mode
            </button>
          </div>
          {/* Navigation */}
          <div>
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/stats"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Stats
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
