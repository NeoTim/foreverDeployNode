


var parseArgs = function(args) {
    console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
    
    console.warn("parseArgs-args: ", args);
  var argsMap = {};
  var mainPos = 1;

  while (args[mainPos].indexOf('--') > 0) {
    mainPos++;
  }
  argsMap.main = args[mainPos];

  for (var i = (mainPos + 1); i < args.length; i++) {
    var arg = args[i];
    var sep = arg.indexOf('=');
    var key = arg.slice(0, sep);
    var value = arg.slice(sep + 1);
    if (!isNaN(Number(value)) && (value.indexOf('.') < 0)) {
      value = Number(value);
    }
    argsMap[key] = value;
  }
    console.warn('argsmsp:',argsMap);
  return argsMap;
};

setInterval(function(){
    console.log(new Date());
    parseArgs(process.argv);
},2000);