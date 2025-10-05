import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Mini ERP - Controle de Estoque</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.stock} unidades</li>
        ))}
      </ul>
    </div>
  );
}