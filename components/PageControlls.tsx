'use client'

import { useSearchParams } from "next/navigation"
import querystring from 'querystring'

const PageControlls = () => {

  let searchParams = useSearchParams()

  const search = searchParams.get('q')

  let p = searchParams.get('p')

  const GoPage = (page: number) => {

    let data: any = {}

    if(search) {
      data["q"] = search
    }

    data["p"] = page

    console.log(data)
    console.log(querystring.stringify(data))

    window.location.replace('http://' + window.location.host + "/?" + querystring.stringify(data))
  }

  return (
    <>
      {!window.location.href.includes("?q=") && <div className="flex justify-center gap-10 mt-5">
        {p && p != "1" && p != "0" &&
          <button onClick={() => GoPage(parseInt(p ? p : "1") - 1)} className="text-white bg-violet-500 rounded px-3 py-1">
            Previous
          </button>
        }

        <button onClick={() => GoPage(parseInt(p ? p : "1") + 1)} className="text-white bg-violet-500 rounded px-3 py-1">
          Next
        </button>
      </div>
    }
    </>
  )
}

export default PageControlls