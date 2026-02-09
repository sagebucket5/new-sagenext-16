import React from 'react'

// [{
//               src:'/assets/qb-enter-hosting/advantage-icon/b1.png',
//               title:"High-Performance Infrastructure",
//               desc:"Having collaborated with some top-tier data centers with high performance servers, we ensure you get adequate real-time actions with 99.999% uptime guarantee."
//             },
//             {
//               src:'/assets/qb-enter-hosting/advantage-icon/b2.png',
//               title:"Work from Anywhere",
//               desc:"Hosting the accounting program enables you to access your applications and data from anywhere. Post pandemic, the ability to access work tools remotely is a big plus."
//             },
//             {
//               src:'/assets/qb-enter-hosting/advantage-icon/b3.png',
//               title:"Multi-user Collaboration",
//               desc:"Hosted QB Enterprise allows authorized users to work on the same company files at the same time remotely. Get the same desktop-like experience on all connected devices."
//             },{
//               src:'/assets/qb-enter-hosting/advantage-icon/b4.png',
//               title:"No IT Hassles",
//               desc:"You do not have to have a dedicated in-house IT infrastructure setup or a specialized team for its management, meaning lower cost of ownership and operations."
//             },{
//               src:'/assets/qb-enter-hosting/advantage-icon/b5.png',
//               title:"Scalable Resources",
//               desc:"Remotely accessing your files with QuickBooks Enterprise enables you to scale down or up when necessary. Manage your resources, workloads and budget effectively."
//             },{
//               src:'/assets/qb-enter-hosting/advantage-icon/b6.png',
//               title:"99.99% Uptime Guarantee",
//               desc:"Sagenext provides its users with adequate server resources and an SLA-backed 99.99% uptime assurance for unhindered operations."
//             }
//           ]

const AdvantageCard = (props) => {
  return (
    <section className="py-10">
        <div className="container mx-auto">
           <div className="text-center">
            <span className='text-[13px] uppercase font-bold text-[#31509F] bg-[#71AAFF2E] px-3 py-1.5 rounded-full'>{props.infoText ?? "Benefits"}</span>
            <h2 className="!text-[#0c336b] !text-[32.5px] !leading-[135%] !font-black my-3 mx-auto text-center" dangerouslySetInnerHTML={{__html:props.title}} />
            { props.desc &&<p className='!text-[#626262] leading-[26px] text-justify text-[15.88px] !mb-0' dangerouslySetInnerHTML={{__html:props.desc}}/>}
           </div>
           <div className='flex flex-wrap justify-center gap-[53px_35px] mt-10'>
            {props.Data?.map((_, index) => (
              <div className="flex-[1_0_100%] group relative md:flex-[1_0_400px] rounded-[18px] border border-[#ededed] overflow-hidden flex flex-col gap-[15px] p-[25px_30px_30px_25px] md:p-[25px_40px_30px_25px] " key={index}>
                  <img
                    src={_.src}
                    alt={_.title}
                    width={42}
                    height={42}
                    loading="lazy"
                    className='object-contain'
                  />
                <h3 className='!text-[#051b3a] !text-[20px] !leading-[100%] !my-[4px_0px]'>{_.title}</h3>
                <p className='!text-[#626262] leading-[26px] text-justify text-[15.88px] !mb-0'>{_.desc}</p>
                <span className=' absolute w-full bottom-0 left-0 h-1.5 rounded-[0_18px_18px_0] bg-[#f4ac04] '/>
                <span className=' transition-all duration-400 ease-out absolute w-1/2 group-hover:w-[70%]  bottom-0 left-0 h-1.5 rounded-[18px_0_0_18px] bg-[#333741] '/>
           </div>
            ))}
         </div>
         </div>
      </section>
  )
}

export default AdvantageCard
