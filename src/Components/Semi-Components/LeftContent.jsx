import ProfilePicture from "./assets/profile.png"
import { Contacts } from "./Contacts"
import { TopSkills } from "./TopSkills"
import { Languages } from "./Languages"


export function LeftContent(){
    return <div >
    <img src={ProfilePicture} alt="" className=" h-56 w-56 shadow-sm" />
    <div className="mt-4 text-2xl font-semibold ml-2 text-indigo-950 font-serif">
        CONTACT
    </div>
    
    <div className="mb-1"><Contacts Information={"Erlangen, 91056, Germany"} ElementInformation={1}></Contacts></div>
    <div className="mt-2 ml-1"><Contacts  Information={"(+49) 15510186370"} ElementInformation={2}></Contacts></div>
    <div className="mt-2 ml-1"><a href="mailto:g.shubham1@outlook.com"><Contacts Information={"g.shubham1@outlook.com"} ElementInformation={3}></Contacts></a></div>

    <div className="text-indigo-950 mt-4">____________________________________________</div>
    <div className="mt-4">
    <div className="mt-4 text-2xl font-semibold ml-2 text-indigo-950 font-serif">
        TOP SKILLS
    </div>
    <div className="mt-2">
    <TopSkills Skills={"Good programming skills (Python, Java, C++)"}></TopSkills>
    <TopSkills Skills={"OOPS"}></TopSkills>
    <TopSkills Skills={"Spring"}></TopSkills>
    <TopSkills Skills={"Version Control System (GIT)"}></TopSkills>
    <TopSkills Skills={"SQL and MS-SQL, Hibernate"}></TopSkills>
    <TopSkills Skills={"Unit Testing, API Testing"}></TopSkills>
    <TopSkills Skills={"Microsoft Fundamentals Azure Cloud"}></TopSkills>
    <TopSkills Skills={"Data Analysis and Manipulation"}></TopSkills>
    </div>
    
    
    </div>
    <div className="text-indigo-950 mt-4">____________________________________________</div>

    <Languages></Languages>

    
    <EducationContent />
    <ToolsAndLibraries/>
    <Certification/>
    
  
    
    
    
    </div>
}

function Line(){
    return (
        <div className=" h-20 w-0.5" ></div>
    )
}


function EducationContent(){
    return <div>
        <div className="text-3xl font-semibold text-terquoise-50 font-serif mt-4">Education</div>
     <div className="font-serif mb-4">
        <div className="font-semibold">Master of Science: Data Science</div>
        <div className="font-semibold">Friedrich-Alexander University Erlangen-Nuremberg</div>
        <div>- Erlangen, Germany, 2025</div>
    </div>
     <div className="font-serif">
        <div className="font-semibold">Bachelor of Technology: Computer Science and Engineering</div>
        <div className="font-semibold">Vellore Institute Of Technology</div>
        <div> - Vellore, India, 2020</div>
    </div>

    </div>
}


function ToolsAndLibraries(){
    return <div className="font-serif">
        <div className="text-3xl font-semibold text-terquoise-50 font-serif mt-4">TOOLS AND LIBRARIES</div>
        <ToolsAndLibrariesContent Role={"Backend Development"} Tech={" Spring (Spring Boot, Spring Data, Spring Security, Spring MVC)"} />
        <ToolsAndLibrariesContent Role={"Version Control System"} Tech={"GitHub"} />
        <ToolsAndLibrariesContent Role={"Unit Testing"} Tech={"JUnit, Mockito, Postman"} />
        <ToolsAndLibrariesContent Role={"Machine Learning Libraries"} Tech={"Scikit-learn, OpenCV"} />
        <ToolsAndLibrariesContent Role={"Data Manipulation and Analysis"} Tech={"NumPy, Pandas, Matplotlib, Pillow, Seaborn"} />
        <ToolsAndLibrariesContent Role={"Project Management"} Tech={"Jira, Azure DevOps"} />

    </div>
}

function ToolsAndLibrariesContent({Role, Tech}){
    return <div className="mt-1">
    <div className="font-semibold">{Role}</div>
    <div>{Tech}</div>
</div>

}

function Certification(){
    return <div>
        <div className="text-3xl font-semibold text-terquoise-50 font-serif mt-4">CERTIFICATIONS</div>
        <CertificationContent  Tech={"Python for Data Science" } Vadlidations={"Credential ID: NPTEL19CS59S42300120"}/>
        <CertificationContent  Tech={"Data Structures and Algorithms" } Vadlidations={"(10/2021 - 03/2022) - Scored 90.28% in the course."}/>
    </div>

}

function CertificationContent({Tech, Vadlidations}){
    return <div className="font-serif">
    <div className="font-semibold">{Tech}</div>
    <div>{Vadlidations}</div>
    </div>


}