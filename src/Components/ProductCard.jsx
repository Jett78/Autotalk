import React from "react";


const ProductCard = ({tesla}) => {

  const{img,brand,model,price,smallimg,desc} = tesla;

  return (
    <main>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <section>
          <figure>
            <img src={img} alt="car" className="sm:w-[426px] w-[270px]  sm:h-[333px] h-[80] object-cover"/>
          </figure>
          <div className="mt-2">
            {smallimg.map((imgs, index) => (
              <div key={index} className="flex gap-5">
                {/* Map through the images in each smallimg object */}
                {Object.values(imgs).map((image, i) => (
                  <img key={i} src={image} className="md:w-[90px] w-[52px]" alt='smallimg' />
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[874px] pt-2 px-2">
          <div className="flex justify-between text-gray border-b pb-4 ">
            <div>
              <h2 className="text-[24px] text-purple">{brand}</h2>
              <p>{model}</p>
            </div>
            
            <div className="text-right">
              <h2 className="text-[24px] font-semibold tracking-wider">
                {price}
              </h2>
              <p>ex-showroom</p>
            </div>
          </div>

         <div className="grid sm:gap-4 gap-2 mt-2 font-normal text-gray sm:text-[16px] text-[12px]">
          <p>{desc}</p>
          <p>{desc}</p>
          <p className="sm:block hidden">{desc}</p>
          <p className="sm:block hidden">{desc}</p>
         </div>

        </section>
        <div className="flex flex-wrap justify-center gap-6 my-6">
            <button className="commonButton">Details</button>
            <button className="commonButton">EMI Calculator</button>
            <button className="commonButton">Auto Loan</button>
            <button className="commonButton">UserReview</button>
            <button className="commonButton">News</button>
          </div>
      </div>
    </main>
  );
};

export default ProductCard;
