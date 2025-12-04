import Styles from './App.module.css'
import { useState, useEffect } from 'react'
import { Api } from '/src/Dgapi/Api.js'
import { Card } from '/src/components/card.jsx'



function App() {
  const [data, setData] = useState([])
  const [searchImage, setSearchImage] = useState("")


  useEffect(() => {
    Api.get(`/characters/?&page=${searchImage}`).then((response) =>{
      setData(response.data.items)
      console.log(response.data.items)
    }). catch((error) =>{
      console.error("Erro ao buscar dados da API:", error)

    })
    }, [searchImage])

  return (
    /* O input do botao consegui colocar 2 nomes  em 1 ckas name */
    <>
      <h1 className={Styles.Title}>Dragon Ball Characters</h1>
      <main>
        <div style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "center"}}>
        <input className={Styles.Input} type="text"  value={searchImage} onChange={(e) => setSearchImage(e.target.value)} placeholder=' Digite o Id: 1/6'/>
        </div>
        
        <div className={Styles.wrapCards}>
          {data.map((item, index) => {
            return(
              <div key={index}>
              <Card image={item.image} name={item.name} ki={item.ki}/>
              </div>
            )
          })}
        </div>

      </main>
    </>
  )
}

export default App
