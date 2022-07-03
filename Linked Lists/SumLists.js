/* 
    Sum Lists: You have two numbers represented by a linked list, 
    where each node contains a single digit. The digits are stored in reverse order, 
    such that the Vs digit is at the head of the list. 
    Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295. Output: 2 -> 1 -> 9. That is, 912.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const sumLists = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;

    // loop through each list and create a string to represent the number 
    // (at each node we use the unshift method to add to string), then convert two strings to numbers and return their sum

    let num1 = [];

    while (current1 !== null) {
        num1.unshift(current1.value);

        current1 = current1.next;
    }

    let num2 = [];

    while (current2 !== null) {
        num2.unshift(current2.value);

        current2 = current2.next;
    }

    num1 = num1.join(''); // convert to a string before num
    num2 = num2.join('');

    num1 = Number(num1);
    num2 = Number(num2);

    return num1 + num2;
}

/* 
    Time Complexity: O(n + m) where n is size of list1 and m is size of list 2 since we have to iterate through every single element
    Space Complexity: O(n + m) since I stored every list item in an array, then a string
*/

module.exports = sumLists;