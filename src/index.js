import React from 'react'
import ReactDOM from 'react-dom/client'
import Base_Navigation_Bar from './Components/Base_Navigation_Bar'




const Applayout = ()=>{
    return (
        <>
        <Base_Navigation_Bar/>
        <div >
            <h1 className='abc'>this is h1</h1>
        </div>
        <div className="body_">
            <h1>how are  you sweety</h1>  
          </div>
        </>
    )
    
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);