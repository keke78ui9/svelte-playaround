import { render } from "@testing-library/svelte";
import App from "./App.svelte";

test('test2', () => {
  const _name: string = 'world';

  const results = render(App, { props: { name: _name } });

  expect(() => results.getByText("Hello world!")).not.toThrow();
});

test('test3', () => {
  const _name: string = 'yo';

  const {getByTestId} = render(App, { props: { name: _name } });

  expect(getByTestId('hello')).toBeInTheDocument();
});