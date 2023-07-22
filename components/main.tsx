import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto flex flex-col-reverse lg:relative lg:w-min-lg lg:flex-row lg:items-center lg:justify-start lg:gap-12">
        <div className="relative -top-6 max-w-xl px-4 pb-12 text-center max-lg:mx-auto xs:-top-8 xs:px-6 xs:pb-14 md:top-0 md:mt-8 md:pb-20 lg:w-[28rem] lg:px-0 lg:pb-42 lg:pt-64 lg:text-start">
          <h1 className="mb-4 text-3xl text-blue-900 xs:text-4xl md:mb-6 md:text-5xl md:leading-tight">
            Next generation digital banking
          </h1>
          <p className="mb-8 text-gray-400 md:mb-9 md:text-lg">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Link
            href="#"
            className="inline-block rounded-full bg-gradient-to-r from-lime-450 to-cyan-450 px-8 py-3.5 leading-none text-white transition-filter hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50"
          >
            Request Invite
          </Link>
        </div>
        <div className="flex justify-center bg-intro-mobile bg-cover bg-left-bottom bg-no-repeat md:bg-intro-desktop md:bg-contain md:bg-center lg:absolute lg:-right-72 lg:-top-10 lg:isolate lg:bg-none lg:after:absolute lg:after:-left-36 lg:after:bottom-14 lg:after:-z-10 lg:after:content-intro-desktop xl:after:-left-48">
          <Image
            src="/images/image-mockups.png"
            alt="easybank mobile app mockups"
            width={767}
            height={939}
            priority
            className="relative -top-14 min-w-[22rem] max-w-lg xs:-top-16 md:top-0 lg:max-w-none"
          />
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto grid justify-items-center gap-12 px-4 py-14 text-center xs:gap-14 xs:px-6 xs:py-16 md:gap-18 md:py-20 lg:w-min-lg lg:justify-items-start lg:px-0 lg:py-26 lg:text-start">
          <div className="max-w-xl">
            <h2 className="mb-5 text-2xl text-blue-900 xs:text-3xl md:text-4xl lg:mb-6">
              Why choose Easybank?
            </h2>
            <p className="text-gray-400 md:text-lg">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <ul className="grid justify-items-center gap-9 sm:grid-cols-2 md:max-w-3xl md:gap-10 lg:max-w-none lg:grid-cols-4 lg:gap-7">
            <li className="flex flex-col items-center lg:items-start">
              <Image
                src="/images/icon-online.svg"
                alt=""
                width={72}
                height={72}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl text-blue-900 md:mt-10 md:text-2xl">
                Online Banking
              </h3>
              <p className="mt-5 text-gray-400 md:mt-6">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </li>
            <li className="flex flex-col items-center lg:items-start">
              <Image
                src="/images/icon-budgeting.svg"
                alt=""
                width={72}
                height={72}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl text-blue-900 md:mt-10 md:text-2xl">
                Simple Budgeting
              </h3>
              <p className="mt-5 text-gray-400 md:mt-6">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </li>
            <li className="flex flex-col items-center lg:items-start">
              <Image
                src="/images/icon-onboarding.svg"
                alt=""
                width={72}
                height={72}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl text-blue-900 md:mt-10 md:text-2xl">
                Fast Onboarding
              </h3>
              <p className="mt-5 text-gray-400 md:mt-6">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </li>
            <li className="flex flex-col items-center lg:items-start">
              <Image
                src="/images/icon-api.svg"
                alt=""
                width={72}
                height={72}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl text-blue-900 md:mt-10 md:text-2xl">
                Open API
              </h3>
              <p className="mt-5 text-gray-400 md:mt-6">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-auto grid justify-items-center gap-6 px-4 py-18 xs:gap-8 xs:px-6 xs:py-22 md:gap-12 lg:w-min-lg lg:justify-items-start lg:px-0">
        <h2 className="text-center text-2xl text-blue-900 xs:text-3xl md:text-4xl lg:text-start">
          Latest Articles
        </h2>
        <ul className="grid max-w-3xl justify-center gap-4 xs:gap-6 sm:grid-cols-2 md:gap-7 lg:max-w-none lg:grid-cols-4">
          <li className="overflow-hidden rounded-md bg-white">
            <Image
              src="/images/image-currency.jpg"
              alt="different types of currency"
              width={533}
              height={400}
              className="aspect-article-img w-full object-cover"
            />
            <div className="flex flex-col gap-3 px-6 pb-8 pt-6 xs:px-8 xs:pb-10 xs:pt-8 lg:px-6 lg:pb-6 lg:pt-7">
              <p className="text-xs text-gray-400">By Claire Robinson</p>
              <h3 className="text-lg leading-tight">
                <Link
                  href="#"
                  className="text-blue-900 transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                >
                  Receive money in any currency with no fees
                </Link>
              </h3>
              <p className="text-sm text-gray-400">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </li>
          <li className="overflow-hidden rounded-md bg-white">
            <Image
              src="/images/image-restaurant.jpg"
              alt="a person eating a dish in a restaurant"
              width={600}
              height={400}
              className="aspect-article-img w-full object-cover"
            />
            <div className="flex flex-col gap-3 px-6 pb-8 pt-6 xs:px-8 xs:pb-10 xs:pt-8 lg:px-6 lg:pb-6 lg:pt-7">
              <p className="text-xs text-gray-400">By Wilson Hutton</p>
              <h3 className="text-lg leading-tight">
                <Link
                  href="#"
                  className="text-blue-900 transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                >
                  Treat yourself without worrying about money
                </Link>
              </h3>
              <p className="text-sm text-gray-400">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you ...
              </p>
            </div>
          </li>
          <li className="overflow-hidden rounded-md bg-white">
            <Image
              src="/images/image-plane.jpg"
              alt="view of the plane's wing with the sun on the horizon from the perspective of the plane's window"
              width={602}
              height={400}
              className="aspect-article-img w-full object-cover"
            />
            <div className="flex flex-col gap-3 px-6 pb-8 pt-6 xs:px-8 xs:pb-10 xs:pt-8 lg:px-6 lg:pb-6 lg:pt-7">
              <p className="text-xs text-gray-400">By Wilson Hutton</p>
              <h3 className="text-lg leading-tight">
                <Link
                  href="#"
                  className="text-blue-900 transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                >
                  Take your Easybank card wherever you go
                </Link>
              </h3>
              <p className="text-sm text-gray-400">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you
                ...
              </p>
            </div>
          </li>
          <li className="overflow-hidden rounded-md bg-white">
            <Image
              src="/images/image-confetti.jpg"
              alt="confetti falling"
              width={600}
              height={400}
              className="aspect-article-img w-full object-cover"
            />
            <div className="flex flex-col gap-3 px-6 pb-8 pt-6 xs:px-8 xs:pb-10 xs:pt-8 lg:px-6 lg:pb-6 lg:pt-7">
              <p className="text-xs text-gray-400">By Claire Robinson</p>
              <h3 className="text-lg leading-tight">
                <Link
                  href="#"
                  className="text-blue-900 transition-colors hover:text-lime-450 focus-visible:text-lime-450"
                >
                  Our invite-only Beta accounts are now live!
                </Link>
              </h3>
              <p className="text-sm text-gray-400">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
