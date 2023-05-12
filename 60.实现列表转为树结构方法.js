var list = [
  { id: 1, name: "child1", parentId: 0 },
  { id: 2, name: "child2", parentId: 0 },
  { id: 6, name: "child2_1", parentId: 2 },
  { id: 0, name: "root", parentId: null },
  { id: 5, name: "child1_2", parentId: 1 },
  { id: 4, name: "child1_1", parentId: 1 },
  { id: 3, name: "child3", parentId: 0 },
  { id: 7, name: "child3_1", parentId: 3 },
];
function toTree() {
  let nodeMap = new Map();
  let res;
  for (const node of list) {
    let id = node.id;
    let name = node.name;
    let parentId = node.parentId;
    let n = nodeMap.get(id) || { id, name, children: [] };
    n.name = name;
    if (parentId == null) {
      nodeMap.set(id, n);
      res = n;
      continue;
    }
    let parent = nodeMap.get(parentId) || {
      id: parentId,
      name: "",
      children: [],
    };
    parent.children.push(n);
    nodeMap.set(parentId, parent);
    nodeMap.set(id, n);
  }
  return res;
}
let res = toTree(list);
console.log(JSON.stringify(res, null, 3));
