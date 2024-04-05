# Como criar e modificar um projeto Git

[Return Readme](../README.md)

1. [x] Introdução
2. [x] Exercício – Iniciar um projeto
3. [x] Exercício – Fazer alterações e rastreá-las com o Git
4. [x] Corrigir erros simples
5. [x] Exercício – Usar o Git para corrigir erros
6. [x] Verificação de conhecimentos
7. [x] Resumo

## Iniciar versionamento

```bash
  git init
  mkdir myproject
  cd myproject
  touch index.html

  # verificar status da árvore de trabalho
  git status

  # adicionar index.html no versionamento
  git add .

  # Criar commit do arquivo index.html
  # É comum colocar a primeira letra em maiúscula e não usar ponto final
  git commit index.html -m "Criado um arquivo vazio de index.html"
```

## Alteração do arquivo index.html

```bash
    git commit -a -m "Adicionando um cabeçalho ao arquivo index.html"
    # A opção -a adiciona todos os arquivos modificados desde o último commit
    # Não será adicionado arquivos novos
    # Para adicionar novos arquivos, use git add .
```

## Criação do .gitignore

```bash
    code .gitignore
    git add -A
    git commit -m "Feito pequenas modificações"
```

## Adicionando um subdiretório

- O Git não considera a adição de um diretório vazio no versionamento
- Uma convenção comum é adicionar um arquivo vazio chamado .git-keep
  ```bash
      mkdir css
      touch css/.git-keep
      git add css
      git commit -m "Adicionado arquivo css/style.css"
  ```

## Substituir um arquivo

```bash
    # Excluir o arquivo .git-keep
    rm css/.git-keep

    # criar um arquivo no diretório css
    cd css
    code site.css

    # Adicionar as alterações no git
    git add .

    # Para visualizar as n últimas alterações
    git log -nX #X é o número de commits que deseja visualizar
```

## Corrigir um commit: --amend

- Permite que você altere o histórico (e com que frequência uma pessoa tem a chance de alterar o histórico?).

```bash
    # Corrigir erro de digitação
    git commit --amend --no-edit
```

## Excluir um arquivo: git rm

- Esse comando exclui o arquivo em disco e faz com que o Git registre a exclusão do arquivo no índice.

```bash
    # Excluir um arquivo
    git rm css/site.css
    git commit -m "Excluído arquivo css/site.css"
```

## Recuperar um arquivo excluído: git checkout

- O Git facilita a recuperação de uma versão anterior, mesmo que a versão atual não exista mais. Seu melhor amigo nessa situação é o comando git checkout

```bash
    # Recuperar um arquivo excluído
    git checkout -- css/site.css
```

## Recuperar um arquivo excluído: git reset

- Você também pode excluir um arquivo usando git rm. Esse comando exclui o arquivo em disco e faz com que o Git registre a exclusão do arquivo no índice.
- O git reset remove o preparo da exclusão de arquivo do Git. Esse comando traz o arquivo de volta ao índice, mas o arquivo ainda está excluído em disco. Em seguida, você pode restaurá-lo no disco por meio do índice usando git checkout.

```bash
    # Recuperar um arquivo excluído
    git reset HEAD css/site.css
```

## Reverter um commit: git revert

```bash
    # Reverter um commit
    git revert HEAD
```
