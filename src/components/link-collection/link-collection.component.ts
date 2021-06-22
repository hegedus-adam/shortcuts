import { renderGroup } from '../link-group';

export function renderLinkCollection(data: any) {
  const article = document.createElement('article');

  data.forEach(group => {
    article.appendChild(renderGroup(group));
  });

  return article;
}
