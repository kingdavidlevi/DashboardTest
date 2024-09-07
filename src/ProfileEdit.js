import Avatar from './images/vecteezy_man-avatar-clipart-illustration_9397835.png'

function ProfileEdit(){
    return(
        <section className=" mt-18">
          <div className='pl-110 absolute mt-4'>  <p className="text-black font-medium text-lg">Edit profile</p></div>
            <div className="grid pl-110 place-items-center w-full ">
            <section className='h-16 ml-6 mt-4 relative w-16  grid place-items-center cursor-pointer rounded-full bg-green-300' >
        <img src={Avatar} className=''/>
    </section>
    <section className='w-270 mt-12 '>
     <div className='flex justify-between'>
      <input className='outline-none py-2  rounded-md pl-3 w-80 place placeholder:font-medium bg-white ' type='text' placeholder='First name' />
      <input className='outline-none py-2  rounded-md pl-3 w-80 place placeholder:font-medium bg-white ' type='text' placeholder='last name' />

     </div>
     <input className='outline-none w-270 mt-8 py-2 rounded-md pl-3  place placeholder:font-medium bg-white ' type='text' placeholder='E-mail' />
     <input className='outline-none w-270 mt-8 py-2 rounded-md pl-3  place placeholder:font-medium bg-white ' type='text' placeholder='Optional E-mail' />
     <input className='outline-none w-270 mt-8 py-2 rounded-md pl-3  place placeholder:font-medium bg-white ' type='text' placeholder='Password' />
     <button className='mt-8 green text-white rounded-md px-12 py-2'>Save</button>
   
    </section>
            </div>
        </section>
    )
}
export default ProfileEdit;