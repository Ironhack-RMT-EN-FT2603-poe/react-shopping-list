import { useState } from "react"

function AddForm(props) {

  const [nameInputValue, setNameInputValue] = useState("")
  const [priceInputValue, setPriceInputValue] = useState(0)

  const handleNameChange = (event) => {
    console.log("user typing something in input name")
    setNameInputValue(event.target.value)
  }

  const handlePriceChange = (event) => {
    if (event.target.value < 0) {
      return
    }
    setPriceInputValue(event.target.value)
  }

  const addNewProduct = (event) => {
    event.preventDefault() // removing all default behaviour of the form

    // 1. we are going to gather the info of the new product
    const newProduct = {
      name: nameInputValue,
      price: priceInputValue,
      isPurchased: false
    }
    console.log(newProduct)
    // 2. look for the state and add a new product

    //* solution 1
    // props.getNewProduct(newProduct)

    //* solution 2
    const clone = structuredClone(props.allProducts)
    clone.push(newProduct)
    props.setAllProducts(clone)
    
    // 3. BONUS. clean the inputs
    setNameInputValue("")
    setPriceInputValue(0)
  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form>

        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleNameChange} value={nameInputValue} type="text" name="name"/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input onChange={handlePriceChange} value={priceInputValue} type="number" min={0} name="price"/>
        </div>

        <button onClick={addNewProduct}>Add</button>

      </form>

    </div>
  )
}

export default AddForm