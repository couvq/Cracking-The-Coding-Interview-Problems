const sumLists = require('./SumLists');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

test('0 list node returns 0', () => {
    const head1 = new Node(0)

    expect(sumLists(head1, null)).toBe(0);
  });

  test('(1) + (2). That is 1 + 2. Output: 3', () => {
    const head1 = new Node(1);
    const head2 = new Node(2);


    expect(sumLists(head1, head2)).toBe(3);
  });

  test('(2->1) + (0->2). That is 12 + 20. Output: 32', () => {
    const head1 = new Node(2);
    const list1Node2 = new Node(1);
    head1.next = list1Node2;

    const head2 = new Node(0);
    const list2Node2 = new Node(2);
    head2.next = list2Node2;

    expect(sumLists(head1, head2)).toBe(32);
  });

  

  