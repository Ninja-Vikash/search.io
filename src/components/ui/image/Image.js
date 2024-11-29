import Image from "next/image";

function ImageComponent({
  src,
  height = 30,
  width = 30,
  alt = "image",
  className = "",
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={className}
      />
    </>
  );
}

export default ImageComponent;
