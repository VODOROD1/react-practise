var a = {
  name: 'it-kamasutra',
  protocol: 'https',
  maxStudentsCount: 10,
  inOnline: true,
  students: ['ivan', 'andrey', 'farid'],
  classroom: {
    teacher: {
      name: 'view',
      age: 28
    }
  }
}

function someEqual(a, b) {
  return a == b;
}

console.log(someEqual({}, {}));