import { LightningElement } from "lwc";

export default class App extends LightningElement {
  showChild = true

  handleChange(event){
    this.showChild = event.target.checked;
  }
}
