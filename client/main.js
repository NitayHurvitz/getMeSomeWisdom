
const getSentenceButton = document.getElementById("get-sentence-btn")
const sentenceContainer = document.getElementById("sentence-container")

const serverAddress = "localhost"
const serverPort = 3000

const getSentenceURI = `/greateSentence`

function getSentenceFromServer() {
    window.fetch(getSentenceURI)
        .then((res) => {
            res.text().then(text => setSentence(text))
        })
}

function setSentence(sentenceText) {
    sentenceContainer.innerText = sentenceText
}

getSentenceButton.addEventListener("click", getSentenceFromServer)