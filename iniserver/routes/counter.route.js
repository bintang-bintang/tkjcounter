const express = require(`express`)
const app = express()
app.use(express.json())

const counterControl = require('../controllers/counter.controller');
app.post(`/`, counterControl.addCounter)
app.get(`/`, counterControl.showAngka)

app.put(`/up`, counterControl.counterUp)
app.put(`/down`, counterControl.counterDown)



// const pegawaiControl = require(`../controllers/pegawai.controller`)
// app.get(`/`, pegawaiControl.getAllPegawai)
// app.get(`/:id`, pegawaiControl.getOnePegawai)
// app.post(`/`, pegawaiControl.addPegawai)
// app.delete(`/:id`, pegawaiControl.deletePegawai)
// app.put(`/:id`, pegawaiControl.updatePegawai)

module.exports = app
