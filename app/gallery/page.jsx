'use client'

import Carousel1 from '@/components/Carousel'
import ClassRoomPhoto from '@/components/ClassRoomPhoto'
import ClassTestPhoto from '@/components/ClassTestPhoto'
import StudyTourPhoto from '@/components/StudyTourPhoto'


const GalleryPage = () => {
  return (
    <div>
      <Carousel1 />
      <StudyTourPhoto />
      <ClassTestPhoto />
      <ClassRoomPhoto />
    </div>
  )
}

export default GalleryPage
