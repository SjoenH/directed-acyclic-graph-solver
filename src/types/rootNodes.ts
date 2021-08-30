import { Edge } from './edge';
import { Node } from './node';

export type RootNodes = {
  readonly nodes: ReadonlyArray<Node>;
  readonly edges: ReadonlyArray<Edge>;
};
