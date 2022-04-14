import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProduct] = useState({});
  const { detalleId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const querydb = getFirestore();
    const queryProd = doc(querydb, "productos", detalleId);
    getDoc(queryProd)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);

  return (
    <>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <section className="productSection">
            {producto ? (
              <ItemDetail key={producto.id} producto={producto} />
            ) : (
              <h2>Obteniendo producto...</h2>
            )}
          </section>
        </>
      )}
    </>
  );

  // SIN FIRESTORE
  // useEffect(() =>{
  //     getProducts
  //     .then(resp => setProduct(resp.find(prod => prod.id === detalleId)) )
  //     .catch(err =>console.log(err))
  //     .finally(()=>setLoading(false))
  // }, [detalleId])
};

export default ItemDetailContainer;
