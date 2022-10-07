import Link from './Link';

const Root = () => {
  const path = window.location.pathname;

  if (path === '/') {
    return (
      <div>
        <p>Root</p>
        <Link href={'/about'}>
          <button>about</button>
        </Link>
      </div>
    );
  }
};

const About = () => {
  const path = window.location.pathname;

  if (path === '/about')
    return (
      <div>
        <p>About</p>
        <Link href={'/'}>
          <button>go main</button>
        </Link>
      </div>
    );
};

export { Root, About };
