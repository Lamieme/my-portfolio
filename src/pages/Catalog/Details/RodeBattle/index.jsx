import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'
import Detail from './RBDetails'

function RodeBattle({ setBackgroundColor }) {
  setBackgroundColor('#fffcec')
  return (
    <div>
      <AppBar />
      <Detail />
      <Footer />
    </div>
  )
}

export default RodeBattle