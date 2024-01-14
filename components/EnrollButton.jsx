import Link from 'next/link'
import React from 'react'

const EnrollButton = () => {
  return (
    <div>
      <Link href={'enroll'}>
        <button className=' bg-green-500 font-semibold text-white px-5 py-3 rounded-md my-5 hover:bg-green-400'>Enroll Now</button>
      </Link>
    </div>
  )
}

export default EnrollButton
