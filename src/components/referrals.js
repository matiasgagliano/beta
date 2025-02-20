import Experimental from './experimental'
import Header from './header'
import Footer from './footer'
import Toasts from './toasts'
import Referral from './referral'

const Referrals = () => {
  return (
    <div className="container">
      <Experimental />
      <Header />
      <Referral />
      <Toasts />
      <Footer />
    </div>
  )
}

export default Referrals
