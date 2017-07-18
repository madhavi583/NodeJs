var fs = require('fs');
//var readme= fs.readFileSync('readme.txt','utf8');
//  fs.readFileSync('readme.txt','utf8',function(err,data){
// console.log(data);
// fs.writeSync('writeMe.txt',data);

//  });
//  console.log('test');
//fs.writeSync('writeMe.txt',readme);
//console.log(readme);
fs.unlink('writeMe.txt');
fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('./stuff/write.txt');

    })

    
});
