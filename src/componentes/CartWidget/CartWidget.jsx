import './CartWidget.css'

const CartWidget = () => {
    const elCarrito = "./carrito.png";
  return (
    <div>
        <img className='elCarrito' src={elCarrito} alt="Carrito de compras" />
        <p>35</p>
    </div>
  )
}

export default CartWidget