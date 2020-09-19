var exec = require('child_process').exec;

export function  execute(cb=()=>{}){
    var cmd=' fuser -k -n tcp 3000 && cd /home/blog/blog && yarn build && yarn start';
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.log(error);
            cb('失败')
        }
        else{
            cb('成功')
        }
    });
}
