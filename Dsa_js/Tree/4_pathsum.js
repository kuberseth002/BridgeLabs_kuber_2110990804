function pathsum(root, sum) {
  if (!root) 
    return false;
  if (!root.left && !root.right) 
    return root.val === sum;
  
  return pathsum(root.left, sum - root.val) || pathsum(root.right, sum - root.val);
}
