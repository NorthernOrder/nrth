describe('shared-ui-react: SharedUiReact component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shareduireact--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to shared-ui-react!');
    });
});
