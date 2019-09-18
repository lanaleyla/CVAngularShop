import { LanguagePipe } from './language.pipe';
import { LocalizationService } from '../services';

describe('LanguagePipe', () => {
  it('create an instance', () => {
    const pipe = new LanguagePipe(this.LocalizationService);
    expect(pipe).toBeTruthy();
  });
});
