import { Injectable } from '@angular/core';
import languagesOptions from 'src/assets/languages.json';
import { LanguageWord } from 'src/model/language';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  _links: LanguageWord[];
  _languages: string[] = ['ENG', 'RUS', 'HEW']; //availabel languages

  constructor() {
    this.links = languagesOptions.ENG; //default option
  }

  /**get availabel languages */
  get languages(): string[] {
    return this._languages;
  }

  // /**get links */
  get links(): LanguageWord[] {
    return this._links;
  }

  /**set links */
  set links(links: LanguageWord[]) {
    this._links = links;
  }

  /**get the link name by a given key*/
  getLinkNameByKey(key: string): string {
    const value = this.links.find((element) => {
      return element.key === key;
    })
    return value.value;
  }

  /**change the language of the menu links */
  changeLanguage(language: string) {
    if (language === 'ENG') {
      this.links = languagesOptions.ENG;
    }
    else if (language === 'RUS') {
      this.links = languagesOptions.RUS;
    } else if (language === 'HEW') {
      this.links = languagesOptions.HEW;
    }
  }
}

