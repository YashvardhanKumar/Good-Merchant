import React, { useEffect, useState } from 'react'
import { data } from "../data"
import { useLocation, withRouter } from 'react-router-dom';

export default function SearchResults(props) {

  let fdata = data
  const url = new URLSearchParams(window.location.search);
  let name = url.get('q').toLowerCase().trim()
  console.log(name)
  const excludeColumns = ["productURL", "imgURL"];
  if (name !== 'all' && !name.startsWith('all')) {
    const lowercasedValue = name;
    fdata = data.filter(item => Object.keys(item).some(key =>
      excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
      ))
    }

return (
  <div>
    <div>
      <ul>
        {fdata.map(product =>
          <li>{product.name}</li>
        )}
      </ul>
    </div>
  </div>
)
}