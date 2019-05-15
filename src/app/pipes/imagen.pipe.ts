import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "imagen"
})
export class ImagenPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: string): any {
    let url = "http://image.tmdb.org/t/p/w300";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
