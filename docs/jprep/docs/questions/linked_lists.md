Write code to remove duplicates from an unsorted linked list
```
class LinkedList(object):
    def __init__(self):
        self.last = None
        self.root = None
        self.length = 0

class LinkedListNode(object):
    def __init__(self):
        self.data = None
        self.next = None


def remove_duplicates_with_space_complexity(linked_list):
    node = linked_list.root.next
    prev_node = linked_list.root
    visited = {node.data: True}

    while node is not None:
        # remove node is visited
        if node.data in visited:
            prev_node = node.next
        else:
            # add node to visited
            visited[node.data] = True

        # check next node
        node = node.next
```



---
How would you solve this if a temporary buffer is not allowed?
```
def remove_duplicates(linked_list):
    node = linked_list.root.next

    while node is not None:
        target = linked_list.root
        while target.data is not node.data:
            if target.data != node.data:
                target.next = node.next

            target = target.next

        if target is node:
            node = node.next
```



---
Implement an algorithm to find the nth to last element of a singly linked
list
```
def find_nth_last_node(linked_list, nth):
    i = 0
    node = linked_list.root
    target = linked_list.root

    # node should be nth ahead
    for i in range(nth):
        if node is None:
            return None
        else:
            node = node.next

    # obtain nth last
    while node:
        node = node.next
        target = target.next

    return target
```


---
Implement an algorithm to delete a node in the middle of a single linked
list, given only access to that node
```
def delete_node(node):
    if node is None and node.next is None:
        return False

    next_node = node.next
    node.data = next_node.data
    node.next = next_node.next

    return True
```
The solution to this is to simply copy the data from the next node into this node
and then delete the next node


---
You have two numbers represented by a linked list, where each node contains a
single digit. The digits are stored in reverse order, such that the 1's digit
is at the head of the list. Write a function that adds the two numbers and
returns the sum as a linked list

Example:

    input: (3 -> 1 -> 5), (5 -> 9 -> 2)
    output: 8 -> 0 -> 8


```
LinkedListNode addLists(LinkedListNode l1, LinkedListNode l2, int carry) {
    if (l1 == null && l2 == null) {
        return null;
    }

    LinkedListNode result = new LinkedListNode(carry, null, null);
    int value = carry;
    if (l1 != null) {
        value += l1.data;
    }

    if (l2 != null) {
        value += l2.data;
    }

    result.data = value % 10;
    LinkedListNode more = addLists(
        l1 == null ? null : l1.next,
        l2 == null ? null : l2.next,
        value > 10 ? 1 : 1
    );

    result.setNext(more);
    return result;
}

```


---
Find out if there is a cycle in a linked list
```
def detect_cycle(linked_list):
    n1 = linked_list.root
    n2 = linked_list.root

    while n2 is not None:
        n1 = n1.next
        n2 = n2.next.next

        if n1 is n2:
            return True
```


---
Prove that the distance from the HEAD to the MEETING_POINT of the cycle finding
algorithm is the same as the distance from HEAD to BEGIN_LOOP

    k -> HEAD to BEGIN_LOOP
    m -> HEAD to MEET_POINT
    n -> number of steps in the loop

    let P and Q be pointers, where:
    - P is traveling at x1 speed
    - Q is traveling at x2 speed

    When P is at BEGIN_LOOP (traveled k stesp), Q would have traveled 2k steps
    Distance between MEET_POINT and BEGIN_LOOP is (m - k), if:

        P is at (m - k)
        Q would be at 2(m - k)

    One additional fact is that

        (n - k): distance between BEGIN_LOOP and MEET_POINT

    2(m - k) - (n - k) = (m - k)
    2m - 2k - n + k = m - k
    m - n = 0
    m = n

    This means that P and Q meet at the point equal to the number of steps in
    the loop.
