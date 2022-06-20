import List from './components/List'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import ReactPlayer from 'react-player'
import { TickerBoard } from 'react-ticker-board'

import logo from './logo.svg'
import './App.css'
import StudentCard from './components/StudentCard'
import RestaurantCard from './components/RestaurantCard'
import Headline from './components/Headline'
import Header from './components/Header'

function App() {
  const listItems = ['Apple', 'Banana', 'Carrot', 'Dragonfruit']

  const restaurant = {
    name: "L'as du fallafel",
    cuisine: 'israeli',
    address: {
      city: 'Paris',
      street: 'Rue des Rosiers',
      postcode: '75004',
    },
  }

  return (
    <div className='App'>
      <Header firstName='Robin'>
        <Navbar />
        <Headline />
      </Header>
      <Greeting firstName='Robin' />
      <Greeting firstName='Pauline' />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      {/* <TickerBoard
        messages={['Hello', 'How are you?']}
        count={2}
        size={24}
        theme={'dark'}
      /> */}
      <ReactPlayer url='https://vimeo.com/channels/top/22439234' />
      <StudentCard name='Eva' week={7} info={{ city: 'BCN', course: 'WEB' }} />
      <StudentCard name='Mat' week={8} info={{ city: 'PAR', course: 'DATA' }} />
      <RestaurantCard {...restaurant} />
      <p>Something something cookies etc</p>
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
