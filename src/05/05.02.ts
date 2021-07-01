import {GovernmentBuildingType, HousesType} from "../02/02-02";

export const getStreetsTitleOfGovermentBuildings = (building:Array<GovernmentBuildingType>) => {
   return building.map(b => b.address.street.title)
}

export const getStreetsTitleOfHouses = (houses: Array<HousesType>) =>{
    return houses.map(h => h.address.street.title)
}

export const greateMessageForStreets = (houses: Array<HousesType>) =>{
   return houses.map(h => h.address.street.title + ", Hello my friends")
}