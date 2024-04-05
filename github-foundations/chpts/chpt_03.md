# Colaborar com o Git

[Return Readme](../README.md)

1. [x] Introdução
2. [x] Colaboração usando um comando de pull
3. [x] Exercício – Clonar um repositório
4. [x] Exercício – Fazer uma solicitação de pull
5. [x] Exercício – Colaborar com outras pessoas usando um repositório compartilhado
6. [x] Verificação de conhecimentos
7. [x] Resumo

## Clonar um repositório (git clone)

```bash
    git clone url-do-repositorio .
    # O ponto representa o diretório atual
```

## Repositórios remotos (git pull)

- Quando o Git clona um repositório, ele **cria uma referência ao repositório original** chamada repositório remoto usando o nome **origin**

## Criar solicitação de pull (git request-pull / pull request)

- Depois que outro desenvolvedor clonar seu repositório e fizer algumas alterações localmente, o ideal será que ele incorpore essas alterações novamente no repositório original
- Um push para o repositório original falhará, porque outros usuários não têm permissão para fazer alterações no seu repositório
- O desenvolvedor precisará enviar uma solicitação de pull para solicitar que você envie as alterações dele para a base de código principal. O desenvolvedor pode fazer isso usando git request-pull

```bash
    git request-pull -p origin/main .
    # ou
    git request-pull -p origin/master .
```

- Essa solicitação de pull é, essencialmente, a mesma coisa que uma solicitação de pull no GitHub
- Uma solicitação de pull dá a oportunidade de examinar as alterações de outros colaboradores antes de incorporar o trabalho deles no trabalho que você está fazendo no site.

## Criar um repositório remoto e solicitar um pull

```bash

    git remote add remote-name-repository url-do-repositorio
    git pull remote-name-repository master
    # ou
    git pull remote-name-repository main
```

## Criação de um repositório central (repositório simples)

- O que você precisa é de um repositório que não tenha uma árvore de trabalho

```bash
    # Necessário criar um diretório chamado Shared.igt no mesmo nível do diretório do projeto (este nome não é obrigatório)
    mkdir Shared.git
    cd Shared.git
    git init --bare
    git symbolic-ref HEAD refs/heads/main
    # ou
    git symbolic-ref HEAD refs/heads/master

    cd ../myproject
    git remote add origin ../Shared.git
    git push origin main

    git branch --set-upstream-to origin/main
```

## Configuração para colaboradores

```bash
    git clone url-do-repositorio
    git branch --set-upstream-to origin/main
```
