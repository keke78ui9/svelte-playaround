import { render } from '@testing-library/svelte'
import App from './App.svelte';


test("test app", () => {
    const { getByText} = render(App, { name: 'svelte' });    
  
    expect(getByText('hello svelte')).toBeInTheDocument()
  });