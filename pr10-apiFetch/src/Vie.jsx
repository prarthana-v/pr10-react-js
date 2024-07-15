import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View_Data } from './Redux/action/Action';

const View = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.user.Products)
  console.log(products);

  useEffect(() => {
    dispatch(View_Data());
  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className='text-center my-2 bg-secondary text-white py-2'>Fetch Api Data</h1>
          <table className='table table-striped table-light'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((u, i) => {
                  return (
                    <tr key={i}>
                      <td>{u.id}</td>
                      <td>{u.title}</td>
                      <td>{u.brand == null || "" ? "-" : u.brand} </td>
                      <td>
                        <img src={u.thumbnail} width={40} height={40} alt="" />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default View
