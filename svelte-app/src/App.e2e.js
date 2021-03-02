import App from './App.svelte'
import { mount } from 'cypress-svelte-unit-test'
it('Test App.svelte ', () => {
  mount(App, {
    props: {
      name: 'World',
    },
  })

  cy.get('my-app').shadow().contains('h2', 'yo');
  cy.get('my-app').shadow().contains('h1', 'Hello World!');
})