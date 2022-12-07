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
- [x] Refresh automático dos links
- [X] Redirecionar para a página `login` após realizar o cadastro, e da `login` para as páginas específicas dos tipos de usuário 
- [x] Consertar o reload 
- [X] Consertar os requests de `/lugares` e `/contar`
- [X] Fazer as funções de aceitar, cancelar e finalizar lugar
- [X] Reload do conteudo ao apertar os botões de aceitar, cancelar ou finalizar
- [ ] Completar o front-end
- [ ] Fragmentar a `src/components/Server/` em arquivos menores para facilitar a manutenção
. automação de emails <br/>

## Comentários
. fragmentar a Server/index.js em arquivos que tenham as funções de mesmo tipo? (ex: funções de logins no arquivo login.js, que é importado pelo index.js)
. referência pro dark theme do site:
https://codepen.io/ig_design/pen/omQXoQ <br/>
. registro lugares: adicionar alguma API que receba o cep e já selecione automaticamente o endereço ou adicionar a API do google maps(?)
