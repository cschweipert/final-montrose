import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home </a>
        </Link>
        <Link href="/items">
            <a>Categories</a>
        </Link>
        <Link href="/post">
            <a>Post</a>
        </Link>
        <Link href="/signup">
            <a>Signup</a>
        </Link>
        <Link href="/me">
            <a>Account</a>
        </Link>
    </div>
);

export default Nav;


