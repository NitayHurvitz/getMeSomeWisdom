const express = require('express')

const app = express()
const port = 3000
const clientDirPath = "C:\\Dev\\Learning\\sentences\\client"

const greateSentences = [
    "Happinnes is only real when shared",
    "The thing you need the most is where you least want to look",
    "If I have seen further than others, it is by standing upon the shoulders of giants",
    "There is only two things I hate - warm beers and cold women",
    "Skills without imagination is barren",
    "Guy is one hell of a teacher",
    "Him who can approach the fountain shall not drink from the pithcer"
]

app.use(express.static(clientDirPath))

app.get("/greateSentence", (req, res) => {
    const greateRandomSentence = greateSentences[Math.floor(Math.random() * greateSentences.length)]
    res.status(200).send(greateRandomSentence)
})

app.listen(port, () => {
    console.log(`Server started, listening to port ${port}`)
})
