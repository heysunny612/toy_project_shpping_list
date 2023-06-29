# 토이프로젝트쇼핑리스트


<p align="center">
    <img src="https://user-images.githubusercontent.com/127499117/236522908-d64c38a5-fa65-4b82-8726-df30862e4270.gif" alt="123dsd (1)">
</p>


> 투두 리스트 만들기 전초전인 첫 번째 토이 프로젝트 '쇼핑 리스트'를 만들어보았다. 간단하게 입력받은 값을 나타내고, 해당하는 입력값을 지우면 되는 아주 간단한 프로젝트라 시간도 많이 걸리지 않았다. 갑자기 자바스크립트를 처음 배웠던 날이 생각난다.. 그때 정말 코드 한 글자도 치지 못하던 내 손가락이 매우 부끄러웠었는데... 고작 46줄이지만.. 개.. 바ㄹ이 아니고 코드를 작성하고 있는 나 자신이 아주 조금 대견하다.. (아직 갈 길이 멀기에.. 조금....이라는 표현을 사용하였다.. ) 

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
 $form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
  showCount();
});


```

## 1. preventDefault()

- 브라우저에서 기본적으로 발생하는 동작을 취소한다. <br/>
예시 ) <br/>
form - 브라우저 새로고침을 취소한다. <br/>
checkbox - check 박스안에 체크표시가 생기지 않는다. <br/>
wheel,scroll - 빠르게 무언가 동작해야하는 이벤트에는 preventDefault를 사용 할 수없음. 적용하고 싶다면 addEventListener에 옵션에 passive:false를 지정해주어야함. (왠만해서는 false로 설정하지 않는 것이 좋다.)


