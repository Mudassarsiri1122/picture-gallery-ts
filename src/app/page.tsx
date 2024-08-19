"use client";
import { CldImage } from 'next-cloudinary'
import { CldUploadButton } from 'next-cloudinary'
import { useState } from 'react';

interface UploadImage {
  event: "success"
  info : {public_id: string};
}
export default function Home() {
  //UseState to change the image
  const [imageId , setImageId]= useState('cld-sample-4')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/*upload button*/}


     <CldUploadButton uploadPreset="a8douoej" onUpload={(result) => {
    let res = result as UploadImage
    setImageId(res.info.public_id)
     }}
     />


     {/*viewimage*/}
     <CldImage
  width="400"
  height="400"
  src={imageId} 
  sizes="100vw"
  alt="Description of my image"
/>


      </main>)}