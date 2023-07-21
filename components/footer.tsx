import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 px-4 py-10 xs:px-6 lg:px-0 lg:py-12">
      <div className="mx-auto grid max-w-3xl gap-10 md:grid-cols-2 md:justify-items-start lg:w-min-lg lg:max-w-none lg:grid-cols-[auto_1fr_auto] lg:gap-32">
        <div className="flex flex-col items-center gap-7 md:items-start md:justify-between">
          <Link href="/" aria-label="Easybank Home">
            <svg className="h-[20px] w-[139px] text-white">
              <use xlinkHref="#logo" />
            </svg>
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="#"
                className="text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                aria-label="Facebook"
              >
                <svg className="h-[24px] w-[24px] lg:h-[20px] lg:w-[20px]">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                aria-label="YouTube"
              >
                <svg className="h-[24px] w-[24px] lg:h-[20px] lg:w-[20px]">
                  <use xlinkHref="#youtube-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                aria-label="Twitter"
              >
                <svg className="h-[20px] w-[23px] lg:h-[18px] lg:w-[21px]">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                aria-label="Pinterest"
              >
                <svg className="h-[24px] w-[24px] lg:h-[20px] lg:w-[20px]">
                  <use xlinkHref="#pinterest-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                aria-label="Instagram"
              >
                <svg className="h-[24px] w-[24px] lg:h-[20px] lg:w-[20px]">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <nav
          className="grid gap-5 text-center md:grid-cols-2 md:justify-self-stretch md:text-start lg:gap-20 lg:justify-self-start"
          aria-label="Secondary"
        >
          <ul className="flex flex-col gap-5">
            <li className="leading-none">
              <Link
                href="#"
                className="inline-block text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
              >
                About Us
              </Link>
            </li>
            <li className="leading-none">
              <Link
                href="#"
                className="inline-block text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
              >
                Contact
              </Link>
            </li>
            <li className="leading-none">
              <Link
                href="#"
                className="inline-block text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="leading-none">
              <Link
                href="#"
                className="inline-block text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
              >
                Careers
              </Link>
            </li>
            <li className="leading-none">
              <Link
                href="#"
                className="inline-block text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
              >
                Support
              </Link>
            </li>
            <li className="leading-none">
              <Link
                href="#"
                className="inline-block text-white transition-colors hover:text-lime-450 focus-visible:text-lime-450"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-7 md:col-span-2 md:justify-self-center lg:col-span-1 lg:items-end lg:justify-self-end">
          <Link
            href="#"
            className="inline-block rounded-full bg-gradient-to-r from-lime-450 to-cyan-450 px-8 py-3.5 leading-none text-white transition-filter hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50"
          >
            Request Invite
          </Link>
          <p className="text-center text-gray-400">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
