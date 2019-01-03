Check whether a binary search tree is balanced
```
class Node(object):
    def __init__(self, data):
        self.data = None
        self.left = None
        self.right = None


def balanced(node, min_val=float('infinity'), max_val=float('-infinity')):
    if not node:
        return True

    # check node data is bigger than min_val and smaller than max_val
    if min_val > node.data > max_val:
        return False

    # recurse and update max and min values
    return (balanced(node.left, min_val, node.data) and \
            balanced(node.right, node.data, max_val))


def balanced(node, last_node=float('-infinity')):
    if node is None:
        return True

    if balanced(node.left, last_node) is False:
        return False

    if node.data < last_node:
        return False

    last_node = node.data

    return balanced(node.right, last_node)
```
