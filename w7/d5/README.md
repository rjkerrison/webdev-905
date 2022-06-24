# React Day 5: Integrating the frontend to the backend

Today, we're going over the process of calling our backend API from our frontends.

## Axios

To help us out, `axios` exists. We'll install it to our app, and use it.

```
npm install axios
```

To import it, it's

```jsx
import axios from 'axios'
```

To use it, we can use `axios(config)` where `config` defines our `method`, `url`, and `headers` as necessary,
or we can use shorthands like `axios.get(url)`.

### Make your GET requests in a `useEffect`

When mounting a component, we need to fetch relevant information from our API.

Once we receive the data, we need to store it in state.

```jsx
import axios from 'axios'

const BicycleList = () => {
  const [bicycles, setBicycles] = useState([])

  useEffect(() => {
    // Here, we make the request with axios
    axios
      .get('http://myapi.example.com/api/bicycles')
      .then((response) => {
        if (response.status === 200) {
          // We define what to do if the GET returns 200 OK
          setBicycles(response.data)
        } else {
          // What to do in the event of an unexpected status code
          // In some applications, you may want to be more precise here, and handle 404, 401, 201 etc differently.
          setErrorMessage('Could not retrieve bikes')
        }
      })
      .catch(() => {
        // What to do in the event of an error during the call
        setErrorMessage('Could not retrieve bikes')
      })
  }, [])

  return (
    <div className='bikes-container'>
      {bicycles.map((bicycle) => (
        <BicycleCard {...bicycle} />
      ))}
    </div>
  )
}
```

We make the request in a `useEffect` because we only want to do it _when mounting the component_.
