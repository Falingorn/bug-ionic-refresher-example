import { Component, ViewChild } from "@angular/core";
import { IonRefresher } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild("refresher") refresher: IonRefresher;
  isLoading = false;

  constructor() {}

  async fetch() {
    try {
      this.isLoading = true;
      await this.fakeFetchData();
    } finally {
      this.isLoading = false;
      this.refresher?.complete();
    }
  }

  async handlePullToRefresh() {
    await this.fetch();
  }

  async fakeFetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 2000);
    });
  }
}
