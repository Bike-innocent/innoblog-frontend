import React from 'react'

function Portfolio() {
  return (
    <>
        
         <section class="bg-secondary py-[120px]">
            <div class="container">
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12" data-aos="fade-up">
                        <div class="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                            <span class="text-orange text-xl">Portfolio</span>
                            <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                My recent <span
                                    class="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">w</span>ork
                            </h3>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img src="assets/images/projects/project1.png" alt="project1"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <div class="flex flex-wrap gap-2">
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">APP</a>
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">DEVELOPMENT</a>

                            </div>
                            <div class="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                                    <a class="transition-all" href="project-details.html">Basinik Finance App</a>
                                </h4>
                                <a class="group-hover:animate-arrow-move-up" href="project-details.html">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6" data-aos="fade-up" data-aos-delay="500">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img src="assets/images/projects/project2.png" alt="project1"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <div class="flex flex-wrap gap-2">
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">APP</a>
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">DEVELOPMENT</a>

                            </div>
                            <div class="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                                    <a class="transition-all" href="project-details.html">Oxilex Dashboard design</a>
                                </h4>
                                <a class="group-hover:animate-arrow-move-up" href="project-details.html">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-span-12 mt-12" data-aos="fade-up">
                    <div class="flex group">
                        <a href="projects.html" class="flex items-center justify-center flex-wrap btn-primary grow">
                            View All Project
                            <span class="inline-block ml-3 group-hover:animate-arrow-move-up">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
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
        </section>
        

    </>
  )
}

export default Portfolio
