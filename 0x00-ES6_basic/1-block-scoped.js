export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var taskInner = true;
    var task2Inner = false;
  }

  return [task, task2];
}
