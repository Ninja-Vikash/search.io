import ImageComponent from "@components/ui/image";
import Icon from "../svg/image.svg";

export default function Icon_Image({ className = "" }) {
  return (
    <ImageComponent
      src={Icon}
      alt="image-icon"
      height={30}
      width={30}
      className={className}
    />
  );
}
