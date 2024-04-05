# Introduction to Git

1. [x] Introduction
2. [x] What is version control?
3. [x] Exercise – Try out Git
4. [x] Basic Git commands
5. [x] Knowledge check
6. [x] Summary

## Controle de versão [VCS (version control system) ou SCM (software configuration management) ou DVCS [distributed software configuration management]]

- É um programa ou um conjunto de programas que controla as alterações feitas em uma coleção de arquivos
- Metas:
  - Recuperar com facilidade as versões anteriores de arquivos individuais ou do projeto inteiro
  - Permitir que vários membros da equipe trabalhem em um projeto, até mesmo nos mesmos arquivos, simultaneamente sem afetar uns aos outros.

## Terminologia do Git

### Working tree

- O conjunto de diretórios e arquivos aninhados que contém o projeto no qual está sendo feito o trabalho.

### Repository

- O diretório, localizado no nível superior de uma árvore de trabalho, no qual o Git mantém todo o histórico e os metadados de um projeto.

### Hash

- Um número produzido por uma função de hash que representa o conteúdo de um arquivo ou de outro objeto como um número fixo de dígitos

### Object

- Um repositório Git contém quatro tipos de objetos, cada um exclusivamente identificado por um hash SHA-1.
  - Blob
    - Contém um arquivo comum
  - Tree
    - Representa um diretório
    - Contém nomes, hashes e permissões
  - Commit
    - Uma versão específica da árvore de trabalho
  - Tag
    - Nome anexado a um commit.

### Commit

### Branch

- A ramificação padrão, que é criada quando você inicializa um repositório, é chamada de main, em geral com o nome master
- O principal do branch atual é chamado de HEAD

### Remote

- Quando você cria um repositório, o Git cria um repositório remoto chamado **origin**

### Commands, subcommands e options

---

```bash
git --version
git config --list
```

## Basic commands in Git

- git status
- git add
- git commit
- git log
- git help
