import { Ang2AnotherTutorialPage } from './app.po';

describe('ang2-another-tutorial App', () => {
  let page: Ang2AnotherTutorialPage;

  beforeEach(() => {
    page = new Ang2AnotherTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
