import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Toasts from './toasts'
import VaultData from './vaultData'

const Vault = props => {
  return (
    <div className="container">
      <Header path=".." />
      <VaultData id={props.id} />
      <Toasts />
      <Footer />
    </div>
  )
}

Vault.propTypes = {
  id: PropTypes.string.isRequired
}

export default Vault
