function calculateBmi(height: number, weight: number): string {
    height = height/100
    const bmi = weight/(height*height)

    if(bmi >= 18.5 && bmi <=24.9) {
        return 'Normal'
    } else if(bmi >=25) {
        return 'Overweight'
    } else {
        return 'Underweight'
    }
}

console.log(calculateBmi(180,74))