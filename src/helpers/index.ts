// helpers/index.ts
const formatCurrency = (quantity: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(quantity);
  };
  
  export default formatCurrency;  // Exportación por defecto
  