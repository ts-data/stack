import { Expect, TestCase } from "alsatian";
import { Stack } from "../stack";

export class PushPopTestFixture {

    @TestCase(15)
    @TestCase(20)
    @TestCase("some string")
    @TestCase("another string")
    @TestCase(false)
    @TestCase(true)
    @TestCase(1.25)
    public afterPushPopShouldReturnValue(value: any) {
        let stack = new Stack();

        stack.push(value);

        let popped = stack.pop();

        Expect(popped).toBe(value);
    }

    @TestCase(15)
    @TestCase(20)
    @TestCase("some string")
    @TestCase("another string")
    @TestCase(false)
    @TestCase(true)
    @TestCase(1.25)
    public afterPushPopShouldReturnTopValue(value: any) {
        let stack = new Stack();

        // push some junk to the stack
        stack.push(5);
        stack.push(10);

        stack.push(value);

        let popped = stack.pop();

        Expect(popped).toBe(value);
    }

}
