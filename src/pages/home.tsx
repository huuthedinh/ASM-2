import Product from "../components/products/product";
import { useState, useEffect } from "react";
import { Iproduct } from "../interfaces/Product";
import axios from "axios"
import Slider from "../components/layout/slider";
const HomeFage = () => {
    const [products, setProduct] = useState<Iproduct[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then(({ data }) => setProduct(data))
    }, [])
    return <div>
        <Slider />
        <h2 className="p-5">ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
        <div className="row row-cols-4 p-7">
            {products.map(product => <Product
                data={product}
                key={product._id}
            />)}

        </div>
    </div>
}
export default HomeFage;