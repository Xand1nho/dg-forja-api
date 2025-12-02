import Dg from '../public/DesktopWb.jpg'
import Styles from './App.module.css'
import {useState, useEffect} from 'react'
import {Api} from './Dgapi/Api.js'
import {Card} from './components/card.jsx'


function App() {
  const [data, setData] = useState([])
  const [searchName, setSearchName] = useState("")
  const [searchPage, setSearchPage] = useState("")


  useEffect(() => {
    Api.get(`/character/?name=${searchName}&page=${searchPage}`).then((response) =>{
      setData(response.data.data)
      console.log(response.data.data)
    }). catch((error) =>{
      console.error("Erro ao buscar dados da API:", error)

    })
    }, [searchPage, searchName])

  return (
    <>
      <h1 className={Styles.Title}>Rick and Morty Characters</h1>
      <main>
        <div style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "center"}}>
        <input type="text"  value={searchPage} onChange={(e) => setSearchPage(e.target.value)} />
        <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
        </div>

        <div className={Styles.wrapCards}>
          {data.map((item, index) => {
            return(
              <div key={index}
              <Card image={item.image} name={item.name} species={item.species}/>
              </div>
            )
          })}
        </div>

      </main>
    </>
  )
}

export default App
