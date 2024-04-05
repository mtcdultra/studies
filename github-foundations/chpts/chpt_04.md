# Editar código por meio de branches e mesclagem no Git

[Return Readme](../README.md)

1. [x] Introdução
2. [x] Branches no Git
3. [x] Exercício – Criar um branch como Alice
4. [x] Exercício – Mesclar branch de Bob
5. [x] Exercício – Resolver conflitos de mesclagem
6. [x] Verificação de conhecimentos
7. [x] Resumo

## Branches no Git

- O trabalho feito em um branch não precisa ser compartilhado e não interfere no trabalho de outros branches
- Os branches permitem que você mantenha os commits relacionados a cada tópico juntos e isolados de outros trabalhos, de modo que as alterações feitas em um tópico sejam fáceis de examinar e acompanhar

```bash
    # Criar um branch e mudar para ele
    git checkout -b add-style

    # Após fazer as alterações ...

    git commit -a -m "Adicionado estilo ao site"

    # Voltar para a branch principal
    git checkout main
    # Caso qualquer outra pessoa tenha feito alterações, é necessário atualizar a branch principal
    git pull

    git merge --ff-only add-style
    # Usar o sinalizador --ff only é uma boa prática, pois uma mesclagem --ff-only falhará se main tiver sido alterado.
    git push

    # Excluir o branch add-style
    git branch -d add-style

    # Apagar remotamente
    git push origin --delete add-style
```

## Resolver conflitos de mesclagem

- Há as seguintes opções:
  - **Execute o comando git merge --abort** para restaurar o branch main para o que era antes da tentativa de mesclagem.
  - **Execute o comando git reset --hard** para voltar ao local em que estava antes de iniciar a mesclagem.
  - Resolver o conflito manualmente usando as informações que o Git insere nos arquivos afetados.
- Os desenvolvedores parecem preferir a última opção
