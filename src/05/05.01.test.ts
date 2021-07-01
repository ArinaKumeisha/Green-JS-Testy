import {createGreetingMessage, PeopleType} from "./05.01";

let people: PeopleType[]

beforeEach(() =>{
    people=  [
        {name: "Andrew Ivanov", age: 33},
        {name: "Arina Kumeisha", age: 29},
        {name: "Victor Petrov", age: 18},
    ]
})

test("should get array of greeting messages", () =>{
    const messages=createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome!")
    expect(messages[1]).toBe("Hello Arina. Welcome!")
    expect(messages[2]).toBe("Hello Victor. Welcome!")


})