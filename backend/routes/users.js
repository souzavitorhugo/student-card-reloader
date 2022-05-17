module.exports = function(req, res) {
    const {id} = req.params;
    const message = 'Não existe usuário cadastrado para este n° de cartão';

    const users = {
        0: {
            firstName: 'Vitor',
            lastName: 'Hugo',
            birthYear: '04/07/2001',
            cardCod: '123456789'
        }, 1: {
            firstName: 'Mateus',
            lastName: '',
            birthYear: '07/09/2000',
            cardCod: '987654321'
        }, 2: {
            firstName: 'Gustavo',
            lastName: 'Hugo',
            birthYear: '29/12/1900',
            cardCod: '147852369'
        }
    }

    if(id in users){
        res.json(users[id])
        return 
    } else {
        res.status(404).json( {error: 'User not found',
                                message: message}
        )
    }
}