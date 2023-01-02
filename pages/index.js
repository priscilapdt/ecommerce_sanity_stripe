import { FooterBanner, Product, HeroBanner } from "../components";
import { client } from "../lib/client";
import banner from "../sanity_ecommerce/schemas/banner";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product}/>
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
};

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannenQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannenQuery);

  return {
    props: { products, bannerData },
  };
}
export default Home;
