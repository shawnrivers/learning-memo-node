function throwSomething() {
  throw 'Something';
  console.log('Something is thrown');
}

function catchThrownSomething() {
  try {
    throwSomething();
  } catch (error) {
    console.error('Error:', error);
  }
}

console.log('First');
console.log('Second');
catchThrownSomething();
console.log('Fourth');
