import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";

//Services
import { PeliculasService } from "./services/peliculas.service";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, JsonpModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
