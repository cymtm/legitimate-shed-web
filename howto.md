HOWTO: Manage Your Website Content
This guide explains how to add, remove, and edit the games and apps on your new static website. All content management is done in a single file: script.js.

Quick Overview
To edit anything (titles, descriptions, images): You will edit the script.js file.

To add new games/apps: You will add new entries to the script.js file and place the corresponding files in the games/ and assets/ folders.

1. Editing Games and Apps
All the information for your games and apps is stored in a JavaScript object called data at the top of your script.js file.

Open script.js. You will see this structure:

JavaScript

const data = {
    games: [
        // Game objects go here
    ],
    apps: [
        // App objects go here
    ]
};
Editing a Game
To edit an existing game, find it in the games array and change its properties.

Each game is an "object" that looks like this:

JavaScript

{
    slug: "warrenwalker",  // A unique, one-word identifier
    title: "@cymtm/Warrenwalker", // The full title displayed on the card
    description: "Experience the adventure with Warren Walker...", // The text description
    imageUrl: "/assets/game-warrenwalker.png", // Path to the preview image
    gameUrl: "/games/warrenwalker/index.html", // Path to the game's main HTML file
}
To change the title: Edit the title value.

To change the description: Edit the description value.

To change the image:

Place the new image inside the /assets/ folder.

Update the imageUrl path to point to your new file (e.g., /assets/my-new-game-image.png).

Editing an App
Editing an app works exactly the same way. Find the app you want to edit in the apps array inside script.js and modify its properties.

2. Adding a New Game
Follow these three steps to add a new game.

Step 1: Add the Game Files

Create a new folder for your game inside the /games/ directory. The folder name should be simple and match the slug you'll use (e.g., /games/my-new-game/).

Place all your game's files (HTML, CSS, JS, assets) inside this new folder.

Make sure you have an index.html file as the entry point for the game.

Step 2: Add a Preview Image

Place a preview image for your game inside the /assets/ folder (e.g., my-new-game.jpg). A 16:9 aspect ratio works well.

Step 3: Update script.js

Open script.js and add a new game object to the games array. Copy and paste the structure below and fill in your game's details.

JavaScript

// Inside the games: [ ... ] array
{
    slug: "my-new-game",
    title: "My Awesome New Game",
    description: "This is the coolest game ever made in a shed.",
    imageUrl: "/assets/my-new-game.jpg",
    gameUrl: "/games/my-new-game/index.html",
}, // <-- Don't forget the comma if it's not the last one!
That's it! Save the script.js file, and your new game will automatically appear on the "Games" page.

3. Adding a New App
Adding a new app follows the same process.

Step 1: Add the App Files

For static apps, the simplest way is to create a new HTML file for your app (e.g., my-new-app.html) and place it in the root directory.

Step 2: Add a Preview Image

Place a preview image for your app inside the /assets/ folder (e.g., my-new-app.png).

Step 3: Update script.js

Open script.js and add a new app object to the apps array.

JavaScript

// Inside the apps: [ ... ] array
{
    slug: "my-new-app",
    title: "My Useful New App",
    description: "This app will change your life.",
    imageUrl: "/assets/my-new-app.png",
    appUrl: "/my-new-app.html",
}, // <-- Don't forget the comma!
Save the file, and your new app will appear on the "Apps" page.