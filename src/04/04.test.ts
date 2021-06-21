test("should be old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]
    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})



test("should be take courses chipper 160", () => {
    const course = [
        {title: "CSS", price: 100},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]
    const chipCourses = course.filter(course => course.price < 160)
    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("REACT")
})



test("should be scores more 30", () => {
    const arrayScore: Array<arrayScoreType> = [
        {name: "Victor", score: 30},
        {name: "Arina", score: 31},
        {name: "Marina", score: 40},
    ]
    const newArrayScore = arrayScore.filter(ar => ar.score > 30)
    expect(newArrayScore.length).toBe(2)
    expect(newArrayScore[0].name).toBe("Arina")
    expect(newArrayScore[1].name).toBe("Marina")
})



test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 1, title: "Milk", isDone: true},
        {id: 1, title: "Orange", isDone: false},
        {id: 1, title: "Chokolate", isDone: true}
    ]
    const completedTasks = tasks.filter(t => t.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe("Milk")
    expect(completedTasks[1].title).toBe("Chokolate")
})



test("get only uncompleted tasks", () => {
    const tasks2 = [
        {id: 1, title: "Bread", isDone: false},
        {id: 1, title: "Milk", isDone: true},
        {id: 1, title: "Orange", isDone: false},
        {id: 1, title: "Chokolate", isDone: true}
    ]
    const unCompletedTasks = tasks2.filter(t => !t.isDone)
    expect(unCompletedTasks.length).toBe(2)
    expect(unCompletedTasks[0].title).toBe("Bread")
    expect(unCompletedTasks[1].title).toBe("Orange")
})