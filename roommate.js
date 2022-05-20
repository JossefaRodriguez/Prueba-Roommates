const fs = require('fs')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')


const nuevoRoommate = async () => {
    try {
        const { data } = await axios.get('http://randomuser.me/api')
        const roommate = data.results[0]
        const newRoommate = {
            id: uuidv4().slice(30),
            nombre: `${roommate.name.first} ${roommate.name.last}`

        }
        return newRoommate
    } catch (err) {
        console.log(err)
    }
}

const guardarRoommate = (roommate) => {
    const dataRoommate = JSON.parse(fs.readFileSync('roommate.json', 'utf-8'))
    dataRoommate.roommates.push(roommate)
    fs.writeFileSync('roommate.json', JSON.stringify(dataRoommate))

}


const agregarGasto = (gastos) => {
    const gasto = JSON.parse(fs.readFileSync('gasto.json', 'utf-8'))
    const nuevoGasto = {
        id: uuidv4().slice(30),
        roommate: gastos.roommate,
        descripcion: gastos.descripcion,
        monto: gastos.monto
    }
    gasto.gastos.push(nuevoGasto)
    fs.writeFileSync('gasto.json', JSON.stringify(gasto))
}

const editarGasto = (gasto, gastoid) => {
    const dataGastos = JSON.parse(fs.readFileSync('gasto.json', 'utf-8'))
    dataGastos.gastos = dataGastos.gastos.map( edit => {        
        if (edit.id === gastoid) {            
            return {
                id : gastoid,
                ...gasto
                
            }
        }
        return edit
    })
    fs.writeFileSync('gasto.json', JSON.stringify(dataGastos))
}

const deleteGastos = () => {
    
}


module.exports = { nuevoRoommate, guardarRoommate, agregarGasto, editarGasto }