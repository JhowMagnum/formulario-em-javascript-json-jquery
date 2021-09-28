$(document).ready(function () {
    $('#frm').validate({
        rules: {
            nome: {
                required: true,
                minlength: 10,
                maxlength: 80
            },
            nickname: {
                required: true            
            },
            dia: {
                required: true,
            },
            mes: {
                required: true,
            },
            ano: {
                required: true,
            },
            cpf : {
				required: true
			}
        },
        messages: {
            nome: {
                required: 'Digite campo nome.',
                minlength: 'O seu nome deve ter no mínimo 10 caracteres.'
            },
            nickname: {
                required: 'Digite uma Apelido Valido.'                
            },
            
            dia : {
                required: 'Digite um dia Valido'
            }
			,
			 mes : {
                required: 'Digite um mês Valido'
            }
			,
			 ano : {
                required: 'Digite um Ano Valido'
            },
			cpf: {required: 'Digite um CPF' }
        }
    });
});