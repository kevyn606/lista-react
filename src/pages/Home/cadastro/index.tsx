import { text } from 'stream/consumers'
import BarraLateral from '../../../containers/BarraLateral/BarraLateral/BarraLateral'
import Formulario from '../../../containers/BarraLateral/BarraLateral/Formulario'

const Cadastro = () => (
  <>
    <BarraLateral mostrarFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
