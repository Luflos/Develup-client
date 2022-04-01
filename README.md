<img align="left" width="40" height="auto" style="padding-right: 10px padding-top: 10px" src="public/logo.png" alt="Logo of DevelUp">

#  DevelUp +


A fullstack application that allows users to create flash cards and organize them by categories. Inside each category will have a list of decks. For example, inside a Web Developer catergory there might be a deck for React and Node. Inside each deck will have a series of cards that contain questions of varying difficulties. A user can submit their answers to the questions and then the actual answer will be revealed. A user can utilize the app to see what topics they understand and what topics they need to improve on. It's time to DevelUp! 

## User Stories
---
* I would like to upload a picture and display it in my profile page.
* I would like to look at community made decks.
* I would like to create decks and utilize them.
* I would like to edit my own decks.

## Deployed Link
---
[DevelUp+](https://deft-meringue-0b3188.netlify.app/about)
---
## Installation Instructions
---

### Server-Side
- Fork and clone this [repository](https://github.com/Luflos/Develup-server/tree/main)
- Run `npm i ` to install the dependencies
<details>
    <summary> NPM's for Client Side </summary>

    - bcrypt
    - cloudinary
    - cors
    - dotenv
    - express
    - jsonwebtoken
    - mongoose
    - multer

  </details>

- Go to "https://cloudinary.com/users/register/free" to register for a cloudinary account
- Once registered you should have an API Environment variable and a cloud name
- Also make sure you have mongodb installed
- Create a `.env` and store the `JWT_SECRET`, `PORT` number , `MONGODB_URI`, and the `CLOUDINARY_URL`
- The file should look like:
```
MONGODB_URI=(mongodb://localhost/(Whatever you want your db to be called))
JWT_SECRET=(The Secret Can BE Whatever You Want)
CLOUDINARY_URL=(Your API Environemnt Variable from Cloudinary)
PORT=(Whatever Port You Want)
```
- Also make sure to have the server running with nodemon or other means

### Client-Side
- Fork and clone this repository.
- Run ` npm i ` to install the dependencies.
<details>
    <summary> NPM's for Client Side </summary>

    - axios
    - jwt-decode
    - react-icons
    - react-router-dom
    - dotenv

  </details>

- Inside FileUploadForm.jsx + Profile.jsx for the cloudinary images to work properly you need to change "solful" to your Cloud Name
- Create a .env.local and store the server url
- The file should look like:
```
REACT_APP_SERVER_URL=(http://localhost:(THEPORTYOUDEFINEONSERVERSIDE))
```

## Tech Used
---
* NodeJS
* Express
* React
* MongoDB
* CSS
* Postman
* Figma
* Trello
* Git
* Cloudinary


## [noSQL] Data Model Diagram
---

![and RD](/public/DevelUp-ERD.png)


## FRONTEND ROUTES 
---
|Path | Purpose|
|----| ------ |
| `/` | login page|
| `/signup` | register page|
| `/profile` | profile page |
| `/category` | category page|
| `/category/:id` | decks page|
| `/category/:id/deck/:deckId` | cards page |
| `/category/:id/deck/:deckId` | edit page |
| `/about` | about page |

## BACKEND ROUTES
---
| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `api-v1/category` | displays all of the categories of decks
| GET | `api-v1/category/:id` | displays all decks in a specific category |
| GET | `api-v1/category/:id/deck/:deckId` | displays the cards of a specific deck | 
| GET | `api-v1/images` | reads all images
| PUT | `api-v1/category/:id/deck/:deckId` | make changes of the cards |
| DELETE | `api-v1/category/:id/deck/:deckId` | deletes the whole deck and empty categories |
| POST | `api-v1/category` | creates a deck |
| POST | `api-v1/users/login` | login |
| POST | `api-v1/images` | create profile picture |
| POST | `api-v1/users/register` | register |


## Wireframes
---
<details>
  <summary> Initial Planning </summary>

![Sign-In](/public/wireframes/Sign%20In.png)
![Register](/public/wireframes/Sign%20Up.png)
![Profile](/public/wireframes/Profile%20Page.png)
![Create-Deck](/public/wireframes/Create%20a%20deck%20Page.png)
![Category](/public/wireframes/Category%20Page.png)
![Decks](/public/wireframes/Decks%20Page.png)
![Card-Question](/public/wireframes/Card%20Page%20%5BQuestion%5D.png) 
![Card-Answer](/public/wireframes/Card%20Page%20%5BAnswer%5D.png)
![Card-Complete](/public/wireframes/Completed%20Page.png)

</details>

 ## Final Product Images
---
<details>
  <summary> Screenshots </summary>

Sign In
![Sign-In](/public/images/signin.png)
Sign Up
![Sign-Up](/public/images/register.png)
Profile
![Profile](/public/images/profile.png)
Categories
![Categories](/public/images/categories.png)
Create a deck
![Create a deck](/public/images/create-deck.png)
Decks
![Decks](/public/images/decks.png)
Card Question
![Card Question](/public/images/question.png)
Card Answer
![Card Answer](/public/images/answer.png)

</details>

 # MVPs
 ---
- [X] Build a frontend client using React
- [X] Build a MongoDB database of users that can be accessed to create and login users
- [X] Update profile pictures
- [X] CRUD for category, decks and cards
- [X] Login functionality
- [X] Register functionality
- [X] Logout functionality


# Stretch Goals
---
- [] Users are able to favorite their decks
- [] Allow users to choose pre-sets of the difficulty level (Easy, Medium, Hard)
- [] Users are able to upload images of the decks
- [] Making create decks and edit cards page responsive

## Code Highlights

```javascript
const toggleDisplay = () => {
    setFlip(!flip)
  }

  const handleAddNum = () => {
    setFlip(false)
    setAnswer("")
    if (num >= deckData.cards.length - 1) {
      setNum(0)
    } else {
      setNum(num + 1)
    }
  }
  console.log(deckData.cards[num])

  return (
    <div className="card-master-container">
      <div style={{ position: "relative" }} className="card-container">
        <h1
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            color: "white",
            textShadow: "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
          }}
        >
          {deckData.deckName}
        </h1>
        <h1
          style={{
            position: "absolute",
            right: "20px",
            top: "10px",
            color: "white",
            textShadow: "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
          }}
        >
          <p>
            {num + 1}/{deckData.cards.length}
          </p>
        </h1>
        <div>
          <div className="card-question-container">
            <p>
              {deckData.cards[num] === undefined ? "This is empty" : deckData.cards[num].question}
            </p>
          </div>
          <div className="card-user-answer">
            <input
              style={{ width: "500px", height: "50px", textAlign: "center" }}
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            ></input>
          </div>
        </div>

        {flip ? (
          <div className="card-answer-container">
            <p className="question-text">
              {deckData.cards[num] === undefined ? "This is empty" : deckData.cards[num].answer}
            </p>
          </div>
        ) : (
          <div className="card-answer-ghost"></div>
        )}

        <div className="button-container">
          {!flip ? (
            <button className="card-buttons" onClick={toggleDisplay}>
              Show Answer
            </button>
          ) : (
            <button className="card-buttons" onClick={toggleDisplay}>
              Hide Answer
            </button>
          )}
          <br></br>
          <button className="card-buttons-next" onClick={handleAddNum}>
            Next Card
          </button>
        </div>
      </div>
      {currentUser.id === deckData.author ? (
        <div className="deck-admin-tools">
          <p>Deck Author Tools 🛠</p>
          <button className="edit-button" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Return" : "Edit Deck"}
          </button>
          <br></br>
          <button className="delete-button" onClick={handleSubmit}>
            Delete Deck
          </button>{" "}
        </div>
      ) : (
        <></>
      )}

      {showForm ? (
        <EditDeck
          categoryId={id}
          decksId={deckId}
          category={category}
          setShowForm={setShowForm}
          showForm={showForm}
          deckData={deckData}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
```

## Reflection

Wow... Already finished with Project 3. Can't believe there's only one more to go. 
This project was tough. I never enjoyed group projects in school and I was never good at them.
It was better during this project but it was still very challenging. We communicated but could have still communicated even more. Overall I'm proud of our finished product but we can definitely add on and try to hit more of our stretch goals. The app is not fully responsive either. We would need to change and optimize certain componenets. 

## Resources 
- https://cloudinary.com/
- https://www.mongodb.com/atlas/database
- https://www.netlify.com/
- https://www.heroku.com/