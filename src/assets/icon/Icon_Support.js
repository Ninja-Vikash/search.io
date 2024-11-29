import ImageComponent from "@components/ui/image";
import Icon from "../svg/support.svg";

export default function Icon_Support({ className }) {
  return (
    <ImageComponent
      src={Icon}
      height={20}
      width={20}
      alt="heart"
      className={className}
    />
  );
}
