import Navbar from './Componentes/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Componentes/Footer/Footer';
import Projetos from './pages/Projetos/Projetos';
import Sobre from './pages/Sobre/Sobre';

function App() {
  return (
    <>
      <Navbar />
      <div style={{minHeight: "calc(100vh - 147px)"}}>
        <Home />
        <Sobre />
        <Projetos />
      </div>
      <Footer />
    </>
  );
}

export default App;
