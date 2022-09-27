import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
})
export class AppComponent {
	title = "Angular testing";
	public likes = 0;

	public like(): void {
		this.likes++;
	}
}
