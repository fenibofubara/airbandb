import Head from 'next/head'
// import Layout from '../styles/Layout.module.css'
// import  "../styles/layout.css"
import Banner from '../components/MainComponents/Index/Banner/Banner'
import Sliderr from '../components/MainComponents/Index/Slider/Slider'
import PropertyTrade from '../components/MainComponents/Index/PropertyTrade/PropertyTrade'
import PropertyInvest from '../components/MainComponents/Index/PropertyInvest/PropertyInvest'
import DefiStaking from '../components/MainComponents/Index/DefiStaking/DefiStaking'
import CryptoBot from '../components/MainComponents/Index/CryptoBot/CryptoBot'
import PfxAffiliate from '../components/MainComponents/Index/PfxAffiliate/PfxAffiliate'
import HowItWorks from '../components/MainComponents/Index/HowItWorks/HowItWorks'
import ProductCategories from '../components/MainComponents/Index/ProductCategories/ProductCategories'
import AffiliateProgram from '../components/MainComponents/Index/AffiliateProgram/AffiliateProgram'
import HowItWorks2 from '../components/MainComponents/Index/HowItWorks2/HowItWorks2'
import Activate from '../components/MainComponents/Index/Activate/Activate'
import PaidAffiliate from '../components/MainComponents/Index/PaidAffiliate/PaidAffiliate'
import Trusted from '../components/MainComponents/Index/Trusted/Trusted'
import Contact from '../components/MainComponents/Index/Contact/Contact'




export default function Home() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Welcome</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
   <section id="banner" >
      <Banner/>
    </section>
      <section id="slider" className="md:mx-pfx">
      <Sliderr/>
    </section>
 <section id="propertyTrade" className="md:mx-pfx mx-4">
      <PropertyTrade/>
    </section>
       <section id="propertyInvest">
      <PropertyInvest/>
    </section>
    <section id="defi" className="md:mx-pfx mx-4">
      <DefiStaking/>
    </section>
  <section id="cryptoBot" className="md:mx-pfx mx-4">
      <CryptoBot/>
    </section>
    <section id="pfxAffiliate" className="md:mx-pfx mx-4">
      <PfxAffiliate/>
    </section>
    <section id="how1" className="md:mx-pfx mx-4">
      <HowItWorks/>
    </section>
  
    <section id="productCategories" className="md:mx-pfx">
      <ProductCategories/>
    </section>
   
    <section id="affiliateProgram" className="md:mx-pfx mx-4">
      <AffiliateProgram/>
    </section>
      <section id="how2" className="md:mx-pfx mx-4">
      <HowItWorks2/>
    </section>
    <section id="activate" className="md:mx-pfx mx-4">
      <Activate/>
    </section>
    <section id="paidAffiliate" className="md:mx-pfx mx-4">
      <PaidAffiliate/>
    </section>
    <section id="trusted" className="md:mx-pfx" >
      <Trusted/>
    </section>
    <section id="contact" className="md:p-pfx p-4">
      <Contact/>
    </section> 
  
  </>


    
  )
}
