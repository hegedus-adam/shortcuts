import { addGroup } from './add-group';
import * as data from './data/data.json';

function component() {
  const element = document.createElement('article');

  data.forEach(group => {
    element.appendChild(addGroup(group));
  });

  return element;
}

document.body.appendChild(component());
