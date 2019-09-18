import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from '../services/index';

@Pipe({
  name: 'language',
  pure: false
})
export class LanguagePipe implements PipeTransform {

  constructor(private localizationService: LocalizationService) {
  }

  transform(value: string) { //return the value of a given key
    return this.localizationService.getLinkNameByKey(value);
  }
}
