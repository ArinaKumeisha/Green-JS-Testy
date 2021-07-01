import {useState} from "react";

export type MainType = {
    name: string
    age: number
    lesson: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: MainType
    food: Array<string>
    car: ({model : string})
}


export const ManComponent: React.FC<PropsType> = (props) => {

    const {title,man:{name}, man:{age}, car: {model}}=props


    return <div>
        <h1>{title}</h1>
        <div>
            {name}
        </div>
        <h2>{age}</h2>
        <h3>{model}</h3>
    </div>
}