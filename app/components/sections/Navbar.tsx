"use client";
import { NextPage } from "next";
import {
  Compass,
  Mail,
  NotepadText,
  Users,
  Image,
  Settings,
} from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";
import ImageC from "next/image";
type Props = Record<string, never>;
type User = {
  id: number;
  label: string;
  logo: React.ComponentType<{ fill?: string; size: number }>;
};
type Data = {
  id: number;
  label: string;
  count: string;
};
const users: User[] = [
  { id: 1, label: "Feeds", logo: Compass },
  { id: 2, label: "Messages", logo: Mail },
  { id: 3, label: "Forums", logo: NotepadText },
  { id: 4, label: "Friends", logo: Users },
  { id: 5, label: "Media", logo: Image },
  { id: 6, label: "Settings", logo: Settings },
];

const datas: Data[] = [
  { id: 1, label: "Followers", count: "4.6K" },
  { id: 2, label: "Following", count: "4.6K" },
  { id: 3, label: "Event", count: "4.6K" },
];

const Navbar: NextPage<Props> = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  return (
    <div className='flex flex-col justify-evenly gap-5 px-2 py-12 w-xs max-lg:w-auto mx-5 '>
      <div className='flex flex-col items-center'>
        <div className='w-25 h-25 rounded-full border-3 border-amber-300 p-2'>
          <ImageC
            src='/ProfileImg.jpg'
            className='rounded-full object-cover h-full w-full'
            width={100}
            height={100}
            alt='Picture of the author'
          />
        </div>

        <div className='text-white mt-5 text-lg font-bold whitespace-nowrap '>
          Dishank Patil
        </div>
        <div className='text-gray-400 font-thin max-lg:text-xs'>@dcoder07</div>
      </div>

      <div className='flex p-2 text-white rounded-lg bg-[#1F2125] justify-evenly'>
        {datas.map((data) => (
          <div
            key={data.id}
            className='flex flex-col mx-2 items-center justify-center'
          >
            <span className='font-bold'>{data.count}</span>
            <span className='text-xs text-gray-400'>{data.label}</span>
          </div>
        ))}
      </div>

      <div className=' bg-[#1F2125] rounded-lg p-4'>
        <div className='space-y-4'>
          {users.map((user) => (
            <Button
              key={user.id}
              id={user.id}
              label={user.label}
              logo={user.logo}
              isSelected={user.id === selectedId}
              onClick={() => setSelectedId(user.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
