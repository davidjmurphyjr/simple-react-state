export class ViewModel {
  constructor() {
    this.value = "foo";
  }
  
  updateValue = (value) => {
    this.value = value;
  }
}