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
    <header className="fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="relative mx-auto flex items-center justify-between p-6 lg:w-min-lg lg:p-0">
        <Link href="/" className="lg:self-center" aria-label="Easybank Home">
          <svg className="h-[20px] w-[139px] text-blue-900">
            <use xlinkHref="#logo" />
          </svg>
        </Link>
        {device === 'sm' && (
          <button aria-label="Guide" onClick={toggleGuide}>
            {isOpen ? (
              <svg className="h-[19px] w-[18px]">
                <use xlinkHref="#close-icon" />
              </svg>
            ) : (
              <svg className="h-[11px] w-[24px]">
                <use xlinkHref="#hamburger-icon" />
              </svg>
            )}
          </button>
        )}
        {device === 'sm' ? (
          <AnimatePresence initial={false}>
            {isOpen && <Nav isDesktop={false} onToggleGuide={toggleGuide} />}
          </AnimatePresence>
        ) : (
          <Nav isDesktop={true} onToggleGuide={toggleGuide} />
        )}
        {device === 'lg' && (
          <Link
            href="#"
            className="inline-block rounded-full bg-gradient-to-r from-lime-450 to-cyan-450 px-8 py-3.5 leading-none text-white transition-filter hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50 lg:self-center"
          >
            Request Invite
          </Link>
        )}
      </div>
    </header>
  );
}

function Nav({
  isDesktop,
  onToggleGuide,
}: {
  isDesktop: boolean;
  onToggleGuide: () => void;
}) {
  function handleOverlayClick(e: MouseEvent<HTMLElement>) {
    if (e.currentTarget === e.target) {
      onToggleGuide();
    }
  }

  return (
    <motion.nav
      className="max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:min-h-[calc(100vh-100%)] max-lg:w-full max-lg:bg-gradient-to-b max-lg:from-blue-900 max-lg:to-blue-900/10 max-lg:p-6"
      aria-label="Primary"
      onClick={handleOverlayClick}
      variants={isDesktop ? undefined : NAV_VARIANTS}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <motion.ul
        className="flex items-center gap-7 max-lg:flex-col max-lg:rounded-md max-lg:bg-white max-lg:p-8 max-lg:text-lg"
        variants={isDesktop ? undefined : GUIDE_VARIANTS}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 transition-colors hover:text-gray-400 focus-visible:text-gray-400 lg:relative lg:h-full lg:items-center lg:py-8 lg:text-gray-400 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-1 lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:transition-transform lg:hover:text-blue-900 lg:hover:after:scale-x-100 lg:focus-visible:text-blue-900"
          >
            Home
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 transition-colors hover:text-gray-400 focus-visible:text-gray-400 lg:relative lg:h-full lg:items-center lg:py-8 lg:text-gray-400 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-1 lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:transition-transform lg:hover:text-blue-900 lg:hover:after:scale-x-100 lg:focus-visible:text-blue-900"
          >
            About
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 transition-colors hover:text-gray-400 focus-visible:text-gray-400 lg:relative lg:h-full lg:items-center lg:py-8 lg:text-gray-400 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-1 lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:transition-transform lg:hover:text-blue-900 lg:hover:after:scale-x-100 lg:focus-visible:text-blue-900"
          >
            Contact
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 transition-colors hover:text-gray-400 focus-visible:text-gray-400 lg:relative lg:h-full lg:items-center lg:py-8 lg:text-gray-400 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-1 lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:transition-transform lg:hover:text-blue-900 lg:hover:after:scale-x-100 lg:focus-visible:text-blue-900"
          >
            Blog
          </Link>
        </li>
        <li className="leading-none">
          <Link
            href="#"
            className="inline-flex text-blue-900 transition-colors hover:text-gray-400 focus-visible:text-gray-400 lg:relative lg:h-full lg:items-center lg:py-8 lg:text-gray-400 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-1 lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-gradient-to-r lg:after:from-lime-450 lg:after:to-cyan-450 lg:after:transition-transform lg:hover:text-blue-900 lg:hover:after:scale-x-100 lg:focus-visible:text-blue-900"
          >
            Careers
          </Link>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
