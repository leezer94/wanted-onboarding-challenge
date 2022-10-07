import { useRouter } from '../hooks';

const Link = ({ href, children }) => {
  const { push } = useRouter();

  return (
    <a href={href} onClick={() => push}>
      {children}
    </a>
  );
};

export default Link;
