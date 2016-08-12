import { Expect, Test } from "alsatian";
import { Stack } from "../stack";

export class CountTestFixture {

    @Test()
    public newStackCountShouldBeZero(): void {
        let stack = new Stack();

        Expect(stack.count()).toBe(0);
    }

    @Test()
    public stackWithOneItemCountShouldBeOne(): void {
        let stack = new Stack<number>();

        stack.push(5);

        Expect(stack.count()).toBe(1);
    }

    @Test()
    public stackWithTwoItemsCountShouldBeTwo(): void {
        let stack = new Stack<number>();

        stack.push(5);
        stack.push(100);

        Expect(stack.count()).toBe(2);
    }

    @Test()
    public emptyStackCountShouldBeZero(): void {
        let stack = new Stack<number>();

        // add one item, then remove it again
        stack.push(5);
        stack.pop();

        Expect(stack.count()).toBe(0);
    }

}
