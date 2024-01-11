'use client'

const QuestionPage = () => {
  return (
    <div className=' p-6 md:px-20 py-14 lg:px-40 overflow-hidden'>
           
      <div className='  flex flex-col justify-center  '>
        <h1 className=' bg-red-800 max-w-[1200px] text-white p-3'>PDFS</h1>
        <table className=' table-auto   overflow-hidden '>
          <tr className=' border cursor-pointer '>
            <td className=' px-[30px] md:px-28  py-3 border'>IBA MBA</td>
            <td className=' px-10 py-3 border text-blue-600'><a href="/demo.pdf" target='_blank'>View</a></td>
            <td className='px-10 py-3 text-blue-600'><a href="/demo.pdf" target='_blank'>Download</a></td>
          </tr>
          
          <tr className=' border cursor-pointer '>
            <td className=' px-[30px] md:px-28  py-3 border'>BIBM</td>
            <td className=' px-10 py-3 border text-blue-600'><a href="/demo.pdf" target='_blank'>View</a></td>
            <td className='px-10 py-3 text-blue-600'><a href="/demo.pdf" target='_blank'>Download</a></td>
          </tr>

          <tr className=' border cursor-pointer '>
            <td className=' px-[30px] md:px-28  py-3 border'>JOB</td>
            <td className=' px-10 py-3 border text-blue-600'><a href="/demo.pdf" target='_blank'>View</a></td>
            <td className='px-10 py-3 text-blue-600'><a href="/demo.pdf" target='_blank'>Download</a></td>
          </tr>

          <tr className=' border cursor-pointer '>
            <td className=' px-[30px] md:px-28  py-3 border'>ENGLISH</td>
            <td className=' px-10 py-3 border text-blue-600'><a href="/demo.pdf" target='_blank'>View</a></td>
            <td className='px-10 py-3 text-blue-600'><a href="/demo.pdf" target='_blank'>Download</a></td>
          </tr>
         
        </table>
      </div>
    </div>
  )
}

export default QuestionPage
