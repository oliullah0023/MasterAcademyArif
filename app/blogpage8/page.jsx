import EnrollButton from '@/components/EnrollButton'
import JoinUsLink from '@/components/JoinUsLink'
import {  blogDetilsPage } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPage8 = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40 '>
      <div className='flex flex-row justify-between gap-10'>
    <div className=' max-w-[750px]'>
   <h1 className=' text-2xl font-bold md:text-3xl lg:text-4xl text-black'>DU_EMBA_VIVA_TIPS</h1>
   <p className=' mb-5 text-gray-500'><span className=' text-gray-400'>By </span>Master Academy</p>
   <Image src={'/blog8.png'} alt='' height={400} width={800} />

   <p className=' my-5 text-gray-600'>
   টেনশন এর কিছুই নেই। কারন ফেইল করার কোন possibility নেই। Attend করলেই minimum 2 marks পাবেন।  So be relaxed.  কিছু প্রশ্ন যেগুলো একটু গুছিয়ে এবং confidently বলতে পারলে ভাল marks পাবেন। কিছু বেসিক প্রশ্ন যেমন -  Introducing yourself with your name, Father&apos;s name, Mother&apos;s name, home district and Educational background, Name of Vice Chancellor of your university etc. যে subject এর উপর Graduation করেছেন সেটা থেকে অবশ্যই কিছু basic প্রশ্ন করবে। যার সম্ভাবনা বলতে গেলে ৯৯% । এছাড়া আপনি যদি Engineering background এর Student হলে, কেন MBA করতে চাচ্ছেন জিজ্ঞেস করবে এবং জিজ্ঞেস করতে পারে &apos; What is CPU, What are the differences between SOFTWARE AND HARDWARE&apos; এরকম কিছু সহজ প্রশ্ন যা সবাই মোটামুটি কম বেশি আমরা জানি। 
     </p>

     <h3 className=' font-semibold text-xl my-4'>
     এছাড়াও প্রশ্ন করতে পারে- 
   </h3>

   <p className=' my-5 text-gray-600'>
   Why do u want to study in DU?  <br />
What subject do u want? Why?  <br />
Why do u want to MBA here? <br />
Tell me some specialties of DU that u know. <br />
  What is your strength & weakness? <br />
 What is you father? <br />
 Or what does your father do? <br />
What is profit? What is cost? <br />
 Tell me some names of costs. <br />
What is your biggest achievement in your life? <br />
 Which kinds of activities you can do perfectly and confidently? <br />
And How do you do it? Do you do any extra curriculum activity? <br />
প্রশ্নগুলো English এ জিজ্ঞেস করবে। অবশ্যই English এ Answer করবেন।  টেনশন নিয়েন না EMBA Viva তেমন Matter করেনা।  Chance টা MCQ+Written এর উপর depend করে। আপনার মার্কস তাদের সামনে থাকবে সে অনুযায়ী তারা প্রশ্ন করবে যদি আপনার মার্কস ভাল হয় তাহলে আপনাকে ঘামড়িয়ে দিবার জন্য বেশি প্রশ্ন করতে পারে। ঘাবড়াবেন না যদি না পারেন বলবেন এখন মনে করতে পারছি না এটাই এনাফ। তাছাড়া সাধারণত ৩ থেকে 4 টা প্রশ্ন করে সবাইকে। আপনাকে প্রশ্ন কম করলো কেন তা নিয়েও চিন্তা করবেন না কারন তাদের হাতে সময় খুবই কম।  <br />
Best of luck. 
Happy Preparing ...

     </p>

   <p className=' font-bold text-black'>Shuvro Shaha Md. Al-Amin <br />
EMBA (40th Batch), <br />
Department of Finance, University of Dhaka <br />
Ex Master Academy Student. <br />
On behalf of Arif vaia. <br />

</p>
</div>
<div className=' flex-1 hidden md:flex flex-col items-center mt-32'>
<h1 className=' font-bold text-2xl my-8'>Recent Blogs</h1>
<div className=' flex flex-col gap-5'>
{
      blogDetilsPage.map((item) => (
        <div key={item.id}
         className=' border border-gray-400 p-3 shadow-md hover:shadow-2xl rounded-sm  group '
        >
          <h1 className=' text-xl  font-semibold text-gray-600'>{item.title}</h1>
          <p className=' text-gray-400'>{item.name}</p>
          
          <Link href={item.url}>
          <button className=" border px-4 py-2 rounded-full group-hover:bg-green-300 hover:font-semibold">Read more</button>
          </Link>
        </div>
      ))
    }
</div>
</div>
</div>
<div className=''>
    <EnrollButton />
    </div>
 <JoinUsLink />
  </div>
  )
}

export default BlogPage8
