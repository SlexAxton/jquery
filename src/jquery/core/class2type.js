define('jquery/core/class2type', function () {
  var class2type = {},
      types = "Boolean Number String Function Array Date RegExp Object".split(" "),
      idx,
      name;
  
  // Populate the class2type map
  // don't use each, so we don't have a circular dependency (just in the bootstrap)
  for (idx in types) {
    name = types[idx];
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
  }

  return class2type;
});