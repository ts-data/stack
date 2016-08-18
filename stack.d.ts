export default class Stack<TData> {
    public count(): number;
    public isEmpty(): boolean;
    public push(value: TData): void;
    public pop(): TData;
    public peek(): TData;
}
