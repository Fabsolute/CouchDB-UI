import { CouchdbUiPage } from './app.po';

describe('couchdb-ui App', () => {
  let page: CouchdbUiPage;

  beforeEach(() => {
    page = new CouchdbUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
