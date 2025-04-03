import React from 'react'

export default function Item() {
  return (
    <div className="item">
      <li>
        <label>
          <input type="checkbox" />
          <span>Item</span>
        </label>
        <button className="btn btn-danger" style={{display: 'none'}}>刪除</button>
      </li>
    </div>
  )
}
