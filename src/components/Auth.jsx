import { useState } from "react";
import authOptions from "../lib/auth.config";
import { useNavigate } from "react-router-dom";
function Auth() {
    const [isSaas, setIsSaas] = useState(true)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    }

    return (
        <div className="cards min-h-[87%] bg-white flex w-full flex-col border rounded-xl">
            <div className="card-1 rounded-t-xl  flex flex-col items-center gap-[20px] py-8 px-6 border-b w-full">
                <div className="flex items-center justify-center gap-1">
                    <img src="CodeAnt Ai_Logo.svg" height={40} width={35.62} />
                    <div className="font-normal text-xl">CodeAnt AI</div>
                </div>
                <div className="text-2xl font-semibold mt-4">
                    Welcome to CodeAnt AI
                </div>
                <div className=" bg-[#FAFAFA] flex flex-row items-center rounded-lg border w-full mb-4">
                    <button className={`flex flex-1 py-4 px-[14px] font-semibold text-xl justify-center rounded-lg ${isSaas ? 'bg-[#1570EF] text-white' : 'text-[#414651]'}`} onClick={() => { setIsSaas(true) }}>SAAS</button>
                    <button className={`flex flex-1 py-4 px-[14px] font-semibold text-xl justify-center rounded-lg ${isSaas ? 'text-[#414651]' : 'bg-[#1570EF] text-white'}`} onClick={() => { setIsSaas(false) }}>Self Hosted</button>
                </div>
            </div>

            <div className="card-2 flex p-6 items-center justify-center w-full">
                <div className="button-container flex flex-col items-center justify-center w-[78%] gap-4">
                    {
                        isSaas ? (

                            authOptions.Saas.map((option) => (
                                <div className="flex flex-row justify-center py-4 items-center gap-4 border rounded-lg w-full cursor-pointer" onClick={handleClick}>
                                    <img src={option.image} />
                                    <div className="font-semibold">Sign in with {option.value}</div>
                                </div>
                            ))
                        ) : (


                            authOptions.SelfHosted.map((option) => (
                                <div className="flex flex-row justify-center items-center py-4 gap-4 border rounded-lg w-full cursor-pointer" onClick={handleClick}>
                                    <img src={option.image} />
                                    <div className="font-semibold">Sign in with {option.value}</div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth;