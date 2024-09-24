import React from 'react'

function About() {
  return (
    <>
        
         <section class="about-section pb-[120px]" data-aos="zoom-out" data-aos-delay="300">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
                    <div class="relative">


                        <img src="assets/images/about/about1.png" alt=""/>

                        <div class="flex flex-wrap flex-col absolute bottom-0 right-0 md:right-[170px] lg:right-[-30px] z-10">
                            <span
                class="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">2+</span>
                            <span class="strock-text mt-5">Years of <br /> experience</span>

                        </div>
                    </div>
                    <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
                        <span class="text-orange text-xl">Hello I’m</span>
                        <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                            Mark Henry, Product Designer
                        </h3>

                        <h4 class="text-black-800 text-2xl lg:text-3xl xl:text-[44px] mt-3 mb-4">Based in German</h4>
                        <p class="paragraph mb-6">That is where I come in. A lover of words, a wrangler of copy. Here to create
                            copy
                            that not only
                            reflects who you are and what you stand for, but words that truly land with those that read them,
                            calling your audience in and making them .</p>
                        <ul class="flex flex-wrap gap-9 2xl:gap-[40px] mb-7">
                            <li>

                                <span
                    class="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">08</span>
                                <p class="paragraph">Award winner</p>
                            </li>
                            <li>

                                <span
                    class="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">1.2k</span>
                                <p class="paragraph">Worldwide client</p>
                            </li>
                            <li>

                                <span
                    class="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">3.5k</span>
                                <p class="paragraph">Job done successfully</p>
                            </li>
                        </ul>

                        <div class="flex flex-wrap">
                            <a href="contact.html" class="flex items-center flex-wrap btn-primary group">Download my resume
                                <span class="inline-block ml-3 group-hover:animate-arrow-move-up">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

    </>
  )
}

export default About
