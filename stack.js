
// Internally, we want to use an array to store the objects in the stack but we want to keep that array private but we don't want it to be accessible from the outside because we 
// want the consumers of the stack to only use the push() and pop() methods. We will use to implement array as a private property.
const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }

  get count() {
    return _stack.get(this).length;
  }

  push(item) {
    _stack.get(this).push(item);
  }

  pop() {
    const stack = _stack.get(this);
    if (stack.length === 0) throw new Error("Stack is empty.");
    return stack.pop();
  }

  peek() {
    const stack = _stack.get(this);
    if (stack.length === 0) throw new Error("Stack is empty.");
    return stack[stack.length - 1];
  }
}

const s = new Stack();