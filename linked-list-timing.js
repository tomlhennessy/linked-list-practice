const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Theoretical Time Complexities:

    Single Linked List:
        • `addToHead`: O(1)
        • `addToTail`: O(n)

    Double Linked List:
        • `addToHead`: O(1)
        • `addToTail`: O(1)

*/

function measureTime(callback) {
    const start = process.hrtime.bigint();
    callback();
    const end = process.hrtime.bigint();
    return Number(end - start) / 1e6; // convert to milliseconds
}

function testAddToHead(listType, operations) {
    const list = new listType();
    const time = measureTime(() => {
        for (let i = 0; i < operations; i++) {
            list.addToHead(i);
        }
    })
    console.log(`${listType.name} addToHead (${operations} operations): ${time.toFixed(2)} ms`);
}

function testAddToTail(listType, operations) {
    const list = new listType();
    const time = measureTime(() => {
        for (let i = 0; i < operations; i++) {
            list.addToTail(i);
        }
    });
    console.log(`${listType.name} addToTail (${operations} operations): ${time.toFixed(2)} ms`);
}

const operations = 10000;

console.log(`Timing tests for Singly Linked List:`);
testAddToHead(LinkedList, operations);
testAddToTail(LinkedList, operations);

console.log(`Timing tests for Doubly Linked Lists:`);
testAddToHead(DoublyLinkedList, operations);
testAddToTail(DoublyLinkedList, operations);
