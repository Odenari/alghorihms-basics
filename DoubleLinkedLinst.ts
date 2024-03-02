interface DoubleLinkedList<T> {
    list: Item<T>[];
    getHead: () => Item<T>;
    // getTail: () => void;
    // deleteNode: (idx: number) => void;
    // insertNode: (idx: number) => void;
    // addNode: () => void;
}

interface Item<T> {
    index: number;
    value: T;
    // prev: Item<T>;
    // next: Item<T>;
}

interface Test {
    val: string[];
    getVal: (idx: number) => string | -1;
    getLength: () => number;
    getHuj: () => string;
}
