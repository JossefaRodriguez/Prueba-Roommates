const http = require('http')
const url = require('url')
const fs = require('fs')
const { nuevoRoommate, guardarRoommate, agregarGasto, editarGasto } = require('./roommate')

const servidor = http.createServer(async (req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-type', 'text/html')
        res.end(fs.readFileSync('index.html', 'utf-8'))
    }
    // eliminar error en la consola del favicon
    else if (req.url === '/favicon.ico' && req.method === 'GET') {
        res.end('')
    }

    else if (req.url === '/roommate' && req.method === 'POST') {
        nuevoRoommate().then(result => {
            guardarRoommate(result)
            res.end(JSON.stringify(result))
        }).catch(err => {
            res.statusCode = 500
            res.end()
            console.log('Existe un error al registra el Roommate')
        })
    }

    else if (req.url === '/roommates' && req.method === 'GET') {
        res.setHeader('Content-type', 'application/json')
        res.end(fs.readFileSync('roommate.json', 'utf-8'))
    }

    else if (req.url === '/gastos' && req.method === 'GET') {
        res.setHeader('Content-type', 'application/json')
        res.end(fs.readFileSync('gasto.json', 'utf-8'))
    }

    else if (req.url === '/gasto' && req.method === 'POST') {
        let body
        req.on('data', (payload) => {
            body = JSON.parse(payload)
        })
        req.on('end', () => {
            agregarGasto(body)
        })
        res.end()
    }

    else if (req.url.startsWith('/gasto?') && req.method === 'PUT') {
        const params = url.parse(req.url, true).query
        const id = params.id
        let body
        req.on('data', (payload) => {
            body = JSON.parse(payload)
        })
        req.on('end', () => {
            editarGasto(body, id)
        })
        res.end()
    }

   /* else if (req.url.startsWith("/gasto?") && req.method == "DELETE") {
       const params = url.parse(req.url, true).query; 
       const gastosId = params.id
       */
       
    else {
        res.end('Not found')
    }
})
servidor.listen(3000, console.log('Servidor encendido'))
