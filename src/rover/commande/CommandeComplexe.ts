import {CommandeRover} from "./CommandeRover";
import {CommandeSimple} from "./CommandeSimple";
import {RoverInterface} from "../rover.interface";
import {CommandeVide} from "./CommandeVide";

export class CommandeComplexe implements CommandeRover {
    private readonly _premièreCommande : CommandeSimple;
    private readonly _suivantes : CommandeRover = new CommandeVide();

    public constructor(commande: string) {
        this._premièreCommande = new CommandeSimple(commande[0]);

        const reste = commande.slice(1);
        if(reste.length > 0)
            this._suivantes = new CommandeComplexe(reste);
    }

    public ExécuterSur(rover: RoverInterface){
        rover = this._premièreCommande.ExécuterSur(rover);
        return this._suivantes.ExécuterSur(rover);
    }
}