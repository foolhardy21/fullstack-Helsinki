import express from 'express'
import calculateBmi from './bmiCalculator'
import calculateExercises from './exerciseCalculator'

const app = express()
app.use(express.json())

app.get('/hello', (_req, res) => {
    res.send('hello Full Stack')
})
app.get('/bmi', (req, res) => {
    let weight:  number, height: number
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
app.post('/exercise',(req, res) => {
    
    let daily_exercises: any = req.body.daily_exercises
    let target: any = req.body.target

    if(!daily_exercises || !target) {
        res.send('parameters missing')    
    } else {
        if(typeof daily_exercises[0] !== 'number' || typeof target !== 'number') {
            res.send('malformatted parameters')
        } else {
            const result = calculateExercises(daily_exercises, target)
            res.json(result)
        }
    }
    
})

app.listen(3001, () => {
    console.log('server running on 3001')
})
