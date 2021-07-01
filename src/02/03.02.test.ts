import {CityType} from "./02-02";
import {
    addMoneyBudget,
    addStaffCount,
    creatGreeting,
    deleteStaffCount,
    getBuildingStaffCount,
    refactoringStreet,
    repairHouse
} from "../03/03.02";


let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildeAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildeAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
            {
                buildeAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 100000, staffCount: 300,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

test("Add money budget in Hospital",() => {
    addMoneyBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)

    addMoneyBudget(city.governmentBuildings[1], -50000)
    expect(city.governmentBuildings[1].budget).toBe(50000)
})

test ("Repaire house", () =>{
    repairHouse(city.houses[0] )
    expect(city.houses[0].repaired).toBe(true)
})

test("delete staffCount", () =>{
    deleteStaffCount(city.governmentBuildings[0], 10)
    expect(city.governmentBuildings[0].staffCount).toBe(190)

    deleteStaffCount(city.governmentBuildings[1], 30)
    expect(city.governmentBuildings[1].staffCount).toBe(270)
})

test ("add staffCount", () =>{
    addStaffCount(city.governmentBuildings[0], 40)
    expect(city.governmentBuildings[0].staffCount).toBe(240)

    addStaffCount(city.governmentBuildings[1], 100)
    expect(city.governmentBuildings[1].staffCount).toBe(400)
})


test("Greeting should be correct", () =>{
    const message=creatGreeting(city)
    expect(message).toBe("Hello New York people. I want be happy. All 100000")
})

test ("refactoring street", ()=>{
    refactoringStreet(city.houses[0].address, "My street")
    expect(city.houses[0].address.street.title).toBe("My street")
})


test("buildings with correct staffCount", () =>{
    let building=getBuildingStaffCount(city.governmentBuildings, 250)
    expect(building.length).toBe(1)
    expect(building[0].type).toBe("FIRE-STATION")
})