# knights-travails

JavaScript program that finds the shortest path between the knights staring position and chosen end point on a chessboard.

This challenge is a final project of me putting into practice what I have learned regarding general computer science concepts such as:

1. Algorithms
2. Recursion
3. Time and space complexity
4. Common data structures:
   - Stacks
   - Queues
   - Linked lists
   - Binary search trees
   - Graphs

In this project, I did not worry to much about time and space complexity, and in my solution, recursion was not necessary. However, this project did prove quite challenging to me because, despite having practiced with binary search trees, this problem was harder to wrap my head around because it required the use of a graph, with some interesting ways of traversing it.

The problem to solve is to build a program that, given both starting and end positions for a knight on a chess board, it needs to find the shortest path between the two, and output the steps involved. I was given a hint to treat all possible steps as children in a data structure. So, this was looking similar to my practice with binary search trees, except each node could have more than two children (8 possible moves maximum to be exact).

So I started creating a node factory function which would create node objects which included methods to get all of the possible subsequent moves from that knights position. The key here, was to return null for these methods if the move would go out of bounds. I also included a newNodes method in the Node factory function which would create objects from the possible moves, point these child objects back to the parent, and return an array of them.

The next step would be to create a function that would build the graph. Although I call it a graph, it very much is a tree with many branches, but trees are technically classified as a type of graph. So, for simplicity sake, I refer to it as a graph. This graph function required planning, because I needed to choose an algorithm to actually create the graph. I found the breadth first approach to work well with this. I would use a queue and a while loop in tandem, which works like this:

1. Create an object from the starting position, and enqueue it
2. Enter the while loop
3. For each iteration, dequeue the first node object, then create objects from the nodes possible moves using the newNodes method, and enqueue each child node object.
4. Keep repeating step 3, until the end position is found, and an object is created from it. The while loop will then be escaped from.
5. At this point, a graph (or tree) with a root node and many different branches and nodes spanning out of it has been created. The only thing we are concerned with however, is the path from the root to the end. The way to get this path is to take advantage of the parent/child relationships of each node. The tracePath function starts with the end position node, and traces back the path towards the root node while recording all of the steps in an array.
6. Finally, the user is presented with the number of steps it took, and all of the positions the knight went through.
