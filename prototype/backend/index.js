const express = require('express')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const cors = require('cors')

function CollectQuestions() {
    const root = '../../data'
    const files = fs.readdirSync(root).map(x => path.join(root, x))
    const dataList = files.map(x => yaml.load(fs.readFileSync(x), 'utf8'))
    return dataList.flat()
}

function Load(questions) {
    const dataPath = 'db.json'
    let loaded = []
    if (fs.existsSync(dataPath)) {
        loaded = JSON.parse(fs.readFileSync(dataPath))
    }    
    questions
        .filter(x => !(x.text in loaded))
        .forEach(x => loaded.push({ id: GetQuestionId(x), word: x, errorCount: 0, successCount: 0 }))
    return loaded
}

function Save(result) {
    const parsedResult = result.map(x => ({ id: GetQuestionId(x.word), isRight: x.answer == 'Right'}))
    for(const {id, isRight} of parsedResult) {
        data.find(x => x.id == id).errorCount += (isRight ? 0 : 1);
        data.find(x => x.id == id).successCount += (isRight ? 1 : 0);
    }
    const dataPath = 'db.json'
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 4))
}

function Shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function GetQuestionId(question)
{
    return question.text.trim()
}

function PickData(_type, _amount, _filter) {
    const filter = parseInt(_filter)
    const amount = parseInt(_amount)
    const filteredData =  data.filter(x => x.errorCount > filter)
    const shuffledData = Shuffle(filteredData)
    const splicedData =  shuffledData.slice(0, amount)
    const splicedQuestions = questions.filter(x => splicedData.map(y => y.id).includes(GetQuestionId(x)))
    return Shuffle(splicedQuestions)
}

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000
const questions = CollectQuestions()
const data = Load(questions)

app.get('/pick/:type/:amount/:filter', (req, res) => {
    const { type, amount, filter } = req.params
    const pick = PickData(type, amount, filter)
    res.send(pick)
})

// result [ { id: true/false } ]
app.post('/result', (req, res) => {
    Save(req.body)
    res.send('OK')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})