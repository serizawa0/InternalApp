import { Worker } from "./personnelInterfaces"

export interface Conge{
    id:String
    date:Date
    cause:string
}

export interface Absence{
    id:String
    date:Date
    cause:string
}

export interface Retard{
    id:String
    date:Date
    cause:string
}

export interface Passage{
    id:string
    date:Date
    type:string
    workerId:string
    createdAt:Date
    Worker?:Worker
}
