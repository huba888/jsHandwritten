function dom2Json(domtree) {
  let obj = {};
  obj.name = domtree.tagName;
  obj.children = [];
  domtree.childNodes.forEach(child => obj.children.push(dom2Json(child)));
  return obj;
}
