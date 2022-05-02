import React from 'react'
import { Table} from 'antd';
import 'antd/dist/antd.css';
import {useState,useEffect} from 'react';


const App = () => {
  const [dataSource, setdataSource] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [pageSize, setpageSize] = useState(10)
  
  const columns=[
    {
      key:'1',
      title:'ID',
      dataIndex:'id',
      sorter: (record1,record2)=>{
        return record1.id>record2.id
      },
      
    },
    {
      key:'2',
      title:'User ID',
      dataIndex:'userId',
      sorter: (record1,record2)=>{
        return record1.userId>record2.userId
      }
    },
    {
      key:'3',
      title:'status',
      dataIndex:'completed',
      render:(completed)=>{
        return <p>{(completed?'complete':'in progress')}</p>
      },
      filters:[
        {text:'Complete',value:true},
        {text:'In Progress',value:false},

      ],
      onFilter:(value,record)=>{
       return  record.completed=== value
      }
    },
    {
      key:'4',
      title:'title',
      dataIndex:'title',
      sorter: (record1,record2)=>{
        return record1.title>record2.title
      }
     
    },
    
    
    
    
  
  ]

  useEffect(() => {
    setloading(true)
    fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json())
    .then(data=>{
      setdataSource(data)
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      setloading(false)
    })
  }, [])
  
  return (
    <div>
   <div className='App'>
     <header className='App-header'>
       <Table
       loading={loading} 
       columns={columns} dataSource={dataSource}
       pagination={{
         current:page,
         pageSize:pageSize,
         onChange:(page,pageSize)=>{
           setpage(page);
           setpageSize(pageSize)
           
         }
       }

       }

       >
        


       </Table>
     </header>

   </div>

    </div>
  )
}

export default App
























// import React from 'react'

// const App = () => {
//   return (
//     <div className='container'>  <div className="mb-3 row">
//          <h1 className='container'>Please Login </h1>
         
         

//     <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//       <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
//     </div>
//   </div>
//   <div className="mb-3 row">
//     <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//       <input type="password" className="form-control" id="inputPassword"/>
//       <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
// <label class="btn btn-primary" for="btn-check">Submit</label>
//     </div>
//   </div></div>
//   )
// }

// export default App