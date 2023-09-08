import { useState } from "react"

export default function Player(){
 // define the hooks of useState
  const [player, setPlayer] = useState(11)
 // player style
 const playerStyle = {
    padding: "20px",
    border: "1px solid yellow",
    borderRadius: "25px",
    width: "450px",
 }
 // add player
 const AddPlayerHandler = () => {
    setPlayer(player + 1)
 }
 // remove player
 const RemovePlaerHandler = () => {
    setPlayer(player - 1)
 }


    return (
        <div style={playerStyle} >
        <h3>Player:{player} </h3>
        <hr style={{ background: 'yellow',height: '2px' }}  />
        <button onClick={AddPlayerHandler} >Add Player</button>
        <button onClick={RemovePlaerHandler} >Remove Player</button>
        </div>
    )
}