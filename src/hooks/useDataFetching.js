import { useEffect, useState } from 'react'

const API_URL = 'https://www.jsonkeeper.com/b/CJI9'

const useDataFetching = () => {
  const [pageData, setPageData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL) // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch pageData')
        }
        const jsonData = await response.json()
        console.log('Data==>',jsonData)
        setPageData(jsonData)
      } catch (e) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { pageData, isLoading, error }
}

export default useDataFetching
