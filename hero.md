Objective:

Build an interactive character progression game that dynamically updates multiple state values.

Instructions:

1. Create a new React project using Vite.
2. Create a new component named CharacterGame.js.
3. Implement the Character Game Component:
    - Inside CharacterGame.js, import useState from React.
    - Create a functional component called CharacterGame.
4. Use the useState hook to manage an object representing the player's character:

- const [character, setCharacter] = useState({
  name: "Hero",
  level: 1,
  experience: 0,
  health: 100,
  inventory: []
});

- Display the character's stats in the UI.

5. Add interactive buttons with different functionalities:
    - A "Gain XP" button that adds random experience points (10-50) to the character.
    - A "Level Up" button that increases the level by 1 if the experience reaches 100.
    - A "Take Damage" button that reduces health by a random amount (5-20).
    - A "Collect Item" button that adds a random item to the inventory.
    - A "Reset" button that resets all values to their initial state.
    -  Use the onClick event to update the state efficiently using the spread operator.

6. Handle Complex State Updates:
    - Ensure that when the experience reaches 100, the level increases, and the experience resets to 0.
    - Prevent health from dropping below 0, and display a message when the character "faints."
    - Ensure that items are added to the inventory dynamically without replacing previous items.
    - Implement a feature where certain collected items restore health when clicked.

7. Render the Component:
    - Import and use the CharacterGame component inside App.js to render it on the page.

    Example Output:
    When the user interacts with the game, character stats should update dynamically, showing XP growth, level-ups, health reductions, and inventory changes.

Example UI:

Character: Hero
Level: 1
Experience: 30/100
Health: 85
Inventory: [Potion, Sword]
[ Gain XP ]  [ Level Up ]  [ Take Damage ]  [ Collect Item ]  [ Reset ]


Clicking "Gain XP" increases experience, "Level Up" levels up when XP reaches 100, "Take Damage" reduces health, and "Collect Item" adds new items to the inventory.