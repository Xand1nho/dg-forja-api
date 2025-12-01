import Dg from '../public/DesktopWb.jpg'
import Styles from './App.module.css'


function App() {

  return (
    <>
      <main>

        
        <h1 className={Styles.Title}>Dragon Ball API Forja</h1>
        <img className={Styles.cardImg} src={Dg} alt="Dragon Ball" />
      </main>
    </>
  )
}

export default App
