import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-jyoti';
  data = [
    { image: 'https://picsum.photos/200', isShown: true },
    { image: 'https://picsum.photos/200', isShown: true },
    { image: 'https://picsum.photos/200', isShown: true },
    { image: 'https://picsum.photos/200', isShown: true },
    { image: 'https://picsum.photos/200', isShown: true },
    { image: 'https://picsum.photos/200', isShown: true },
  ];
  ngOnInit(){
    // this.onClickImage(4)
  }
  onClickImage (index){
    for (let edx in this.data) {
      if (index >= edx) this.data[edx].isShown = true
      else this.data[edx].isShown = false
    }
  }
  delete(i){
    this.data[i].isShown = false
  }
}
