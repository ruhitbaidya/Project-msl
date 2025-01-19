const products = [
  { id: 1, name: "Light" },
  { id: 2, name: "Table Lamp" },
  { id: 3, name: "Light" },
  { id: 4, name: "Charger" },
  { id: 5, name: "Table Lamp" },
  { id: 6, name: "Light" },
];

const ProductQuantities = () => {
  // Count product quantities
  const productQuantities = products.reduce((acc, product) => {
    acc[product.name] = (acc[product.name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Quantities</h1>
      <ul className="list-disc list-inside">
        {Object.entries(productQuantities).map(([name, quantity]) => (
          <li key={name} className="mb-2">
            {name}: {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductQuantities;
