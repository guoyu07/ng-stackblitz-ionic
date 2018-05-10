import { NgApp1Page } from './app.po';

describe('ng-app-1 App', function() {
  let page: NgApp1Page;

  beforeEach(() => {
    page = new NgApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
