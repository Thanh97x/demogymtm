import { DemothtTemplatePage } from './app.po';

describe('Demotht App', function() {
  let page: DemothtTemplatePage;

  beforeEach(() => {
    page = new DemothtTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
