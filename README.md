# Desafio iFood

Foi desenvolvida uma POC com uma tela de autenticação e um CRUD básico de produtos usando Angular e .NET Core.

A solução foi dividida em 5 projetos:
* **iFood.UI** - Onde está o código fonte frontend em Angular 11.0.1.
* **iFood.Application** - O projeto principal, onde estão os endpoints da aplicação.
* **iFood.Domain** - A camada de domínio da aplicação, onde ficam as entidades de domínio e regras de negócio.
* **iFood.Infrastructure** - Projeto com as configurações e detalhes de implementações não relacionadas ao domínio.
* **iFood.Tests** - O projeto com os testes automatizados.

## Como executar

A solução faz uso de "migrations" para a criação do banco de dados e é executada quando a aplicação backend é iniciada.

Caso esteja usando windows e possua uma instancia local do SQL Server instalada e rodando, basta executar a aplicação backend para criar o banco de dados.

Caso contrário, verifica a string de conexão em ```appsettings.json```.

A aplicação backend também possui o build da última versão do frontend no diretório ```wwwroot``` na raiz do projeto ```iFood.Applications```.

Mesmo assim é possível executar a aplicação frontend indo até o diretório ```iFood.UI``` e executando o comando no prompt ```npm install``` e depois o comando ```ng serve --open```.

Nesse caso, verifique se o valor do atributo ```apiUrl``` está apontando para o endereço da API corretamente. É possível verificar em ```iFood.UI/src/environments/environment.ts```.

Na aplicação backend é possível acessar a documentação da API em ```/swagger```.

## Considerações

* **Autenticação** - Foi utilizada a abordagem pedida pelo exercício através de ```Basic Auth```, embora uma solução com token JWT seja mais adequada nesse cenário.

* **Armazenamento de Imagens** - Como foi pedido pelo exercício, as imagens foram armazenadas no próprio banco de dados SQL Server. Na minha opinião, para esse tipo de problema, acredito que armazenar as imagens em um ```Blob Storage``` seria o mais adequado.
