import React, { useEffect, useState } from "react";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      const scrolled = window.scrollY;

      // Set isScrolled state based on scroll position
      setIsScrolled(scrolled > 0);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
  <div>
     <div className={`" px-2 sm:text-[16px] text-[12px] text-gray text-center py-[8px] font-normal flex flex-wrap items-center justify-center tracking-wide ${ isScrolled ? "hidden" : "block"}`}>
          <img src="  ./cone.jpg" alt="cone"/>
          <p>Introducing <span className="text-purple font-bold px-1">Automobile Subscription.</span>
          Now You Can Get Latest News Right At Your Finger Tip.</p>
      </div>
     
  </div>
  )
}

export default Header