const http = require('http');

http.createServer((request, response) => {
    console.log(request);
    //response.writeHead(200);

    response.write('Hola hola salchicha');

    /*
    // Json...
    response.writeHead(200, { 'Content-Type': 'application/json' });

    const persona = {
        id: 1,
        nombre: 'Esteban'
    };

    response.write( JSON.stringify( persona ) );
    */

    /*
    // csv...
    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    response.writeHead(200, { 'Content-Type': 'application/csv' });

    response.write('id;nombre\n');
    response.write('1;Esteban\n');
    response.write('2;Cintia\n');
    response.write('3;Maria\n');
    response.write('4;Miriam\n');
    response.write('5;Lucia\n');
    response.write('6;Lissy\n');
    */

    response.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);
