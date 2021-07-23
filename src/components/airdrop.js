import Experimental from './experimental'
import Header from './header'
import AirdropClaim from './airdropClaim'
import Footer from './footer'
import Toasts from './toasts'

const Airdrop = () => {
  return (
    <div className="container">
      <Experimental />
      <Header />
      <AirdropClaim />
      <Toasts />
      <Footer />
    </div>
  )
}

export default Airdrop
