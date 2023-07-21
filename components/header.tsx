'use client';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { useDevice } from './device';
import { AnimatePresence, Variants, motion } from 'framer-motion';

const NAV_VARIANTS: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
};
const GUIDE_VARIANTS: Variants = {
  initial: {
    opacity: 0,
    y: '-20%',
  },
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    y: '-20%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const device = useDevice();

  function toggleGuide() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center p-6 relative lg:p-0 lg:w-min-lg mx-auto">
        <Link href="/" className="lg:self-center" aria-label="Easybank Home">
          <svg className="w-[139px] h-[20px] text-blue-900">
            <use xlinkHref="#logo" />
          </svg>
        </Link>
        {device === 'sm' && (
          <button aria-label="Guide" onClick={toggleGuide}>
            {isOpen ? (
              <svg className="w-[18px] h-[19px]">
                <use xlinkHref="#close-icon" />
              </svg>
            ) : (
              <svg className="w-[24px] h-[11px]">
                <use xlinkHref="#hamburger-icon" />
              </svg>
            )}
          </button>
        )}
        {device === 'sm' ? (
          <AnimatePresence initial={false}>{isOpen && <Nav isDesktop={false} onToggleGuide={toggleGuide} />}</AnimatePresence>
        ) : (
          <Nav isDesktop={true} onToggleGuide={toggleGuide} />
        )}
        {device === 'lg' && (
          <Link
            href="#"
            className="bg-gradient-to-r from-lime-450 to-cyan-450 text-white px-8 py-3.5 rounded-full inline-block leading-none hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50 transition-filter lg:self-center"
          >
            Request Invite
          </Link>
        )}
      </div>
    </header>
  );
}

function Nav({ isDesktop, onToggleGuide }: { isDesktop: boolean; onToggleGuide: () => void }) {
  function handleOverlayClick(e: MouseEvent<HTMLElement>) {
    if (e.currentTarget === e.target) {
      onToggleGuide();
    }
  }

  return (
    <motion.nav
      className="max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:bg-gradient-to-b max-lg:from-blue-900 max-lg:to-blue-900/10 max-lg:w-full max-lg:min-h-[calc(100vh-100%)] max-lg:p-6"
      aria-label="Primary"
      onClick={handleOverlayClick}
      variants={isDesktop ? undefined : NAV_VARIANTS}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <motion.ul
        className="max-lg:bg-white flex max-lg:flex-col gap-7 max-lg:p-8 items-center max-lg:rounded-md max-lg:text-lg"
        variants={isDesktop ? undefined : GUIDE_VARIANTS}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors lg:items-center lg:h-full lg:text-gray-400 lg:hover:text-blue-900 lg:focus-visible:text-blue-900 lg:py-8 lg:relative lg:after:w-full lg:after:h-1 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:origin-left"
          >
            Home
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors lg:items-center lg:h-full lg:text-gray-400 lg:hover:text-blue-900 lg:focus-visible:text-blue-900 lg:py-8 lg:relative lg:after:w-full lg:after:h-1 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:origin-left"
          >
            About
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors lg:items-center lg:h-full lg:text-gray-400 lg:hover:text-blue-900 lg:focus-visible:text-blue-900 lg:py-8 lg:relative lg:after:w-full lg:after:h-1 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:origin-left"
          >
            Contact
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors lg:items-center lg:h-full lg:text-gray-400 lg:hover:text-blue-900 lg:focus-visible:text-blue-900 lg:py-8 lg:relative lg:after:w-full lg:after:h-1 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:origin-left"
          >
            Blog
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors lg:items-center lg:h-full lg:text-gray-400 lg:hover:text-blue-900 lg:focus-visible:text-blue-900 lg:py-8 lg:relative lg:after:w-full lg:after:h-1 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:origin-left"
          >
            Careers
          </Link>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
