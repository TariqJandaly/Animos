import Link from "next/link"

const PageContorller = ({ page, isTop }: { page: number, isTop: boolean }) => {
  return (
    <div className={`flex gap-10 text-white justify-center ${isTop ? 'mb-10' : 'mt-10'}`}>
        <button className='bg-violet-500 shadow shadow-violet-500 hover:shadow-violet-700 disabled:shadow-none rounded w-10 h-10 hover:bg-violet-700 transition-colors disabled:bg-gray-500' disabled={ page == 1 }>
            <Link className='flex justify-center items-center w-full h-full' href={`/${page - 1}`}>
                { page - 1}
            </Link>
        </button>
        <p className='flex shadow shadow-violet-700 justify-center items-center py-1 px-2 bg-violet-700 rounded w-10 h-10 transition-colors'>{ page }</p>
        <button className='bg-violet-500 shadow shadow-violet-500 hover:shadow-violet-700 rounded w-10 h-10 hover:bg-violet-700 transition-colors'>
            <Link className='flex justify-center items-center w-full h-full' href={`/${page + 1}`}>
                { page + 1}
            </Link>
        </button>
    </div>
  )
}

export default PageContorller