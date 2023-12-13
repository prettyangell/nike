import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id='about-us' className="flex justify-between items-center max-lg:flex-col gap10 w-full max-container ">
      <div className=" flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you
          <br/>
          <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality </span>Shoes

          </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          
Our footwear stands out not just for its trendy designs but also for its exceptional quality. Each pair is crafted with precision and attention to detail, ensuring durability and comfort. Experience the perfect blend of style and substance, where our commitment to quality is as evident as your confident steps in our shoes.
          </p>  
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and exellence ensures your satisfaction</p>
          <div className="mt-11">
          <Button label="View details "/>

          </div>

      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img src={shoe8} alt="" width={570} height={522} className=" object-contain"/>

      </div>

    </section>
  )
}

export default SuperQuality