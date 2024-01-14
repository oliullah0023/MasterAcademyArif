import EnrollButton from '@/components/EnrollButton'
import JoinUsLink from '@/components/JoinUsLink'
import {  blogDetilsPage } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPage7 = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40 gap-10'>
      <div className='flex flex-row justify-between '>
    <div className=' max-w-[750px]'>
   <h1 className=' text-2xl font-bold md:text-3xl lg:text-4xl text-black'>Dhaka University (EMBA), Marks Distribution:</h1>
   <p className=' mb-5 text-gray-500'><span className=' text-gray-400'>By </span>Master Academy</p>
   <Image src={'/blog7.png'} alt='' height={400} width={400} />

   <h1 className=' mt-5 font-bold text-red-600 text-xl'>Marks Distribution:</h1>
   <p>
   1.	English-20 <br />
2.	General Knowledge-10<br />
3.	Critical Reasoning-05<br />
4.	Math-20<br />
5.	Written-25<br />
6.	Viva-05<br />
7.	Education and job Experience-10 <br />

   </p>

   <h1 className=' mt-5 font-bold text-green-600 text-xl'>English::</h1>

   <p>
   1.	Passage ( 5 Marks ): Multiple Choice types. Practice from any books or Master Academy Sheet <br />
2.	Sentence Correction: ( 5 marks ) , ( Cliffs Toefl Book Enough )  <br /><br />
Alternative: <br />
•	Conditional Sentence (Fazlul Hoque)<br />
•	Right Form of Verb (Fazlul Hoque)<br />
•	Subject Verb Agreement (Fazlul Hoque)<br />
•	Tense (Fazlul Hoque)<br />
•	Master Academy&apos;s Sheet (Lecture 7 & Exercise A)<br /><br />

2.	Preposition: ( 5 marks )<br />
•	From Fazlul Hoque&apos;s book.<br />
•	Group Verb (Fazlul Hoque)<br />
•	Master Academy&apos;s Sheet.<br /><br />

3.	Fill in the blanks: ( 5 marks )<br />
•	Vocabulary Master.<br />
•	EMBA Test Paper.<br />
•	Phrase and Idioms (Fazlul Hoque)<br />

   </p>

   <h1 className=' mt-5 font-bold text-green-600 text-xl'>Math:</h1>

   <p>
   1.	Master Academy&apos;s Sheet.<br />
2.	Selected Chapters:<br />
•	Average +Age.<br />
•	Percentage +Interest.<br />
•	Profit/Loss +Work Done.<br />
•	Ratio.<br />
•	Algebra.<br />
•	Speed (Boat, Stream, Train).<br />
•	Geometry (Triangle, Quadrilateral, Circle).<br />
3.	Test Paper.<br />

   </p>

   <h1 className=' mt-5 font-bold text-green-600 text-xl'>Critical Reasoning:</h1>
   <p>
   •	EMBA Test Paper.
   </p>

   <h1 className=' mt-5 font-bold text-green-600 text-xl'>General Knowledge:</h1>
    <p>
    1.	Previous 3 Months Current Affairs.<br />
    2.	Latest News Bulletin.<br />

    </p>

   <h1 className=' mt-5 font-bold text-green-600 text-xl'>Written Test: ( 25 Marks )</h1>
    <p>
    1.	Translation (English to Bangla)-05<br />
