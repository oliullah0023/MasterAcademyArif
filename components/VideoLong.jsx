 'use client'
import { YouTubeEmbed } from 'react-social-media-embed';

const VideoLong = () => {
  return (
    <div className=' px-6  mt-5 flex flex-col items-center justify-center overflow-hidden'>
      <div className=' flex items-center justify-center mb-8'>
      <h1 className=' bg-red-900 rounded-md text-xl  font-bold text-center text-white inline-block items-center p-2 px-16 '>Videos (Success Stories & Tips)</h1>
       </div>

      <div className=' bg-red-200 lg:w-2/4 '>
       <div className=' p-2 py-5  flex justify-center  items-center'>
         <YouTubeEmbed url="https://youtu.be/GRS7mspU7Ko?si=Ugyq27qtlRSvURhX" width={550} height={320}
            
         />
        </div>
      </div>
    </div>
  )
}

export default VideoLong
