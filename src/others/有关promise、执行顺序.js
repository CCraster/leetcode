function createFlow(effects = []) {
  let sources = effects.slice().flat();

  function run(callback) {
    callback && sources.push(callback);
    while (sources.length) {
      const task = sources.shift();
      if (typeof task === 'function') {
        const res = task();
        if (res?.then) {
          res.then(createFlow(sources).run);
          break;
        }
      } else if (task?.isFlow) {
        task.run(createFlow(sources).run);
        break;
      }
    }
  }

  return {
    run,
    isFlow: true,
  };
}

let timer = Date.now();
function log(...args) {
  console.log('timer: ', Date.now() - timer, ...args);
}

/**
 * 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印
 */

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createFlow([() => delay(1000).then(() => log('c'))]);

createFlow([
  () => log('a'),
  () => log('b'),
  subFlow,
  [() => delay(1000).then(() => log('d')), () => log('e')],
]).run(() => {
  console.log('done');
});
