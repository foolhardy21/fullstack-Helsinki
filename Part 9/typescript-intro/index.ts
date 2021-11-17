import express from 'express'

const app = express()

app.get('/hello', (_req, res) => {
    res.send('hello Full Stack')
})

app.listen(3001, () => {
    console.log('running on 3001')
})
