import ImageComponent from "@components/ui/image";
import Icon from "../svg/logo.svg";

export default function Icon_Logo({ className = "", height = 30, width = 30 }) {
  return (
    <ImageComponent
      src={Icon}
      alt="logo-icon"
      height={height}
      width={width}
      className={className}
    />
  );
}
