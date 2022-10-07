import Link from './Link';

const Root = (): JSX.Element | null => {
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

  return <></>;
};

const About = (): JSX.Element | null => {
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

  return <></>;
};

export { Root, About };
