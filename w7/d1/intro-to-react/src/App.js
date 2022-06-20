import Button from './components/Button'
import List from './components/List'

import logo from './logo.svg'
import './App.css'

function App() {
  const listItems = ['Apple', 'Banana', 'Carrot', 'Dragonfruit']

  return (
    <div className='App'>
      <p>Something something cookies etc</p>
      <Button text='Cancel' />
      <Button text='Accept' isFancy={true} />
      <List listItems={listItems} />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload. I DID IT!
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
