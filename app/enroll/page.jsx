'use client'
import axios from 'axios'
import React, {  useState } from 'react'

const EnrollPage = () => {
   // form state
   const [name, setName] = useState('')
   const [university, setUniversity] = useState('')
   const [courseName, setCourseName] = useState('')
   const [email, setEmil] = useState('')
   const [mobile, setMobile] = useState('')

   //Copied from JS Solution Youtube Channel
 
   // retrieve data state
  //  const [data, setData] = useState('null')
 
   // submit event
   const handleSubmit = (e) =>{
     e.preventDefault();
     // console.log(name, email, university, courseName,mobileNumber)
 
 
     //  our object to pass
     const data = {
       Name:name, 
       University:university, 
       MobileNumber:mobile, 
       Email:email, 
       CourseName:courseName
     }
     axios.post('https://sheet.best/api/sheets/bc925f84-97f0-4ac4-bbc7-dd0f13e89a95', data).then(response => {
       console.log(response)
       setName('')
       setUniversity('')
       setCourseName('')
       setMobile('')
       setEmil('')
       })
   };
 
  return (
    <div className=' p-6 flex justify-center  items-center mt-[40px] 
    '>
           <div className='  bg-blue-950 max-w-[600px] rounded-md p-10 '>
          <h1 className=' text-4xl font-bold text-center m-4  text-red-700'>Enroll Now</h1>
          <div className=''>
          <form action="" className=' min-w-[350px] border-none text-green-500 text-xl'
           onSubmit={handleSubmit}
          >
             <label htmlFor="Name">Name:</label><br />
             <input type="text" required  placeholder='Enter Your Name' 
             onChange={(e)=> setName(e.target.value)}
             value={name}
              className=' border m-2'
             />
             <br /> 
             <label htmlFor="University">University/college Name:</label><br />
             <input type="text" placeholder='Enter Your University/College Name'
             className=' border m-2' 
             onChange={(e)=> setUniversity(e.target.value)}
             value={university}
             />
             <br />
    
             <label htmlFor="">Mobile:</label> <br />
             <input type="number" required placeholder='Enter Your Mobile number' 
             className=' border m-2'
             onChange={(e)=> setMobile(e.target.value)}
             value={mobile}
             />
             <br />
             <label htmlFor="">Enter Your Course Name:</label> <br />
             <input type="text" required placeholder='Iba Mba, BIBM, English,EMBA' 
             className=' border m-2'
              onChange={(e)=> setCourseName(e.target.value)}
              value={courseName}
             />
           
             
             <br />
             <label htmlFor="">Enter Your Email</label> <br />
             <input type="email" required  placeholder=' Enter Your Email'
             className=' border m-2'
               onChange={(e)=> setEmil(e.target.value)}
               value={email}
             />
            <div>
            <button type='submit'
             className=' bg-red-700 text-white px-4 py-2 rounded-full my-2 hover:bg-red-400 text-xl font-semibold'
            >Submit</button>
            </div>
          </form>
          </div>
          </div>
        </div>
  )
}

export default EnrollPage
