const Paciente = require('../models/pacienteModel');

// -------------------------------READ--------------------------------
exports.index = (req, res) => {
    // Uso o find para procurar os arquivos e armazeno ele em pacientes com uma função de callback
    Paciente.find((e, dados) => {
        if(e) throw e;
        res.render('paciente', {
            pacientes: dados
        })
    }).catch(e => {
        console.log(e);
    })
};
// -------------------------------------------------------------------

// ------------------------------CREATE-------------------------------
exports.add = (req, res) => {
    const paciente = new Paciente(req.body);
    // Salva os dados do paciente
    paciente.save(e => {
        if (e) {
            console.log(e);
        } else {
            res.redirect('/pacientes/index');
        }
    });
};
// -------------------------------------------------------------------

// ---------------------UPDATE - Mostrar elemento---------------------
exports.editIndex = (req, res) => {
    // Pega o id na url
    Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (e, dados) => {
        if(e) {
            console.log('Erro ao tentar editar!! ' + e);
        } else {
            // Redireciona para a pagina de update e passa os dados do paciente
            res.render('pacienteUpdate', { Paciente: dados });
        }
    });
};

// ----------------------UPDATE - Editar elemento---------------------
exports.edit = (req, res) => {
    // Pega o id na url
    Paciente.findByIdAndUpdate({ _id: req.params.id }, req.body, (e) => {
        if(e) {
            console.log('Erro ao tentar editar!! ' + e);
        } else {
            // Se não tiver nenhum erro atualiza os dados do paciente
            console.log('Atualizado com sucesso!!');
            res.redirect('/pacientes/index');
        }
    });
};
// -------------------------------------------------------------------

// -------------------------------DELETE------------------------------
exports.delete = (req, res) => {
    Paciente.findByIdAndDelete({ _id: req.params.id }, e => {
        if(e) {
            console.log('Erro ao tentar deletar!! ' + e);
        } else {
            // Se não tiver nenhum erro deleta os dados do paciente
            console.log('Deletado com sucesso!!');
            res.redirect('/pacientes/index');
        }
    });
};
// -------------------------------------------------------------------
