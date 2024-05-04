import React from "react";


const ProductCard = ({tesla}) => {

  const{img,brand,model,price,smallimg,desc} = tesla;

  return (
    <main>
      <div className="mt-8 flex flex-wrap gap-4">
        <section>
          <figure>
            <img src={img} alt="car" className="w-[426px] h-[333px] object-cover"/>
          </figure>
          <div className="mt-2">
            {smallimg.map((imgs, index) => (
              <div key={index} className="flex gap-5">
                {/* Map through the images in each smallimg object */}
                {Object.values(imgs).map((image, i) => (
                  <img key={i} src={image} alt='smallimg' />
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

         <div className="grid gap-4">
          <p>{desc}</p>
          <p>{desc}</p>
          <p>{desc}</p>
          <p>{desc}</p>
         </div>

        </section>
        <div className="flex gap-6 my-6">
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
