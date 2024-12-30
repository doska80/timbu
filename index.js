import { createElement} from './utils.js'
import Timbu from './timbu/timbu.js'
require('./buttonCountComponent.timbu')


window.Timbu = Timbu;

const $h1 = createElement('h1', 'h1', '0')

Object.values(Timbu.components).forEach((component) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = component.template;
  document.body.appendChild(tempDiv);
});

