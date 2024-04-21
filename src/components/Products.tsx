import { products } from "@/constants"
import CustomCarousel from "./CustomCarousal"

const Products = () => {
  return (
    <section className="container ">
        <h1 className="head-text text-center mb-10">Products</h1>
    <CustomCarousel>
        {products.map((product) => (
            <div key={product.alt} className="flex flex-col items-center justify-center  py-5">
                <img src={product.image} alt={product.alt} className="h-[12rem] w-[12rem] mix-blend-multiply"/>
                <h1 className="font-xl font-semibold text-center">{product.alt}</h1>
                <h3 className="font-base text-center">{product.desc}</h3>
            </div>
        ))}
    </CustomCarousel>
    </section>
  )
}

export default Products