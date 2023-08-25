import BotaoAdicionar from '../../components/FiltroCard/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral/BarraLateral/BarraLateral'
import ListaDeTarefas from '../../containers/BarraLateral/BarraLateral/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
