import {Injectable} from '@angular/core';
import {Word} from '../model/word';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictionayService {

  dictionaryList: Word[] = [
    {id: 1, vietnamese: 'chó', english: 'doge'},
    {id: 2, vietnamese: 'mèo', english: 'cat'},
    {id: 3, vietnamese: 'lợn', english: 'pig'},
    {id: 4, vietnamese: 'sư tử', english: 'lion'},
    {id: 5, vietnamese: 'hổ', english: 'tiger'}
  ];

  constructor() {
  }

  getAll() {
    return this.dictionaryList;
  }

  findById(id: number) {
    const result = this.dictionaryList.filter(word => word.id === id);
    return result[0];
  }

  // translate(word: any){
  //   for (let i = 0; i < this.vietnameseList.length; i++) {
  //     if (this.vietnameseList[i] === word){
  //       for (let j = 0; j < this.englishList.length; j++) {
  //         if (i = j){
  //           return this.englishList[j]
  //         }
  //       }
  //     }
  //   }
  // }
}
