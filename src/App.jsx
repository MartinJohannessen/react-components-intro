import './App.css'
import LeftMenu from './components/leftMenu.jsx'
import RightMenu from './components/rightMenu.jsx'
import Logo from './components/logo.jsx'
import Country from './components/country.jsx'
import SearchBar from './components/searchBar.jsx'
import SearchButtons from './components/searchButtons.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <LeftMenu />
        <RightMenu />
      </header>

      <main>
        <Logo />
        <SearchBar />
        <SearchButtons />
      </main>

      <footer>
        <Country />
      </footer>
    </div>
  )
}

export default App;
