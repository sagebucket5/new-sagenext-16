
const Awards = () => {
  return (
    <section className='py-10'>
      <div className='container mx-auto'>
        <div className='text-center grid place-items-center'>
          <span className='bg-[radial-gradient(33%_66%_at_46%_52%,_#ffffff_0%,_rgba(255,207,48,0.42)_100%)] text-[13px] p-[10px_14px] rounded-full font-extrabold w-fit'>🏆 award 🏆</span>
          <span className='!text-[32px] font-bold mb-5 pt-3 text-[#31416c]'>Awards: Recognizing Quality & <span className='font-normal'>Customer</span> Focus</span>
          <p style={{ color: "#464646", fontSize: "17px", lineHeight: "145%", maxWidth: "1100px" }} className='mx-auto'>Sagenext has consistently garnered distinguished recognition for its exceptional hosting services, characterized by a resolute dedication to innovation and customer delight. This unwavering commitment to excellence has been demonstrably acknowledged through the receipt of numerous prestigious awards and accolades, solidifying Sagenext's position as an industry leader.</p>
        </div>
        <div className='flex items-stretch justify-center flex-wrap mt-14 gap-5.5'>
          <div className='flex gap-2.5 items-center p-[33px] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] text-[#365279] text-[13px] !font-bold bg-[#F0DEFF] rounded-[17px] border-[1px_soid_#DED9DD] max-w-[303px]'><img src='/assets/award/great.png' alt='great uptime' loading='lazy' width={80} height={65} /><span>Great Uptime by HostAdvice</span></div>
          <div className='flex gap-2.5 items-center p-[33px] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] text-[#365279] text-[13px] !font-bold bg-[#FFE5A8] rounded-[17px] border-[1px_soid_#F4AC04] max-w-[303px]'><img src='/assets/award/exp.png' alt='great exp' loading='lazy' width={80} height={65} /><span>Great User Experience by Finances Online</span></div>
          <div className='flex gap-2.5 items-center p-[33px] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] text-[#365279] text-[13px] !font-bold bg-[#FEFEFE] rounded-[17px] border-[1px_soid_#E4E1E1] max-w-[303px]'><img src='/assets/award/star.png' alt='star rising' loading='lazy' width={80} height={65} /><span>Rising Star Award by Compare Camp</span></div>
          <div className='flex gap-2.5 items-center p-[33px] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] text-[#365279] text-[13px] !font-bold bg-[#DEFCFF] rounded-[17px] border-[1px_soid_#A6FFF0] max-w-[303px]'><img src='/assets/award/top.png' alt='great uptime' loading='lazy' width={80} height={65} /><span>Top 10 Cloud Hosting Host Advice</span></div>
        </div>
      </div>
    </section>
  )
}

export default Awards