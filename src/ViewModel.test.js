import {ViewModel} from "./ViewModel"

it("should have value set to foo", function () {
  const viewModel = new ViewModel(() => {});
  expect(viewModel.value).toEqual('foo');
  viewModel.updateValue("bar");
  expect(viewModel.value).toEqual('bar');
});
