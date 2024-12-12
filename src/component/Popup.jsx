import React from 'react'

const Popup = ({setPopUp}) => {
    const handlePopUp = ()=>{
        setPopUp(false)
        window.location.reload();
    }

  return (
    <>
    <div className="h-[250px] p-4 absolute left-[40%] w-[400px] border rounded flex flex-col justify-around items-center bg-gray-900 text-white">
    <h1 className='text-center underline text-2xl text-green-500'>Success</h1>
    <p className='text-center text-sm'>Your Massage Has Been Sent ...</p>
    <button className='p-2 px-4 rounded bg-blue-500 text-white font-bold' onClick={handlePopUp}>Okay</button>
    </div>
    </>
  )
}

export default Popup