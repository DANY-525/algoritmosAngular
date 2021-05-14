import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algoritmos';
  matriz: any = [1, 2, 3,4,4, 4, 5];
  obj: any = { datos: [] }
  mayor: number = 0;
  ngOnInit() {
    for (let index = 0; index < this.matriz.length; index++) {
      const element = this.matriz[index];
      this.getVeces(element);
    }

    for (let i = 0; i < this.obj['datos'].length; i++) {
      let variable = this.obj['datos'][i]['longest']
      if (variable > this.mayor) {
        this.mayor = this.obj['datos'][i]['longest'];
      }
    }
    let numerico = this.obj['datos'].filter((a: { longest: number; }) => a.longest === this.mayor)
    console.log("Number " + numerico[0]['number']);
    console.log("Longest " + numerico[0]['longest']);
  }
  getVeces(number: number) {
    const result = this.matriz.filter((word: number) => word == number);
    this.obj['datos'].push({ "number": number, "longest": result.length })
  }

}
