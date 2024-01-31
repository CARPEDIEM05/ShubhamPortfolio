export function RightContent(){
    return (<div className=" ml-10 mt-4 pr-32 h-screen">
                <h1 className=" text-6xl font-semibold text-terquoise-50 font-serif mb-10">Shubham Gupta</h1>
                <div className="flex"> 
                <Line />
                <div className="ml-10">
                <div className="text-3xl font-semibold text-terquoise-50 font-serif">EXPERIENCE</div>
                <div >
                    <Experience Role={"Software Development Engineer"} Employer={"Tata Consultance Service - New Delhi, India, India"}
                    Date={"09/2020 - 09/2023"} />
                    <ProjectsMain ProjectNumber={"Project 1"} Role={"[ Software Development Engineer ]"} number={1}/>
                    <ProjectsMain ProjectNumber={"Project 2"} Role={"[ Backend Web Developer ]"} number={2}/>
                    <ProjectsMain ProjectNumber={"Project 3"} Role={"[ Data Scientist ]"} number={3}/>
                </div>
                <div>
                    <Experience Role={"Machine Learning Intern"} Employer={"Tata Consultance Service - New Delhi, India, India"}
                    Date={"01/2020 - 03/2020"} />
                    <MlProjectContent/>

                </div>
                <div>
                <Experience Role={"Data Science Intern"} Employer={"Helto - Vellore, India"}
                    Date={"01/2019 - 02/2019"} />
                <DataInternContent />
                    


                </div>
                </div>

                

                </div>
                
                
            </div>)
}

function Line(){
    return (
        <div className="h-screen w-0.5 bg-terquoise-50" ></div>
    )
}

function Experience({Role, Employer, Date}){
    return <div className="mt-5">
         <div className="font-serif font-semibold">{Role}</div>
                <div className="font-serif">{Employer}</div>
                <div className="font-serif">{Date}</div>
    </div>

}

function Date({date}){
    return <div className="font-serif">
        {date}
    </div>

}

function ProjectsMain({ProjectNumber, Role, number}){
    let Element ;
    if(number==1){
        Element = Project1Content
    } else if(number ==2){
        Element = Project2Content
    } else if(number == 3){
        Element = Project3Content
    }
    return  <div className="mt-2">
    <div className="font-semibold font-serif">{ProjectNumber}</div>
    <div className="font-semibold font-serif">{Role}</div>
    <Element /> 
</div>
}

function Project1Content(){
    return <div className=" w-96 font-serif ">
        <div>
            <div className="">
            - Developed web application with Java Web Technologies to create an <b>AD group analysis tool</b> with a Single Sign On (SSO) feature which <b> reduced the process time by 30%</b>.</div>
           <div>- Worked as a part of the DevOps team - Deployed various enhancements in collaboration with the Development Team. Increased efficiency reduced manual efforts and <b> saved $25K </b> annually.</div>
           <div> - Technology Stack: BootStrap, Springboot, MS-SQL, MS-Azure, GitHub</div>
        </div>
    </div>
}


function Project2Content(){
    return <div className=" w-96 font-serif ">
        <div>
            <div className="">
            - Developed web application in Java using <b>Spring Boot</b> to
manage the competencies of all the employees in the
organization and a dashboard to enhance and improve the
skills of the users.
</div>
           <div>- The application used a <b>monolithic architecture</b> which
involved the use of <b>liquibase</b> for database transactions,
<b>hibernate</b> as an ORM, and a <b>GitHub actions</b> pipeline to
deploy the application on <b>Azure cloud</b>.
</div>
           <div> - Technology Stack: Angular, Springboot, MS-SQL,
MS-Azure, GitHub</div>
        </div>
    </div>
}

function Project3Content(){
    return <div className=" w-96 font-serif ">
        <div>
            <div className="">
            - Developed and deployed similarity-based (cosine similarity,
euclidean distance) and clustering (k-median) algorithms for
an MVP using Python libraries and <b>MLFlow</b>.
</div>
           <div>- Collaborated with the team and implemented <b>MLOps</b> using
MLFlow where the deployed models were constantly
monitored and retrained after a scheduled time, based on the
new data coming from the vendors via ETL pipelines.

</div>
           <div> - Technology Stack: Python, MS-Azure, GitHub</div>
        </div>
    </div>
}


function MlProjectContent(){
    return <div className=" w-96 font-serif ">
        <div>
            <div className="">
            - Worked on <b>automating</b> the ticket solution
platform(ServiceNow) using <b>machine learning</b> techniques.

</div>
           <div>- Effectively <b>enhanced the system performance</b>.
Major responsibilities included Data collection and feature
selection.
</div>
           <div> - Contributed to the <b>model selection</b> process as well.</div>
        </div>
    </div> 
}

function DataInternContent(){
    return <div className=" w-96 font-serif ">
        <div>
            <div className="">
            - Worked on building the algorithm to enhance <b>data
filtration and processing</b>.


</div>
           <div>- <b>Increased the accuracy</b> of thealgorithm to gain better
results.

</div>
           <div> - Implemented various <b>machine learning models</b> to reach an
optimal solution.</div>
        </div>
    </div> 

}