import { Expect, Test } from "alsatian";
import { Stack } from "../stack";

export class PeekTestFixture {

    @Test()
    public peekShouldReturnTopValue() {
        const value = 3;

        let stack = new Stack();
        stack.push(value);

        Expect(stack.peek()).toBe(value);
    }

    @Test()
    public peekShouldNotRemoveTheItem() {
        const value = 3;

        let stack = new Stack();
        stack.push(value);

        stack.peek();

        Expect(stack.count()).toBe(1);
    }

    @Test()
    public peekShouldReturnTheSameValueAfterMultipleCalls() {
        const value = 3;

        let stack = new Stack();
        stack.push(value);

        stack.peek();
        stack.peek();
        stack.peek();
        stack.peek();

        Expect(stack.peek()).toBe(value);
    }

}
