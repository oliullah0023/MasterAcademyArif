'use client'
import JoinUsLink from '@/components/JoinUsLink';
import { FacebookEmbed } from 'react-social-media-embed';

const JobCircular = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40'> 

      <div style={{ display: 'flex', justifyContent: 'center' }}
     className=' '
    >
  <FacebookEmbed url="https://fb.watch/piKF0wTJ9T/?mibextid=6aamW6" width={550} />
</div>

<JoinUsLink /> 
</div>
 
  )
}

export default JobCircular
