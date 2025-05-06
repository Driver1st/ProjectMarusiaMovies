import { makeAutoObservable } from "mobx";

class SearchStore {
  isActive: boolean = false;

  /**
   * Данный стор создан для хранения состояния открытости / закрытости поиска (на смартфонах)
   */
  constructor() {
    makeAutoObservable(this);
  }

  setActive(state: boolean) {
    this.isActive = state;
  }
}

export default SearchStore;