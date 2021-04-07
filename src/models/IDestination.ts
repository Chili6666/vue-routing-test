import {IExperience} from  "./IExperience";

export interface IDestination{
    id:number;
    slug:string;
    name: string;
    image:string;
    description : string;
    experiences : IExperience[];
}