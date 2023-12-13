import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className=" flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">

          <br/>
          <span className="text-coral-red">special </span>Offer
          </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Dive into our special offer and elevate your footwear collection without breaking the bank. Don't miss out on this stylish steal – it's time to walk the walk in the shoes you love, at a price you'll adore. Hurry, as this irresistible offer won't last forever!
          </p>  
          <p className="mt-6 lg:max-w-lg info-text">Unleash a wave of style with our exclusive promotion! For a limited time, seize the opportunity to step into fashion at unbeatable prices. </p>
          <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now " iconURL={arrowRight}/>
          <Button label="learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer