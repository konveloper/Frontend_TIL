const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    let url = req.url;
    if(req.url == '/favicon.ico'){
        return res.writeHead(404);
    }
    
    if(req.url == '/'){
        url = '/html/index.html';
    } else if (req.url == '/about'){
        url = '/html/about.html';
    } else if (req.url == '/product'){
        url = '/html/product.html';
    } else if (req.url == '/notice'){
        url = '/html/notice.html';
    } else if (req.url == '/test.css'){
        // 주의! 들어오는 url은 localhost:8080/test.css
        url = '/html/test.css'; 
    }else {
        res.writeHead(404);
        res.end();
        return 
    }

    
    res.writeHead(200);
    // console.log(__dirname + url);
    res.end(fs.readFileSync(__dirname + url));
    // response.end('helloworld!!' + url);

});

server.listen(8080);