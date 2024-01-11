import Blog from '@/components/Blog'
import Courses from '@/components/Courses'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Video from '@/components/Video'
import VideoLong from '@/components/VideoLong'


export default function Home() {
  return (
   <div className=' '>
    <Hero />
    <Courses />
    <VideoLong />
    <Video />
    <Testimonials />
    <Blog />
   </div>
  )
}
