import { LANG } from '../constants/language.js';
import {
  $langBtn,
  $searchBtn,
  $searchInput,
  $list,
} from '../constants/element.js';
import { get20Movies } from './movie.js';

export const changeLanguage = ({ language, page }) => {
  get20Movies({ language, page });
  $list.replaceChildren();
  $langBtn.value = LANG[language].nextLangValue;
  $langBtn.textContent = LANG[language].langBtn;
  $searchBtn.textContent = LANG[language].searchBtn;
  $searchInput.value = '';
  $searchInput.focus();
};