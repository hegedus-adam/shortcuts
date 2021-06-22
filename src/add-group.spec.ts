import { addGroup } from './add-group';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('addGroup', () => {
  it('should append link', () => {
    const group = {
      groupLabel: 'Group Name',
      groupId: 0,
      links: [
        {
          id: 0,
          label: 'Test Label',
          url: 'https://somewhere.to',
        },
      ],
    };

    const actual = addGroup(group);

    expect(actual).toMatchSnapshot();
  });
});
