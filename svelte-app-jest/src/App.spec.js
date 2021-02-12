import { render } from '@testing-library/svelte';
import App from './App.svelte';

it(App.name, async () => {
  const results = render(App, { props: { name: 'world' } });

  expect(() => results.getByText('Hello world!')).not.toThrow();
});
