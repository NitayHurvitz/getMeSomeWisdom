
const getSentenceButton = document.getElementById("get-sentence-btn")
const sentenceContainer = document.getElementById("sentence-container")

const serverAddress = "localhost"
const serverPort = 3000
const getSentenceRoute = "greateSentence"

const getSentenceURI = `http://${serverAddress}:${serverPort}/${getSentenceRoute}`

function getSentenceFromServer() {
    window.fetch(new Request(getSentenceURI))
        .then((res) => {
            res.text().then(text => setSentence(text))
        })
}

function setSentence(sentenceText) {
    sentenceContainer.innerText = sentenceText
}

getSentenceButton.addEventListener("click", getSentenceFromServer)