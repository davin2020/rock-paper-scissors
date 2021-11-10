# Rock, Paper, Scissors Challenge

From the [Frontend Mentor](https://www.frontendmentor.io) website

## The Challenge

Your challenge is to build out this Rock, Paper, Scissors game and get it looking as close to the design as possible - using HTML, CSS and JavaScript

Your users should be able to:
- Play Rock, Paper, Scissors against the computer

### Rules for Original Version

If the player wins, they gain 1 point. If the computer wins, the player loses one point.

- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper

## Status & Live Demo
I've got the main functionality of the game working, and most of the styling/layout

You can pick an icon by clicking on it, the house then randomly picks an icon, and the result and score are displayed

A live demo (currently of the pre_main branch) is online here - https://davin2020.github.io/rock-paper-scissors/


## Problem Solving Approach
The first time I tried this challenge, earlier in the year, I approached it from a layout/styling-first perspective, and TBH didnt get very far with that approach as I'm more of a backend person. Last month in October I tried the challenge again, and this time decided on a functionality-first approach, which has worked out better for me. 

Below is a rough summary of how I broke the challenge down into really smalll tasks, within different branches. I then worked in an iterative way to create and then improve, the games's functionality and then it's layout/styling. I've tried to put the JS code in functions as much as possible, and will do some refactoring at a later stage.

### Branch v3_functionality: Auto picking 2 icons at random and showing output via the console
- make an array with 3 items
- pick an item at random from the array
- display the result ie the picked icon in the console
- repeat this twice, once for each player
- compare the Player1 and Player2 icons
- work out the algorithm to determine the winner, and give them 1 point
- display the scores in the console

![Image of Game from Branch v3](/screenshots/rock_v3.png)

### Branch v4_interactive: Allow the user pick an icon via the browser
- display 3 image icons in the browser
- add event listeners to each image
- show the chosen icon as text within the browser
- call the existing function to pick a random icon
- call the exsting function to determine the winner
- show which player won in the browser as text

![Image of Game from Branch v4](/screenshots/rock_v4.png)

### Branch v5_score: Calculating the points scored by the user
- adjust the scoring rules, as only the User (not the House) can gain/lose points 
- show the score after each round, in the browser
- add a delay after the User picks, before showing the House pick, and then the result/score
- display the icon image of what was picked, as well as the text
- hide the original icon images after the user picks them, by removing the text for the src attribute, so they can reapprear once the Play Again button is clicked
- add the Play Again button
- reset the game when the user clicks the Play Again button ie remove the previously picked icons/text and winner details

![Image of Game from Branch v5](/screenshots/rock_v5.png)

### Branch v6_new_readme: Updating the readme
- updated the readme with my progress and details of my approach etc

### Branch v7_styling: Setup basic layout and styling
- workout all the container/layout divs required and add them in
- add the title image and score in the relevant divs
- adjust the fonts
- center the text
<!-- - add the relevant colours for borders, background etc  --> <!--  is this actually in v7 or not? or is the screenshot old/wrong? when did i add the title -->
- add flex box for main game area, showing result icons and score
<!-- - add borders to icons and center them / add bordrer around title?  -->
- hide/unhide the div containing the starting icon images, after the user has selected one
<!-- - rest the game when the user clicks the Play Again button? IS this in v5 or v7? -->

![Image of Game from Branch v7](/screenshots/rock_v7.png)

### Branch v7_layout_p2: More detailed styling
- add the relevant colours for borders, background etc 
- add borders to icons and centered them
- styled Play Again button with rounded edges & hover color 
- hide Play Again button until after the Win/Lose text is displayed
- capitalised text, removed extra text & adjusted wording
- hide output div with Results before games starts, and hide icon div with Starting Icons after user has picked an icon

![Image of Game from Branch v7 part 2](/screenshots/rock_v7p2.png)