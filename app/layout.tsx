import './globals.css';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Easybank Landing Page',
  description:
    'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
      </head>
      <body className={`${publicSans.variable} bg-neutral-50 font-sans`}>
        {children}
      </body>
    </html>
  );
}
