import { PriceModel } from "./price.model";

export interface BookModel{
    id: number,
    title : string,
    totalPages : number,
    author: string,
    price : PriceModel,
    isPublished : boolean,
    publishedDate : Date | null
}

// export class BookModel {

//     private _id: number;
//     private _title: string;
//     private _totalPages: number;
//     private _author: string;
//     private _price: PriceModel;
//     private _isPublished : boolean;
//     private _publishedDate : Date;

//     public get id(): number {
//         return this._id;
//     }

    
//     public set id(v : number) {
//         this._id = v;
//     }
    

//     public get title(): string {
//         return this._title;
//     }

//     public set title(v : string) {
//         this._title = v;
//     }

//     public get totalPages(): number {
//         return this._totalPages;
//     }

//     public set totalPages(v : number) {
//         this._totalPages = v;
//     }

//     public get author(): string {
//         return this._author;
//     }

//     public set author(v : string) {
//         this._author = v;
//     }

//     public get price(): PriceModel {
//         return this._price;
//     }

//     public set price(v : PriceModel) {
//         this._price = v;
//     }

//     public get isPublished(): boolean {
//         return this._isPublished;
//     }

//     public set isPublished(v : boolean) {
//         this._isPublished = v;
//     }

//     public get publishedDate(): Date {
//         return this._publishedDate;
//     }

//     public set publishedDate(v : Date) {
//         this._publishedDate = v;
//     }

// }