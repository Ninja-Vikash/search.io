import ImageComponent from "@components/ui/image";
import HeroImage from "../svg/hero.svg";

export default function Image_Hero({ className = "" }) {
  return (
    <ImageComponent
      src={HeroImage}
      alt="hero-image"
      height={400}
      width={500}
      className={className}
    />
  );
}
