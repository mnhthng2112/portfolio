import { Link, createFileRoute } from "@tanstack/react-router";

const Homepage = () => {
    return (
        <Link to="/about">
            aboutddddd
        </Link>
    );
};

export const Route = createFileRoute('/')({
    component: Homepage,
})