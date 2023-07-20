import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <main>
      <section className="flex flex-col-reverse">
        <div className="text-center px-4 pb-12 xs:px-6 xs:pb-14 relative -top-6 xs:-top-8 md:top-0 max-w-xl mx-auto md:mt-8 md:pb-20">
          <h1 className="text-blue-900 text-3xl xs:text-4xl mb-4 md:text-5xl md:mb-7 md:leading-tight">Next generation digital banking</h1>
          <p className="text-gray-400 mb-8 md:text-lg md:mb-10">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <Link
            href="#"
            className="bg-gradient-to-r from-lime-450 to-cyan-450 text-white px-8 py-3.5 rounded-full inline-block leading-none hover:brightness-125 hover:grayscale-50 focus-visible:brightness-125 focus-visible:grayscale-50 transition-filter"
          >
            Request Invite
          </Link>
        </div>
        <div className="bg-intro-mobile bg-no-repeat bg-left-bottom bg-cover overflow-hidden flex justify-center md:bg-intro-desktop md:bg-center md:bg-contain">
          <Image
            src="/images/image-mockups.png"
            alt="easybank mobile app mockups"
            width={767}
            height={939}
            priority
            className="relative -top-14 xs:-top-16 max-w-lg md:top-0"
          />
        </div>
      </section>
      <section className="bg-gray-100 px-4 xs:px-6 text-center py-14 xs:py-16 md:py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-blue-900 text-2xl xs:text-3xl mb-5 md:text-4xl">Why choose Easybank?</h2>
          <p className="text-gray-400 md:text-lg">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
        <ul className="grid justify-items-center mt-12 xs:mt-14 gap-9 md:max-w-3xl mx-auto md:mt-18 sm:grid-cols-2 md:gap-10">
          <li className="flex flex-col items-center">
            <Image src="/images/icon-online.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 mt-6 text-xl md:text-2xl md:mt-10">Online Banking</h3>
            <p className="text-gray-400 mt-5 md:mt-6">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
            </p>
          </li>
          <li className="flex flex-col items-center">
            <Image src="/images/icon-budgeting.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 mt-6 text-xl md:text-2xl md:mt-10">Simple Budgeting</h3>
            <p className="text-gray-400 mt-5 md:mt-6">
              See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
            </p>
          </li>
          <li className="flex flex-col items-center">
            <Image src="/images/icon-onboarding.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 mt-6 text-xl md:text-2xl md:mt-10">Fast Onboarding</h3>
            <p className="text-gray-400 mt-5 md:mt-6">
              We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
            </p>
          </li>
          <li className="flex flex-col items-center">
            <Image src="/images/icon-api.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 mt-6 text-xl md:text-2xl md:mt-10">Open API</h3>
            <p className="text-gray-400 mt-5 md:mt-6">
              Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
            </p>
          </li>
        </ul>
      </section>
      <section className="px-4 py-18 xs:px-6 xs:py-22">
        <h2 className="text-blue-900 text-2xl xs:text-3xl mb-6 xs:mb-8 text-center md:text-4xl md:mb-12">Latest Articles</h2>
        <ul className="grid sm:grid-cols-2 gap-4 xs:gap-6 max-w-3xl mx-auto justify-center md:gap-7">
          <li className="bg-white rounded-md overflow-hidden">
            <Image
              src="/images/image-currency.jpg"
              alt="different types of currency"
              width={533}
              height={400}
              className="aspect-article-img object-cover w-full"
            />
            <div className="pt-6 px-6 pb-8 xs:pt-8 xs:px-8 xs:pb-10 flex flex-col gap-3">
              <p className="text-gray-400 text-xs">By Claire Robinson</p>
              <h3 className="text-lg leading-tight">
                <Link href="#" className="text-blue-900 hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                  Receive money in any currency with no fees
                </Link>
              </h3>
              <p className="text-gray-400 text-sm">
                The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...
              </p>
            </div>
          </li>
          <li className="bg-white rounded-md overflow-hidden">
            <Image
              src="/images/image-restaurant.jpg"
              alt="a person eating a dish in a restaurant"
              width={600}
              height={400}
              className="aspect-article-img object-cover w-full"
            />
            <div className="pt-6 px-6 pb-8 xs:pt-8 xs:px-8 xs:pb-10 flex flex-col gap-3">
              <p className="text-gray-400 text-xs">By Wilson Hutton</p>
              <h3 className="text-lg leading-tight">
                <Link href="#" className="text-blue-900 hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                  Treat yourself without worrying about money
                </Link>
              </h3>
              <p className="text-gray-400 text-sm">
                Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...
              </p>
            </div>
          </li>
          <li className="bg-white rounded-md overflow-hidden">
            <Image
              src="/images/image-plane.jpg"
              alt="view of the plane's wing with the sun on the horizon from the perspective of the plane's window"
              width={602}
              height={400}
              className="aspect-article-img object-cover w-full"
            />
            <div className="pt-6 px-6 pb-8 xs:pt-8 xs:px-8 xs:pb-10 flex flex-col gap-3">
              <p className="text-gray-400 text-xs">By Wilson Hutton</p>
              <h3 className="text-lg leading-tight">
                <Link href="#" className="text-blue-900 hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                  Take your Easybank card wherever you go
                </Link>
              </h3>
              <p className="text-gray-400 text-sm">
                We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...
              </p>
            </div>
          </li>
          <li className="bg-white rounded-md overflow-hidden">
            <Image src="/images/image-confetti.jpg" alt="confetti falling" width={600} height={400} className="aspect-article-img object-cover w-full" />
            <div className="pt-6 px-6 pb-8 xs:pt-8 xs:px-8 xs:pb-10 flex flex-col gap-3">
              <p className="text-gray-400 text-xs">By Claire Robinson</p>
              <h3 className="text-lg leading-tight">
                <Link href="#" className="text-blue-900 hover:text-lime-450 focus-visible:text-lime-450 transition-colors">
                  Our invite-only Beta accounts are now live!
                </Link>
              </h3>
              <p className="text-gray-400 text-sm">
                After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
