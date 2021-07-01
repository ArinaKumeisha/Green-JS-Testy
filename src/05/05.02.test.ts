import {CityType} from "../02/02-02";
import {getStreetsTitleOfGovermentBuildings, getStreetsTitleOfHouses, greateMessageForStreets} from "./05.02";

let city:CityType

beforeEach(()=>{
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

test("streets title", () =>{
    let streetsName=getStreetsTitleOfGovermentBuildings(city.governmentBuildings)
    expect(streetsName.length).toBe(2)
    expect(streetsName[0]).toBe("Central Str")
    expect(streetsName[1]).toBe("South Str")
})


test ("street titles of houses", () =>{
    let streets=getStreetsTitleOfHouses(city.houses)
    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy Street")
    expect(streets[2]).toBe("Happy Street")
})

test("create greeting message for streets", () =>{
    let message=greateMessageForStreets(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe("White street, Hello my friends")
    expect(message[1]).toBe("Happy Street, Hello my friends")
    expect(message[2]).toBe("Happy Street, Hello my friends")
})