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

# Find the max depth of a binary tree
```
class TreeNode(object):
    def __init__(self):
        self.data = None
        self.left = None
        self.right = None


def max_depth(self, node):
    if node is None:
        return 0

    return 1 + max(max_depth(node.left), max_depth(node.right))
```


# Find the min depth of a binary tree
```
class TreeNode(object):
    def __init__(self):
        self.data = None
        self.left = None
        self.right = None


def min_depth(self, node):
    if node is None:
        return 0

    return 1 + min(min_depth(node.left), min_depth(node.right))
```


# Determine whether a tree is balanced
```
class TreeNode(object):
    def __init__(self):
        self.data = None
        self.left = None
        self.right = None


def min_depth(self, node):
    if node is None:
        return 0

    return 1 + min(min_depth(node.left), min_depth(node.right))
```


# Traverse a tree in Depth-first order
Recursive traverse
```
class TreeNode(object):
    def __init__(self):
        self.data = None
        self.left = None
        self.right = None


def dfs_inorder_traverse_recursive(node, path=[]):
    if node is None:
        return path
    if node.left is None and node.right is none:
        return path

    path.extend(dfs_traverse_recursive(node.left, path))
    path.extend(self.data)
    path.extend(dfs_traverse_recursive(node.right, path))


def dfs_preorder_traverse_recursive(node, path=[]):
    if node is None:
        return path
    elif node.left is None and node.right is none:
        return path

    path.extend(self.data)
    path.extend(dfs_traverse_recursive(node.left, path))
    path.extend(dfs_traverse_recursive(node.right, path))


def dfs_postorder_traverse_recursive(node, path=[]):
    if node is None:
        return path
    elif node.left is None and node.right is none:
        return path

    path.extend(dfs_traverse_recursive(node.left, path))
    path.extend(dfs_traverse_recursive(node.right, path))
    path.extend(self.data)
```

Iterative traverse
```
class TreeNode(object):
    def __init__(self):
        self.data = None
        self.left = None


def dfs_postorder_traverse_iterative(node, path=[]):
    stack = []

    if node is None:
        return path

    stack.append(node)
    while len(stack) > 0:
       curr_node = stack.pop()
       if curr_node not in path:
            path.append(curr_node)
            stack.push(curr_node.left)
            stack.push(curr_node.right)

```
