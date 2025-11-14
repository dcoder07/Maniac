import { NextPage } from "next";
import News from "./News";

interface Props {}

const Accessbar: NextPage<Props> = ({}) => {
  return (
    <div className='flex flex-col w-full h-[100vh] px-5 py-10'>
      <div className='flex-1/2'>
        <div className='flex justify-center mx-5 mt-5 items-center font-bold text-2xl tracking-wide'>
          <>Who to follow</>
        </div>
      </div>
      <div className='flex-1/2 overflow-y-auto scrollbar-hide'>
        <News />
      </div>
    </div>
  );
};

export default Accessbar;
