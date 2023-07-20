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
      <div className="flex justify-between items-center p-6 relative">
        <Link href="/" aria-label="Easybank Home">
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
        {device === 'lg' && <Link href="#">Request Invite</Link>}
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
      className="absolute left-0 top-full bg-gradient-to-b from-blue-900 to-blue-900/10 w-full min-h-[calc(100vh-100%)] p-6"
      aria-label="Primary"
      onClick={handleOverlayClick}
      variants={isDesktop ? undefined : NAV_VARIANTS}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <motion.ul
        className="bg-white flex flex-col gap-7 p-8 items-center rounded-md text-lg"
        variants={isDesktop ? undefined : GUIDE_VARIANTS}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <li className="leading-none">
          <Link href="#" className="inline-block text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
            Home
          </Link>
        </li>
        <li className="leading-none">
          <Link href="#" className="inline-block text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
            About
          </Link>
        </li>
        <li className="leading-none">
          <Link href="#" className="inline-block text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
            Contact
          </Link>
        </li>
        <li className="leading-none">
          <Link href="#" className="inline-block text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
            Blog
          </Link>
        </li>
        <li className="leading-none">
          <Link href="#" className="inline-block text-blue-900 hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
            Careers
          </Link>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
