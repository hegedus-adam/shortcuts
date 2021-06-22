import { IGroup } from './data';
import { addLink } from './add-link';

export function addGroup(group: IGroup) {
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
