const sentence = 'hello there from lighthouse labs';
let i = 0;

const typewriter = () => setTimeout(() => {
  process.stdout.write(sentence[i++]);
  if (i < sentence.length) typewriter();
  if (i === sentence.length) process.stdout.write('\n');
}, 50);

typewriter();