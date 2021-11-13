import Image from 'next/image'

export default function Avatar() {
  return (
    <div className="-pt-16 pb-16 flex">
      <div className="p-1 h-[12.5rem] w-[12.5rem] sm:h-[16.5rem] sm:w-[16.5rem] xl:h-[24.5rem] xl:w-[24.5rem] rounded-full mx-auto bg-gray-500 text-center grid items-center">
        <div className="relative h-48 sm:h-64 xl:h-96 rounded-full shadow-2xl">
          <img
            className="absolute top-0 h-full w-full rounded-full object-cover"
            src="/static/images/avatar.webp"
            alt="Chi Nguyen"
          />
        </div>
      </div>
    </div>
  )
}
