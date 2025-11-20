import { Absence, Conge, Retard } from "./eventInterfaces"


export interface Worker{
    id:string
    matricule:string
    fullName:string
    post: string
    contact:string
    salaire:number
    CIN:Number
    CatID:string
    Categorie:Categorie
    documents?:File[]
    conge?:Conge[]
    retard?:Retard[]
    absence?:Absence[]
}

export interface User{
    id:string
    userName:string
    post:string
    depId:string
    email:string
}

export interface Categorie{
    id:string
    cat:string
    Workers:Worker[]
}
