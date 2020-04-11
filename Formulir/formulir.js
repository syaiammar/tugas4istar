var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
 
    if(q.pathname=="/formulir/" && req.method === "GET"){
        var inama = q.query.inama;
        var itujuan = q.query.itujuan;
        var ijumlah = q.query.ijumlah;
        var inputtiket = q.query.inputtiket;
        var inputdiskon = q.query.inputdiskon;
        var inputotalHarga = q.query.inputotalHarga;
        console.log(q.query);
        
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(" <form style='margin: 10rem auto 13.1rem auto; background: teal;font-family: sans-serif'>");
            res.write("<h1> FORMULIR PEMESANAN TIKET </h1>");
            res.write("<label><b>&nbsp;&nbsp;Nama Pemesan&nbsp;&nbsp;:</b></label><br>"+"&nbsp;&nbsp;"+inama+"<br>");
            res.write("<label><b>&nbsp;&nbsp;Tujuan&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</b></label><br>"+"&nbsp;&nbsp;"+itujuan+"<br>");
            res.write("<label><b>&nbsp;&nbsp;Jumlah Tiket&nbsp;&nbsp;:&nbsp;&nbsp;</b></label><br>"+"&nbsp;&nbsp;"+ijumlah+"<br>");
            res.write("<label><b>&nbsp;&nbsp;Harga&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</b></label><br>"+"&nbsp;&nbsp;"+inputtiket+"<br>");
            res.write("<label><b>&nbsp;&nbsp;Diskon Member&nbsp;&nbsp;:&nbsp;&nbsp;</b></label><br>"+"&nbsp;&nbsp;"+inputdiskon+"<br>");
            res.write("<label><b>&nbsp;&nbsp;Total Harga&nbsp;&nbsp;:&nbsp;&nbsp;</b></label><br>"+"&nbsp;&nbsp;"+inputotalHarga+"<br>");
            res.write("</form>")

    }else{
        fs.readFile('formulir.html',(err,data)=>{
            if (err) { 
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            } 
            
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    
}).listen(8000);
console.log('server is running on http://localhost:8000');