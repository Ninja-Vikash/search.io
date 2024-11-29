import { Icon_Logo } from "@assets/icon";

export default function Logo({ value }) {
  return (
    <h2 className="text-zinc-50 font-bold text-lg font-sans text-center flex gap-1 items-center">
      <Icon_Logo height={24} width={24} />
      {value}
    </h2>
  );
}
