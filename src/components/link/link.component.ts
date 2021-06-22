interface ILink {
  id: number
  label: string
  url: string
}

export function renderLink(link: ILink) {
  const li = document.createElement('li');

  const anchor = document.createElement('a');
  anchor.href = link.url;
  anchor.innerHTML = link.label;
  anchor.className = 'link';

  li.appendChild(anchor);

  return li;
}
