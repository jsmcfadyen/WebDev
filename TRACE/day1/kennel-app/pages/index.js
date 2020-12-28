import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Animals from '../public/assignment-data/animals.json'
import Animal from './src/Animal.js'

const animalMaker = a => <Animal type={a.type} state={a.state} img={a.img} adoption_fee={a.adoption_fee}></Animal>
const allAnimals = Animals.map(animalMaker)

const typesOfAnimals = ["cat","dog","monkey","lizard"]

const isCat = a => a.type == "cat"
const Cats = Animals.filter(isCat)
const CatsFormatted = Cats.map(animalMaker)

const isDog = a => a.type == "dog"
const Dogs = Animals.filter(isDog)
const DogsFormatted = Dogs.map(animalMaker)

const isLizard = a =>a.type == "lizard"
const Lizards = Animals.filter(isLizard)
const LizardFormatted = Lizards.map(animalMaker)

const isMonkey = a =>a.type == "monkey"
const Monkeys = Animals.filter(isMonkey)
const MonkeyFormatted = Monkeys.map(animalMaker)

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 p-8">
        <h1 className="font-bold text-center text-3xl">Bootleg Animal Shelter</h1>
      </div>
      <div className="bg-gray-700 p-3 text-center text-white font-semibold">Cats</div>
      <div className="flex">{CatsFormatted}</div>  
      <div className="bg-gray-700 p-3 text-center text-white font-semibold">Dogs</div>
      <div className="flex">{DogsFormatted}</div>
      <div className="bg-gray-700 p-3 text-center text-white font-semibold">Lizards</div>
      <div className="flex">{LizardFormatted}</div>
      <div className="bg-gray-700 p-3 text-center text-white font-semibold">Monkeys</div>
      <div className="flex">{MonkeyFormatted}</div>
    </div>
    
  )
}
