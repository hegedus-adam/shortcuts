import { renderGroup } from './link-group.component';
import { JSDOM } from 'jsdom';

const mockRenderLink = jest.fn();
jest.mock('../link', () => ({
  renderLink: (link: any) => mockRenderLink(link),
}));

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe('renderGroup', () => {
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

    const mockLink = document.createElement('li');
    mockLink.innerHTML = 'mock-link'
    mockRenderLink.mockReturnValue(mockLink);

    const actual = renderGroup(group);

    expect(actual).toMatchSnapshot();
    expect(mockRenderLink.mock.calls.length).toEqual(1);
    expect(mockRenderLink.mock.calls[0]).toEqual([link]);
  });
});
