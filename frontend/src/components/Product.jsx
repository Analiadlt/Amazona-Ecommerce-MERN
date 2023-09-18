import { Link } from "react-router-dom";
import { Card , Button} from "react-bootstrap";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <Card>
      <div>
        <div className="product" key={product.slug}>
          <Link to={`product/${product.slug}`}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
          </Link>
          <Card.Body>
            <Link to={`product/${product.slug}`}>
              <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            <Card.Text>${product.price}</Card.Text>
            <Button>Add to cart</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}