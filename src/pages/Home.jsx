import Background from '../assets/home-bg.png'
import './Home.css'

function Home () {
  return (
    <>
      <h1>Home</h1>
      <section className='home'>
        <img className='logo' src={Background} />
      </section>
    </>
  )
}
export default Home
