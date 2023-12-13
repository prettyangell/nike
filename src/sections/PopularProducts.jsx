import { products } from "../constants"
import PopularproductCard from "../components/PopularproductCard"



const PopularProducts = () => {
  return (
    <section id="products" className="max-container" max-sm:mt-12>
      <div className=" flex flex-col justify-start gap-5">  
        <h2 className=" text-4xl font-bold font-palanquin">Our <span className=" text-coral-red"> Popular</span> Products</h2>
        <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray">Discover stylish and comfortable footwear on our site, from formal shoes to trendy sneakers. Find your perfect pair for any occasion in our curated collection, blending quality and fashion seamlessly. Step into confidence with our versatile range.</p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product)=>(
          <PopularproductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts