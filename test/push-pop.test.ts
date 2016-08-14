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

}
