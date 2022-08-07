import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import Loved from '../../components/lovedCaves/Loved'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
        <h1 className="homeTitle">Featured Caves</h1>

          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Loved Caves</h1>
          <Loved />
          <MailList />
          <Footer />
        </div>
        </div>
  )
}

export default Home