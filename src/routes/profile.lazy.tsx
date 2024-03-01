import { Link, createLazyFileRoute } from "@tanstack/react-router";

console.log('sdasdasdasd');


const Profile = () => {
    return (
        <div>
            <Link to='/profile'>
            About
            </Link>
            <div>sdadasdkjhnk</div>
        </div>
    );
};

export const Route = createLazyFileRoute('/profile') ({
    component: Profile,
})