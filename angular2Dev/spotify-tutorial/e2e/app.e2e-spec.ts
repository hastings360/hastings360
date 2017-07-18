import { SpotifyTutorialPage } from './app.po';

describe('spotify-tutorial App', () => {
  let page: SpotifyTutorialPage;

  beforeEach(() => {
    page = new SpotifyTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
