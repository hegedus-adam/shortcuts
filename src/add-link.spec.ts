import { addLink } from './add-link';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('addLink', () => {
  it('should append link', () => {
    const link = {
      id: 0,
      label: 'Test Label',
      url: 'https://somewhere.to',
    };

    const actual = addLink(link);

    expect(actual).toMatchSnapshot();
  });
});
