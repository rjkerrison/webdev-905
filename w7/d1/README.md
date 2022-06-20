# React

To get started with react, we'll use the react starter.

```sh
npx create-react-app@latest intro-to-react
```

## Components

Components are reusable code.

We define them in their own files, like this in `./src/components/Button.jsx`:

```jsx
import React from 'react'

const Headline = () => {
  return <h1>My Cool App</h1>
}

export default Headline
```

We can use a component elsewhere by _importing_ it and _rendering_ it.

```jsx
// App.js
import Headline from './components/

const App = () => {
  return <div>
    <Headline />
  </div>
}
```

## Props

Props are our way of configuring a component.

We define them with a syntax that looks like HTML attributes.

```jsx
<Button text='Accept' isFancy={true} />
```

We can read them in our component as the properties of its first parameter `props`, which is a JS object containing all the attributes we gave when rendering to the component.

```jsx
// Attributes on React component elements are accessible
// as 'props' – an object where the property names match the attribute names
const Button = (props) => {
  console.log(props)

  return (
    <button className={props.isFancy ? 'fancy-button' : 'regular-button'}>
      {props.text}
    </button>
  )
}

export default Button
```
