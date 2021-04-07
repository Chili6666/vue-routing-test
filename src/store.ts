//https://dev.to/blacksonic/you-might-not-need-vuex-with-vue-3-52e4

//https://github.com/gintsgints/quarkus-fullstack/blob/master/webapp/src/store/index.ts


/* eslint-disable */

import { reactive, provide, inject } from 'vue'
import { IDestination } from "@/models/IDestination";
import { destinations } from "@/sampleData";

export class State {

  //#region _____Fields__________

  private _isAuthenticated = true;

  //#endregion

  //#region _____Ctor____________

  constructor() {
    console.log("***** State created *****");
  }

  //#endregion

  //#region _____Public Interface_________

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
  public set isAuthenticated(value: boolean) {
    console.log('set value: ' + value);
    this._isAuthenticated = value;
  }

  public async login(username: string, password: string): Promise<boolean> {
    if (this._isAuthenticated)
      return true;
    if (username === "A" && password === "a") {
      this._isAuthenticated = true;
      return true;
    }
    else {
      this._isAuthenticated = false;
      return false;
    }
  }

  public async logout() {
    this._isAuthenticated = false;
  }


  public get targets(): string[] {
    return ["10", "20", "30", "40", "50", "60"];
  }

  public get destinations(): IDestination[] {
    return destinations;
  }

  //#endregion
}

export const stateSymbol = Symbol('state')

//create a new reactive state instance
export const createState = () => { return reactive(new State()) }

//Dependency injection
export const useState = () => inject(stateSymbol) as State
