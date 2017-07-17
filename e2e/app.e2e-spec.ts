import { GastronautPage } from './app.po';

describe('gastronaut App', () => {
  let page: GastronautPage;

  beforeEach(() => {
    page = new GastronautPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
