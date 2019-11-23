export class ViewModel {
  constructor(render) {
    this.value = "foo";
    this.render = render;
  }

  updateValue = (value) => {
    this.value = value;
    this.render();
  }
}