2.	Translation (Bangla to English)-05<br />
3.	Precise-05<br />
4.	Short Note-05<br />
5.	Essay/Paragraph-05<br /><br />
(Master Academy&apos;s Sheet + Selected Topics)

    </p>

   
   {/* <p className=' my-5 text-gray-600'>
   আমরা অনেকেই একের পর এক ইন্টারভিউ দেই কিন্তু চাকরি হয় না। নিশ্চয় আমরা কোনো না কোনো কারণে চাকরিদাতার দৃষ্টি আকর্ষণ করতে পারি না। যে কারণে ইন্টারভিউ-বোর্ড থেকে বাদ পড়ে যাই। ইন্টারভিউ থেকে বাদ পড়ার এরকম অর্ধশত কারণ উল্লেখ্য করা হল- <br />
১. সার্কুলারে উল্লেখিত চাকরি বর্ণনার সঙ্গে না রেখে উত্তর দিতে না পারা।<br />
২. অল্পতে ঘাবড়ে যাওয়া বা মানসিক চাপ গ্রহণ করতে না পারা। সাধারণত প্রথম না বহুদিন পর ইন্টারভিউ দিতে গেলে এরকম । <br />
৩.শুধু একটি চাকরি পাওয়ার জন্য যে কোনো নৈতিক ও
অনৈতিক কাজ করতে অনাপত্তি প্রকাশ। <br />
4. কাজের চেয়ে বেতন, সুযোগ সুবিধা, ছুটি ইত্যাদি 
বিষয়ে বেশি আলাপ করা।<br />
৫. সিদ্ধান্ত নিতে না পারা অথবা সিদ্ধান্ত নেয়ার জন্য অপরের উপরে নির্ভরশীলতা প্রকাশ করা।<br />
৬. পূর্ববর্তী চাকরির ব্যাপারে নেতিবাচক মনোভাব প্রকাশ। <br />
7.উক্ত প্রতিষ্ঠান সম্পর্কে কোনো প্রকারের ধারা নিয়ে ইন্টারভিউ দিতে যাওয়া।<br />
৮.সার্কুলারে উল্লেখিত কার্যাবলীর সঙ্গে সামান্যপূর্ন নয়<br />
এমন কাজের ব্যাপারে আগ্রহ প্রকাশ বা অতিরিক্ত কথা বলা।<br />
৯. যে কোনো বিষয়ে অজুহাত দাঁড় করানো ও তর্কে
জড়ানো।<br />
১০. যোগ্যতার চেয়ে অধিক বেতনের কথা বলা। <br />
১১. গুরুগম্ভির, সবজান্তা মূলত আঁতেল ভাব প্রকাশ করা।<br />
১২. ক্যারিয়ারের ব্যাপারে পরিকল্পনার অভাব।<br />
১৩. সৌজন্যবোধের ও টিম ওয়ার্কের অভাব।<br />
১৪. নিজের কর্মক্ষেতের বিষয়ে জ্ঞানের অভাব।<br />
১৫. সিভিতে অতিরিক্ত ও মিথ্যা তথ্য প্রদান করা। <br />
১৬. অযথা হাত পা নড়াচড়া করা, হাই তোলা বা কোন শব্দ করা। <br />
১৭. আবেদনপত্র ভুলভাবে পূরণ করা।<br />
১৮. নিজের যোগ্যতার পরিবর্তে অন্য কোনো বিশেষ ব্যক্তির পরিচয়কে কাজে লাগানোর চেষ্টা করা।<br />
১৯. কঠিন পরিবেশে কাজ করতে অনীহা প্রকাশ করা। <br />
২০. আগের কোনো বাজে রেকর্ড । (অর্থনৈতিক কাজের জন্য চাকরি চলে যাওয়া)। <br />
২১. শিক্ষা জীবনে বাজে রেজাল্ট।<br />
২২. উচ্চাবিলাশী ও অহংকারী মনোভাব প্রকাশ করা।<br />
২৩. দেরিতে ইন্টারভিউ দিতে যাওয়া এবং ইন্টারভিউ দিতে যাওয়ার সময় কলম ও অন্যান্য প্রয়োজনীয় কাগজপত্র নিয়ে যেতে ভুলে যাওয়া।<br />
২৪. একটি মিথ্যা তথ্যকে সত্য করার জন্য একের পর এক মিথ্যা বলা।<br />
২৫. বা শিক্ষা অনুযায়ী পরিপক্ষতার অভাব। <br />
২৬. সিদ্ধান্ত গ্রহণে একরোখা মনোভাব প্রকাশ।<br />
২৭. সামাজিক কর্মকাণ্ডে অংশগ্রহনের অভাব। <br />
২৮. প্রশ্ন ঠিকভাবে না শুনে উত্তর করা।<br />
২৯. কোম্পানির নিয়ম বিরোধী চিন্তা-চেতনার বহিঃপ্রকাশ।<br />
৩০. সঠিক উত্তর জানা না থাকলেও ভুল উত্তর দিয়ে ইন্টারভিউ বোর্ডের উপস্থিত সবাইকে ইম্প্রেস করার ব্যর্থ চেষ্টা।<br />
৩১. কাজের ধরন না জেনে ইন্টারভিউ দিতে চলে আসা। <br />
৩২. প্রশ্ন উত্তরের ক্ষেত্রে অপ্রাসঙ্গিক বিষয়বস্তু টেনে আনা। <br />
৩৩. নিম্নমানের শব্দচয়ন, ব্যাকারণের ভুল প্রয়োগ ও কিছু কিছু ক্ষেত্রে বেশি প্রকাশ। <br />
৩৪. আত্মবিশ্বাসের অভাব, চ্যালেঞ্জ নিতে না পারা, ভীতি প্রকাশ এবং কমফোর্টের বাইরে বেরিয়ে এসে কাজ করতে না চাওয়ার মনোভাব।<br />
৩৫. কাজের বিষয় আগ্রহ কম এবং কৌতূহলের অভাব।<br />
৩৬. কম্পিটিশনে ভয় থাকা।<br />
৩৭. কৌশল, চাওলা ও উদ্দীপনার অভাব। <br />
৩৮. নিয়োগকর্তার দিকে না তাকিয়ে উত্তর দেয়া।<br />
৩৯. নিয়োগকর্তাকে অতিরিক্ত সম্মান প্রদর্শন করা অথবা
পূর্ববর্তী বসের ব্যাপারে নেগেটিভ কথা বলা। <br />
40. অতিরিক্ত কাজ না করার জন্য করার মনোভাব প্রকাশ। <br />
৪১. মুখ গোমড়া করে থাকা, হাসিমুখে যদি কথা না বলতে পারেন তাহলে ইন্টারভিউ দিতে যাবেন না।<br />
৪২. প্রাক্টিকাল ও জেনারেল নলেজের অভাব।<br />
৪৩. ইন্টারভিউ দিতে গিয়েছো কিন্তু আপনার পোশাক যদি উদ্ভট বেমানান অথবা নিম্নমানের হয় তাহলে তা আপনার নিম্নমানের ব্যক্তিত্ব প্রকাশ করে। <br />
44. কোনো কাজ সহজে করার জন্য কুটকৌশল ইন্টারভিউয়ারদের সামনে বলা।<br />
৪৫. এসেসমেন্ট সেন্টারের রিএুটমেন্ট গুলো মিট করতে না পারার কারণে অনেকে বাদ পড়ে যায়।<br />
৪৬. প্রশ্ন করার পর উত্তর নিতে অতিরিক্ত সময় নেয়া।<br />
47. ইন্টারভিউ দিতে গিয়ে বারবার ফোন চেক করা বা উচ্চ স্বরে  কথা বলা।<br />
৪৮. নিজের দুর্বলতাকে প্রকাশ করা। <br />
৪৯. আমার একটি চাকরি দরকার বা আমাকে নিন এইরকম কথা বলা।<br />
৫০. চুপচাপ থাকা, প্রশ্ন করলে উত্তর দিতে দেরি করা, জড়তা।<br />



   </p>

   
   <p className=' font-bold text-black'>Shuvro Shaha নিয়াজ আহমেদ <br />
CEO, Corporate  Ask

</p> */}
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

export default BlogPage7
