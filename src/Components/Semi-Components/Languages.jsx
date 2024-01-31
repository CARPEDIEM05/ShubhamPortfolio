export function Languages(){
    return <div>
        <div className="flex ml-2 mt-2">
            <div className="text-light font-serif mt-0.5 font-thin"><b className="font-bold">Hindi:</b> First langugae</div>
        </div>
        
        <div className="flex ml-2 mt-2 justify-between mr-4">
            <div className="text-light font-serif mt-0.5 font-thin"><b className="font-bold">English:</b></div>
            <div>C1</div>
        </div>
        <div className="flex ml-2 mt-2 grid grid-cols-7">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <LightBlock />
        </div>
        <div className="ml-2 mt-2 font-serif font-thin">Advanced</div>

        <div className="flex ml-2 mt-2 justify-between mr-4">
            <div className="text-light font-serif mt-0.5 font-thin"><b className="font-bold">German:</b></div>
            <div>A2</div>
        </div>
        <div className="flex ml-2 mt-2 grid grid-cols-7">
        <Block />
        <Block />
        <LightBlock />
        <LightBlock />
        <LightBlock />
        <LightBlock />
        <LightBlock />
        </div>
        <div className="ml-2 mt-2 font-serif font-thin">Advanced</div>
    </div>
}

function Block(){
    return <div className="w-10 h-2 bg-indigo-950 transition-transform duration-300 ease-in-out hover:scale-150 shadow-xl" ></div>
}

function LightBlock(){
    return <div className=" w-10 h-2 bg-gray-300 " ></div>

}