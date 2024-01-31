import ProfilePicture from "../assets/profile.png"
import { Contacts } from "./Semi-Components/Contacts"
import { RightContent } from "./Semi-Components/RightContent"
import { TopSkills } from "./Semi-Components/TopSkills"
import { Languages } from "./Semi-Components/Languages"
import { LeftContent } from "./Semi-Components/LeftContent"
import "./Resume.css";


export function Resume(){
    window.addEventListener('scroll', function(){
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var shadowSize = 10 + scrollPosition /5 ;

        var shadowElement = document.querySelector('.dynamic-shadow');
        if(shadowElement){
            shadowElement.style.boxShadow = '0px 0px ${shadowSize}px 0px rgba(0,0,0,0.5)';
        }
    });
    
    return <div className="flex flex-col items-center  mt-8 ">
        <div className="box-border h-full w-54 p-4 pb-20 bg-white shadow-2xl grid-cols-2 flex dynamic-shadow">
            <LeftContent />

            

            <div>
                <RightContent></RightContent>
            </div>
        </div>
    </div>
}

