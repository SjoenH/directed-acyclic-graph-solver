import { RootNodes } from '../types/rootNodes';

/**
 * Get root nodes sorted by index
 * @param nodes
 * @param edges
 */
export function getRootNodes({ nodes, edges }: RootNodes) {
  return nodes
    .filter((n) => {
      //To get all the root-nodes, we remove the ones that have an edge going to it
      //Drop it if there exists one edge going to it
      return !edges.some((e) => e.to.id === n.id);
    })
    .sort((a, b) => a.index - b.index);
}
