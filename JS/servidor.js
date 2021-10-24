var http = require('http');

var servidor = http.createServer(
    function(request, response){
        response.writeHead(200, {"content-type" : "application/json"});
        response.end(`{
            "cep": "30150-210",
            "logradouro": "Rua Conselheiro Rocha",
            "complemento": "até 998/999",
            "bairro": "Floresta",
            "localidade": "Belo Horizonte",
            "uf": "MG",
            "ibge": "3106200",
            "gia": "",
            "ddd": "31",
            "siafi": "4123"
          }`);
    }
);

servidor.listen(8055, '192.168.0.9', function(){
    console.log("O servidor foi iniciado....");
});
