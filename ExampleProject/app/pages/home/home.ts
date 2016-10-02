import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {SQLite} from "ionic-native";

 import {PartyPage} from '../party/party';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    public database: SQLite;
    public people: Array<Object>;
    public toto:String='test';


    constructor(public navController: NavController, private platform: Platform) {
        this.database = new SQLite();
        this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
            this.refresh();
        }, (error) => {
            console.log("ERROR: ", error);
        });

    }

    public add() {
        this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh() {
        this.database.executeSql("SELECT * FROM people", []).then((data) => {
            this.people = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }
  public seconPage(){
      this.navController.push(PartyPage,this.toto);
    }

}
