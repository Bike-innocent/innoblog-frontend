import React from 'react'

function AwardsTab() {
    return (
        <>
            <div id="awards_tab" class="tab-content">
                <h4 class="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Awards</h4>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div class="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">

                        <div class="flex items-start justify-between">
                            <img src="assets/images/awards/w-dot.png" alt="icons" />
                            <span class="font-normal text-sm font-Inter text-black-text-800">2018</span>
                        </div>

                        <div>
                            <p class="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                Winner</p>
                            <h4 class="font-bold font-Syne leading-normal text-xl text-black-800">01X
                                Developer Award
                            </h4>
                        </div>
                    </div>

                    <div class="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">

                        <div class="flex items-start justify-between">
                            <img src="assets/images/awards/webby.png" alt="icons" />
                            <span class="font-normal text-sm font-Inter text-black-text-800">2018</span>
                        </div>

                        <div>
                            <p class="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                Winner</p>
                            <h4 class="font-bold font-Syne leading-normal text-xl text-black-800">01X
                                Developer Award
                            </h4>
                        </div>
                    </div>

                    <div class="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">

                        <div class="flex items-start justify-between">
                            <img src="assets/images/awards/fwa.png" alt="icons" />
                            <span class="font-normal text-sm font-Inter text-black-text-800">2018</span>
                        </div>

                        <div>
                            <p class="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                Winner</p>
                            <h4 class="font-bold font-Syne leading-normal text-xl text-black-800">01X
                                Developer Award
                            </h4>
                        </div>
                    </div>

                    <div class="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">

                        <div class="flex items-start justify-between">
                            <img src="assets/images/awards/wordpress.png" alt="icons" />
                            <span class="font-normal text-sm font-Inter text-black-text-800">2018</span>
                        </div>

                        <div>
                            <p class="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                                Winner</p>
                            <h4 class="font-bold font-Syne leading-normal text-xl text-black-800">01X
                                Developer Award
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AwardsTab
