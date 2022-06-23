# Hooks

React's component lifecycle has three phases:

1. **Mounting**, when the component has an initial render to the DOM
2. **Updating**, when the component's `state` or `props` change, causing a new render in the DOM
3. **Unmounting**, when the component is removed from the DOM

**Updating** can happen numerous times during the life of a component.

## `useEffect`

When we want to run a side effect for our component, we can declare it by passing a function to React's `useEffect` hook.

```jsx
// it looks like this
useEffect(() => {}, [])

useEffect(effect, dependencies)
```

Every `effect` runs on **mount**.

An `effect` will run whenever a value in its `dependencies` has changed in an **update**.

To run a cleanup task on **unmount**, we return a _cleanup function_ from our `effect`.

```jsx
useEffect(
  () => {
    // side effect statements (mount/update of a dependency)

    return () => {
      // cleanup (unmount)
    }
  },
  [
    /* dependencies */
  ]
)
```

# Routes

We use the `react-router-dom` package to mimic browser page behaviour.

A route looks like

```jsx
<Route path='/contact-us' element={<ContactUs />} />
```

where `ContactUs` is a component defined in `./pages/ContactUs.jsx`.

## Links

To prevent a browser navigation, we use a React Router link element.

```jsx
<Link to="/about">About</Link>
```

## Navigate

Sometimes, we want to redirect the user. We do so with the `Navigate` element.

```jsx
<Navigate to="/error" />
```

## Route parameters

Route parameters allow us to create dynamic pages.

We can define our route with a parametrised identifier.

```jsx
<Route path='/schools/:id' element={<School />} />
```

Inside our page, we can retrieve the current value of `id` from the real URL with `useParams()`.

```jsx
const School = () => {
  const { id } = useParams()

  return <p>School with id: {id}</p>
}
```

### Use Params Example

In ['./full-stack-app'](./full-stack-app), we have the following example use case of a URL parameter id.

<img width="1114" alt="Screenshot 2022-06-23 at 15 00 52" src="https://user-images.githubusercontent.com/7150842/175308049-1916a754-6a17-4139-b851-2d41242daa0b.png">
