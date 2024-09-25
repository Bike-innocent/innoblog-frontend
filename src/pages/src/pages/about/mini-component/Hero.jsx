import React from 'react'

function Hero() {
  return (
    <>
       <section class="bg-secondary pt-20 pb-[120px]" data-aos="zoom-in">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
                    <img class="mx-auto" src="assets/images/about/about2.png" alt="about me"/>
                    <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
                        <span class="text-orange text-xl">About me</span>
                        <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                            Mark Henry
                        </h3>

                        <h4 class="text-black-800 text-2xl mt-3 mb-4">Product Designer</h4>
                        <p class="text-xl font-bold font-Syne'] leading-7 mb-6">
                            A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my
                            works and ready to face the next challenge
                        </p>
                        <p class="paragraph mb-6">
                            That is where I come
                            in.
                            A lover of
                            words, a wrangler of copy. Here to create copy that not
                            only reflects who you are and what you stand for, but words that truly land with those that
                            read them, calling your audience in and making them .</p>

                        <div>
                            <img src="assets/images/signature.svg" alt="signature"/>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
