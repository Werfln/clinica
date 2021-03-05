const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema paciente
const pacienteSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    endereco:{
        type: String,
        required: false
    },
    sintomas:{
        type: String,
        required: false
    },
    medicoresponsavel:{
        type: String,
        required: false
    },
    medicoespecialidade:{
        type: String,
        required: false
    }
});

const PacienteModel = mongoose.model('Paciente', pacienteSchema);

// Exporta o paciente
module.exports = PacienteModel;