public class BinaryTree {

  private Node root;

  private static class Node {
    Node left;
    Node right;
    int data;

    Node(int data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }

  public BinaryTree() {
    root = null;
  }

  public void build123() {
    root = new Node(2);
    root.left = new Node(1);
    root.right = new Node(3);
  }

  public void insert(int number) {
    root = insert(root, number);
  }

  private Node insert(int root, int number) {
    if(root == null) {
      return new Node(number);
    }
    if(number < root.data) {
      root.left = insert(root.left, number);
    } else if(number > root.data) {
      root.right = insert(root.right, number);
   }
   return root;
  }

  public Boolean find(int number) {
    return find(root, number);
  }

  private Boolean find(Node node, int number) {
    if (node == null) {
      return false;
    }
    if (node.data == number) {
      return true;
    } else if (number > node.data) {
      return find(node.right, number);
    } else {
      return find(node.left,  number);
    }
  }

  public int size() {
    return size(root);
  }

  private int size(Node node) {
    if (node == null) {
      return 0;
    }
    return 1 + size(node.left) + size(node.right);
  }

  public int maxDepth() {
    return maxDepth(root);
  }

  private int maxDepth(Node node) {
    if(node == null) {
      return 0;
    }
    int leftDepth = maxDepth(node.left);
    int rightDepth = maxDepth(node.right);

    return 1 + max(leftDepth, rightDepth);
  }

  public int minValue() {
    return minValue(root);
  }

  private int minValue(Node node) {
    if(node == null) {
      return -1;
    }
    if (node.left != null) {
      return minValue(node.left);
    }
    return node.data;
  }

  public void print() {
    print(root);
  }

  private void print(Node node) {
    if (node == null) {
      return;
    }
    print(node.left);
    System.out.println(node.data);
    print(node.right);
  }

  public Boolean hasPathSum(int sum) {
    return hasPathSum(root, sum);
  }

  private Boolean hasPathSum(Node node, int sum) {
    if (node == null) {
      return false;
    }
    if (node.left == null && node.right == null) {
        return node.data == sum;
    }
    if(hasPathSum(node.left, sum-node.data)) {
      return true;
    } else {
      return hasPathSum(node.right, sum-node.data);
    }
  }

  public void printPaths() {
    printPaths(root, new ArrayList<int>());
  }

  private void printPaths(Node node, ArrayList<int> path) {
    if (node == null) {
      return;
    }
    path.add(node.data);
    if (node.left == null && node.right == null) {
      System.out.println(path);
      return;
    }
    printPaths(node.left, path);
    printPaths(node.right, path);
  }

  public void mirror() {
    mirror(root);
  }

  public void mirror2() {
    mirror2(root);
  }

  private void mirror(Node node) {
    if (node == null) {
      return;
    }
    mirror(node.left);
    mirror(node.right);
    Node temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  private void mirror2(Node node) {
    if (node == null) {
      return;
    }
    Node temp = node.left;
    node.left = node.right;
    node.right = temp;
    mirror(node.left);
    mirror(node.right);
  }

  public void double() {
    Node node = double(root);
  }

  private Node double(Node node) {
    if (node == null) {
      return node;
    }
    if (node.left == null && node.right == null) {
      node.left = new Node(node.data);
      return node;
    }
    Node temp = new Node(node.data);
    temp.left = double(node.left);
    node.left = temp;
    node.right = double(node.right);
    return node;
  }

  public boolean same(BinaryTree tree2) {
    return same(root, tree2.root);
  }

  private boolean same(Node node1, Node node2) {
    if (node1 == null && node2 == null) {
      return true;
    }
    if (node1 != null && node2 != null) {
      return node1.data == node2.data && same(node1.left, node2.left) && same(node1.right, node2.right);
    }
    return false;
  }

  public boolean isBST() {
    return isBST(root, -65000, +65000); // min and max brevity
  }

  private boolean isBST(Node node, int min, int max) {
    if (node == null) {
      return true;
    }
    return node.data > min && node.data < max && isBST(node.left, min, node.data) && isBST(node.right, node.data, max);
  }
}


main() {
  BinaryTree tree = new BinaryTree();
  tree.build123();
  tree.insert(5);

  Boolean found1 = tree.find(7); //==> false
  Boolean found2 = tree.find(3); //==> true

  Integer size = tree.size(); //==> 4
  //maxDepth()
  //minValue()
  tree.print();
  //postOrder: Left  for brevity

  Boolean ans = tree.hasPathSum(25) // ==>  false
  Boolean ans =tree.hasPathSum(22) // ==>truerue

  tree.printPaths() // => [5, 4, 11, 7], [5, 4, 11, 2], ...

  tree.mirror(); // TODO : run this.
  tree.mirror2(); // TODO : run this.

  tree.double();
  tree.same(tree2);
  tree.isBST(); // return boolean, will be true for this
}
