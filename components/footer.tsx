import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900">
      <div className="px-4 xsm:px-6 py-10 grid gap-8 justify-items-center">
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
        <nav aria-label="Secondary">
          <ul className="grid gap-5 text-center">
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
        <Link
          href="#"
          className="bg-gradient-to-r from-lime-450 to-cyan-450 text-white px-8 py-3.5 rounded-full inline-block leading-none hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50 transition-filter"
        >
          Request Invite
        </Link>
        <p className="text-gray-400 text-center">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
