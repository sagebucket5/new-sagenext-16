

import { getMetaData } from "@/lib/metaData";
import Link from "next/link";

export async function generateMetadata() {
  const meta = getMetaData("cookie-policy");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    robots: meta.robots,
    openGraph: {
      locale: "en_US",
      type: "website",
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      siteName: "Sagenext Infotech LLC",
      images: [
        {
          url: "/assets/images/contact-us/contact-us-banner.webp",
          secureUrl: "/assets/images/contact-us/contact-us-banner.webp",
          width: 210,
          height: 314,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      site: "@sagenextinfo",
      creator: "@sagenextinfo",
      images: ["/assets/images/contact-us/contact-us-banner.webp"],
    },
  };
}

function CookiePolicy() {
  return (
    <>
      <section className="bg-[#efefef] px-5 pt-14">
        <div className={`lg:py-12 py-5`}>
          <h1 className={`text-center !text-[#2d4370] !leading-[70px] !text-[40px]`}>Cookie Policy</h1>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-4">
          <p className="text-justify text-black">
            At Sagenext Infotech, we respect the privacy concerns of our users
            and value the relationship that we share with them. This cookie
            policy is for our website visitors, which explains how, when, and
            why cookies are stored on and retrieved from your device whenever
            you visit our website. In this notice, &#8216;we&#8217; and
            &#8216;our&#8217; refers to Sagenext Infotech &#8211; the owner and
            operator of this website.
          </p>
        </div>
      </section>
      <section className="my-12">
        <div className="bg-[#2d4370] h-[300px]"></div>
        <div className="container mx-auto">
          <div
            className="-mt-[240px] px-5 bg-white py-12.5 rounded">
            <h2 className="">What are Cookies?</h2>
            <p className={`text-justify default default text-black mt-4`}>
              Cookies can be defined as small files, mostly comprising texts and
              numbers, which get downloaded on users&#8217; devices when they
              visit certain websites. These cookies are designed in such a way
              that they enable websites to recognize the visitors on subsequent
              visits or to authorize other related websites to identify these
              visitors for any particular purpose. Each of the cookies expires
              after a certain time frame, depending on its type and purpose of
              its use. Not only does it help websites function properly, but it
              also plays a pivotal role in enhancing the browsing experience of
              the users.
            </p>

            <h2 className={`pt-4`}>How do we use Cookies?</h2>
            <p className={`text-justify default default text-black mt-4`}>
              We access and collect different types of cookies from users&#8217;
              devices for different purposes. In addition to tracking the
              performance of our website, the cookies we use help us supply
              contents tailored to your preferences and interests. In other
              words, it empowers us to calculate how many visitors we have and
              how much time do they spend on our website along with allowing
              visitors to register to make comments.
            </p>

            <h3 className={`!text-[18px] !text-[#2d4370]`}>Essential Cookies</h3>
            <p className={`text-justify default default text-black mt-4`}>
              The essential cookies that we use on our website make it more
              interactive and user-friendly by enabling important functions such
              as page navigation and session handling. These cookies comprise
              user login and profile details (WHMCS). Without essential cookies,
              the website won&#8217;t be able to function properly.
            </p>

            <h3 className={`!text-[18px] !text-[#2d4370]`}>Google Analytics</h3>
            <p className={`text-justify default default text-black mt-4`}>
              These are extremely important cookies given the fact that they
              monitor how visitors land on our website and how they navigate
              through it. We use Google Analytics cookies to determine the total
              number of visits on each of the page and provide relevant content
              to the users. Click on this link <Link href="https://tools.google.com/dlpage/gaoptout">&rdquo;Google-analytics&rdquo; </Link> to opt-out from this.
            </p>

            <h3 className={`!text-[18px] !text-[#2d4370]`}>Cookies from Comm100</h3>
            <p className={`text-justify default default text-black mt-4`}>
              The cookies from Comm100 are used to help users interact with our
              sales and technical support representatives. Users can access and
              communicate with our representatives by clicking on the Live Chat
              option given on our website
            </p>

            <h3 className={`!text-[18px] !text-[#2d4370]`}>Marketing Cookies</h3>
            <p className={`text-justify default default text-black mt-4`}>
              We have placed social media links on our website so that visitors
              can view our social media handles directly and follow us. When a
              visitor browses through our website, the social media platforms
              (Facebook, Twitter, LinkedIn, and YouTube) send some cookies on
              their device. Kindly refer to the privacy policy of the social
              media websites for further information:
              <span className="block break-all">
                Twitter.com :{" "}
                <Link href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
                  twitter-cookies
                </Link>
              </span>
              <span className="block break-all">
                LinkedIn.com :{" "}
                <Link href="https://www.linkedin.com/legal/cookie-policy">
                  linkedln cookie-policy
                </Link>
              </span>
              <span className="block break-all">
                Youtube.com :{" "}
                <Link href="https://policies.google.com/technologies/types">
                  google policies
                </Link>
              </span>
              <span className="block break-all">
                Pintrest.com :{" "}
                <Link href="https://policy.pinterest.com/en/cookies">
                  pintrest policies
                </Link>
              </span>
            </p>
            <h3 className={`!text-[18px] !text-[#2d4370]`}>Bing Analytics Cookies</h3>
            <p className={`text-justify default default text-black mt-4`}>
              We use Bing Analytics cookies which allow us to gather data
              regarding user&#8217;s behavior while accessing our website. This
              data helps us in enhancing the performance of our website and
              deliver a unique browsing experience to every individual user.
            </p>

            <h3 className={`!text-[18px] !text-[#2d4370]`}>How can users manage Cookies?</h3>
            <p className={`text-justify default default text-black mt-4`}>
              As a user, you can manage cookies via the browser you use. If you
              change the cookie settings, it will be applicable on all websites.
              Refer to the links given below to change the cookie setting via
              your browser.
              <span className="block break-all">
                Google Chrome :{" "}
                <Link href="http://support.google.com/chrome/bin/answer.py?hl=en-GB&answer=95647">
                  google-chrome
                </Link>
              </span>
              <span className="block break-all">
                Safari on MacBook :{" "}
                <Link href="https://support.apple.com/en-in/guide/safari/sfri47acf5d6/mac">
                  safari on MacBook
                </Link>
              </span>
              <span className="block break-all">
                Safari on mobile devices (iPad and iPhone) :{" "}
                <Link href="http://support.apple.com/kb/HT1677">
                  safari on mobile device
                </Link>
              </span>
              <span className="block break-all">
                Firefox : firefox
              </span>
              <span className="block break-all">
                Internet Explorer: internet explorer
              </span>
              <span className="block break-all">
                Opera: opera-privacy
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CookiePolicy;
