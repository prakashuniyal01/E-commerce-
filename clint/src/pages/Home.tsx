import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import img from "../assets/01.jpg"

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section> </section>
      <h1> latest Project
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard productId="gjjgk" name="prakash" price={45} stock={400} handler={addToCartHandler} photo={img} />
      </main>
    </div>
  )
}

export default Home