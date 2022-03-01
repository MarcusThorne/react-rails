import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Airline(props) {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    console.log(props.match)
    // const slug = props.match.params.slug
    // const url = `/api/v1/airline/${slug}`

    // axios.get(url)
    //   .then(resp => console.log(resp))
    //   .catch(resp => console.log(resp))
  }, [])

  return (
    <div>This is the Airlines#show view for our app.</div>
  )
}

export default Airline
