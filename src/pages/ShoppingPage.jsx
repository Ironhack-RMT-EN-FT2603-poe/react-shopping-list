import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

//* this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingPage() {

  const [ allProducts, setAllProducts ] = useState(testProducts) // all products

  const [ filteredProducts, setFilteredProducts ] = useState(testProducts) // products displayed

  //* initial state. change to empty array when finished with add functionality

  //Solution 1
  // const getNewProduct = (product) => {
  //   console.log(product)
  //   const clone = structuredClone(allProducts)
  //   clone.push(product)
  //   setAllProducts(clone)
  // }

  return (
    <>

      <h1>Shopping List!</h1>
      {/* Solution 1 */}
      {/* <AddForm getNewProduct={getNewProduct}/> */}

      {/* Solution 2 */}
      <AddForm allProducts={allProducts} setAllProducts={setAllProducts}/>

      <SearchBar allProducts={allProducts} setFilteredProducts={setFilteredProducts}/>

      {/* //* all elements of the shopping list will be here */}
      <ProductList allProducts={filteredProducts}/>

    </>
  )
}

export default ShoppingPage