import Testimonio from './components/Testimonio'
import './App.css'
import Footer from './components/footer'
function App() {
  

  return (
    <div className="App">
      <div className="principal">
        <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp:</h1>
        <div className="testimonios">
          <Testimonio 
          nombre='Juan'
          pais='Suecia'
          img='0'
          cargo='Ingeniero'
          empresa='Amazon'
          texto='Siempre he tenido la voluntad de no se que poner aca porque tengo qeu improvisar sobre qeu cosas escribir para dejar bastante textolorem lorma msd asd asd asdasdaddsa asd asd asd adsasd  asd ad asd ad sadadas'
          />
          <Testimonio 
          nombre='Lucas'
          pais='Francia'
          img='1'
          cargo='Ingeniero'
          empresa='Software'
          texto='Aca poniendo otra cosa no se que poner aca porque tengo qeu improvisar sobre qeu cosas escribir para dejar bastante textolorem lorma msd asd asd asdasdaddsa asd asd asd adsasd  asd ad asd ad sadadas'
          />
          <Testimonio 
          nombre='Pedro'
          pais='Belgica'
          img='2'
          cargo='Licenciado'
          empresa='Software'
          texto='Lorem probando me sale bien se que poner aca porque tengo qeu improvisar sobre qeu cosas escribir para dejar bastante textolorem lorma msd asd asd asdasdaddsa asd asd asd adsasd  asd ad asd ad sadadas'
          />
        </div>

      </div>
    <Footer></Footer>  
    </div>
    
    
  )
}

export default App
