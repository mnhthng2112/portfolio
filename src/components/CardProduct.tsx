import { Link } from "@tanstack/react-router";

type CardProductProps = {
    image1: string,
    image2: string,
    nameProduct: string,
    price: string
}

const CardProduct = ({image1, image2, nameProduct, price}: CardProductProps) => {
    return (
        <Link to='/'>
            <div>
                <figure className="aspect-[3/4] relative overflow-hidden">
                    <img src={image1} alt="" />
                </figure>
                <figure className="aspect-[3/4] relative overflow-hidden">
                    <img src={image2} alt="" />
                </figure>
            </div>
            <div>
                <div>
                    {nameProduct}
                </div>
                <div>
                    {price}
                </div>
            </div>
        </Link>
    );
};

export default CardProduct;