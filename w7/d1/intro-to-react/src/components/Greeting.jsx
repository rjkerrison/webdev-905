// ./src/components/Greeting.js

function Greeting(props) {
  const message = `Hello ${props.firstName || 'Paddington'}!`

  return (
    <div>
      <u>{message}</u>
    </div>
  )
}

export default Greeting
