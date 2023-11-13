import { React, useState } from "react";

function Product({data}) {
  const [costPerUnit, setCostPerUnit] = useState(data.costPerUnit[0]);
  const [quantityInCart, setQuantityInCart] = useState(data.quantityInCart);
  const [subtotal, setSubtotal] = useState((data.quantityInCart * data.costPerUnit[0]).toFixed(2));

  function handleCostPerUnitChange({target}) {
    setCostPerUnit(target.value);
    data.subtotal = (target.value * quantityInCart).toFixed(2);
    setSubtotal(data.subtotal);
  }

  function handleQuantityInCartChange({target}) {
    setQuantityInCart(target.value);
    data.subtotal = (target.value * costPerUnit).toFixed(2);
    setSubtotal(data.subtotal);
  }

  return (
    <tr>
      <td>
        <input type="checkbox" value={data.inCart} />
      </td>
      <td>{data.name}</td>
      <td>{data.quantityRequired} {data.unitType}</td>
      <td>
          <input className="quantity-in-cart" inputMode="decimal" value={quantityInCart} onChange={handleQuantityInCartChange}/> 
          { data.unitType }
      </td>
      <td>${subtotal}</td>
      <td>{ data.quantityInStock }</td>
      <td>
        $<input inputMode="decimal" value={costPerUnit} onChange={handleCostPerUnitChange}/>
      </td>
    </tr>
  );
}

export {
  Product
}
