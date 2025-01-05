function diameterTree(root) {
  let maxDiameter = 0;

  function depth(node) {
      if (!node) return 0;

      const left = depth(node.left);
      const right = depth(node.right);
      maxDiameter = Math.max(maxDiameter, left + right);
      
      return Math.max(left, right) + 1;
  }
  
  depth(root);
  return maxDiameter;
}
