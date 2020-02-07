const AtendimentosRotas = (app) => {
    app.route('/atendimentos')
        .get((req, res) => res.json({message: 'get method'}))
        .post((req, res) => res.json({message: 'post method'}))
}

module.exports = AtendimentosRotas;