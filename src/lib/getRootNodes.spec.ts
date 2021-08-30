import test from 'ava';

import {Edge} from '../types/edge';
import {Node} from '../types/node';

import {getRootNodes} from './getRootNodes';

test('Get the root nodes', (t) => {

  const rootNodeOne = {id: `${1}`, index: 2};
  const rootNodeTwo = {id: `${2}`, index: 1};
  const leafNodeOne = {id: `${3}`, index: 3};
  const leafNodeTwo = {id: `${4}`, index: 4};

  const sampleNodes: ReadonlyArray<Node> = [
    rootNodeOne,
    rootNodeTwo,
    leafNodeOne,
    leafNodeTwo,
  ];
  const sampleEdges: ReadonlyArray<Edge> = [
    {
      from: rootNodeOne,
      to: leafNodeOne,
    },
    {from: rootNodeTwo, to: leafNodeTwo},
  ];

  // Sample 1
  //
  //   rootNodeOne    rootNodeTwo
  //       |              |
  //   leafNodeOne    leafNodeTwo
  //
  const result = getRootNodes({nodes: sampleNodes, edges: sampleEdges});
  const expected = [rootNodeTwo, rootNodeOne];
  t.deepEqual(result, expected);

  // Sample 2
  //
  //   rootNodeOne
  //       |          1. Edge one
  //   leafNodeOne
  //       |          2. Edge two
  //   rootNodeTwo
  //       |          3. Edge three
  //   leafNodeTwo
  //

  const edgeOne = {
    from: rootNodeOne,
    to: leafNodeOne,
  };
  const edgeTwo = {
    from: leafNodeOne,
    to: rootNodeTwo,
  };
  const edgeThree = {
    from: rootNodeTwo,
    to: leafNodeTwo,
  };

  const sample2Edges = [edgeOne, edgeTwo, edgeThree];
  const sample2Expected = [rootNodeOne]
  t.deepEqual(getRootNodes({
    nodes: sampleNodes,
    edges: sample2Edges
  }), sample2Expected)

});
