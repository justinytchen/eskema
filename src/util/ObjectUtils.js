export function newGuid() {
  return 'xxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 20 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}