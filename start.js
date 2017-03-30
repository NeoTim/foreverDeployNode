var shell = require("shelljs");
var name = "up-casino-fruit-machine";
var scriptSrc = "/Users/lixiaodong/Documents/test/process/app.js";
var command = "forever restart " + name;
var envParams = "env=local"; //process.argv.env=local
var code = shell.exec(command).code; // 0:success 1:fail

if(code){
    console.log('第一次启动' + name);
    command = "forever start -a --uid '" + name + "' " + scriptSrc + " " + envParams;
    code = shell.exec(command).code;
    if(code){
        console.log('第一次启动'+ name +'失败');
    } else {
        console.log('第一次启动'+ name +'成功');
    }
} else {
    console.log('重启 '+name+' 成功');
}

