import { useEffect, useState } from 'react'
import Card from './Card'
import './App.css'
import getRandomInt from './randomInt'
import shuffle from './shuffleArray'

function App() {

  const nationObjects = [
    {code:"GB",name:"United Kingdom"},
    {code:"AF",name:"Afghanistan"},
    {code:"AM",name:"Armenia"},
    {code:"CO",name:"Colombia"},
    {code:"NO",name:"Norway"},
    {code:"SE",name:"Sweden"},
    {code:"PK",name:"Pakistan"},
    {code:"CN",name:"China"},
    {code:"RU",name:"Russia"},
    {code:"PL",name:"Poland"},
    {code:"MY",name:"Malaysia"},
    {code:"NA",name:"Namibia"},
    {code:"MZ",name:"Mozambique"},
    {code:"PE",name:"Peru"},
    {code:"DK",name:"Denmark"},
    {code:"EG",name:"Egypt"},
    {code:"US",name:"United States"},
    {code:"UZ",name:"Uzbekistan"},
    {code:"FR",name:"France"},
    {code:"TR",name:"Turkey"},
    {code:"TH",name:"Thailand"},
    {code:"TN",name:"Tunisia"},
    {code:"JP",name:"Japan"},
    {code:"IN",name:"India"},
    {code:"IT",name:"Italy"},
    {code:"KE",name:"Kenya"},
    {code:"KR",name:"South Korea"},
    {code:"SA",name:"Saudi Arabia"},
    {code:"SO",name:"Somalia"},
    {code:"DE",name:"Germany"}
  ]



  const createList = ()=>{
    let list = []
    let numberOfCards = 12
    while (numberOfCards != 0){
      let randomNumber = getRandomInt(0,nationObjects.length-1)
      if (list.includes(nationObjects[randomNumber])){
        //
      } else {
        list.push(nationObjects[randomNumber])
        numberOfCards-=1
      }
    }
    return list
  }

  const [guess,addGuess] = useState([])
  const [countries,setCountries] = useState(createList) 
  const [highScore,newHS] = useState(0)


  const checkClicked = (e)=>{
    let name = e.target.textContent
    if (guess.includes(name) == false){
      const arr = [...guess]
      arr.push(name)
      addGuess(arr)
    } else {
      setCountries(createList)
      addGuess([])
      if (guess.length>highScore){
        newHS(guess.length)
      }
    }
  }


  let cards = []
  let randomizedList = shuffle(countries)

  for (let i = 0;i<randomizedList.length;i++){
    let country = randomizedList[i]
    cards.push(<Card onClick={checkClicked} name={country.name} key={country.code} code = {country.code} />)
  }

  return (
    <div className='box'>
      <div className='header'>Country Memory Card Game</div>
      <div className="container">{cards}</div>
      <div className="end">
        <h3>Score: {guess.length}/12</h3>
        <h3>High score: {highScore}/12</h3>
      </div>
    </div>
  )
}

export default App
