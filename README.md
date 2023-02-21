# 📋 React, Mobx 숫자 증가, 감소 예제
:octocat: https://light9639.github.io/React-Mobx/

![light9639 github io_React-Mobx_](https://user-images.githubusercontent.com/95972251/202852375-12836973-e7e6-45ce-a77b-45b76936196e.png)

:sparkles: Mbox를 이용하여 만든 숫자 증가, 감소 예제입니다. :sparkles:
## :tada: React 생성
- React 생성
```bash
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면

```bash
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, javascirpt 선택하면 생성 완료.
## 🚝 Mobx 설치
- Mobx 설치 명령어
```bash
yarn add mobx mobx-react
```

## ✒️ useStore.ts, App.tsx, Counter.tsx, counter.ts 작성
### :zap: useStore.ts
- `counter.tsx`를 가져온 후 `useStore` 함수에 담아 사용할 수 있게끔 한다.
```typescript
import { counter } from './stores/counter'

const useStore = () => {
  return { counter }
}

export default useStore
```

### :zap: App.tsx
- `Counter.tsx`를 `import` 하여 하단에 배치하고 이미지 변경, 및 스타일링을 해준다.
```typescript
import React from 'react'
import Counter from './components/Counter'
import './Style.css'

export const App = () => {
  return (
    <div className="App">
      <div>
        <a href="https://mobx.js.org/README.html">
          <img
            src="https://mobx.js.org/assets/mobx.png"
            className="logo"
            alt="Mobx logo"
          />
        </a>
        <a href="https://reactjs.org">
          <img
            src="https://light9639.github.io/Redux-TypeScript/assets/react.35ef61ed.svg"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>React + Mobx</h1>
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Mobx and React logos to learn more
      </p>
    </div>
  )
}
```

### :zap: Counter.tsx
- `counter.ts`에서 가져온 함수와 데이터를 바탕으로 함수를 만들어 증가, 감소 함수를 만든다.
```typescript
import React from 'react'
import { useObserver } from 'mobx-react'
import useStore from '../useStore'

const Counter = () => {
  const { counter } = useStore()

  const increase = () => {
    counter.increase()
  }

  const decrease = () => {
    counter.decrease()
  }

  return useObserver(() => (
    <div>
      <h2>Count is : {counter.number}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  ))
}

export default Counter
```

### :zap: counter.ts
- `observable`를 `import` 한 뒤 사용할 함수들을 작성한다.
```typescript
import { observable } from 'mobx'

const counter = observable({
  number: 1,
  increase() {
    this.number++
  },
  decrease() {
    this.number--
  },
})

export { counter }
```

## 📎 출처
- https://mobx.js.org/README.html 문서를 토대로 구현했습니다.
