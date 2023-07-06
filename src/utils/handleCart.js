const handleAddToCart = (index, cartItems, setCartItems)=>{
    !cartItems.includes(index) && setCartItems([...cartItems, index])
}
const handleRemoveFromCart = (index, cartItems, setCartItems)=>{
    cartItems.includes(index) && setCartItems(cartItems.filter(item => item !== index))
}

const handleRemoveAll = (setCartItems)=>{
    setCartItems([])
}
export {handleAddToCart, handleRemoveFromCart, handleRemoveAll};