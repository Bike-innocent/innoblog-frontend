import React from 'react'

function ProjectDetails() {
  return (
    <>
      
      {/* <!-- Hero Section Start--> */}
        <section class="bg-secondary pt-20">
            <div class="max-w-[1075px] mx-auto px-4 xl:px-0" data-aos="flip-down" data-aos-delay="300">
                <div class="grid grid-cols-1 lg:grid-cols-2 pb-12">
                    <div class="mb-10">
                        <ul class="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                            <li class="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px]">
                                <a class="text-black-text-800" href="#">UI Design</a>
                            </li>
                            <li class="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px] ml-[10px]">
                                <a class="text-orange" href="#">03 May 2019</a>
                            </li>

                        </ul>

                        <h4 class="text-black-800 font-bold font-Syne leading-snug text-[32px] lg:text-[44px]">
                            Mendero fintech dashboard design
                        </h4>
                    </div>
                    <ul class="flex flex-wrap gap-y-6 lg:gap-y-0">
                        <li class="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span
                                class="text-black-text-800 text-sm font-normal font-Inter leading-tight">Client</span>
                            <h2 class="text-black-800 text-[15px] font-bold font-sans leading-none">Mashorom</h2>
                        </li>
                        <li class="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span
                                class="text-black-text-800 text-sm font-normal font-Inter leading-tight">Category</span>
                            <h4 class="text-black-800 text-[15px] font-bold font-sans leading-none">User Experience
                            </h4>
                        </li>
                        <li class="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span
                                class="text-black-text-800 text-sm font-normal font-Inter leading-tight">Tools</span>
                            <h4 class="text-black-800 text-[15px] font-bold font-sans leading-none">Figma, Webflow
                            </h4>
                        </li>
                        <li class="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span class="text-black-text-800 text-sm font-normal font-Inter leading-tight">Start
                                date</span>
                            <h4 class="text-black-800 text-[15px] font-bold font-sans leading-none">09/01/ 2020</h4>
                        </li>
                        <li class="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                            <span class="text-black-text-800 text-sm font-normal font-Inter leading-tight">End
                                date</span>
                            <h4 class="text-black-800 text-[15px] font-bold font-sans leading-none">09/01/ 2020</h4>
                        </li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 mb-12">
                    <img class="w-full rounded-[20px]" src="assets/images/blog-details/banner.png" alt="banner"/>
                </div>
            </div>
        </section>
        {/* <!-- Hero Section End--> */}


        <section class="bg-white pb-[120px] mt-[-130px] pt-[130px] md:mt-[-280px] md:pt-[280px]">
            <div class="max-w-[1075px] mx-auto px-4 xl:px-0">
                <div class="grid grid-cols-1">

                    <h3 class="text-[32px] font-bold font-Syne leading-10 mb-4">Overview</h3>
                    <p class="paragraph mb-12">Minimalism combined with elements of french typography and brutalism
                        helped us to realize the
                        site exactly as we imagined with the client at the beginning: visually restrained, but
                        stylish.
                        Informative and pleasant to use, with an elegant aftertaste of a serious financial
                        institution.
                        Combined with elements of french typography and visually restrained, but stylish.
                        Informative
                        and pleasant to use, with an elegant aftertaste of a serious financial institutional client,
                        and
                        close collaboration.</p>
                    <p class="paragraph mb-12">That is where I come in. A lover of words, a wrangler of copy. Here
                        to
                        create copy that not only
                        reflects who you are and what you stand for, but words that truly land with those that read
                        them, calling your audience in and making them want more.</p>
                    <ul class="text-black-800 text-xl font-bold font-Syne mb-12">
                        <li class="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                            Advantage</li>
                        <li class="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                            Accomplished</li>
                        <li class="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                            Marketplace startups</li>
                        <li class="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                            SaaS startups</li>
                    </ul>

                    <h3 class="text-[32px] font-bold font-Syne leading-10 mb-4">Typography</h3>
                    <p class="paragraph mb-12">
                        The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a
                        ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up
                        with
                        something in the middle, leaning towards lighter-weighted fonts, but still with a hint of
                        that
                        blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive
                        attention to the content, and the technical and geometric Sora font for the body copy and
                        paste
                        overall hierachy.
                    </p>

                </div>
                <div class="grid grid-cols-12 gap-6 mb-12">
                    <div class="col-span-12 sm:col-span-5">
                        <img class="w-full h-full rounded-[20px]" src="assets/images/blog-details/post1.png" alt="post image"/>
                    </div>
                    <div class="col-span-12 sm:col-span-7">
                        <img class="w-full h-full rounded-[20px]" src="assets/images/blog-details/post2.png" alt="post image"/>
                    </div>
                </div>

                <div class="grid grid-cols-1">
                    <h3 class="text-[32px] font-bold font-Syne leading-10 mb-4">Conclusion</h3>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <p class="paragraph">The basic idea was to find a balance between the thin, wispy sans-serif
                        used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘.
                        We came up with something in the middle, leaning towards lighter-weighted fonts, but still with
                        a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to
                        drive attention to the content, and the technical and geometric Sora font for the body copy and
                        paste overall hierachy.</p>
                    <p class="paragraph">
                        The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a
                        ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with
                        something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that
                        blocky ‘construction’ vibe.
                    </p>
                </div>
            </div>
        </section>

        {/* {/* <!-- Project Section Start--> */} 
        <section class="bg-white pb-[120px]">
            <div class="container">
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12" data-aos="flip-down">
                        <div class="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                            <span class="text-orange text-xl">Portfolio</span>
                            <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                Related <span
                                    class="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[32px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">wo</span>rk
                            </h3>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6" data-aos="flip-down">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img src="assets/images/projects/project3.png" alt="project1"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <div class="flex flex-wrap gap-2">
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">APP</a>
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">DEVELOPMENT</a>

                            </div>
                            <div class="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize">
                                    <a class="transition-all" href="project-details.html">Basinik Finance App</a>
                                </h4>
                                <a href="project-details.html" class="group-hover:animate-arrow-move-up">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9"></path>
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6" data-aos="flip-down" data-aos-delay="300">
                        <div class="rounded-[20px] overflow-hidden mb-6">
                            <img src="assets/images/projects/project4.png" alt="project1"/>
                        </div>
                        <div class="flex flex-wrap flex-col gap-3">
                            <div class="flex flex-wrap gap-2">
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">APP</a>
                                <a class="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white" href="projects.html">DEVELOPMENT</a>

                            </div>
                            <div class="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                                <h4 class="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize">
                                    <a class="transition-all" href="project-details.html">Oxilex Dashboard design</a>
                                </h4>
                                <a href="project-details.html" class="group-hover:animate-arrow-move-up">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9"></path>
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
    </>
  )
}

export default ProjectDetails
