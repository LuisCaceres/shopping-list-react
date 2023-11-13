import logo from './logo.svg';
import './App.css';

import { React, useState } from 'react';

import { Product } from './utilities/Product.jsx';

import { cart, products } from './utilities/data.ts';

// Set the title of this web page.
// NOTE: There may be another way to set a title for a web page.
document.title = 'Shopping List';

// const estimated = Maths.addition(products.map(product => (product.quantityInCart * product.costPerUnit[0]).toFixed(2)));

function App() {
  const [total, setTotal] = useState(cart.getTotal());

  function onChange() {
    setTotal(cart.getTotal());
  }

  return (
    <>
      <table onChange={onChange}>
        <thead>
          <tr>
            <th>Add To Cart</th>
            <th>Name</th>
            <th>Quantity Required</th>
            <th>Quantity In Cart</th>
            <th>Subtotal</th>
            <th>Quantity in Stock</th>
            <th>Cost Per Unit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <Product data={product} key={index}></Product>
          )}
        </tbody>
      </table>

      <div className="toolbar">
        {/* <p className="total__container">
          Estimated: <strong>$<span>{estimated}</span></strong>
        </p> */}
        <p className="total__container">
          Total: <strong>$<span>{total}</span></strong>
        </p>
        <p className="button__container">
          <button type="button" id="insert-row">Insert row</button>
        </p>
      </div>
    </>
  );
}

export default App;
