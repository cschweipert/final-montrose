import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home </a>
        </Link>
        <Link href="/categories">
            <a>Categories</a>
        </Link>
    </div>
);

export default Nav;