import React, { useEffect, useState } from 'react'
import { data } from "../data"
import { useLocation, withRouter } from 'react-router-dom';

export default function SearchResults(props) {
  var [searchData, setSearchData] = useState({})
  const [searchText, setSearchText] = useState("")
  // const [searchText, setSearchText] = useState("");
  let fdata = data
  var [searchQuery, setSearchQuery] = useState([])
  const name = new URLSearchParams(window.location.search).get('q');
  // setSearchQuery()
  const excludeColumns = ["productURL", "imgURL"];
  const lowercasedValue = name.toLowerCase().trim();
  if (lowercasedValue === "") fdata = data;
  else {
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
        {/* {fdata[0].productURL} */}
      </div>
    </div>
  )
}