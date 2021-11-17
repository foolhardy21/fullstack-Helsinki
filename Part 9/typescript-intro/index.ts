import express from 'express'
import calculateBmi from './bmiCalculator'

const app = express()

app.get('/hello', (_req, res) => {
    res.send('hello Full Stack')
})

app.get('/bmi', (req, res) => {
    let weight=0, height=0
    const queryWeight = req.query.weight
    const queryHeight = req.query.height
    if(!Number(queryWeight) || !Number(queryHeight)) {
        res.json({
            error:'Invalid values'
        })
    } else {
        weight = Number(queryWeight)
        height = Number(queryHeight)
        
        if(height == 0) {
            res.json({error: 'Height cannot be Zero'})
        } else {
            const bmi = calculateBmi(height, weight)
            
            res.status(200).json({
                weight,
                height,
                bmi
            })
        }
    }
})

app.listen(3001, () => {
    console.log('server running on 3001')
})
