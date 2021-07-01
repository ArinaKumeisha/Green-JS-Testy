import {userObj} from "./08.01";


type UsersType = {
    [key: string]: { id: number, name: string }
}


let users: UsersType;
beforeEach(() => {
        users = {      //ассоциативный массив- достаем объект по ключу
            "101": {id: 101, name: "Arina"},
            "1234": {id: 1234, name: "Alex"},
            "14": {id: 14, name: "Dasha"},
            "1": {id: 1, name: "Tanya"},
        }
    }
)

/*let user={id:444, name: "Anna"}
users[user.id]=user
delete users[user.id]
users[user.id].name="Alla"*/

test("should update corresponding user", () => {
    expect(users["1"]).toBe("Tanya")
    expect(users["101"]).toBe("Arina")
    expect(users["14"]).toBe("Dasha")

})

test("update name", () => {
    users["1"].name = "Tatyana"
    expect(users["1"].name).toBe("Tatyana")
})


test("should be corresponding user from obj", () => {
    expect(userObj[0]).toBe("Arina")
    expect(userObj[1]).toBe("Alex")
    expect(userObj[2]).toBe("Dasha")
    expect(userObj[3]).toBe("Tanya")
})

test("should be corresponding users", () => {
    expect(users["101"].id).toBe(101)
    expect(users["1234"].name).toBe("Alex")
    expect(users["14"].name).toBe("Dasha")
    expect(users["1"].id).toBe(1)
})
test("should delete user", () => {
    delete users["101"]
    expect(users["101"]).toBe(undefined)

})