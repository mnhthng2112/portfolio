import { Link, createFileRoute } from "@tanstack/react-router";

console.log('sdasdasdasd');


const About = () => {
    return (
        <div>
            <Link to='/about'>
            About
            </Link>
            <div>sdadasdkjhnk</div>
        </div>
    );
};

export const Route = createFileRoute('/about') ({
    component: About,
})