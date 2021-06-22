import { renderLink } from '../link';

interface IGroup {
  groupId: number
  groupLabel: string
  links: ILink[]
}

interface ILink {
  id: number
  label: string
  url: string
}

export function renderGroup(group: IGroup) {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.innerHTML = group.groupLabel;

  const ul = document.createElement('ul');
  group.links.forEach(link => {
    ul.appendChild(renderLink(link));
  });

  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}
