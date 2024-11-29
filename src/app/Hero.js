/**
 * Assets
 */
import Image_Hero from "@assets/image";
import GridBackGround from "@assets/backgrounds";

export default function Hero() {
  return (
    <div className="relative">
      <Image_Hero className="relative z-20" />
      <div className="absolute top-0 opacity-10 rounded-full w-full">
        <GridBackGround />
      </div>
    </div>
  );
}
