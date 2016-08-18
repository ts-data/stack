# ts-data.stack

A [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) implemented in TypeScript.

## Installation

    $ npm install ts-data.stack

## Usage

    import Stack from "ts-data.stack";

    let stack = new Stack<number>();

    stack.push(3);
    stack.push(7);

    stack.count(); // 2
    stack.isEmpty(); // false

    stack.peek(); // 7

    stack.pop(); // 7
    stack.pop(); // 3

    stack.isEmpty(); // true

## Documentation

### `Stack<TData>()`

A stack containing `TData` types. The constructor takes no arguments.

#### `count()`: `number`

Get the count of items in the stack.

#### `isEmpty()`: `boolean`

True if the stack is empty, false if it contains any elements.

#### `push(value: TData)`: `void`

Pushes `value` to the top of the stack.

#### `pop()`: `TData`

Pop the top value off of the stack and return it.

#### `peek()`: `TData`

Get the top value of the stack without removing it from the stack.

## License

Licensed under the [MIT License](LICENSE).
