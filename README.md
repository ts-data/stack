# ts-data.stack

A [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) implemented in TypeScript.

## Installation

    $ npm install ts-data.stack

## Usage

    import { Stack } from "ts-data.stack";

    let stack = new Stack<number>();

    stack.push(3);
    stack.push(7);

    stack.count(); // 2
    stack.isEmpty(); // false

    stack.peek(); // 7

    stack.pop(); // 7
    stack.pop(); // 3

    stack.isEmpty(); // true

## License

Licensed under the [MIT License](LICENSE).
