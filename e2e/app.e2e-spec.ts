import { NgContactosPage } from './app.po';

describe('ng-contactos App', () => {
  let page: NgContactosPage;

  beforeEach(() => {
    page = new NgContactosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
