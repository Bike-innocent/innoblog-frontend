import React from 'react'

function SkillsTab() {
    return (
        <>
           
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Skills</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">

                    <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                        <img className="items-start" src="assets/images/skills/vs-code.png" alt="icons" />
                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                            <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">React JS</h4>
                            <p className="text-sm font-normal font-Inter leading-none text-black-800">(90%)</p>
                        </div>
                    </div>


                    <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                        <img className="items-start" src="assets/images/skills/figma.png" alt="icons" />
                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                            <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Figma</h4>
                            <p className="text-sm font-normal font-Inter leading-none text-black-800">(70%)</p>
                        </div>
                    </div>

                    <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                        <img className="items-start" src="assets/images/skills/framer.png" alt="icons" />
                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                            <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Framer</h4>
                            <p className="text-sm font-normal font-Inter leading-none text-black-800">(80%)</p>
                        </div>
                    </div>

                    <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                        <img className="items-start" src="assets/images/skills/framer.png" alt="icons" />
                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                            <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Framer</h4>
                            <p className="text-sm font-normal font-Inter leading-none text-black-800">(80%)</p>
                        </div>
                    </div>

                    <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                        <img className="items-start" src="assets/images/skills/framer.png" alt="icons" />
                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                            <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Framer</h4>
                            <p className="text-sm font-normal font-Inter leading-none text-black-800">(80%)</p>
                        </div>
                    </div>

                    <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                        <img className="items-start" src="assets/images/skills/framer.png" alt="icons" />
                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                            <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">Framer</h4>
                            <p className="text-sm font-normal font-Inter leading-none text-black-800">(80%)</p>
                        </div>
                    </div>


                </div>
            
        </>
    )
}

export default SkillsTab
