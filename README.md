# Cadastro de carros

**Requisitos funcionais**
- Deve ser possível cadastrar um novo carro.

**Regras de negócio**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado disponível por padrão.
- * O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carro

**Requisitos funcionais**
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros pelo nome da categoria.
- Deve ser possível listar todos os carros pelo nome da marca.
- Deve ser possível listar todos os carros pelo nome do carro.

**Regras de negócio**
- O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**Requisitos funcionais**
- Deve ser possível cadastrar uma especificação para um carro.

**Regras de negócio**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para um mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagem do carro.

**Requisitos funcionais**
- Deve ser possível cadastrar a imagem do carro.

**Requisitos não funcionais**
- Utilizar o multer para upload de arquivos.

**Regras de negócio**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos funcionais**
- Deve ser possível cadastrar um aluguel.

**Regras de negócio**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação.
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução de carro

**Requisitos funcionais**
- Deve ser possível realizar a devolução de um carro.

**Regras de negócio**
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- Ao realizar a devolução o usuário deverá ser liberado para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do aluguel.
- Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
