import React, { useEffect, useState } from 'react'
import products from "../data"
import { useLocation } from 'react-router-dom';

export default function SearchResults(params) {
  var [searchData, setSearchData] = useState({})
  var [searchQuery, setSearchQuery] = useState([])
  useEffect(async () => {
    console.log(searchData)
  })
  return (
    <div>

    </div>
  )
}