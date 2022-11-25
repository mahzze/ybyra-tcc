# Ybyrá  
## Executar o projeto <br/>
1. inicie o MySQL na máquina e crie o banco de dados à partir do documento src/components/database/database.sql <br/>
2. npm install <br/>
3. npm install concurrently -g <br/> 
4. /ybyra-tcc/ - npm run projeto <br/>

## Executar a build
1. npm run build
2. npm run bp

## Pendente
. Estilizar contador <br/>
. automação de emails <br/>
. registro concluído, direcionar para o login <br/>
. ongs - visualização dos lugares cadastrados, opções de aceitar lugar e finalizar lugar aceito (opções de finalização: "local aceito, X árvores plantadas", "local cancelado por motivo X")<br/>

## Correções necessárias
. auto-refresh da página após o login para atualizar os links.

## Comentários
. fragmentar a Server/index.js em arquivos que tenham as funções de mesmo tipo? (ex: funções de logins no arquivo login.js, que é importado pelo index.js)
. referência pro dark theme do site:
https://codepen.io/ig_design/pen/omQXoQ <br/>
. registro lugares: adicionar alguma API que receba o cep e já selecione automaticamente o endereço ou adicionar a API do google maps(?)
