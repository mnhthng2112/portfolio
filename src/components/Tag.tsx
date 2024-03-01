import { Link } from "@tanstack/react-router";

type TagProps = {
    tagName: string,
    itemValue: number
}

const Tag = ({tagName, itemValue}: TagProps) => {
    return (
        <Link to='#' className="flex gap-2 items-center tenor-sans justify-center">
            <div className="text-[45px]">{tagName}</div>
            <div className="text-[#7C99A9]">{itemValue} items</div>
        </Link>
    );
};

export default Tag;