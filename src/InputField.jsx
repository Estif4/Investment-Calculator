
export default function InputField({inputHandler})
{ return (<main className='flex justify-center items-center'>
        <div className='grid grid-cols-2 gap-8 bg-green-900 p-8 w-[450px] m-4'>
          <div className='flex flex-col justify-center'>
            <label className='text-white text-xs'>INITIAL INVESTMENT</label>
            <input id='1' className='w-40 bg-transparent border rounded-sm py-1 mt-1 text-white outline-none focus:border-blue-400' type='number' onChange={inputHandler} />
          </div>
          <div className='flex flex-col justify-center'>
            <label className='text-white text-xs'>ANNUAL INVESTMENT</label>
            <input id='2' className='w-40 bg-transparent border rounded-sm py-1 mt-1 text-white outline-none focus:border-blue-400' type='number'onChange={inputHandler} />
          </div>
          <div className='flex flex-col justify-center'>
            <label className='text-white text-xs'>EXPECTED RETURN</label>
            <input id='3' className='w-40 bg-transparent border rounded-sm py-1 mt-1 text-white outline-none focus:border-blue-400' type='number'onChange={inputHandler} />
          </div>
          <div className='flex flex-col justify-center'>
            <label className='text-white text-xs'>DURATION</label>
            <input id='4' className='w-40 bg-transparent border rounded-sm py-1 mt-1 text-white outline-none focus:border-blue-400' type='number'onChange={inputHandler} />
          </div>
        </div>
      </main>)}