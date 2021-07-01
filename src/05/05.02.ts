export type PeopleType={
    name: string
    age: number

}

const people: PeopleType[]=[
    {name: "Andrew Ivanov", age: 33},
    {name: "Arina Kumeisha", age: 29},
    {name: "Victor Petrov", age: 18},
]

const dimychTransformator=(man:PeopleType) =>({
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
})

const dev=[
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Arina", lastName: "Kumeisha"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Victor", lastName: "Petrov"
    }
]
const dev2=[
dimychTransformator(people[0]),
dimychTransformator(people[1]),
dimychTransformator(people[2]),
]

const dev3=people.map(dimychTransformator)

const dev4=people.map(man => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))


const message=people.map(man=> `Hello ${man.name.split(" ")[0]}. Welcome!`)

export const createGreetingMessage =( people: PeopleType[]) => {
   return people.map(man=> `Hello ${man.name.split(" ")[0]}. Welcome!`)
}