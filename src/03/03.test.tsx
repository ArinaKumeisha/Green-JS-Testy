import {StudentType} from "../02/02";
import {addSkil2, addSkill, doesStudentLive, isActiveFn} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Arina",
        age: 29,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]

    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    expect(student.technologies[0].title).toBe("HTML")
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[0].title).toBe("JS")
    addSkil2(student, "Redux")
    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("Redux")

})

test("student should be active", () => {
    isActiveFn(student)
    expect(student.isActive).toBe(true)
})

test("student live in city, doesn't he?", () =>{
let result1=doesStudentLive(student, "Minsk")
let result2=doesStudentLive(student, "Mogilev")
expect(result1).toBe(true)
expect(result2).toBe(false)
})
