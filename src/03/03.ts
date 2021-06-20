import {StudentType} from "../02/02";
import {AddressesType, CityType, GovernmentBuildingType, HousesType} from "../02/02-02";

debugger
export const sum = (a: number, b: number) => {

    return a + b
}
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.unshift({
        id: new Date().getTime(),
        title: skill
    })
}

export const addSkil2 = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const isActiveFn = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLive =(student:StudentType, cityName: string) =>{
   return  student.address.city.title===cityName
}

export const addMoneyBudget=(building:GovernmentBuildingType, budgetMoney: number) =>{
    return building.budget+=budgetMoney
}

export const repairHouse =(houses:HousesType) =>{
    return houses.repaired=true
}

export const deleteStaffCount =(building:GovernmentBuildingType, staffCount: number) =>{
    return building.staffCount -=staffCount
}

export const addStaffCount =(building: GovernmentBuildingType, staffCount: number) =>{
    return building.staffCount +=staffCount
}

export const creatGreeting= (city:CityType) =>{
    return `Hello ${city.title} people. I want be happy. All ${city.citizensNumber}`
}

export const refactoringStreet =(address:AddressesType, title:string) =>{
    address.street.title= title
}