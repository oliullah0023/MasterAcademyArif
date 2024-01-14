'use client'
import EnrollButton from '@/components/EnrollButton'
import JoinUsLink from '@/components/JoinUsLink'
import { FacebookEmbed } from 'react-social-media-embed'

const English = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40 flex flex-col items-center'> 

      <div style={{ display: 'flex', justifyContent: 'center' }}
     className=' '
    >
  <FacebookEmbed url="https://fb.watch/piJSvpQprf/?mibextid=Nif5oz" width={550} />
</div>

  <div className=' flex justify-center items-center'>
    <EnrollButton />
    </div>
  

<JoinUsLink />
</div>
  )
}

export default English
