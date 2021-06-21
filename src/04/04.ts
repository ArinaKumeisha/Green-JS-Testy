const ages = [18, 20, 22, 1, , 100, 90, 14]
const predicate = (age: number) => {
    return age > 90
}
const oldAges = [100]

type CourseType = {
    title: string
    price: number
}
const course = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

// <160
const cheapPredicat = (course: CourseType) => {
    return course.price < 160
}


type arrayScoreType = {
    name: string
    score: number
}
const arrayScore = [
    {name: "Victor", score: 30},
    {name: "Arina", score: 31},
    {name: "Marina", score: 40},
]