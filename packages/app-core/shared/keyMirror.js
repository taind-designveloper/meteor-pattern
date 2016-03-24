keyMirror = function(obj) {
  let ret = {};
  let key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Meteor.Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = key;
    }
  }
  return ret;
};
