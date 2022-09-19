# Black & White Horror Film Quiz

[View the Live Project here](https://lizac9.github.io/project2-bn-horror-film/)
![Home page image](https://res.cloudinary.com/lizac/image/upload/v1663529216/project2-bn-horror-film/Home_page_image_hvthha.jpg)
## Table of Contents
+ [List of Features](#list-of-features)
  + [Existing Features](#existing-features)
  + [Future Features](#future-features)
+ [UX/UI](#uiux "UX/UI")
  + [Site Goals](#site-goals)
  + [Design choices](#desing-choices)
    + [Typography](#typography)
    + [Colour Scheme](#colour-scheme)
  + [User stories](#user-stories)
  + [Wireframes](#wireframes)
+ [Technologies Used](#technologies-used)
  + [Languages Used](#languages-used)
+ [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
+ [Testing](#testing)
  + [Validator Testing](#validator-testing)
  + [Manual Testing](#manual-testing)
  + [Testing User Stories](#testing-user-stories)
  + [Browser Compatibility](#browser-compatibility)
  + [Debugging](#debugging)
  + [Unfixed Bugs](#unfixed-bugs)
+ [Deployment](#deployment)
+ [Credits](#credits)
  + [Content](#content)
  + [Code](#code)
  + [Media](#media)
+ [Acknowledgements](#acknowledgements)

## List of Features:
### Existing Features:

#### **Home section:**
 
This is the first part of the quiz the player will see when visiting. It is designed to allow the player to start playing the quiz with one click. The scores of the previous players can be seen from this window too. There is text describing the quiz in two fonts, the larger font is more stylised and displays the title of the quiz. The smaller font is more discrete and encourages the player to play the game by asking *“Are you ready to test your knowledge?”.*
 
<details><summary>Home page image</summary>

![Home page image](https://res.cloudinary.com/lizac/image/upload/v1663529216/project2-bn-horror-film/Home_page_image_hvthha.jpg)
</details> <br />

#### **Game section:**
 
This section contains the quiz itself. The player is asked to answer 5 questions that are related to classic black and white horror films. Each question is randomly displayed from a list of pre-determined questions created from javascript. For each question, there is a multiple choice of four possible answers (A,B,C or D). There is progress bar that increases when the user is advancing through the questions. The score is displayed in the top right corner of the webpage. 

<details><summary>Game page image</summary>

![Game page image](https://res.cloudinary.com/lizac/image/upload/v1663529620/project2-bn-horror-film/Game_page_image_ma7ek9.jpg)
</details>

<details><summary>Wrong question example image</summary>

![Wrong question example image](https://res.cloudinary.com/lizac/image/upload/v1663529968/project2-bn-horror-film/red_question_yoweqx.jpg)
</details><br />

#### **End section:**
 
When the player finishes the quiz, a window displaying the total score will appear. Underneath the total score, the player is presented with the option to save their score with their name if they wish. There is also an option to play the game again and another option to return to the home section. 
 
<details><summary>End page image</summary>

![End page image](https://res.cloudinary.com/lizac/image/upload/v1663530609/project2-bn-horror-film/end_page_image_tuqenf.jpg)
</details><br />

#### **Scores section:**
 
In this webpage the user can see the scores of previous saved games alongside the players chosen name. There is also an option to return to the home page and start the game again if they want to.
 
<details><summary>Scores page image</summary>

![Scores page image](https://res.cloudinary.com/lizac/image/upload/v1663530809/project2-bn-horror-film/scores_revnk8.jpg)
</details>

<details><summary>Players Scores Example</summary>

![Players scores image](https://res.cloudinary.com/lizac/image/upload/v1663584923/project2-bn-horror-film/playersscores_zc0sg1.jpg)</details> <br />

### Future Features:
- After each answer, a text box will appear to provide more info about the film.
- A moving image background similar to the website for the [Criterion Collection](https://www.criterion.com/), will play behind the quiz.
- Additional questions and images relating to the films will be added.

[Back to Top](#black--white-horror-film-quiz)

## UI/UX:
### Site Goals:
The main goal is to test the knowledge of the users about black and white horror films. The interactive elements of this game are easily accessed by the player through a series of interactive boxes containing questions and answers. Each interactive button has a hover feature which allows the player to distinguish which box their cursor is on. Each question is displayed with 4 interactive boxes containing answers. When the player clicks an answer, a color change will occur - green indicates a correct answer and red indicates an incorrect answer. When the player has completed the quiz, an end game page will appear displaying the score. Through this page, users can save their score by entering their name. The option is given to the player to retake the quiz and improve their own personal knowledge.

### Desing Choices:

#### **Typography:**
The font ‘Bigelow Rules’ was chosen for the title, which welcomes the user to the game. My decision to use this font was influenced by the font used in the movie “The Nightmare Before Christmas”. It has an association with playful memories of childhood, and it sets a tone for the adventure the user is about to take. The body font is called ‘Wire One’. This font results in a more balanced and clear legibility for the remainder of the game. In the case that one of the other fonts can't be loaded, they will fall back to a sans-serif font.

#### **Colour Scheme:**

![Colour Palette](https://res.cloudinary.com/lizac/image/upload/v1663346333/project2-bn-horror-film/palette_p2_h8qy8c.jpg)
The webpage is designed to reference black and white film as much as possible while maintaining legibility and balance throughout. The text is coloured white so that it appears dynamic when placed in front of the background image. The text is displayed in a soft white as opposed to a default bright white in order to prevent eyestrain.

[Back to Top](#black--white-horror-film-quiz)

### User Stories:

- As a user, I want clarity of what I am selecting in a website.
- As a user, I want balanced neutral tones that don't strain my eyes.
- As a user, I want education as well as a challenge in a quiz.
- As a user, I want an easy to navigate interface.
- As a user, I want the aspect of competition that score based games offer.
- As a user, I want a clear indication when I choose an incorrect or correct answer.
- As a user, I want have the choice to personalise my score.
- As a user, I want to see a leaderboard.

### Wireframes:

Wireframes created in the UX stage:
![Wireframes](https://res.cloudinary.com/lizac/image/upload/v1663607561/project2-bn-horror-film/Wireframes_2_dfaeu1.png)

## Technologies Used

### **Languages Used:**
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

[Back to Top](#black--white-horror-film-quiz)

## Frameworks, Libraries & Programs Used

1. [Google Fonts](https://fonts.google.com/):
    - Google fonts were used to import the 'Bigelow Rules' and 'Wire One' font into the style.css file which is used on all pages throughout the project.
2. [Font Awesome](https://fontawesome.com/):
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
3. [Git](https://git-scm.com/):
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
4. [GitHub](https://github.com/):
    - GitHub is used to store the project's code after being pushed from Git.
5. [Balsamiq](https://balsamiq.com/):
    - Balsamiq was used to create the wireframes during the design process.
6. [Am I responsive?](https://ui.dev/amiresponsive?url=https%3A%2F%2Fbytes.dev):
    - This application was used for visualization of responsiveness.
7. [Cloudinary](https://cloudinary.com/):
    - Cloudinary was used to store and link the images.
8. [Canva](https://canva.com/):
    - Canva was used for final details on the images.

[Back to Top](#black--white-horror-film-quiz)

## Testing

#### **Validator Testing:**
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
- W3C Markup Validator - Results:
![W3C Markup Validator - Results](https://res.cloudinary.com/lizac/image/upload/v1663531180/project2-bn-horror-film/validator_html_qn2hro.jpg)
- W3C CSS Validator - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flizac9.github.io%2Fproject2-bn-horror-film%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en):
![W3C CSS Validator](https://res.cloudinary.com/lizac/image/upload/v1663531514/project2-bn-horror-film/w3c_css_validator_bqcxlm.jpg)

- Each of the JavaScript files were tested in [JShint](https://jshint.com/). As the images show, there are a few variables undefined in game.js file, one unused and another undefined variable in end.js file and there is no errors in the highscore.js file. <details><summary>JShint images</summary>
![JShint](https://res.cloudinary.com/lizac/image/upload/v1663616048/project2-bn-horror-film/highscores.js_h2ujgk.png)
</details>

I could change this using -let-, but this would result in future changes and errors in the code. I did not have the timeframe to deal with all of these additional changes. These undefined variables don't affect the functionality of the game at all, and would result in unnecessary use of the clients resources. 

The website was tested through Lighthouse on Chrome for its Accessibility Score.

Lighthouse Mobile report:
![Lighthouse Mobile report](https://res.cloudinary.com/lizac/image/upload/v1663533087/project2-bn-horror-film/Mobile_Lighthouse_ptcnnr.jpg)

Lighthouse Desktop report:
![Lighthouse Desktop report](https://res.cloudinary.com/lizac/image/upload/v1663533077/project2-bn-horror-film/Desktop_Lighthouse_k2mdcw.jpg)

The website was also tested for Color Contrast in the Color Contrast Accessibility Validator and no automated color contrast issues was found on the webpage tested.
<details><summary>Color Contrast Accessibility Validator Image</summary>

![Color Contrast](https://res.cloudinary.com/lizac/image/upload/v1663613268/project2-bn-horror-film/color_contrast_qqnjf2.png)
</details>

[Back to Top](#black--white-horror-film-quiz)

#### **Manual Testing:**
|  Feature | Expectation | Action | Result|
|-------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------|------------------------------------------------------------------|
| **Play Button** | Game page will open when clicked | Click Play Icon | Game page opened when clicked |
| **Answer Button** | The button of the answer selected will turn red for incorrect or green for correct when clicked | Click Answer Button | The answer will turn out the respective color and next question opened when clicked |
| **Enter your name field** | If the text box is left blank, the user can't save the score | Incomplete form | The text does not submit and is the score is not saved|
| **Save button** | The save submit button can be press if the user entered their name | Name and score saved | Name and score saved in Players Scores
| **Play Again Button** | Game page will open when clicked | Click Play Again Icon | Game page opened when clicked |
| **Home Button** | To go to Home page | Click on Home icon | Home page opened when clicked|
| **Scores Button** | The Players Scores will open when clicked | Click Scores button | Taken to Players Scores page |
| **Go Home Button** | To go to Home page | Click on Home icon | Home page opened when clicked|

[Back to Top](#black--white-horror-film-quiz)

#### **Testing User Stories:**
Results:
- As a user, the interactive buttons highlight when my cursor is above them.
- As a user, the balanced neutral tones of the website do not strain my eyes.
- As a user, the selection of questions introduce me to trivia and new film titles.
- As a user, the linear and consistent webpage is easy to navigate. 
- As a user, there is an aspect of competition through the games score and leaderboard system.
- As a user, I can see the visible colour changes that indicate correct or incorrect answers. 
- As a user, I am free to type whatever I choose in the text box accompanying my score.
- As a user, I can click the scoreboard icon to view the leaderboard.

#### **Browser Compatibility:**
The website has had manual and responsive tests conducted on the below browsers and no errors were detected.
- Google Chrome
- Microsoft Edge
- Safari
- Firefox

#### **Debugging:**

Initially, the project presented problems in the deployment phase. An unstable internet connection resulted in preventing the project deploying properly. Due to this, it had to be deployed again, first from a none branch and then again to the main one. I waited ten minutes before the project was fully deployed.

#### **Unfixed Bugs:**

- There are some undefined variables in the js files, but don't affect the functionality of the game. 
- Due to the size of the games interface, the user may need to scroll down in order to view the lower text buttons. However, considering this incovenience, the game is still entirely accessible through all portable devices. 


## Deployment
The project was deployed to GitHub Pages using the following steps:
1. In the GitHub repository, navigate to the Settings tab.
2. From the source section drop-down menu, select the Master Branch.
3. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
4. The live link can be found [HERE - Black & White Horror Film Quiz ](https://lizac9.github.io/project2-bn-horror-film/)

[Back to Top](#black--white-horror-film-quiz)

## Credits

#### **Content:**
Quiz based on these films:

- The Cabinet of Dr Caligari (1920) by Robert Wine.
- Draculas’s Daughter (1936) by Lambert Hillyer.
- Creature from the Black Lagoon (1954) by Jack Arnold.
- Carnival of Souls (1962) by Herk Harvey.
- Hour of the Wolf (1968) by Ingmar Bergman.
- Smithereens (1982) by Susan Seidelman.
- Morvern Callar (2002) by Lynne Ramsay.
- A Girl Walks Home Alone at Night (2014) Ana Lily Amipour.

#### **Code:**

The code that was used in this project was based on [my last project](https://github.com/lizac9/project1-glasgow-necropolis). The projects Love Running and [Love Math](https://github.com/lizac9/love-maths) helped to utilise HTML, CSS as well as JavaScript in this project.

External resources relevant to this code:
- [Web Dev simplified](https://youtu.be/riDzcEQbX6k)
- [Disabling elements](https://alvarotrigo.com/blog/disable-button-javascript/#:~:text=To%20disable%20a%20button%20using,disabled%20JavaScript%20property%20to%20false%20)
- [Trivia App in JavaScript](https://youtu.be/zgHim4ZDpZY)
- [Build a Quiz App - Save High Scores in Local Storage](https://youtu.be/DFhmNLKwwGw)
- [JavaScript user input](https://youtu.be/w9GNyw8AvlM)
- [How to Make a Quiz App](https://youtu.be/f4fB9Xg2JEY)
- [Create a Multiple Choice Quiz App Using JavaScript](https://youtu.be/49pYIMygIcU)
- [Box shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp)

The website [w3schools](https://www.w3schools.com/) provided many great resources that assisted with problems encountered in this project.

#### **Media:**
- The image used as the background is a film still from Nosferatu (1922) by Friedrich Wilhelm Murnau.
![Film still](https://res.cloudinary.com/lizac/image/upload/v1663359139/project2-bn-horror-film/Black-and-White-Horror-Films-Nosferatu_fbl4fy.webp)

- The favicon came from [Favicon](https://favicon.io/).
- The colour palette was displayed by [Coolors](https://coolors.co/030303-aaaaaa-d2d2d2-ebebeb-ffffff).

## Acknowledgements

- Martina Terlevic: My mentor, for all their guidance and expertise. 
- SuzyBee: Fellow student, for their patience and assistance.
- Code Institute for their support.

[Back to Top](#black--white-horror-film-quiz)