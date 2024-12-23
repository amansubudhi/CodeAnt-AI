import Auth from "../components/Auth";

function Signin() {
    return (
        <div className="flex h-screen flex-row">
            <div className="hidden lg:flex flex-1 items-center justify-center border-r border-[#E9EAEB]">
                <div className="stats-cards flex flex-col">
                    <div className="card-md rounded-3xl -mt-36" style={{ 'boxShadow': '0px 0px 24px 0px #08173529' }}>
                        <div className="flex items-center gap-2 border-b p-4">
                            <img src="CodeAnt Ai_Logo.svg" />
                            <div className="font-bold"> AI to Detect & Autofix Bad Code</div>
                        </div>
                        <div className="flex items-center justify-around gap-12 pt-4 pb-8 pl-5 pr-8">
                            <div className="flex flex-col items-center">
                                <div className="font-bold">30+</div>
                                <div className="font-normal">Language Support</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="font-bold">10K+</div>
                                <div>Developers</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="font-bold">100K+</div>
                                <div>Hours Saved</div>
                            </div>
                        </div>
                    </div>

                    <div className="card-sm bg-white flex-col rounded-3xl translate-x-[93%] -translate-y-[10px] max-w-60 px-8 py-3 z-10" style={{ 'box-shadow': '0px 0px 24px 0px #08173529' }}>
                        <div className="flex flex-row justify-between">
                            <div className=" flex justify-center items-center rounded-full h-14 w-14 bg-light-violet">
                                <img src="pie-chart.svg" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-1">
                                    <img src="Arrow-up.svg" height={8} width={11} />
                                    <div className="font-bold text-sm text-[#0049c6]">14%</div>
                                </div>
                                <div className="text-xs"> This week </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-1">
                            <div className="font-bold text-sm">Issues Fixed</div>
                            <div className="font-bold text-2xl">500K+</div>
                        </div>

                    </div>
                </div>
                <img src="Codeantai_logo_faded.svg" style={{ heigth: '319px', width: '284px' }} className="fixed left-0 bottom-0"></img>
            </div>
            <div className="flex flex-1 h-screen bg-[#FAFAFA]">
                <div className="flex flex-col justify-center px-4 w-full">
                    <Auth />
                    <div className="flex items-center justify-center gap-1 mt-6">
                        By sigining up you agree to the  <span className="font-bold">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;



