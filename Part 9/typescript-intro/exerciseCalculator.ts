type exerciseResult = {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDesc: string,
    target: number,
    average: number
}

function calculateExercises(hours: Array<number>, target: number): exerciseResult {
    let success=false, rating = 0, ratingDesc = ''
    let trainingDays = hours.filter(hour => hour !== 0).length
    let totalHours = hours.reduce((total, curr) => {
        return curr+total
    },0)
    let average = totalHours/hours.length
    
    if(average > target) {
        success=true
        rating = 3
    } else if(average === target) {
        success = true
        rating = 2
    } else if( average < target) {
        rating = 1
    }
    switch(rating) {
        case 3: ratingDesc = 'Easy on yourself'
        case 2: ratingDesc = 'Perfect'
        case 1: ratingDesc = 'Put in work'
    }

    return {
        periodLength: hours.length,
        trainingDays,
        success,
        rating,
        ratingDesc,
        target,
        average,
    }
}

console.log(calculateExercises([3,4,5],3))