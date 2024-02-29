import { Link, createLazyFileRoute } from "@tanstack/react-router";

console.log("aaaaaaa");

const About = () => {
    return (
        <Link to='/about'>
            About
        </Link>
    );
};

export const Route = createLazyFileRoute('/about') ({
    component: About,
})