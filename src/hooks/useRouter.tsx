const useRouter = () => {
  const push = (e, href) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, '', href);

    const buttonEvent = new PopStateEvent('popstate');
    window.dispatchEvent(buttonEvent);
  };

  return { push };
};

export default useRouter;
