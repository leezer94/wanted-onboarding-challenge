import { ReactElement } from 'react';
import { useRouter } from '../hooks';

const Link = ({ href, children }: { href: string; children: ReactElement }) => {
  const { push } = useRouter();

  return (
    <a href={href} onClick={() => push}>
      {children}
    </a>
  );
};

export default Link;
