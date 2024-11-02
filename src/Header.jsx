import images from './assets/images4.png';
export default function Header(){
  return (<header className='flex flex-col justify-center gap-4 items-center'>
        <img src={images} alt='investment calculator' className='w-16' />
        <h1 className='text-white font-semibold text-2xl'>Investment Calculator</h1>
      </header>)}