// types and interfaces for the category

import { IColor } from "./general";


export interface ICategory {
    id: string,
    title: string,
    color: IColor, 
}


export type TCategoiesArray = Array<ICategory>;