import React from 'react'

const Coupon = ({item}) => {
  return (
    <>
        <div className="container-coupon">
            <div className="coupon-card">
                <h3>{item.percentage} Flat OFF from {item.company} </h3>
                <di className="coupon-row">
                    <span id="cpnCode">{item.code}</span>
                    <span id="cpnBtn" className='bg-blue-800 rounded-lg shadow-lg'>Copy Code</span>
                </di>
                <p>Valid Till: {item.date}</p>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
        </div>
    </>
  )
}

export default Coupon