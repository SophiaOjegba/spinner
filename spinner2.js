let delay = 100;
let animation = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   ']

for (const item of animation){
setTimeout(() => {
  process.stdout.write(item);
}, delay);
delay+=200;
};
