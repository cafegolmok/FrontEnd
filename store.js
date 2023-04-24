// store.js

export const state = new Proxy(
  {
    modalVisible: false,
    overlayVisible: false
  },
  {
    set(target, key, value) {
      target[key] = value;
      notifyObservers(key, value);
      return true;
    }
  }
);

export const observers = new Map();

export function addObserver(key, observer) {
  if (!observers.has(key)) {
    observers.set(key, []);
  }
  observers.get(key).push(observer);
}

export function notifyObservers(key, value) {
  if (observers.has(key)) {
    const observerList = observers.get(key);
    observerList.forEach(observer => observer(value));
  }
}
