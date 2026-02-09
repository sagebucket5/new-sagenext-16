import { getMetaData } from "@/lib/metaData";
import styles from "@styles/pages/comm100.module.css";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("comm100");

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
          url: "/assets/images/windows-virtual-desktop/hero-img.png",
          secureUrl: "/assets/images/windows-virtual-desktop/hero-img.png",
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
      images: ["/assets/images/windows-virtual-desktop/hero-img.png"],
    },
  };
}

function comm100() {
  return (
    <>
      <section className="pt-20">
        <div className="container py-5 mx-auto">
          <div className="">
            <div className="flex flex-col lg:flex-row mx-auto gap-8">
              <Image
                src="/assets/images/comm100/logo.png"
                alt="quickbase"
                width={300}
                height={300}
                className="object-contain lg:w-1/5"
              />
              <p className="pt-3 text-black default">
                <b>Comm100</b> is an international customer service solutions
                provider that helps businesses perfect their client support
                requirements through personalized and automated interactions.
                Comm100 allows users to engage customers on a multitude of
                platforms through a single console for efficient resolution,
                retention and conversion of customers
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center mt-10">
          <h2>What do you get from Comm100?</h2>
        </div>

        <div className="container max-md:text-center qb-hosting-features bg-white mx-auto">
          <div>
            <h2>Small Businesses</h2>
          </div>

          <div className="mx-auto">
            <p className="text-black">
              Small Businesses enjoy a suite of free services from Comm100 with
              unlimited users, chats, messages and no hidden costs.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-5 pt-8 *:border *:rounded-2xl *:p-5">
            <div className="col-lg-4 col-md-6 pt-3 pb-3">
              <div className="qb-features-column">
                <div className="demo-solution demo-solution--flexbox">
                  <Image
                    alt="Live-chat"
                    src="/assets/images/comm100/icn1.png"
                    height={55}
                    width={200}
                    className="h-[40px] aspect-square border rounded-md object-contain p-1.5"
                  />
                  <span className="font-semibold text-lg">Live Chat</span>
                </div>
                <p className="qb-features">
                  Comm100’s Live Chat helps you know who visits your website and
                  what they are looking for, giving businesses a better
                  understanding of potential customers through pre-chat surveys,
                  and proactive chat invitations to help you convert visitors
                  into customers. Live Chat lets you share files to better
                  resolve queries and post-chat surveys allow you to measure
                  customer satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-3 pb-3">
              <div className="qb-features-column">
                <div className="demo-solution demo-solution--flexbox">
                  <Image
                    alt="Audio-Video Chat"
                    src="/assets/images/comm100/icn2.png"
                    height={55}
                    width={200}
                    className="h-[40px] aspect-square border rounded-md object-contain p-1.5"
                  />
                  <span className="font-semibold text-lg">
                    Audio &amp; Video Chat
                  </span>
                </div>
                <p className="qb-features">
                  Audio &amp; Video Chat with Comm100 enables businesses to
                  build deeper relationships with clients with the help of
                  one-on-one interactions, meeting and support sessions. Comm100
                  helps businesses resolve issues faster with high-quality audio
                  &amp; video conferencing without additional plugins and
                  cross-platform compatibility
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-3 pb-3">
              <div className="qb-features-column">
                <div className="demo-solution demo-solution--flexbox">
                  <Image
                    alt="Ticketing Messaging"
                    src="/assets/images/comm100/icn3.png"
                    height={55}
                    width={200}
                    className="h-[40px] aspect-square border rounded-md object-contain p-1.5"
                  />
                  <span className="font-semibold text-lg">
                    Ticketing &amp; Messaging
                  </span>
                </div>
                <p className="qb-features">
                  Comm100 provides businesses with a centralized console to
                  manage tickets across multiple platforms. Tickets help
                  businesses prioritise issues, enable teams to resolve issues
                  with multiple queries in realtime, manage the status of
                  inquiries and institute follow-ups. Tickets give you the
                  ability to track, escalate and transfer tickets across
                  platforms, all within the same ecosystem.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-3 pb-3">
              <div className="qb-features-column">
                <div className="demo-solution demo-solution--flexbox">
                  <Image
                    alt="Knowledge Base"
                    src="/assets/images/comm100/icn4.png"
                    height={55}
                    width={200}
                    className="h-[40px] aspect-square border rounded-md object-contain p-1.5"
                  />
                  <span className="font-semibold text-lg">Knowledge Base</span>
                </div>
                <p className="qb-features">
                  Comm100’s knowledge base enables businesses to incorporate
                  self-serve options for customers, allowing them to resolve
                  issues at their own pace and their own time. The highly
                  detailed articles with text, images, videos and guides provide
                  solutions for complex issues without any scope for error.
                  Businesses have the ability to edit, categorize and tag
                  articles along with complete control of the format and
                  in-built search capabilities.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-3 pb-3">
              <div className="qb-features-column">
                <div className="demo-solution demo-solution--flexbox">
                  <Image
                    alt="Integration"
                    src="/assets/images/comm100/icn5.png"
                    height={55}
                    width={200}
                    className="h-[40px] aspect-square border rounded-md object-contain p-1.5"
                  />
                  <span className="font-semibold text-lg">Integration</span>
                </div>
                <p className="qb-features">
                  Comm100 enables cross-platform integration at unprecedented
                  levels, incorporating websites, social media, text messaging,
                  e-mail and more. Integrate your CMS with Comm100 and add Live
                  Chat to your website with ease, or connect your company
                  number, e-mail or social media accounts with Comm100 to manage
                  all your conversations in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white-bg pt-16">
        <div className="container mx-auto">
          <div>
            <h2>Medium and Large Businesses</h2>
          </div>

          <div className="row">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-5/12">
                <Image
                  alt="Unlimited Technical Support"
                  src="/assets/images/comm100/img1.png"
                  className="rounded-2xl size-full object-contain"
                  height={100}
                  width={100}
                />
              </div>

              <div className="lg:w-7/12">
                <h3>Live Chat Platform</h3>
                <p className="text-black default mob-center">
                  Comm100 helps reach more customers through Live Chat and
                  improve your conversion rate. Live Chat allows you to enhance
                  user experience with personalized, real-time answers, the most
                  powerful chat software and unmatched data security
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 mt-10 gap-5 *:border *:rounded-2xl *:p-5">
              <div className="col-lg-4 col-md-6 pt-1 pb-1 border-left-twopx">
                <div className="qb-features-column">
                  <h3 className="text-black font-18 pb-2">Visitor</h3>
                  <p className="text-black default mb-0">
                    Comm100 makes agent management effortless with sophisticated
                    chat routing and advanced queue management. Improve team
                    performance with analytical insights, custom reports and
                    stateof-the-art tracking capabilities.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-1 pb-1 border-left-twopx">
                <div className="qb-features-column">
                  <h3 className="text-black font-18 pb-2">Agent</h3>
                  <p className="text-black default mb-0">
                    Comm100 makes agent management effortless with sophisticated
                    chat routing and advanced queue management. Improve team
                    performance with analytical insights, custom reports and
                    state-of-the-art tracking capabilities.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-1 pb-1 border-left-twopx">
                <div className="qb-features-column">
                  <h3 className="text-black font-18 pb-2">Manager</h3>
                  <p className="text-black default mb-0">
                    Comm100 makes agent management effortless with sophisticated
                    chat routing and advanced queue management. Improve team
                    performance with analytical insights, custom reports and
                    stateof-the-art tracking capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      <section className="white-bg pt-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-5/12">
              <Image
                alt="Unlimited Technical Support"
                src="/assets/images/comm100/img2.png"
                className="rounded-2xl size-full object-contain"
                height={200}
                width={200}
              />
            </div>
            <div className="lg:w-7/12">
              <h3>Omnichannel Platform</h3>
              <p className="text-black default mob-center">
                Comm100 makes engaging with customers smooth with its
                omnichannel platform that enables your business to resolve
                queries wherever and whenever your visitors need it. Coupled
                with high scalability reduced costs per engagement without
                compromising on quality.
              </p>
            </div>
          </div>

          <div className="mx-auto">
            <div className="grid lg:grid-cols-3 mt-10 gap-5 *:border *:rounded-2xl *:p-5">
              <div className="col-lg-4 col-md-6 pt-1 pb-1 border-left-twopx">
                <div className="qb-features-column">
                  <h3 className="text-black font-18 pb-2">Live Chat</h3>
                  <p className="text-black default mb-0">
                    Comm100 offers the most powerful Live Chat software to
                    ensure peak performance and highquality customer service
                    with minimal effort. Superior analytics and tools guarantee
                    optimal performance for your support team to stay ahead of
                    the competition.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-1 pb-1 border-left-twopx">
                <div className="qb-features-column">
                  <h3 className="text-black font-18 pb-2">
                    Ticketing &amp; Messaging
                  </h3>
                  <p className="text-black default mb-0">
                    Social media, e-mail and SMS all managed through a fully
                    integrated system with exceptional case management
                    proficiency, to help your business stay on top of your
                    customers’ needs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-1 pb-1 border-left-twopx">
                <div className="qb-features-column">
                  <h3 className="text-black font-18 pb-2">Knowledge Base</h3>
                  <p className="text-black default mb-0">
                    Comm100 enables businesses to offer flexible content
                    management, scalable deployment and integrated self-serve
                    alternatives to provide visitors with detailed solutions for
                    queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="white-bg pt-16">
        <div className="container mx-auto">
          <div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-5/12">
                <Image
                  alt="Unlimited Technical Support"
                  className="rounded-2xl object-contain size-full "
                  src="/assets/images/comm100/img3.png"
                  width={200}
                  height={200}
                />
              </div>
              <div className="lg:w-7/12">
                <h3> Bots and Automation Platform</h3>
                <p className="text-black default mob-center">
                  Comm100 offers customers service automation services, allowing
                  businesses to automate answers for large scale deployment.
                  Comm100’s AI Chatbot is an industry-leading automated response
                  platform that improves the performance of agents and helps
                  users reach their answers faster
                </p>
              </div>
            </div>

            <div className="col-lg-11 col-md-12 mx-auto">
              <div className="grid lg:grid-cols-2 mt-10 gap-5 *:border *:rounded-2xl *:p-5">
                <div className="col-lg-7 col-md-6 pt-1 pb-1 border-left-twopx">
                  <div className="qb-features-column">
                    <h3 className="text-black font-18 pb-2">AI Chatbot</h3>
                    <p className="text-black default mb-0">
                      The AI Chatbot is a powerful automated response platform
                      that takes care of frontline customer service, with its
                      ability to understand a wide array of human expressions,
                      languages and grammar. The Chatbot is equipped with
                      human-guided machine learning helping understand and
                      answer more complex conversations every day. The AI
                      Chatbot is not just an FAQ bot, with high-level
                      capabilities assisting visitors with a range of functions
                      such as payments, bookings, etc. Comm100 facilitates
                      multi-platform integration of the Chatbot with a single
                      deployment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 pt-1 pb-1 border-left-twopx">
                  <div className="qb-features-column">
                    <h3 className="text-black font-18 pb-2">Agent Assist</h3>
                    <p className="text-black default mb-0">
                      Comm100’s AI-powered assistant can be integrated with
                      personalized chats, helping agents reach the required
                      information faster and more efficiently. The virtual
                      assistant allows agents to automate workflows, makes
                      training of agents quicker and is extremely easy to set
                      up. Comm100’s gives our agents the edge they need to serve
                      visitors with an industry-best standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto place-items-center container text-center flex flex-col gap-6 my-16">
        <div className="flex w-full items-center justify-center gap-8">
          <div className="w-[80px] lg:w-[300px] h-[1px] bg-[#013D8E]" />
          <h2>Solutions</h2>
          <div className="w-[80px] lg:w-[300px] h-[1px] bg-[#013D8E]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 *:w-full">
          <div className="col-lg-6 col-md-12 section-f6f6f6 use-case-specific border rounded-2xl p-5 text-left">
            <h2>Use case-specific solutions</h2>
            <p className="text-black default mob-center">
              QuickBase&apos;s host of features aids multiple use-cases, and
              businesses can capitalize on them to best serve their needs. Such
              as its automation capabilities that help streamline supply chain
              management, the collaborative platform that ensures comfortable
              project management across several teams and its workflow
              integration to help HR departments adhere to company objectives.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 industry-specific border rounded-2xl p-5 text-left">
            <h2>Industry-specific solutions</h2>
            <p className="text-black default mob-center">
              A number of industry-tailored solutions at QuickBase allow varied
              capabilities amongst users. Government agencies can take advantage
              of QuickBase&apos;s unparalleled security features helping keep
              citizens data secure at all times, or manufacturers can utilize
              intricate workflows to equip their workforce with accurate and
              prompt information, or construction companies can exploit the
              efficiencies of QuickBase to save time and costs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default comm100;
