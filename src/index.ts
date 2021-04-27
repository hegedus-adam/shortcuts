import { addLink } from './add-link';
import { IGroup, ILink } from './data';
import * as data from './data/data.json';

function addGroup(group: IGroup) {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.innerHTML = group.groupLabel;

  const ul = document.createElement('ul');
  group.links.forEach(link => {
    ul.appendChild(addLink(link));
  });

  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}

function component() {
  const element = document.createElement('div');

  data.forEach(group => {
    element.appendChild(addGroup(group));
  });

  return element;
}

document.body.appendChild(component());
