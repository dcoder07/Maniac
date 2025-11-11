import { NextPage } from "next";
interface Props {
  id: string;
  imgUrl: string;
  author_name: string;
  title: string;
  time: string;
  extUrl: string;
}
const Cards: NextPage<Props> = ({
  id,
  imgUrl,
  author_name,
  title,
  time,
  extUrl,
}) => {
  const st = title.slice(0, 40) + (title.length > 40 ? "..." : "");
  return (
    <div
      key={id}
      className='flex flex-col justify-between bg-[#1F2125] p-3 w-full h-40 rounded-xl overflow-hidden shadow-md'
    >
      <div className='relative rounded-t-xl h-45 w-full block overflow-hidden cursor-pointer border-2 py-2'>
        <a href={extUrl} target='_blank' rel='noopener noreferrer'>
          <img
            className='object-fill scale-110 w-full'
            src={imgUrl}
            alt={author_name}
          />
          <div className='absolute bottom-0 left-0 right-0 h-5 backdrop-blur-2xl opacity-80 '>
            <div className='text-xs flex justify-start w-fit px-2 m-1 font-bold bg-slate-900 rounded-full items-center'>
              {author_name}
            </div>
          </div>
        </a>
      </div>

      <div className='font-bold text-xs p-2'>{st}</div>
      <div className='items-end flex justify-between px-2'>
        <div className='font-thin text-xs text-slate-400'>{time}</div>
      </div>
    </div>
  );
};

export default Cards;
