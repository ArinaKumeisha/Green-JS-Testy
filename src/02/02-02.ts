export type StreetsType={
    title: string
}

export type AddressesType = {
    number?: number
    street: StreetsType
}

export type HousesType = {
    buildeAt: number
    repaired: boolean
    address: AddressesType
}

export type GovernmentBuildingType= {
    type: "HOSPITAL" | "FIRE-STATION"
    budget:number
    staffCount: number
    address:AddressesType
}



export type CityType = {
    title: string
    houses: Array<HousesType>
    citizensNumber: number
    governmentBuildings: Array<GovernmentBuildingType>
}