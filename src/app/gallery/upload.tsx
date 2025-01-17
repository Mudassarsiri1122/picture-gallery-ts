"use client";
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation';
interface UploadImage {
  event: "success"
  info : {public_id: string};
}

const Upload=() =>{
  //for page refresh
  const router=useRouter
    return( 
        <Button asChild className='cursor-pointer'>
            <div><svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
  />
</svg>
{/*upload button*/}
       <CldUploadButton uploadPreset="a8douoej"
        onUpload={(result) => {
            // let res = result as UploadImage
            //   setTimeout(()=>{
            //  router.refresh();     
            //   },1000)
            // }}
             /></div>
             </Button>
    );
};
export default Upload