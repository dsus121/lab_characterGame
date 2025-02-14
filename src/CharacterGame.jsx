import React from "react";
import { useState } from "react";

function CharacterGame() {
  const [character, setCharacter] = useState({
    name: "Hero Priyanka",
    level: 1, // we all start somewhere
    experience: 0,
    health: 100,
    inventory: [], // empty array for now
  });
  
// add btw 10-50 xp when you push the button FIRST 
  function gainXp () {
    setCharacter ({... character, experience : character.experience + generateRandomNum(10,50)
    }) // pass empty 
  }

  // second button ... this should be automatic ... subtract 100 after press
function handleLevelUp() {
  if (character.experience >= 100) {
    setCharacter ({... character, level : character.level + 1, experience: character.experience-100})
    } 
} // we will update this after a while IT SHOULD BE AUTOMATIC

// third button that reduces health by a random amount (5-20)
function handleTakeDamage() {
  let ranNum = generateRandomNum(5,20)
  console.log(ranNum)
  if (character.health-ranNum > 0) {
    setCharacter ({... character, health : Math.max(0, character.health-ranNum)})  
// include logic to never get to a negative number
} if (character.health-ranNum<=0 ){  alert("Hero fainted!");
  setCharacter ({... character, health : Math.max(0, character.health-ranNum)})  

}
}

// adds a random item to the inventory
function handleCollectItem() {
  const items = [ "🥪", "🥤", "🕶", "🐏","☄️", "🎲" ]
  const item = items[Math.floor(Math.random() * items.length)];
  setCharacter (prev => ({... prev, inventory : [...prev.inventory, item]}));
    } 
  


function handleReset() {
    setCharacter({
      name: "Hero Priyanka",
      level: 1,
      experience: 0,
      health: 100,
      inventory: []
    });


  } // closing brace for the larger function


  function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.level}</p>
      <p>{character.experience}</p>
      <p>{character.health}</p>
      <p>{character.inventory}</p>
      <div className="button-container">
        <button className="button" onClick={gainXp}>
          Gain XP
        </button>
        <button className="button" onClick={handleLevelUp}>
          Level UP!
        </button>
        <button className="button" onClick={handleTakeDamage}>
          Take Damage
        </button>
        <button className="button" onClick={handleCollectItem}>
          Collect Item
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}



export default CharacterGame;
