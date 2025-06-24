import { NextPage } from "next";

interface Props {
  id: number;
  label: string;
  logo: React.ComponentType<{ fill?: string; size: number }>;
  isSelected: boolean;
  onClick: () => void;
}

const Button: NextPage<Props> = ({
  label,
  logo: LogoC,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={` rounded-lg flex p-2 space-x-2 items-center cursor-pointer transition-colors ${
        isSelected ? "bg-amber-300 text-black" : " text-slate-400"
      }`}
    >
      <div>
        <LogoC size={16} />
      </div>
      <div className='font-thin text-sm tracking-wide'>{label}</div>
    </div>
  );
};

export default Button;
