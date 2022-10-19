import { Component,  ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-inditex';
  fontStyleControl = new FormControl('');
  
  lists = [
  {id: 0,
    array:[{
      title: 'JEANS ZW THE MARINE',
      photo: 'https://static.zara.net/photos///2022/I/0/1/p/1934/244/800/2/w/563/1934244800_6_1_1.jpg?ts=1659597523826',
      price: 29.95
      },
      
      {title: 'JEANS HIGH RISE',
      photo: 'https://static.zara.net/photos///2022/I/0/1/p/6164/172/427/2/w/563/6164172427_6_2_1.jpg?ts=1658216937460',
      price: 25.95,},
      
      {title: 'JEANS ZW THE DREED',
      photo: 'https://static.zara.net/photos///2022/I/0/1/p/1934/240/427/2/w/563/1934240427_6_1_1.jpg?ts=1663583264458',
      price: 17.99,
      }]}, 
  {id: 1, 
    array: [{title: 'JEANS TRF WIDE',
    photo: 'https://static.zara.net/photos///2022/I/0/1/p/8197/227/400/2/w/563/8197227400_6_1_1.jpg?ts=1661237381911',
    price: 29.95,},
    
    {title: 'JEANS Z1975 HIGH RISE STRAIGHT',
    photo: 'https://static.zara.net/photos///2022/I/0/1/p/6164/172/427/2/w/563/6164172427_6_2_1.jpg?ts=1658216937460',
    price: 25.95,
    }]}];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.container.data.length < 3){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  }
}



