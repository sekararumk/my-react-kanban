import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Meta = () => {

  const [listData, setListData] = useState([])

  useEffect(() => {
    axios.get('/api'
    ).then ( res => {
      console.log(res)
      setListData([...res.data]);
    })
  }, []);

  return (
    <>
    {listData.map( (data) => {
      return (
        <div  key={data.id}>
          <h4 className="font-bold font-poppins mt-4 ml-4">{data.title}</h4>
          <p className="mt-1 ml-4 mb-4">{data.description}</p>
        </div>
      )
    })}
    </>
  )
}

export default Meta