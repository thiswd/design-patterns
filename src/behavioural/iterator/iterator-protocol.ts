export class Counter {
  public current = 0;
  public last = 5;

  // Chamado apenas na iteração
  [Symbol.iterator](): CounterIteratorForward {
    return this.resetIterator();
  }

  resetIterator(): CounterIteratorForward {
    return new CounterIteratorForward(this);
  }
}
export class CounterIteratorForward {
  private current = this.counter.current;
  private last = this.counter.last;

  constructor(private counter: Counter) {}

  next(): { value: number; done: boolean } {
    return { value: ++this.current, done: this.current > this.last };
  }
}

const counter = new Counter();
const [one, two, ...rest] = [...counter];
console.log(one, two, rest);
for (const count of counter) console.log(count);
