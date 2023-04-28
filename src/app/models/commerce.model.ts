import { VilleModel } from "./ville.model";

export class CommerceModel {
    commerceName!: string;
    proprietaireName!: string;
    adresse!: string;
    telephone!: string;
    email!: string;

    transfert!:number;
    date_transfert!: string;
    type_transfert!: string;
    payed!: boolean;
    date_peremption!: string;
    presentation!: string;

    ville!: VilleModel;
}