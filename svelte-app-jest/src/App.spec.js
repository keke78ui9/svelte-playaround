import { render, fireEvent } from '@testing-library/svelte';
import App from './App.svelte'

it('it works', async () => {
    const results = render(App, { props: { name: "world" } });

    expect(() => results.getByText("Hello world!")).not.toThrow();
});