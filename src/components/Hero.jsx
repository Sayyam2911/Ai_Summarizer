import React from "react";
import {Logo} from "../assets/index.js";

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-8 pt-4">
                <h5 className="font-medium text-2xl leading-tight blue_gradient">QuickBriefs</h5>
                <button type="button" onClick={() => {
                    window.open("https://github.com/Sayyam2911/Ai_Summarizer")
                }} className="black_btn">
                    GitHub
                </button>
            </nav>

            <h1 className="head_text">
                Summarise Articles With <br className="max-md:hidden"/>
                <span className="blue_gradient">OpenAI GPT-4 </span>
            </h1>
            <h2 className="desc">
                Streamline and simplify your reading experience with QuickBriefs, an Innovative Open-Source Article Summarizer that effortlessly condenses lengthy articles into concise and digestible summaries.
            </h2>
        </header>
    )
}

export default Hero