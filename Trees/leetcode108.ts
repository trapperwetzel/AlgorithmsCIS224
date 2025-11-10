class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  const build = (start: number, end: number): TreeNode | null => {
    if (start === end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[mid]!);
    node.left = build(start, mid);
    node.right = build(mid + 1, end);
    return node;
  };
  return build(0, nums.length);
};


const nums = [1, 2, 5, 10, 15];

const test = sortedArrayToBST(nums);
console.log(test);
