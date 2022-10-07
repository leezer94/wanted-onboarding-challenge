import Link from './Link';

// 링크 컴포넌트 사용하여 분기 없이 해당 페이지 보여줌

const Root = (): JSX.Element => {
  return (
    <div>
      <p>Root</p>
      <Link href={'/about'}>
        <button>about</button>
      </Link>
    </div>
  );
};

const About = (): JSX.Element => {
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
