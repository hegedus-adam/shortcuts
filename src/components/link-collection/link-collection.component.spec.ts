import { renderLinkCollection } from './link-collection.component';
import { JSDOM } from 'jsdom';

const mockRenderLinkGroup = jest.fn();
jest.mock('../link-group', () => ({
  renderGroup: (linkGroup: any) => mockRenderLinkGroup(linkGroup),
}));

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('renderLinkCollection', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should append link', () => {
    const link = {
      id: 0,
      label: 'Test Label',
      url: 'https://somewhere.to',
    };

    const group = {
      groupLabel: 'Group Name',
      groupId: 0,
      links: [
        link,
      ],
    };

    const data = [
      group,
    ];

    const mockLinkGroup = document.createElement('li');
    mockLinkGroup.innerHTML = 'mock-link'
    mockRenderLinkGroup.mockReturnValue(mockLinkGroup);

    const actual = renderLinkCollection(data);

    expect(actual).toMatchSnapshot();
    expect(mockRenderLinkGroup.mock.calls.length).toEqual(1);
    expect(mockRenderLinkGroup.mock.calls[0]).toEqual([group]);
  });
});
