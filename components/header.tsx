'use client';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useDevice } from './device';
import { MobileGuideWrapperProps } from '@/interfaces';

const OVERLAY_VARIANTS: Variants = {
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
const WRAPPER_VARIANTS: Variants = {
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
      <nav
        className="relative mx-auto flex items-center justify-between p-6 lg:w-min-lg lg:p-0"
        aria-label="Primary"
      >
        <Link href="/" className="lg:self-center" aria-label="Easybank Home">
          <svg className="h-[20px] w-[139px] text-blue-900">
            <use xlinkHref="#logo" />
          </svg>
        </Link>
        <button
          className="lg:hidden"
          aria-label="Guide"
          aria-pressed={isOpen}
          onClick={toggleGuide}
        >
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
        {device === 'sm' && (
          <AnimatePresence initial={false}>
            {isOpen && (
              <MobileGuideWrapper onToggle={toggleGuide}>
                <Guide className="flex-col text-lg" />
              </MobileGuideWrapper>
            )}
          </AnimatePresence>
        )}
        <Guide className="max-lg:hidden" />
        <Link
          href="#"
          className="inline-block rounded-full bg-gradient-to-r from-lime-450 to-cyan-450 px-8 py-3.5 leading-none text-white transition-filter hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50 max-lg:hidden lg:self-center"
        >
          Request Invite
        </Link>
      </nav>
    </header>
  );
}

function MobileGuideWrapper({ children, onToggle }: MobileGuideWrapperProps) {
  function handleOverlayClick(e: MouseEvent<HTMLElement>) {
    if (e.currentTarget === e.target) {
      onToggle();
    }
  }

  return (
    <motion.div
      className="absolute left-0 top-full min-h-[calc(100vh-100%)] w-full bg-gradient-to-b from-blue-900 to-blue-900/10 p-6"
      onClick={handleOverlayClick}
      variants={OVERLAY_VARIANTS}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="rounded-md bg-white p-8"
        variants={WRAPPER_VARIANTS}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Guide({ className }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-7 ${className}`}>
      <li className="leading-none">
        <Link
          href="/"
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
    </ul>
  );
}
