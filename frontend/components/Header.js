import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  background: #1b1b2f;
  font-family: "Dancing Script";
  font-size: 8rem;
  padding: 10px;
  /* margin-left: 2rem; */
  position: relative;
  z-index: 2;
  /* transform: skew(-7deg); */
  a {
    padding: 0.5rem 1rem;
    
    color: white;
    /* text-transform: uppercase; */
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    /* border-bottom: 10px solid ${props => props.theme.black}; */
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background: #1b1b2f;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Montrose Events</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    {/* <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div> */}
  </StyledHeader>
);

export default Header;
