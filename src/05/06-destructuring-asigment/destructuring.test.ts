import {MainType} from "./Destructuring";


test("", () => {
    let props: MainType = {
        name: "Arina",
        age: 30,
        lesson: [
            {title: "1"},
            {title: "2"}
        ],
        address: {
            street: {
                title: "Grishina street"
            }
        }
    }

    const {age, name, lesson} =props

    expect(age).toBe(30)
    expect(name).toBe("Arina")
    expect(lesson.length).toBe(2)
    expect(lesson[0].title).toBe("1")
    expect(lesson[1].title).toBe("2")
})

test(" ", () =>{
    let props: MainType = {
        name: "Arina",
        age: 30,
        lesson: [
            {title: "1"},
            {title: "2"}
        ],
        address: {
            street: {
                title: "Grishina street"
            }
        }
    }
    const l1=props.lesson[0]
    const l2=props.lesson[1]

    expect(l1.title).toBe("1")
    expect(l2.title).toBe( "2")

})
