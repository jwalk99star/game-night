import { AppState } from "../AppState.js";

export class PlayersController {
  test() {
    console.log("test button clicked!!")
  }
  constructor () {
    console.log("Players Controller loaded");
    console.log(AppState.players);
    
  }
}


