import Avatar from '@/components/Avatar'
import headerNavLinks from '@/data/headerNavLinks'
import Link from '@/components/Link'

export default function Hero() {
  return (
    <div className="hero hero--pattern flex flex-col items-center justify-center min-w-screen min-h-screen bg-gray-900">
      <div className="text-center">
        <div className="entrance-from-bottom pb-6">
          <Avatar />
          <h1 className="text-center text-gray-100 text-3xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4">
            Chi Nguyen
          </h1>
          <p className="text-center text-base px-2 xs:text-xl sm:text-2xl xl:text-3xl font-light text-gray-300">
            Consultant & Frontend architect at Novatec GmbH
          </p>
          <div className="mt-6 lex flex-row justify-center mx-auto">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-base sm:text-xl xl:text-2xl font-light hover:text-blue-400 p-1 text-blue-200 underline sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
