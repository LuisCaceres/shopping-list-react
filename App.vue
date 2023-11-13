<script setup lang="ts">

import { computed, reactive } from 'vue';
import { Maths } from './assets/Maths'
import { products } from './assets/data';

// Set the title of this web page.
// NOTE: There may be another way to set a title for a web page.
document.title = 'Shopping List';

const period = 14;
const numberOfDays = 14;

products.forEach(product => {
  product.quantityRequired = (product.quantityRequired / period) * numberOfDays;
});

products.forEach(product => {
  product.quantityRequired = Math.max((product.quantityRequired - product.quantityInStock).toFixed(3), 0);
  product.quantityInCart = product.quantityRequired;
  product.subtotal =  (product.quantityRequired * product.costPerUnit[0]).toFixed(2);
});

const estimated = Maths.addition(products.map(product => (product.quantityInCart * product.costPerUnit[0]).toFixed(2)));

const state = reactive({
  products,
  foos: computed(() => state.products.map(product => (product.quantityInCart * product.costPerUnit[0]).toFixed(2))),
  inCart: computed(() => state.products.filter(product => product.inCart)),
  subtotals: computed(() => state.inCart.map(product => (product.quantityInCart * product.costPerUnit[0]).toFixed(2))),
  total: computed(() => (Maths.addition(state.subtotals).toFixed(2))),
});

</script>

<template>
  <main>
    <table>
      <tr>
        <th>In?</th>
        <th>Product</th>
        <th>Quantity Required</th>
        <th>Amount</th>
        <th>Stock</th>
        <th>Cost Per Unit</th>
      </tr>
      <tr v-for="(product, i) in state.products">
        <td>
          <input type="checkbox" v-model="product.inCart">
        </td>
        <td>
          {{ product.name }}
        </td>
        <td>
          {{ `${product.quantityRequired} ${product.unitType}` }}
        </td>
        <td class="quantity-in-cart__container">
          <p>
            <input class="quantity-in-cart" inputmode="decimal" v-model="product.quantityInCart"> {{ product.unitType }}
          </p>
          <p>
            $ {{state.foos[i]}}
          </p>
        </td>
        <td>
          {{ product.quantityInStock }}
        </td>
        <td>
            $<input inputmode="decimal" v-model="product.costPerUnit[0]">
        </td>
      </tr>
    </table>

    <div class="toolbar">
      <p class="total__container">
        Estimated: <strong>$<span>{{ estimated }}</span></strong>
      </p>
      <p class="total__container">
        Total: <strong>$<span>{{ state.total }}</span></strong>
      </p>
      <p class="button__container">
        <button type="button" id="insert-row">Insert row</button>
      </p>
    </div>

  </main>
</template>

<style scoped>
table {
  border-collapse: collapse;
}

td,
th {
  padding: 0.5rem;
  border: solid;
}

td:first-of-type {
  text-align: center;
}

td:nth-of-type(3) {
  text-align: right;
}

tr:has(:checked) {
  background-color: aquamarine;
}

th:nth-of-type(3) {
  white-space: pre-line;
}

.price,
.quantity-in-cart {
  width: 3rem;
}

.table__container {
  width: 100%;
  margin-bottom: 1rem;
  overflow: auto;
}

.table__header {
  background-color: black;
  position: sticky;
  top: 0;
  color: white;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
  position: sticky;
  bottom: 0;
  color: white;
}

.button__container,
.total__container {
  margin: 0;
}

#insert-row {
  padding: 1rem;
  border: solid 0.25rem;
}
</style>
