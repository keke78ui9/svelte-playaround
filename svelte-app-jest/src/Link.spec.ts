import { render } from "@testing-library/svelte";
import Link from "./Link.svelte";

test(Link.name, () => {
  const _name: string = 'world';

  const results = render(Link, { props: { name: _name, url:'/test' } });

  expect(() => results.getByText("world")).not.toThrow();
});