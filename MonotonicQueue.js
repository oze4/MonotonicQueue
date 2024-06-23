export default class MonotonicQueue {
    constructor() {
        this.queue = [];
    }

    front() {
        return this.queue[0];
    }

    back() {
        if (!this.queue.length) {
            return undefined;
        }
        return this.queue[this.queue.length-1];
    }

    pop() {
        return this.queue.pop();
    }

    push(element) {
        this.queue.push(element);
    }

    shift() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    insertIncreasing(element) {
        while (!this.isEmpty() && this.back() > element) {
            this.pop();
        }
        this.push(element);
    }

    insertDecreasing(element) {
        while (!this.isEmpty() && this.back() < element) {
            this.pop();
        }
        this.push(element);
    }
}

export class MaximumMonotonicQueue extends MonotonicQueue {
    constructor() {
        super();
    }

    insert(element) {
        this.insertDecreasing(element);
    }
}

export class MinimumMonotonicQueue extends MonotonicQueue {
    constructor() {
        super();
    }

    insert(element) {
        this.insertIncreasing(element);
    }
}
