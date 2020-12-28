import Image from 'next/image';

const isCat = a => a.type == "cat"

const Animal = props => {
    return (
        <div className=" bg-gray-400 rounded-lg m-10 p-10 border-black border-2" >
            <div className="flex">
                <Image className="rounded-full" width="180px" height="180px" src={`/assignment-data/${props.img}`}></Image>
                <div className= "border-2 bg-gray-300 border-black border-opacity-60 container mx-auto text-center rounded-md ">
                    <h2 className="p-5 uppercase font-extrabold">{props.state}</h2>
                    <h2 className="p-3">${props.adoption_fee}</h2>
                </div>
            </div>
            <button className="text-center border-2 w-full m-2">Buy Now!</button>
        </div>
    )
} 
export default Animal