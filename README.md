## 1. 과제 소개

- 하얀마인드(HayanMind)에서 제공한 기업 과제
- API와 연동하여 무한 스크롤(Infinite Scroll)을 구현해보자

### 1-1. 기술 스택

`React` `React Hooks` `Intersection Observer API`

**Intersection Observer API**
- `IntersectionObserverEntry`의 속성을 활용하면 `getBoundingClientRect()`를 호출한 것과 같은 효과
- 리플로우 현상을 방지

### 1-2. 구현 목록

- [x] figma를 참고한 카드 스타일링
- [x] JSON 데이터 Fetching
- [x] 무한 스크롤 구현

## 2. 설치 및 실행

```bash
git clone https://github.com/tech-hoon/pre-onboarding-1

cd pre-onboarding-1

npm install && npm start
```

## 3. 구조

```bash
📦src
 ┣ 📂api
 ┃ ┗ 📜fetchData.js
 ┣ 📂assets
 ┃ ┗ 📂css
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜Card.css
 ┃ ┃ ┣ 📜InfiniteScrollList.css
 ┃ ┃ ┗ 📜reset.css
 ┣ 📂components
 ┃ ┣ 📜Card.jsx
 ┃ ┗ 📜InfiniteScrollList.jsx
 ┣ 📂utils
 ┃ ┗ 📜config.js
 ┣ 📜App.jsx
 ┗ 📜index.js
```

## 4. 데모

![ezgif com-gif-maker](https://user-images.githubusercontent.com/19265753/127101541-ac42fa8b-0603-47c7-9624-4a05e7514592.gif)
