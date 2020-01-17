import { ACTIVE } from '../constants';

const toggler = $('.js-mob-toggler');
const menu = $('.js-menu');

toggler.on('click', mobMenu);

function mobMenu() {
  toggler.toggleClass(ACTIVE);
  menu.toggleClass('is-open');
}
