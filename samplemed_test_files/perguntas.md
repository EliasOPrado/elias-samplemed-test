## Perguntas

#### Resiliencia 
- Ao acontecer um erro na API existem alguns caminhos a serem seguidos, como: 
   - Ver a URL de onde o erro ocorreu com o caminho completo. Muita das vezes um path esta faltando, ou esta com erro de import como letra minuscula no lugar de maiuscula, str:id no lugar de int:id.. etc.
   - Os parametros HTTP, GET no lugar de POST.
   - Visualizando as menssagens de error do framework
    
#### Performance banco de dados
- Design do banco de dados antes do desenvolvimento;
- Seguir um padrao de nomeclatura de tables;
- O uso de `ForeignKey()` para se relacionar com outras tables;
- Escolha correta do tipo de dado, ex: `name: charfield()`nao `TextField()`;
- Testes automaticos;
#### Seguranca da API
- Ter um controle de acesso e permissao atravez de autenticacao;
- O uso de criptografia do password/tokens ja aplicado por framework como o Django;
- Uso de firewall.

#### Concorrencia
- Ainda nao lidei com esse nivel de desenvolvimento. Mas creio que os desenvolvedores devem ter como ideia a velocidade da internet, fator geografico e horario e baseado nesses fatores implementar limite nas requests. Estou aberto para aprender sobre.

[Elias Prado](https://github.com/EliasOPrado)