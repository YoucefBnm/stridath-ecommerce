import {
  ClipSlider,
  ClipSliderImages,
  ClipSliderIndicators,
  ClipSliderTitle,
} from "@/components/ClipSlider";
import { sports } from "@/constants/constants";

const Sports = () => {
  return (
    <ClipSlider items={sports.items} className="px-6 md:px-12 py-16">
      <ClipSliderTitle title="sports" />
      <ClipSliderIndicators />
      <ClipSliderImages />
    </ClipSlider>
  );
};

export default Sports;
