#!/usr/bin/env python2


class TreeNode(object):
    def __init__(self, data, left, right):
        self.data = data
        self.left = left
        self.right = right


def dfs_recursive(node, path=[]):
    if node is None:
        return path

    dfs_recursive(node.left)
    dfs_recursive(node.right)
    path.extend(node.data)

    return path


def dfs_iterative(node):
    stack = [node]
    visited = []

    while len(stack) > 0:
        n = stack.pop()

        if n.data not in visited:
            visited.append(n.data)

            if n.right:
                stack.append(n.right)

            if n.left:
                stack.append(n.left)

    return visited


def bfs(node):
    queue = []
    visited = [node.data]

    # push children to queue
    queue.append(node.left)
    queue.append(node.right)

    while len(queue) > 0:
        n = queue.pop(0)
        visited.append(n.data)

        if n and n.left:
            queue.append(n.left)

        if n and n.right:
            queue.append(n.right)

    return visited


def tree_max_depth(node):
    if node:
        return 1 + max(tree_max_depth(node.left), tree_max_depth(node.right))
    else:
        return 0


def tree_min_depth(node):
    if node:
        return 1 + min(tree_min_depth(node.left), tree_min_depth(node.right))
    else:
        return 0


if __name__ == "__main__":
    child_5 = TreeNode("F", None, None)

    child_3 = TreeNode("D", child_5, None)
    child_4 = TreeNode("E", None, None)

    child_1 = TreeNode("C", child_3, child_4)
    child_2 = TreeNode("B", None, None)
    root = TreeNode("A", child_1, child_2)

    print "DFS recursive:", dfs_recursive(root)
    print "DFS iterative:", dfs_iterative(root)
    print "BFS:", bfs(root)

    print "Tree max depth:", tree_max_depth(root)
    print "Tree min depth:", tree_min_depth(root)
