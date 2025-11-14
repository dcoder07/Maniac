import { NextPage } from "next";

interface Props {}

const PostSec: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className='flex justify-center mx-5 mt-5 items-center font-bold text-2xl tracking-wide'>
        <>Latest Feeds</>
      </div>    
    </div>
  );
};

export default PostSec;
