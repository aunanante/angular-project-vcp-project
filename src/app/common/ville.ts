import { Commerce } from "./commerce";

export interface Ville {
    id: number;
    villeName: string;
    commerces: Commerce[];
}
