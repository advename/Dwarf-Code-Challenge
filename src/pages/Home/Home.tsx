import React, { useEffect } from 'react'
import { axiosClient } from '../../axiosClient'
import { AxiosResponse, AxiosError } from 'axios'
import { useTitle } from '../../hooks/useTitle'
import { useToast } from '../../components/Toast'
/**
 * @returns {JSX.Element}
 */
function Home (): JSX.Element {
  useTitle('Home')
  const toast = useToast()

  useEffect(() => {
    axiosClient({
      method: 'GET',
      // Usually, below URL should be split in two, with baseURL specified in axiosClient
      url   : 'https://www.themealdb.com/API/JSON/V1/1/RANDOM.PHP',
    }).then((response: AxiosResponse) => {
      console.log(response)
      // throw new Error('Trigger an error message to see the toast in action when the AJAX request has an unsuccessful HTTP status code')
    })
      .catch((error: AxiosError) => {
        toast.error('Unable to get data', { lifespan: 10_000_000 })
        console.error(error.message)
      })
  }, [toast])
  return (
    <div>
      Home
    </div>
  )
}

export {
  Home,
}
