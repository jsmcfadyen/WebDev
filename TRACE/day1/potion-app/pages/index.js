import mitt from 'next/dist/next-server/lib/mitt'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Potions from '../public/potion-data/potions.json'
import Potion from './src/Potion.js'
const potionMaker = p => <Potion name={p.name} type={p.type} price={p.price} img={p.img} description={p.description}/>
const allPotions = Potions.map(potionMaker)

const isStrong = p => p.type == "strong"
const strongestPotions = Potions.filter(isStrong)
const strongestPotionsFormatted = strongestPotions.map(potionMaker)

const sumTogether = (x,y) => x + y.price
const totalStrongestPotionPrice = strongestPotions.reduce(sumTogether, 0)


export default function Home() {
  return (
    <div className="bg-gray-800 h-full text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-8xl">Potion Seller's Shop</h1>
          <br></br>
          <p>Price: {'\u00a5'}{totalStrongestPotionPrice}</p>
          <div className="m-20">
            {allPotions}
          </div>
        </div>
      </div>
    </div>
  )
}
