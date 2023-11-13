import { Maths } from "./Maths.ts";

// Let `numberOfDaysThisShop` be the number of days that this shop will cover.
const numberOfDaysThisShop = 14;

// Let `quantitiesInStock` be a list of items and their quantities currently in stock at home.
// NOTE: Update this list every time before a shop.
const quantitiesInStock = {
  'Avocadoes': 0,
  'Bananas (5)': 0,
  'Tomatoes': 0,
  'Zuchinnis (750 grams)': 0.4,
  'Capsicums (1 kilo)': 0.3,
  'Cucumbers': 0.225,
  'Carrots (1 kilo)': 0.5,
  'Betroots': 0.45,
  'Swedes': 0.5,
  'Chokoes': 0.475,
  'Green beans': 0,
  'Whole pumpkin': 1,
  'Potatoes Washed Bag 2kg': 2.075,
  'Potatoes': 2.075,
  'Sweet Potatoes': 0.5,
  'Onions (1)': 1,
  'Chicken breasts': 0.375,
  'Turkey breasts': 0,
  'Wraps (8)': 1,
  'Quinoa (1 kilo)': 0,
  'Oat milk (1 liter)': 4,
  'Oats (1.5 kilos)': 0,
  'Oats (750 grams)': 1,
  'Basa fish': 0,
  'Salmon': 0.75,
  'Brown rice (5 kilos)': 8,
  'Chick Peas': 0,
  'Toothpaste': 9,
  'Tofu regular firm (900 grams)': 0,
  'Eggs (12)': 0,
  'Frozen corn (1 kilo)': 1,
  'Frozen peas (1 kilo)': 0,
  'Frozen broccolies (500 grams)': 2,
  'Frozen cauliflowers (500 grams)': 0,
  'Frozen brussel sprouts (500 grams)': 1.25,
  'Mixed berries (1 kilo)': 1.25,
};

class Product {
  // Let `isInCart` be the name of the product. For example, `avocadoes`.
  isInCart: boolean;
  costPerUnit: [number];
  id: number;
  // Let `name` be the name of the product. For example, `avocadoes`.
  name: string;
  // Let `period` be the name of the product. For example, `avocadoes`.
  period: number;
  quantityInCart: number;
  quantityInStock: number;
  quantityRequiredPerPeriod: number;
  quantityRequiredThisShop: number;
  subtotal: number;
  unitType: string;

  constructor(properties) {
    Object.assign(this, properties);
  }
}


class Cart extends Array<Product> {

  addProduct(product: Product) {
    this.push(product);
  }

  getTotal() {
    const subtotals = this.map(product => product.subtotal);
    return +(Maths.addition(subtotals).toFixed(2));
  }

  removeProduct(product: Product) {
    const index = this.indexOf(product);
    this.splice(index, 1);
  }
}




