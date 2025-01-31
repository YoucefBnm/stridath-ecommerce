import { SliderImages, SliderIndicators } from "@/components/Slider";
import { sportsContent } from "@/constants/sportsContent";
import { useState } from "react";

const Sports = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const handleMouseEnter = (index: number) => setActiveItem(index);

  return (
    <section id="sports" className="px-12 py-16">
      <div className="section-container">
        <div className="col-span-12 md:col-span-5 grid grid-cols-4 lg:grid-cols-5 gap-y-0 ">
          <div className="col-start-2 col-span-3 lg:col-span-3 lg:col-start-3 relative z-0 mt-8">
            <div className="block col-span-3">
              <SliderImages slides={sportsContent} activeImage={activeItem} />
            </div>
          </div>
        </div>

        <div className="ml-0  md:ml-8 col-span-12 md:col-span-7  lg:col-span-6  lg:col-start-7  ">
          <div className="grid grid-cols-4 lg:grid-cols-6 lg:mt-8">
            <div className="col-span-4 lg:col-span-6">
              <SliderIndicators
                slides={sportsContent}
                activeImage={activeItem}
                handleMouseEnter={handleMouseEnter}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
