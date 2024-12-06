import Detail from './HTRisksDetails/index'
import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'

function HTRisks({ setBackgroundColor }) {
  setBackgroundColor('#fffcec')
  return (
    <div>
      <AppBar />
      <Detail />
      <Footer />
    </div>
  )
}

export default HTRisks
