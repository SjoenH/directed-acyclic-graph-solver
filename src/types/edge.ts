import { Node } from './node';

export type Edge = {
  readonly from: Node;
  readonly to: Node;
};
