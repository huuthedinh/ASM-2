
import { Link } from "react-router-dom";
import { Iproduct } from "../../interfaces/Product";
type Props = {
    data: Iproduct
}
const Product = ({ data }: Props) => {
    console.log(" hahahah", data)

    return <div>
        <Link to={`product/${data._id}`}><img src="./product1.png" alt="" /></Link>
        <div className="infoProduct mb-4">
            <Link to={`product/${data._id}`} className="text-decoration-none text-dark"><p className="fs-5 g-col-4 mb-3">{data.name}</p></Link>
            <span className="text-danger fs-5 mb-5 ms-3">{data.price}đ</span> <span className="mb-5 text-decoration-line-through text-primary ms-2">{data.original_price}đ</span> <br />
            <span className="text-warning fs-5">&#9733;&#9733;&#9733;&#9733;&#9733;</span><span>   190 lượt đánh giá</span>
        </div>

    </div>
}
export default Product;