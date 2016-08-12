import { Expect, Test } from "alsatian";
import { Stack } from "./stack";

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

export class IsEmptyTestFixture {

    @Test()
    public newStackShouldBeEmpty(): void {
        let stack = new Stack();

        Expect(stack.isEmpty()).toBe(true);
    }

    @Test()
    public emptyStackShouldBeEmpty(): void {
        let stack = new Stack<number>();

        // add a single element, then remove it again
        stack.push(5);
        stack.pop();

        Expect(stack.isEmpty()).toBe(true);
    }

    @Test()
    public stackWithOneItemShouldNotBeEmpty(): void {
        let stack = new Stack<number>();

        // add a single element
        stack.push(5);

        Expect(stack.isEmpty()).toBe(false);
    }

    @Test()
    public stackWithTwoItemsShouldNotBeEmpty(): void {
        let stack = new Stack<number>();

        // add a single element
        stack.push(5);
        stack.push(5);

        Expect(stack.isEmpty()).toBe(false);
    }

}
