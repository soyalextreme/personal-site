// types for the Technology 

import { IColor } from "./general";

export interface IDescTechnology {
    name: string,
    description: string,
    color: IColor,
    imgUrl: string,
}


export interface ITechnology {
    id: string,
    desc: IDescTechnology,
}  

export type TTechnologyArr = Array<ITechnology>; 