'use strict';

const Node = require('../node.js');

describe('Node Module', () => {
  it ('constructor', () => {
    const value = 'some value';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});