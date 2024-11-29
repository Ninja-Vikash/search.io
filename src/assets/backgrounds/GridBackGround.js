import Image from "next/image";
import GridImage from "../svg/grids.svg";

export default function GridBackGround() {
  return (
    <Image
      src={GridImage}
      alt="grid-lines"
      height={600}
      width={500}
      className="rounded-full"
    />
  );
}
