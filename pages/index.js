import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[1]}/>
      { console.log(bannerData)}

      <div className='products-heading'>
        <h2>Beset Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => product.name )}
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const querry = '*[_type == "product"]';
  const products = await client.fetch(querry);

  const bannerQuerry = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuerry);

  return{
    props: { products, bannerData}
  }
}
export default Home
