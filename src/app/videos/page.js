import Classes from "@styles/pages/company/videos.module.css";
import SkillSection from "@/components/utils/SkillSection";
import OldHero from "@/components/heros/OldHero";
import BlueCta from "@/components/buttons/BlueCta";
import VideoTabs from "@/components/VideoTabs";

const data = [
  {
    link: "https://youtube.com/embed/QJxB8zOm_Fc?si",
    target:
      "https://www.youtube.com/watch?v=QJxB8zOm_Fc&ab_channel=SagenextInfotechLLC",
    heading: "QUICKBOOKS",
    title: "QuickBooks Hosting Providers Authorized by Intuit - Sagenext",
    desc: "Intuit-authorized QuickBooks Hosting Providers offer secure and efficient cloud solutions. Ensure seamless integration and support for QuickBooks users, adhering to Intuit’s standards for reliable and trusted hosting services.",
  },
  {
    link: "https://youtube.com/embed/2lIho3e_-4U?si",
    target:
      "https://www.youtube.com/watch?v=2lIho3e_-4U&ab_channel=SagenextInfotechLLC",
    heading: "QUICKBOOKS",
    title: "Steps to Host QuickBooks Desktop Company File - Sagenext",
    desc: "Hosting a QuickBooks Desktop company file can be a great way to improve efficiency and collaboration for businesses with multiple employees. By following the steps outlined in this guide, you can easily set up your company file for multi-user access.",
  },
  {
    link: "https://youtube.com/embed/hk_TtNwlwM0?si",
    target:
      "https://www.youtube.com/watch?v=hk_TtNwlwM0&ab_channel=SagenextInfotechLLC",
    heading: "QUICKBOOKS",
    title:
      "QuickBooks or QuickBooks Online Down? Troubleshooting Guide and Solutions",
    desc: "We’re tackling the frustration of encountering issues with QuickBooks or QuickBooks Online. Whether you’re experiencing login problems, unexpected errors, or difficulties accessing your financial data, we’ve got you covered with a comprehensive troubleshooting guide.",
  },
  {
    link: "https://youtube.com/embed/OECBoeT09_A?si",
    target:
      "https://www.youtube.com/watch?v=OECBoeT09_A&ab_channel=SagenextInfotechLLC",
    heading: "QUICKBOOKS",
    title: "Remote Hosting QuickBooks Desktop With Sagenext ",
    desc: "Today, we’re diving into the world of cloud accounting and how it can supercharge your business operations. Specifically, we’ll be exploring the benefits of hosting QuickBooks Desktop on Sagenext, a leading cloud hosting provider. So, whether you’re a small business owner or an accounting professional, stick around to discover the game-changing advantages of remote hosting for QuickBooks Desktop.",
  },
  {
    link: "https://youtube.com/embed/jREzujBSB4U?si",
    target:
      "https://www.youtube.com/watch?v=jREzujBSB4U&ab_channel=SagenextInfotechLLC",
    heading: "QUICKBOOKS",
    title: "QuickBooks Hosting - Reasons Why Professionals Prefer QB Hosting",
    desc: "Hosting QuickBooks has evolved as an innovative yet cost-effective alternative to traditional desktop-based accounting practices as it gives users the freedom to access the software and carry out their accounting operations from anywhere - at nominal monthly fees.",
  },
  {
    link: "https://youtube.com/embed/2Iac-9Qv3y0?si",
    target:
      "https://www.youtube.com/watch?v=2Iac-9Qv3y0&ab_channel=SagenextInfotechLLC",
    heading: "QUICKBOOKS",
    title: "QuickBooks Enterprise with Hosting | Access Remotely",
    desc: "QuickBooks Enterprise hosting solution is designed to transform the desktop-based application into a more powerful, more efficient cloud accounting platform allowing users to access all the features and tools of the software and work on the files from anywhere, at any time. ",
  },
  {
    link: "https://youtube.com/embed/P6UoEoqXFuA?si",
    target:
      "https://www.youtube.com/watch?si=L3HfuRSAkIlvQ1h3&v=P6UoEoqXFuA&feature=youtu.be",
    heading: "QUICKBOOKS",
    title: "Why your Accounting Business needs QuickBooks Hosting",
    desc: "This video explores several features of QuickBooks Hosting which can lead to a productive Business. Along with a listed set question that you should ask before choosing a QuickBooks Cloud Hosting Provider.",
  },
  {
    link: "https://youtube.com/embed/2aTH9v1ETU0?si",
    target:
      "https://www.youtube.com/watch?v=2aTH9v1ETU0&ab_channel=SagenextInfotechLLC",
    heading: "QUICKBOOKS",
    title: `How QuickBooks Works on Cloud? <br/> <br/>`,
    desc: "QuickBooks on the cloud allows users to securely and easily access the applications and files through RDP (Remote Desktop and Protocol) on any internet-enabled device. Now, let us move to the how.",
  },
  {
    link: "https://www.youtube.com/embed/B6pvGmqpJ48",
    target:
      "https://www.youtube.com/watch?v=B6pvGmqpJ48&ab_channel=SagenextInfotechLLC",
    heading: "SAGE",
    title: "How to Download and Install Sage 50 Accounting - Sagenext",
    desc: "Today, we’re diving into the world of accounting software with a focus on Sage 50. Whether you’re a seasoned accountant, a small business owner, or just starting to manage your finances, Sage 50 can be a game-changer. But before you unlock its powerful features, you need to get it up and running.",
  },
  {
    link: "https://www.youtube.com/embed/tFVxrtvrzo0",
    target:
      "https://www.youtube.com/watch?v=tFVxrtvrzo0&ab_channel=SagenextInfotechLLC",
    heading: "SAGE",
    title: "Log In or Sign In to Your Sage Intacct - Sagenext",
    desc: `Sage Intacct login involves accessing your account using a username and password on the Intacct website. <br/> <br/>`,
  },
  {
    link: "https://www.youtube.com/embed/9so4hB6puYI?si=55lGHg0YXbVxvwMZ",
    target:
      "https://www.youtube.com/watch?v=9so4hB6puYI&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title: "5 Benefits Of Hosting Drake Tax Software On The Cloud ",
    desc: `Drake Cloud hosting can significantly benefit tax professionals by enhancing security, reducing costs, improving performance, and providing the flexibility to scale their infrastructure as needed. It can be a valuable solution for tax season and year-round tax-related tasks. However, when considering cloud hosting, `,
  },
  {
    link: "https://www.youtube.com/embed/-xJAC6Ev_pY?si=vqbwS6oDBXaKH5Qq",
    target:
      "https://www.youtube.com/watch?v=-xJAC6Ev_pY&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title: "How to Backup and Upgrade Lacerte Tax Software | Sagenext",
    desc: "Often a simple process looks way more complicated if attempted for the first time.Hence, this video contains a step-by-step tutorial on how to upgrade Lacerte to the most updated version or any version of your choice.",
  },
  {
    link: "https://www.youtube.com/embed/jWtNuGHYLeM?si=aKryU0_QitVzU_Ff",
    target:
      "https://www.youtube.com/watch?v=jWtNuGHYLeM&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title:
      "How to Uninstall Lacerte Software from your PC - Step by Step Tutorial | Sagenext",
    desc: "A step-by-step tutorial on how to uninstall Lacerte Tax software in just 3 to 4 steps. If you are a regular user of Lacerte Tax software, then you must know how messy the uninstallation process gets sometimes.",
  },
  {
    link: "https://www.youtube.com/embed/upmoxnNiZXc?si=6L8IVG9OAC5NJ3e4",
    target:
      "https://www.youtube.com/watch?v=upmoxnNiZXc&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title:
      "Lacerte Print Setup - Printing Your Tax Return File Made Easy | Sagenext ",
    desc: "A step-by-step comprehensive tutorial on how you can take a printout of your tax filing document as a PDF document with the Lacerte application. By following these simple steps, you are going to be an expert.",
  },
  {
    link: "https://www.youtube.com/embed/gvgphnlcJuw?si=QMoh7oK_R59s4kAW",
    target:
      "https://www.youtube.com/watch?v=gvgphnlcJuw&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title:
      "How to Download and Install Lacerte Software | Intuit’s Lacerte Tax Software",
    desc: "This step-by-step comprehensive tutorial as a set of easy-to-follow steps will make your Lacerte installation the easiest thing to do in your life.",
  },
  {
    link: "https://www.youtube.com/embed/17qg6uc1DEI?si=jNR6G_KeAhecD1AU",
    target:
      "https://www.youtube.com/watch?v=17qg6uc1DEI&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title: "How to Connect With Lacerte Support - 3 Ways to Go For | Sagenext",
    desc: "A detailed guide on how to get Lacerte support within a few clicks. We have taken a step-by-step approach to show various options and ways to get Help on your various doubts and queries. ",
  },
  {
    link: "https://www.youtube.com/embed/Ltd9g8gZerw?si=1ZWSJx-F2HhAkcL7",
    target:
      "https://www.youtube.com/watch?v=Ltd9g8gZerw&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title:
      "8 Biggest Scams to Watch Out For This Tax Season (IRS’s Alert) 2022",
    desc: "Are you worried about tax scams? If yes, know the IRS’s alert report on the top tax scams and various protective measures like SSN and more. Scams that you need to take care of in this tax season to move your work smoothly without any unwanted hurdles.",
  },
  {
    link: "https://www.youtube.com/embed/dq06CYoKCpY?si=hG3TdNehhyPcLMy3",
    target:
      "https://www.youtube.com/watch?v=F5e37xsr71Y&ab_channel=SagenextInfotechLLC",
    heading: "TAX",
    title: `7 Doubts You Should Clarify About Tax Software Hosting Providers`,
    desc: `Clear your doubts while trying to select one appropriate tax software hosting provider for your business. <br/><br/>`,
  },
  {
    link: "https://www.youtube.com/embed/0b1qXGzOfT8?si=ebmKAlfSx28dHBiS",
    target:
      "https://www.youtube.com/watch?si=0JeOnrcgv-BE5EuV&v=sKtmKsJP-0g&feature=youtu.be",
    heading: "TAX",
    title: "8 Common Tax Mistakes to Avoid in 2019",
    desc: `Silly mistakes during the tax filing process can lead to hefty penalties, so it is better to have a systematic cloud strategy in plan. <br/> <br/>`,
  },
];
const text = ["All", "Quickbooks", "Tax", "Sage"];

export default function VideoPage() {
  return (
    <>
      <OldHero
        heading="Curious About the Cloud? Sagenext’s Video Vault Makes it Easy"
        disc="Ditch the boring text and dive into a thrilling video world with Sagenext!"
        cta={
          <BlueCta
            className={Classes["custom-btn"]}
            showBtn={1}
            href1="https://www.youtube.com/user/sagenextinfo"
            anchorIcon1={Classes["custom-anchor"]}
            text1="Explore Videos"
          />
        }
        bgImage="/assets/images/video-page/video-banner.png"
        width={400}
        height={400}
      />

      <section className={Classes["video-section"]}>
        <div className="container mx-auto">
          {/* ✅ client tabs */}
          <VideoTabs Classes={Classes} tabs={text} videos={data} />
        </div>

        <div className={Classes["button-video"]}>
          <BlueCta
            className={Classes["custom-btn"]}
            showBtn={1}
            showIcon1
            anchorIcon1={Classes["custom-anchor"]}
            text1="Explore More Videos"
            href1="https://youtube.com/@sagenextinfo?si=pedboftNOhlFsffa"
          />
        </div>
      </section>

      <SkillSection />
    </>
  );
}