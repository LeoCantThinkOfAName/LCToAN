---
title: "猴子也會的 React Hooks 全域狀態管理"
path: "global-state-management-using-react-hooks"
date: "2019-05-16"
category: ["React", "Front-End", "web"]
description: "This is a Blog post that talks about front end development"
---
## 楔子
雖然說學習 React 前前後後也有一年多的時間了，但是因為在公司內沒有需要的情境
(同時沒有一個同事有相關的使用經驗，擔心用上了卻沒人能維護)，
結果就是每一次下定決心好好玩玩看，沒多久又一曝十寒。  

再加上 React 在狀態管理上如果不用上第三方的 library 實在是讓我懶病發作，
相比之下原生的 Vue 做 global state management 容易多了，害我中途跳槽去 Vue 玩了一下，
因為整個看起來直覺又簡單，還能直接跟 HTML 結合，某次看到一個很合適的案子就隨手用 Vue 做了成品...  

怎麼變成在安麗 Vue 了？  

不過從去年年中左右新的 Context API 開始，到年底 React Hooks 的發布，
讓 React 終於有了原生(而且不會太過畸形)的方法可以做到很有效率並且易懂的狀態管理。  

這陣子因為想用 Gatsby 做這個個人網站，再加上需要 Demo 一個公司內部的案子，決定再回鍋試一試 React。  
  
## React Hooks, useState, useContext...
在新的 Hooks API 中其實有一大堆神奇的 Hooks，不過如果目標單純是要做個簡單快速的全域狀態管理，只要有這兩招就很夠用了。  
### useState
想當年只要一個 Component 需要擁有狀態，就非得用上 React 的 Class 寫法；現在有了...  
隨便喇！ React Hooks 這半年來紅的程度應該不需要再多一篇介紹文了，到處都有範例教學，在此就不多著墨。   
簡而言之，useState 能夠讓我們在 functional component 裡面使用 state，算是相當方便。
### useContext
useContext 是另一個神奇的 Hooks，它最重要的價值就是某種程度上不用再寫一大堆 Comsumer 了！   

只要把需要調用的 Context 包在在應用程式的頂層，所有子組件都可以直接用 useContext 取得狀態，這實在是深得我心啊！
之前試玩 Context API 時常常腦袋轉不過來，因為只有使用 Consumer 包裹的內容可以使用 Context 裡面的各種 state 或 function，
所以當遇到下列情況時，我有限的智商立刻就下線了...

```jsx
const SomeComponent = () => {
  // 這裡想用 Context 沒辦法用 ><
  return (
    <SomeContext.Consumer>
      {/* 這裡的孩子們可以用 SomeContext */}
      {this.props.children}
    </SomeContext.Consumer>
  )
}
```   
當然還是有方法可以做這件事，像是把 consumer 往上提一層，或是用 HOC 等等... 但是實在不方便也不美觀。現在，因為 useContext 的出現，
只要在 component 中調用需要的 context，就能躺著用、坐著用、到處都能用！   
## Demo
假設我有一個 context 叫做 `SomeContext`
```jsx
import React, {useState, createContext} from 'react';

export const SomeContext = createContext(null);

export const SomeProvider = ({children}) => {
  const [myState, setMyState] = useState(false);

  return (
    <SomeContext.Provider value={{myState, setMyState}}>
      {children}
    </SomeContext.Provider>
  )
}
```
把整個程式用 Provider 包裹住，達到全域皆能取用的無腦境界。稍微簡化一下，就別計較了。
```jsx
import { SomeProvider } from '/context/的路徑';

const App = () => {
  return (
    <SomeProvider>
      <SomeComponent />
      <AnotherComponent />
    </SomeProvider>
  )
}
```
接下來在我的 SomeComponent 裡面用 useContext 取得 myState
```jsx
import React, {useContext} from 'react';
import { SomeContext } from '/context/的路徑';

const SomeComponent = () => {
  const {myState, setMyState} = useContext(SomeContext);

  // 我不知道誰這麼無聊喇，不過直接調用也是完全可行的
  setMyState(true);

  // 用在實際要 render 的 html 裡面
  return (
    <h1>{myState}</h1>
  )
}
```
是不是很方便呢？不過真正神奇的是...
## 如果有多個 context 呢？
「如果你要像個白癡一樣把所有 state 全部都寫在一個 context 裡面，可以啊！你就等著享受無數個無意義的 rerender 和一個上千行的白痴檔案好了。」   

事實上，之前試玩 Context API 的時候就在思考這個問題了，那時候寫的 context 膨脹到了無恥的地步，我想要找個東西都異常的困難。
解決方法不是沒有，事實上也非常直觀、簡單。   
```jsx
return (
  <SomeProvider>
    <AnotherProvider>
      <YetAnotherProvider>
        <SomeComponent />
      </YetAnotherProvider>
    </AnotherProvider>
  </SomeProvider>
)
```
「什麼？你以為這樣就解決問題了嗎？醜成這樣你敢看？要是我有20個 context 要怎麼辦？」   

確實，如果有多個 context，掉進 wrapper hell 似乎也是在所難免...   
奇怪？當初他們不是信誓旦旦的說 Hooks 會幫我們解決 wrapper hell 嗎... 嗚嗚嗚   

不過也沒辦法，除非用 redux 等等的 library 解套了。
雖然這麼說，不過如果不考慮 debug tool 裡面醜不啦嘰的超級大樹，是有方法可以讓我們的 code 看起來乾淨一些的。

