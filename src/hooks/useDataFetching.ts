import { useEffect, useState } from 'react'

import data1 from '../api/json/Page1.json'
import data2 from '../api/json/Page2.json'
import data3 from '../api/json/Page3.json'

interface DataItem {
  name: string
  'poster-image': string
}
// custom hook to fetch JSON locally and handle load more data on pagination
const useDataFetching = (initialData: DataItem[]) => {
  const [data, setData] = useState<DataItem[]>(initialData)
  const [page, setPage] = useState<number>(1)
  const [title, setTitle] = useState<string>('')

  const fetchData = () => {
    let response: DataItem[] = []
    switch (page) {
      case 1:
        response = data1.page['content-items'].content
        setTitle(data1.page.title)
        break
      case 2:
        response = data2.page['content-items'].content
        setTitle(data1.page.title)
        break
      case 3:
        response = data3.page['content-items'].content
        setTitle(data1.page.title)
        break
      default:
        response = []
        break
    }

    setData((prevData) => [...prevData, ...response])
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return { data, title, handleLoadMore, page }
}

export default useDataFetching
