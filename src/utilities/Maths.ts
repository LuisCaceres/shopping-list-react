/**
 * 
 */
class Maths {

    /**
     * 
     * @param values 
     */
    static addition(values: [number]) {
      return +values.map(value => parseFloat(value)).reduce((accumulator, value) => {
        return accumulator + value;
      }, 0).toFixed(2);
    }
  }


  export {
    Maths
  }