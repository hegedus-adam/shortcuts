import { renderLink } from './link.component';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('renderLink', () => {
  it('should append link', () => {
    const link = {
      id: 0,
      label: 'Test Label',
      url: 'https://somewhere.to',
    };

    const actual = renderLink(link);

    expect(actual).toMatchSnapshot();
  });
});
