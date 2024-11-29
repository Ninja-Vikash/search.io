import ImageComponent from "@components/ui/image";
import Icon from "../svg/github.svg";

export default function Icon_GitHub({
  className = "",
  height = 30,
  width = 30,
}) {
  return (
    <ImageComponent
      src={Icon}
      alt="github-icon"
      height={height}
      width={width}
      className={className}
    />
  );
}
