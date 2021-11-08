# Rock, Paper, Scissors Challenge

From the [Frontend Mentor](https://www.frontendmentor.io) website

## The challenge

Your challenge is to build out this Rock, Paper, Scissors game and get it looking as close to the design as possible - using HTML, CSS and JavaScript

Your users should be able to:
- Play Rock, Paper, Scissors against the computer

### Rules for Original Version

If the player wins, they gain 1 point. If the computer wins, the player loses one point.

- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper

## Status
I've got the main functionality of the game working, and most of the styling/layout

You can pick an icon by clicking on it, the house then randomly picks an icon, and the result and score are displayed

## Problem Solving approach for this Challenge
The first time I tried this challenge, earlier in the year, I approached it from a layout/styling-first perspective, and TBH didnt get very far with that approach as I'm more of a backend person. Last month in October I tried the challenge again, and this time decided on a functionality-first approach, which has worked out better for me. 

Below is a rough summary of how I broke the challenge down into really smalll tasks, within different branches. I then worked in an iterative way to create and then improve, the games's functionality and then layout/styling. I've tried to put the JS code in functions as much as possible.

### branch v3_functionality: auto picking 2 icons at random and showing output via the console
- make an array with 3 items
- pick an item at random from the array
- display the result ie the picked icon in the console
- repeat this twice, once for each player
- compare the Player1 and Player2 icons
- work out the algorithm to determine the winner, and give them 1 point
- display the scores in the console
![Image of Game from Branch v3](/screenshots/rock_v3.png)

### branch v4_interactive: allow the user pick an icon via the browser
- display 3 image icons in the browser
- add event listeners to each image
- show the chosen icon as text within the browser
- call the existing function to pick a random icon
- call the exsting function to determine the winner
- show which player won in the browser as text
![Image of Game from Branch v4](/screenshots/rock_v4.png)

### branch v5_score
- show the score after each round, in the browser
- add the Play Again button
- add a delay after the user picks, before showing the house pick, and then the result/score
- display the icon image of what was picked, as well as the text
- reset the game when the user clicks the Play Again button <!-- is this button actually working? -->
![Image of Game from Branch v5](/screenshots/rock_v5.png)

### branch v6_new_readme
- updated the readme with my progress

### branch v7_styling
- workout all the container/layout divs required
- adjust the fonts
- center stuff
- add the relevant colours for borders, background etc
- add flex box for main game area, showing result icons and score
- add borders to icons and center them
- hide/unhide the div containing the starting icon images, after the user has selected one
- rest the game when the user clicks the Play Again button?
![Image of Game from Branch v7](/screenshots/rock_v7.png)

### branch v7_layout_p2
![Image of Game from Branch v7 part 2](/screenshots/rock_v7p2.png)