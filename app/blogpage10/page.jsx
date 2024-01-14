import EnrollButton from '@/components/EnrollButton'
import JoinUsLink from '@/components/JoinUsLink'
import { blogDetilsPage } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPage10 = () => {
  return (
    <div className='p-6 md:px-20 lg:px-40'>
    <div className='  flex flex-row justify-between gap-10'>
    <div className=' max-w-[750px]'>
   <h1 className=' text-2xl font-bold md:text-3xl lg:text-4xl text-black'>IBA -প্রথম স্থান অধিকারীর ৫ পরামর্শ  </h1>
   <p className=' mb-5 text-gray-500'><span className=' text-gray-400'>By </span>Master Academy</p>
   <Image src={'/blog10.png'} alt='' height={400} width={700} />

   <p className=' my-5 text-gray-600'>
   ঢাকা বিশ্ববিদ্যালয়ে আইবিএর ভর্তি পরীক্ষায় প্রথম হয়েছিলেন আদিব আহমেদ খান। এবার যাঁরা IBA তে ভর্তি হতে চান, তাঁদের জন্য আদিবের পাঁচ পরামর্শ— <br /> <br />
১. ৯০ মিনিটের পরীক্ষায় যাঁরা বুদ্ধিমত্তার সঙ্গে ‘সময়’টা কাজে লাগাতে পারবেন, তাঁরাই এগিয়ে থাকবেন। তাই বলে ধৈর্য হারালে চলবে না। তাড়াহুড়া করা যাবে না। মাথা ঠান্ডা রাখা সবচেয়ে গুরুত্বপূর্ণ। <br /> <br />
২. একটা প্রশ্ন সমাধানের পেছনে অনেক সময় ব্যয় করা যাবে না। কোনো প্রশ্ন বেশি কঠিন মনে হলে পরের প্রশ্নে চলে যেতে হবে।<br /> <br />
৩. প্রস্তুতির সময় প্রতিটি বিষয়কে সমান গুরুত্ব দিতে হবে। কেননা প্রতিটি বিষয়েই আলাদাভাবে পাস নম্বর লাগবে।<br /> <br />
4. প্রতিদিন ১০-২০টি নতুন ইংরেজি শব্দ শিখুন। কারণ, ভর্তি পরীক্ষায় আপনার ‘ভোকাবুলারি’ একটা গুরুত্বপূর্ণ ভূমিকা রাখবে।<br /> <br />
৫. সময় ব্যবস্থাপনার কৌশল রপ্ত করতে হলে পুরোনো প্রশ্ন সমাধান ও মডেল টেস্টের মাধ্যমে নিয়মিত চর্চা জরুরি।


   </p>
   
   
   <p className=' font-bold text-black'> 
   Adib Ahmed Khan <br />
   Merit Position: First <br />
   IBA, Dhaka University
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
<div className=' p-6  '>
    <EnrollButton />
    </div>
 <JoinUsLink />
  </div>
  )
}

export default BlogPage10
