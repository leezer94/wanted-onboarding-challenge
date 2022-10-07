import { ReactElement } from 'react';
import { useRouter } from '../hooks';

const Link = ({ href, children }: { href: string; children: ReactElement }) => {
  // 기존 full page reloading을 막는 로직을 useRouter 로 분리 시켜줌
  // 맞는건지 모르겟다

  const { push } = useRouter();

  return (
    <a href={href} onClick={() => push}>
      {children}
    </a>
  );
};

export default Link;
