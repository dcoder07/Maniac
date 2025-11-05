import { NextPage } from "next";
interface Props {
  id: string;
  imgUrl: string;
  author_name: string;
  title: string;
  time: string;
}
const Cards: NextPage<Props> = ({ id, imgUrl, author_name, title, time }) => {
  return (
    <div
      key={id}
      className='flex flex-col justify-between bg-[#1F2125] p-3 w-full h-80 rounded-xl overflow-hidden shadow-md'
    >
      <div className='relative rounded-t-xl h-45 w-full block overflow-hidden  border-2 py-2'>
        <img
          className='object-fill scale-110 w-full'
          src={imgUrl}
          alt={author_name}
        />
        <div className='absolute bottom-0 left-0 right-0 h-8 backdrop-blur-2xl opacity-80 '>
            <div className='flex justify-start w-fit px-2 m-1 font-bold bg-slate-900 rounded-full items-center'>{author_name}</div>
        </div>
      </div>
      <div className='font-bold text-lg p-2'>{title}</div>
      <div className='items-end flex justify-between px-2'>
        <div className='font-thin text-[15px] text-slate-400'>{time}</div>
      </div>
    </div>
  );
};

export default Cards;
