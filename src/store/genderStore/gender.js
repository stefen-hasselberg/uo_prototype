import { observable, action, flow, computed } from "mobx";

export default class Gender {
  @observable id = null;
  @observable title = "";

  constructor({ Id, Title }) {
    this.id = Id;
    this.title = Title;
  }
}
