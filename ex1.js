var express = require('express');
//설치된 모듈을 require 명령을 통해 불러옴

var app = express();
//

app.get('/',function (req, res)
  {res.send('Hello World!');
});
//조건함수

app.listen(3000, function(){ //(port번호, 함수)
  console.log('Server on');
});
//서버root 에 get요청이 왔을 때 출력함 (반응함수)
