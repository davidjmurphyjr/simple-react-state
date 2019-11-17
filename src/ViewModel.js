import {render} from "./index"

export class ViewModel {
  constructor() {
    this.value = "foo";
  }

  updateValue = (event) => {
    this.value = event.target.value;
    render();
  }
}