const products = [
  {
    name: 'Avocadoes',
    costPerUnit: [1.3], // dollars
    id: 120080,
    period: 14, // days
		quantityRequiredPerPeriod: 2,
    unitType: 'items',
  },
  {
    name: 'Bananas (5)',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 5,
    unitType: 'kilos',
  },
  {
    name: 'Tomatoes',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'kilos',
  },
  {
    name: 'Zuchinnis (750 grams)',
    originalName: 'The Odd Bunch Zucchini Prepacked 750g',
    costPerUnit: [2.3], // dollars
    id: 825869,
    period: 14, // days
		quantityRequiredPerPeriod: 2,
    unitType: 'bags',
  },
  {
    name: 'Capsicums (1 kilo)',
    originalName: 'The Odd Bunch Capsicum Prepacked 1kg',
    costPerUnit: [3.9], // dollars
    id: 825870,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'bags',
  },
  {
    name: 'Cucumbers',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'kilos',
  },
  {
    name: 'Carrots (1 kilo)',
    originalName: 'The Odd Bunch Carrot Prepacked 1kg',
    costPerUnit: [1.2], // dollars
    id: 824508,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'bags',
  },
  {
    name: 'Betroots',
    costPerUnit: [6.5], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 1.4,
    unitType: 'kilos',
  },
  {
    name: 'Swedes',
    costPerUnit: [7], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 1.4,
    unitType: 'kilos',
  },
  {
    name: 'Chokoes',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 1.4,
    unitType: 'kilos',
  },
  {
    name: 'Green beans',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 0.3,
    unitType: 'kilos',
  },
  {
    name: 'Whole pumpkin',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 0.4,
    unitType: 'kilos',
  },
  {
    name: 'Potatoes Washed Bag 2kg',
    originalName: 'Woolworths Washed Potatoes Bag 2kg',
    costPerUnit: [4], // dollars
    id: 262783,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'bags',
  },
  {
    name: 'Potatoes',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 2.1,
    unitType: 'kilos',
  },
  {
    name: 'Sweet Potatoes',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 2.1,
    unitType: 'kilos',
  },
  {
    name: 'Onions (1)',
    costPerUnit: [0], // dollars
    id: -1,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'kilos',
  },

  // POULTRY
  {
    name: 'Chicken breasts',
    originalName: 'Woolworths Rspca Approved Chicken Breast Fillet Min. 250g',
    costPerUnit: [11], // dollars
    id: 710953,
    period: 14, // days
		quantityRequiredPerPeriod: 0.525,
    unitType: 'kilos',
  },
  {
    name: 'Turkey breasts',
    originalName: 'Ingham\'s Turkey Breast Strips 400g',
    costPerUnit: [8.5], // dollars
    id: 67763,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'packages',
  },

  // ANOTHER AISLE

  {
    name: 'Wraps (8)',
    originalName: 'Woolworths Wholegrain Wrap 8pk 360g',
    costPerUnit: [2.5], // dollars
    id: 634919,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'bags',
  },
  {
    name: 'Quinoa (1 kilo)',
    originalName: 'Macro White Quinoa 1kg',
    costPerUnit: [10], // dollars
    id: 499695,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'bags',
  },

  // BREAKFAST ITEMS
  {
    name: 'Oat milk (1 liter)',
    originalName: 'Macro Organic Oat Milk Unsweetened 1l',
    costPerUnit: [2.25], // dollars
    id: 150166,
    period: 14, // days
		quantityRequiredPerPeriod: 4,
    unitType: 'cartons',
  },
  {
    name: 'Oats (1.5 kilos)',
    originalName: 'Woolworths Australian Rolled Oats 1.5kg',
    costPerUnit: [2.60], // dollars
    id: 196293,
    period: 14, // days
		quantityRequiredPerPeriod: 2,
    unitType: 'bags',
  },
  {
    name: 'Oats (750 grams)',
    originalName: 'Woolworths Rolled Traditional Oats 750g',
    costPerUnit: [1.40], // dollars
    id: 150166,
    period: 14, // days
		quantityRequiredPerPeriod: 3,
    unitType: 'bags',
  },

  // SEAFOOD
  {
    name: 'Basa fish',
    originalName: 'Woolworths Freshwater Basa Fillets Thawed Per Kg',
    costPerUnit: [11], // dollars
    id: 87465,
    period: 14, // days
		quantityRequiredPerPeriod: 0.9,
    unitType: 'kilos',
  },
  {
    name: 'Salmon',
    originalName: 'Salmon Tasmanian Atlantic Fillets Skinned & Boned Per Kg',
    costPerUnit: [36], // dollars
    id: 126497,
    period: 14, // days
		quantityRequiredPerPeriod: 0.525,
    unitType: 'kilos',
  },

  // ANOTHER AISLE
  {
    name: 'Brown rice (5 kilos)',
    originalName: 'Sunrice Brown Rice 5kg',
    costPerUnit: [19], // dollars
    id: 126497,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'bags',
  },
  {
    name: 'Chick Peas',
    originalName: 'Woolworths Chickpeas No Added Salt 420g',
    costPerUnit: [1.1], // dollars
    id: 259399,
    period: 14, // days
		quantityRequiredPerPeriod: 2,
    unitType: 'cans',
  },

  // TOILETRIES
  {
    name: 'Toothpaste',
    originalName: 'All Smiles Total Care Toothpaste 140g',
    costPerUnit: [1.5], // dollars
    id: 581163,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'tubes',
  },

  // FROM THE FRIDGE
  {
    name: 'Tofu regular firm (900 grams)',
    originalName: 'Evergreen Original Tofu Regular Firm 900g',
    costPerUnit: [5.15], // dollars
    id: 119028,
    period: 14, // days
		quantityRequiredPerPeriod: 3,
    unitType: 'packages',
  },
  {
    name: 'Eggs (12)',
    originalName: 'Woolworths 12 Extra Large Free Range Eggs 700g',
    costPerUnit: [5.6], // dollars
    id: 175905,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'trays',
  },

  // FROM THE FREEZER
  {
    name: 'Frozen corn (1 kilo)',
    originalName: 'Woolworths Corn Kernels 1kg',
    costPerUnit: [4.2], // dollars
    id: 768570,
    period: 14, // days
		quantityRequiredPerPeriod: 0.5,
    unitType: 'bags',
  },
  {
    name: 'Frozen peas (1 kilo)',
    originalName: 'Essentials Frozen Peas 1kg',
    costPerUnit: [0], // dollars
    id: 96845,
    period: 14, // days
		quantityRequiredPerPeriod: 0.5,
    unitType: 'bags',
  },
  {
    name: 'Frozen broccolies (500 grams)',
    originalName: 'Woolworths Broccoli Florets 500g',
    costPerUnit: [3], // dollars
    id: 768559,
    period: 14, // days
		quantityRequiredPerPeriod: 3,
    unitType: 'bags',
  },
  {
    name: 'Frozen cauliflowers (500 grams)',
    originalName: 'Woolworths Cauliflower Florets 500g',
    costPerUnit: [3], // dollars
    id: 768560,
    period: 14, // days
		quantityRequiredPerPeriod: 3,
    unitType: 'bags',
  },
  {
    name: 'Frozen brussel sprouts (500 grams)',
    originalName: 'Woolworths Brussels Sprouts 500g',
    costPerUnit: [3], // dollars
    id: 768583,
    period: 14, // days
		quantityRequiredPerPeriod: 2,
    unitType: 'bags',
  },
  {
    name: 'Mixed berries (1 kilo)',
    originalName: 'Woolworths Frozen Mixed Berries 1kg',
    costPerUnit: [11], // dollars
    id: 768583,
    period: 14, // days
		quantityRequiredPerPeriod: 1,
    unitType: 'bags',
  },
].map(product => new Product(product));

products.forEach(product => {
  product.isInCart = false;
  product.quantityInStock = quantitiesInStock[product.name];
  product.quantityRequiredThisShop = Math.max(+(((product.quantityRequiredPerPeriod / product.period) * numberOfDaysThisShop) - product.quantityInStock).toFixed(3), 0);
  product.quantityInCart = product.quantityRequiredThisShop;
  product.subtotal =  +(product.quantityRequiredThisShop * product.costPerUnit[0]).toFixed(2);
});

const cart = new Cart(...products);

export {
    products,
    cart
}