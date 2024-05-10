import {useState, useEffect} from 'react'

const HomeRoute = () => {
  useEffect(() => {
    const getFoodDetails = async () => {
      const api = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
      try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getFoodDetails()
  }, [])
  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export default HomeRoute
