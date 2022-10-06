# 원티드 온보딩 챌린지 (CSR / SSR with Next.js)

## 1 주차 기능 요구 사항

- [] 해당 주소로 진입했을때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.

  - `/` -> `root` 페이지
  - `/about` -> `about` 페이지

- [] 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.

- [] Router, Route 컴포넌트를 구현해야 하먀, 형태는 아래와 같이 한다.

```
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

- [] 최소한의 push 를 기능을 가진 useRouter Hook을 작성한다.

```
 const {push} = useRouter();
```
