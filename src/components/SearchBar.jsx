import { useState } from "react"

function SearchBar(props) {


  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    let search = e.target.value
    setSearchQuery(search)

    // apply the search on the state
    const filteredArr = props.allProducts.filter((product) => { 
      return product.name.includes(search)
    })
    console.log(filteredArr)
    props.setFilteredProducts(filteredArr)
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input onChange={handleSearch} value={searchQuery} type="text" />

    </div>
  )
}

export default SearchBar