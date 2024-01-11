'use client'
import JoinUsLink from '@/components/JoinUsLink'
import React from 'react'
import { FacebookEmbed,  } from 'react-social-media-embed'

const Iba = () => {
  return (
    <div className=' p-6 py-9 md:px-20  lg:px-40 '>

      <div className='flex flex-col md:flex-row md:justify-between'>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}
      className=' '
      >
      <FacebookEmbed url="https://fb.watch/pkXPlm0gZy/?mibextid=Nif5oz" width={550} />
    </div>
     
      <div className=' flex-1 flex flex-col items-center justify-center mt-5'>
        

       <p className=' mt-5 text-xl text-pink-950'>so It&rsquo;s not a coaching or academy it&rsquo;s </p>
       <p className=' text-xl text-orange-600 font-bold'>A #Master_Family</p>
       <p className=' mt-5 text-xl font-bold text-white bg-pink-700 p-2'>start working for your career with Us.</p>
      </div>
      </div>
       <div className=' mt-5 flex flex-col md:flex-row justify-between gap-5  p-3'>
        <div className=' mt-5'>
        <h1 className=' bg-red-800 text-white text-base p-2  font-bold  text-center max-w-[450px] mb-5'>Course Details</h1>

        <h2 className=' font-bold'>এই কোর্সটি করলে যেখানে যেখানে exam দিতে পারবেনঃ</h2>
        <p>1. DU/JU IBA MBA
         
        </p>
        <p>
         2. EMBA(DU/JU/BUP) 
         
        </p>
        <p>
         3. MBM(BIBM)
        
        </p>
        <p>
         4. BANK JOB/BCS/OTHER JOB (MATH/ENGLISH)
       
        </p>
        <p>
        
         5. NTRCA(Math/English)
        </p>
        </div>
         <div>       
          
           <h1 className=' font-bold bg-red-900  p-2 text-white my-5 max-w-[550px]'>আমাদের_IBA_MBA_EMBA_Course_বিশেষত্বঃ</h1>
        <p>
      * সম্পূর্ণ কোর্সটি Math, English, GK, Analytical Ability & Written এর সমন্বয়।<br />
*এই কোর্সটি করলে DU-JU IBA MBA/ EMBA/MBM(BIBM)/ Private University(NSU,EWU,AIUB,UIU etc)/Bank-BCS(Math-English) এ গুলোর একটি পূর্ণাঙ্গ প্রস্তুতি হয়ে যাবে।<br />
* স্থায়ী সদস্য (যতদিন চান্স না হবে ততদিন পর্যন্ত আপনি আমাদের সেবা নিতে পারবেন, তার জন্যে আপনাকে আর কোন ফি দিতে হবে না)।<br />
*যে কোন লেকচার এর পরপরই Group Study করার সুবিধা যাতে করে লেকচারটি বুঝায় কোন অপূর্ণতা না থাকে।<br />
* প্রতি ক্লাসেই পূর্বের লেকচার এর উপর একটি পরীক্ষা নেয়া হয়। ( মোটঃ ২০টি ) <br />
*প্রতি সপ্তাহে ১/২ টি করে Assignment Test নেয়া হয়। ( মোটঃ ২০ টি ) <br />
*সপ্তাহে ৩ দিন করে মোট ক্লাস সংখ্যাঃ ৪৩/৪৫টি (জব হোল্ডার এবং ইন্টারনিদের জন্যে সপ্তাহে ২ দিন ক্লাস) <br />
* প্রতি ক্লাস এ লেকচার শিট দেয়া হয়। <br />
* প্রতি ক্লাস শেষে ১ ঘন্টা team work করানো হয় যাতে করে কোন লেকচার শিট বুঝতে অপূর্ণতা না থাকে এবং basic weak students দের যাতে বুঝতে কোন gap না থাকে । <br />
*  Group Study & Library Facility । <br />
* ফ্রী Mock Viva । <br />
*ফ্রী মডেল টেস্ট। <br />
*মাত্র ২০০০ / ৩০০০ টাকা বাঁচাতে ভুল সিদ্ধান্ত নিবেন না, টাকা একটু বেশী হলেও আপনার চান্সটা নিশ্চিত করুন । আর তার জন্য মাস্টার একাডমী সর্বদাই অঙ্গীকারবদ্ধ । <br />

        </p>
        </div>
       </div>
       <div>
          <p><span className=' font-bold text-xl'>Address:</span> Mirpur Kalshi, 12/E,7/3, Beside Shaheed Zia College(new name: Pallabi Mohila college),<br />
          #Hotline: 0167 30 231 35, 01790724256.</p>
        </div>
        <div className=' mt-6'>
          <p> <span className=' font-bold text-xl'>To get #Free Guideline & Suggestion </span><br />
           Join Our Official Group: <br />
           <a href="https://web.facebook.com/groups/arifsmbaadmission/?ref=bookmarks"
            className=' hover:underline font-semibold hover:text-green-600'
           >https://web.facebook.com/groups/arifsmbaadmission/?ref=bookmarks</a>
           
          </p>
        </div>

        <div className=' mt-6 '>
          <p>!!! Get permanent membership until you get chance. !!! <br />
           !!! Master The Technique Be The Master Of Yourself !!!
        </p>
        </div>

        <JoinUsLink /> 
    </div>
   
  )
}

export default Iba
