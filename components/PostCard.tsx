"use client";
import Link from 'next/link';
import React from 'react';
import {  HiPencilAlt } from 'react-icons/hi';
import RemoveBtn from './UI/RemoveBtn';


const PostCard = () => {
  return (
<div className="border border-gray-300 gap-5 rounded-lg overflow-hidden my-4">
      <div className="flex items-center p-2">
        <img   className="w-10 h-10 rounded-full mr-2" />
        <div>
          <p className="font-bold">author.username</p>
          <p className="text-gray-600 text-sm">today</p>
        </div>
      </div>
      <img className="w-full" />
      <div className="p-4">
        <h2 className="m-0 text-xl">title</h2>
        <p className="mt-2">content</p>
      </div>
      <div className="flex justify-end p-2">
        <RemoveBtn />
        <Link href={"/editTopic/123"} >
          
          <HiPencilAlt className="text-2xl text-gray-600 cursor-pointer" />
        </Link>
        </div>
    </div>
  );
};

export default PostCard;