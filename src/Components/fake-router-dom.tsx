import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from 'react';

type RouterContext = {
  path: string;
  changePath: (value: string) => void;
};

const routerContext = createContext<RouterContext>({
  path: '/',
  changePath: () => undefined,
});

routerContext.displayName = 'RouterContext';

type RouterProps = {
  children?: ReactNode;
};

const Router = ({ children }: RouterProps) => {
  // 현재 location 을 가져옴
  const currentPath = window.location.pathname;

  const [path, setPath] = useState(currentPath);

  const changePath = (path: string) => {
    window.history.pushState({ path }, '', path);
    setPath(path);
  };

  useEffect(() => {
    const handleOnpopstate = (e: PopStateEvent) => {
      setPath(e.state?.path || '/');
    };

    window.addEventListener('popstate', handleOnpopstate);

    return () => {
      window.removeEventListener('popstate', handleOnpopstate);
    };
  }, []);

  return (
    <routerContext.Provider value={{ path, changePath }}>
      {children}
    </routerContext.Provider>
  );
};

export { Router };
