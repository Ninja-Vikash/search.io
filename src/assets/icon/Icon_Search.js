import ImageComponent from "@components/ui/image";
import Icon from "../svg/search.svg";

export default function Icon_Search({ className = "" }) {
  return (
    <ImageComponent
      src={Icon}
      alt="search-icon"
      height={30}
      width={30}
      className={className}
    />
  );
}
