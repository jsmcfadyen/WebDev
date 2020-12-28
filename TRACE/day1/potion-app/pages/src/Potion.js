import Image from 'next/image';
import Button from './Button';

const Potion = props => {
    return (
        <div className="flex bg-gray-700 rounded-md border-white border-2 p-8 m-2">
            <Image className="animate-pulse" height={100} width={100} src={`/potion-data/${props.img}`}>
            </Image>
            <div className="p-5">
                <h2>{props.name}</h2>
                <b>{props.type}</b>
            </div>
            <div className="p-5 flex-grow">
                <h2>{'\u00a5'}{props.price}</h2>
                <p>{props.description}</p>
            </div>
            <Button>Buy</Button>
        </div>
    )
} 
export default Potion