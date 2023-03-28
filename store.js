// store.js

export const state = new Proxy(
  {
    modalVisible: false,
    overlayVisible: false
  },
  {
    // state의 속성값이 변경될 때마다 호출되는 set 메소드
    set(target, key, value) {
      // 속성값 변경
      target[key] = value;
      // 속성값 변경을 감지하는 옵저버들에게 알림
      notifyObservers(key, value);
      // 속성값 변경이 완료된 후 true를 반환
      return true;
    }
  }
);

export const observers = new Map();

export function addObserver(key, observer) {
  // 옵저버 리스트가 존재하지 않는다면 생성
  if (!observers.has(key)) {
    observers.set(key, []);
  }
  // 해당 속성값에 대한 옵저버 리스트에 추가
  observers.get(key).push(observer);
}

export function notifyObservers(key, value) {
  // 해당 속성값에 대한 옵저버 리스트가 존재한다면
  if (observers.has(key)) {
    const observerList = observers.get(key);
    // 해당 옵저버 리스트에 등록된 모든 옵저버들에게 알림
    observerList.forEach(observer => observer(value));
  }
}
