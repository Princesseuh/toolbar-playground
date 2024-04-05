/* @jsxImportSource preact */
/* @jsxRuntime automatic */

import { defineToolbarApp } from 'astro:toolbar';
import { render } from 'preact';
import { useState } from 'preact/hooks';

function Counter() {
  const [value, setValue] = useState(0);

  return (
		<>
			<h1>Hello, Astro, from Preact!</h1>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  )
}

export default defineToolbarApp({
	init(canvas) {
		render(<Counter />, canvas)
	},
})
