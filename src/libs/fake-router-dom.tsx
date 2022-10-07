import { useState, useEffect, ReactNode } from 'react';

const Router = ({ children }: { children: ReactNode }): any => {
  return children;
};

const Route = ({
  path,
  component,
}: {
  path: string;
  component: ReactNode;
}): any => {
  // props 로 children 을 받아오면 재사용성을 높일 수 있으나 요구사항에 맞게 component로 받아옴
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // URL 이 변경될때마다 상태 변경 => 리렌더링
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? component : null;
};

export { Router, Route };
