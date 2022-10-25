const getMin = (minHeap) => {
  const minElement = minHeap[0];

  return minElement;
};

const getParentIndex = (childIndex) => {
  const parentIndex = Math.floor((childIndex - 1) / 2);

  return parentIndex;
};

const getParent = (minHeap, childIndex) => {
  const parentIndex = getParentIndex(childIndex);

  const parent = minHeap[parentIndex];

  return parent;
};

const getLeftChildIndex = (parentIndex) => {
  const childIndex = 2 * parentIndex + 1;

  return childIndex;
};

const getLeftChild = (minHeap, parentIndex) => {
  const childIndex = getLeftChildIndex(parentIndex);

  const child = minHeap[childIndex];

  return child;
};

const getRightChildIndex = (parentIndex) => {
  const childIndex = 2 * parentIndex + 2;

  return childIndex;
};

const getRightChild = (minHeap, parentIndex) => {
  const childIndex = getRightChildIndex(parentIndex);

  const child = minHeap[childIndex];

  return child;
};

const swap = (minHeap, index) => {
  const newMinHeap = [...minHeap];
  let currentIndex = index;
  let currentElement = newMinHeap[currentIndex];
  let parentIndex = getParentIndex(currentIndex);

  while (currentIndex > 0 && newMinHeap[parentIndex] > currentElement) {
    const parentElement = newMinHeap[parentIndex];
    newMinHeap[parentIndex] = currentElement;
    newMinHeap[currentIndex] = parentElement;
    currentIndex = parentIndex;
    parentIndex = getParentIndex(currentIndex);
  }

  return newMinHeap;
};

const insertMinHeap = (minHeap, element) => {
  const newMinHeap = [...minHeap, element];
  const lastIndex = newMinHeap.length - 1;

  const minHeapSwapped = swap(minHeap, lastIndex);

  return minHeapSwapped;
};

const heapify = (minHeap, index) => {
  const currentHeap = [...minHeap];
  const leftChildIndex = getLeftChildIndex(index);
  const rightChildIndex = getRightChildIndex(index);

  let smallerElementIndex = index;

  if (left < minHeap.length && minHeap[leftChildIndex] < minHeap[index]) {
    smallerElementIndex = leftChildIndex;
  }

  if (rightChildIndex < minHeap.length && minHeap[rightChildIndex] < minHeap[smallerElementIndex]) {
    smallerElementIndex = rightChildIndex;
  }

  if (index != smallerElementIndex) {
    const currentElement = currentHeap[index];
    currentHeap[index] = currentHeap[smallerElementIndex];
    currentHeap[smallerElementIndex] = currentElement;

    return heapify(currentHeap, smallerElementIndex);
  }

  return currentHeap;
};

const deleteMinimum = (minHeap) => {
  const newMinHeap = [...minHeap];
  const lastElement = newMinHeap.pop();
  newMinHeap[0] = lastElement;

  return heapify(newMinHeap, 0);
};

const deleteElement = (minHeap, index) => {
  const newMinHeap = [...minHeap];
  const minimumElement = getMin(minHeap) - 1;

  newMinHeap[index] = minimumElement;

  const minHeapSwapped = swap(newMinHeap, index);

  const minHeapDeleted = deleteMinimum(minHeapSwapped);

  return minHeapDeleted;
};

export { getMin, getParentIndex, getParent, getLeftChildIndex, getLeftChild, getRightChildIndex, getRightChild, swap, insertMinHeap, heapify, deleteMinimum, deleteElement };
