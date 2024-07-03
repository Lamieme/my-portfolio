import CatalogContent from './CatalogContent'

function Catalog({ backgroundColor, setBackgroundColor }) {
  setBackgroundColor('primary.main')
  return (
    <>
      <CatalogContent />
    </>
  )
}

export default Catalog
