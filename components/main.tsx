import Image from 'next/image';
import Link from 'next/link';

export function Main() {
  return (
    <main>
      <section className="flex flex-col-reverse">
        <div className="text-center px-4 pb-12 xsm:px-6 xsm:pb-14 relative -top-6 xsm:-top-8">
          <h1 className="text-blue-900 text-3xl xsm:text-4xl mb-4">Next generation digital banking</h1>
          <p className="text-gray-400 mb-8">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <Link
            href="#"
            className="bg-gradient-to-r from-lime-450 to-cyan-450 text-white px-8 py-3.5 rounded-full inline-block leading-none hover:opacity-70 focus-visible:opacity-70 transition-opacity"
          >
            Request Invite
          </Link>
        </div>
        <div className="bg-intro-mobile bg-no-repeat bg-left-bottom bg-cover overflow-hidden">
          <Image src="/images/image-mockups.png" alt="easybank mobile app mockups" width={767} height={939} priority className="relative -top-14 xsm:-top-16" />
        </div>
      </section>
      <section className="bg-gray-100 px-4 xsm:px-6 text-center py-14 xsm:py-16">
        <div>
          <h2 className="text-blue-900 text-2xl xsm:text-3xl mb-5">Why choose Easybank?</h2>
          <p className="text-gray-400">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <ul className="flex flex-col items-center mt-12 xsm:mt-14 gap-9">
          <li className="flex flex-col items-center gap-5 xsm:gap-6">
            <Image src="/images/icon-online.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 text-xl">Online Banking</h3>
            <p className="text-gray-400">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </li>
          <li className="flex flex-col items-center gap-5 xsm:gap-6">
            <Image src="/images/icon-budgeting.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 text-xl">Simple Budgeting</h3>
            <p className="text-gray-400">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
          </li>
          <li className="flex flex-col items-center gap-5 xsm:gap-6">
            <Image src="/images/icon-onboarding.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 text-xl">Fast Onboarding</h3>
            <p className="text-gray-400">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </li>
          <li className="flex flex-col items-center gap-5 xsm:gap-6">
            <Image src="/images/icon-api.svg" alt="" width={72} height={72} aria-hidden="true" />
            <h3 className="text-blue-900 text-xl">Open API</h3>
            <p className="text-gray-400">
              Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
            </p>
          </li>
        </ul>
      </section>
      <section className="px-4 py-18 xsm:px-6 xsm:py-22">
        <h2 className="text-blue-900 text-2xl xsm:text-3xl mb-6 xsm:mb-8 text-center">Latest Articles</h2>
        <ul className="flex flex-col gap-4 xsm:gap-6">
          <li className="bg-white rounded-md overflow-hidden">
            <Image src="/images/image-currency.jpg" alt="different types of currency" width={533} height={400} className="aspect-article-img object-cover" />
            <div className="pt-6 px-6 pb-8 xsm:pt-8 xsm:px-8 xsm:pb-10 flex flex-col gap-3">
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
              className="aspect-article-img object-cover"
            />
            <div className="pt-6 px-6 pb-8 xsm:pt-8 xsm:px-8 xsm:pb-10 flex flex-col gap-3">
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
              className="aspect-article-img object-cover"
            />
            <div className="pt-6 px-6 pb-8 xsm:pt-8 xsm:px-8 xsm:pb-10 flex flex-col gap-3">
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
            <Image src="/images/image-confetti.jpg" alt="confetti falling" width={600} height={400} className="aspect-article-img object-cover" />
            <div className="pt-6 px-6 pb-8 xsm:pt-8 xsm:px-8 xsm:pb-10 flex flex-col gap-3">
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
