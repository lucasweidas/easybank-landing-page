import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 px-4 xs:px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2 md:justify-items-start max-w-3xl mx-auto">
        <div className="flex flex-col gap-7 items-center md:items-start md:justify-between">
          <Link href="/" aria-label="Easybank Home">
            <svg className="w-[139px] h-[20px] text-white">
              <use xlinkHref="#logo" />
            </svg>
          </Link>
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="#" className="text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors" aria-label="Facebook">
                <svg className="w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors" aria-label="YouTube">
                <svg className="w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]">
                  <use xlinkHref="#youtube-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors" aria-label="Twitter">
                <svg className="w-[23px] h-[20px] lg:w-[21px] lg:h-[18px]">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors" aria-label="Pinterest">
                <svg className="w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]">
                  <use xlinkHref="#pinterest-icon" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors" aria-label="Instagram">
                <svg className="w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <nav className="grid gap-5 md:grid-cols-2 md:col-start-2 md:justify-self-stretch text-center md:text-start" aria-label="Secondary">
          <ul className="flex flex-col gap-5">
            <li className="leading-none">
              <Link href="#" className="inline-block text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                About Us
              </Link>
            </li>
            <li className="leading-none">
              <Link href="#" className="inline-block text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                Contact
              </Link>
            </li>
            <li className="leading-none">
              <Link href="#" className="inline-block text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="leading-none">
              <Link href="#" className="inline-block text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                Careers
              </Link>
            </li>
            <li className="leading-none">
              <Link href="#" className="inline-block text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                Support
              </Link>
            </li>
            <li className="leading-none">
              <Link href="#" className="inline-block text-white hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-7 md:col-span-2 md:justify-self-center">
          <Link
            href="#"
            className="bg-gradient-to-r from-lime-450 to-cyan-450 text-white px-8 py-3.5 rounded-full inline-block leading-none hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50 transition-filter"
          >
            Request Invite
          </Link>
          <p className="text-gray-400 text-center">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
