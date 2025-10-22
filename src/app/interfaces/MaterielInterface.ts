export interface Famille{
    id:string
    famName:string
    abr:string
    ArtCat:ArtCat[]
}

export interface ArtCat{
    id:string
    catName:string
    abr:string
    articles:Article[]
}

export interface Article{
    id:string
    artName:string
    abr:string
    unite:string
    stock:number
    quantity:number
}

export interface ConsommableCat{
    id:string
    nomCat:string
    Consommable:Consommable[]
} 

export interface Consommable{
    id:string
    libele:string
    quantite:number
    unite:string
    consommableCatId:string

}