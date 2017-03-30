module.exports = {
  "sclient":false,
  "uid": "process",
  "append": true,
  "watch": true,
  "args":["env","local"],
  "env":{
      "NODE_ENV":"local"
  },
  "cwd":    "/Users/lixiaodong/Documents/test",
  "sourceDir": "process",
  'minUptime': 2000,
  'spinSleepTime': 1000,
  'killTree': true, 
  'max': 3, 
  "parser": function (command, args) {
      return {
        command: command,
        args:    args
      };
    }
}