import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { view_data } from './Redux/Action/action';

const View = () => {

  const dispatch = useDispatch();
  // const
  useEffect(() => {
    dispatch(view_data());
  }, [])

  let userRecord = useSelector(state => state.user.Users)
  console.log(userRecord);
  return (
    <div>

      <h1 className='text-white bg-secondary text-center mb-0 py-2'>Api Axios Method</h1>
      <table className="table border table-secondary table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Title</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {
            userRecord.map((u, i) => {
              return (
                <tr key={i}>
                  <td>{u.id}</td>
                  <td>{u.title}</td>
                  <td>{u.brand == null || "" ? "-" : u.brand} </td>
                  <td>
                    <img src={u.thumbnail} width={50} height={50} alt="" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default View
