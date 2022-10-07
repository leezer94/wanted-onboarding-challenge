const useRouter = () => {
  // Full page reloading 을 막아주는 로직
  const push = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    // 클릭시에 preventDefault 로 default behavior 을 방지한다.
    e.preventDefault();
    // pushState 으로 history에 state 을 추가시켜줘 URL을 변경 시켜줌
    window.history.pushState({}, '', href);

    // URL이 바뀔대마다 window 의 content 를  업데이트
    // 리액트 메소드라 onpopstate 을 써야되는듯
    const buttonEvent = new PopStateEvent('popstate');
    window.dispatchEvent(buttonEvent);
  };

  return { push };
};

export default useRouter;
