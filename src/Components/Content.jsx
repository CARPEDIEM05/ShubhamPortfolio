import Profile from "../assets/profile.png"
import Experience from "../assets/experience.png"

export function Content(){
    return <div>
        <div className=" flex justify-center mt-36">
            <img className="rounded-full h-56 w-56 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"  src={Profile}  />
        </div>
        <div className=" m-20 text-2xl font-bold">
            Hello there! I'm Shubham Gupta, a highly motivated and results-oriented software engineer with a solid 
            foundation in computer science. I bring to the table a unique blend of academic knowledge, practical experience,
            and a keen interest in the ever-evolving field of data science.
        </div>

        <div >
            <div className="flex justify-evenly text-4xl font-semibold">When Where and How?</div>
            <div className="grid grid-cols-2">
            <img src={Experience} className="h-80 w-auto rounded-lg ml-14 mt-8 transition-transform duration-300 ease-in-out hover:scale-110" />
            <div className="mt-8 ml-10">
                <div className="shadow-2xl">____________________________________________________________________________</div>
                <div>
                    
                </div>
            </div>

            </div>
           
        </div>

    </div>
}