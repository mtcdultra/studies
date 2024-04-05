# GitHub Foundations


https://examregistration.github.com/certification/GHF
h
ttps://assets.ctfassets.net/wfutmusr1t3h/1kmMx7AwI4qH8yIZgOmQlP/79e6ff1dfdee589d84a24dd763b1eef7/github-foundations-exam-study-guide__1_.pdf


> https://learn.microsoft.com/en-us/collections/o1njfe825p602p

1. Introduction to Git
   1. [x] Introdução
   2. [x] O que é controle de versão?
   3. [x] Exercício – Experimentar o Git
   4. [x] Comandos básicos do Git
   5. [x] Verificação de conhecimentos
   6. [x] Resumo
2. Como criar e modificar um projeto Git
   1. [x] Introdução
   2. [x] Exercício – Iniciar um projeto
   3. [x] Exercício – Fazer alterações e rastreá-las com o Git
   4. [x] Corrigir erros simples
   5. [x] Exercício – Usar o Git para corrigir erros
   6. [x] Verificação de conhecimentos
   7. [x] Resumo
3. Colaborar com o Git
   1. [x] Introdução
   2. [x] Colaboração usando um comando de pull
   3. [x] Exercício – Clonar um repositório
   4. [x] Exercício – Fazer uma solicitação de pull
   5. [x] Exercício – Colaborar com outras pessoas usando um repositório compartilhado
   6. [x] Verificação de conhecimentos
   7. [x] Resumo
4. Editar código por meio de branches e mesclagem no Git
   1. [x] Introdução
   2. [x] Branches no Git
   3. [x] Exercício – Criar um branch como Alice
   4. [x] Exercício – Mesclar branch de Bob
   5. [x] Exercício – Resolver conflitos de mesclagem
   6. [x] Verificação de conhecimentos
   7. [x] Resumo
5. Introdução ao GitHub
   1. [x] Introdução
   2. [x] O que é o GitHub?
   3. [x] Componentes do fluxo do GitHub
   4. [x] O GitHub é uma plataforma colaborativa
   5. [x] Gerenciamento de plataforma do GitHub
   6. [x] Exercício – um tour guiado pelo GitHub
   7. [x] Verificação de conhecimentos
   8. [x] Resumo
6. Introdução aos produtos do GitHub
   1. [x] Introdução
   2. [x] Contas e planos do GitHub
   3. [x] GitHub para Celular e GitHub para Desktop
   4. [x] Cobrança do GitHub
   5. [x] Verificação de conhecimentos
   6. [x] Resumo
7. Introdução ao GitHub Copilot
   1. [x] Introdução
   2. [x] GitHub Copilot, programador de par de IA
   3. [x] Instalar, configurar e solucionar problemas do GitHub Copilot
   4. [x] Exercício – Desenvolver com sugestões de código com IA usando o GitHub Copilot e o VS Code
   5. [x] Verificação de conhecimento
   6. [x] Resumo
8. Codificar com o GitHub Codespaces
   1. [x] Introdução
   2. [x] O ciclo de vida do Codespace
   3. [x] Personalizar seu Codespace
   4. [x] Codespaces versus editor GitHub.dev
   5. [x] Exercício – Codificar com o Codespaces e o Visual Studio Code
   6. [x] Verificação de conhecimentos
   7. [x] Resumo
9. Gerenciar seu trabalho com projetos do GitHub
   1. [ ] Introdução
   2. [ ] Projetos versus Projetos Clássicos
   3. [ ] Como criar um projeto
   4. [ ] Como organizar seu projeto
   5. [ ] Como organizar e automatizar seu projeto
   6. [ ] Insight e automação com projetos
   7. [ ] Verificação de conhecimentos
   8. [ ] Resumo
10. Comunicar-se com eficiência no GitHub usando o Markdown
11. Contribuir para um projeto de software livre no GitHub
12. Gerenciar um programa InnerSource usando o GitHub
13. Manter um repositório seguro com as melhores práticas do GitHub
14. Introdução à administração do GitHub
15. Autenticar e autorizar identidades de usuário no GitHub
16. Gerenciar alterações de repositório usando solicitações de pull no GitHub
17. Pesquisar e organizar o histórico do repositório usando o GitHub
18. Usar o GitHub Copilot com o Python

---

## 1. Introdução ao Git

### Controle de versão [VCS (sistema de controle de versão) ou SCM (gerenciamento de configuração de software) ou DVCS [sistema de controle de versão distribuído]]

- É um programa ou um conjunto de programas que controla as alterações feitas em uma coleção de arquivos
- Metas:
  - Recuperar com facilidade as versões anteriores de arquivos individuais ou do projeto inteiro
  - Permitir que vários membros da equipe trabalhem em um projeto, até mesmo nos mesmos arquivos, simultaneamente sem afetar uns aos outros.

### Terminologia do Git

- **Árvore de trabalho (working tree)**
  - O conjunto de diretórios e arquivos aninhados que contém o projeto no qual está sendo feito o trabalho.
- **Repositório**
  - O diretório, localizado no nível superior de uma árvore de trabalho, no qual o Git mantém todo o histórico e os metadados de um projeto.
- **Hash**
  - Um número produzido por uma função de hash que representa o conteúdo de um arquivo ou de outro objeto como um número fixo de dígitos
- **Objeto**
  - Um repositório Git contém quatro tipos de objetos, cada um exclusivamente identificado por um hash SHA-1.
    - Blob
      - Contém um arquivo comum
    - Árvore
      - Representa um diretório
      - Contém nomes, hashes e permissões
    - Commit
      - Uma versão específica da árvore de trabalho
    - Marca
      - Nome anexado a um commit.
- **Commit**
- **Branch**
  - A ramificação padrão, que é criada quando você inicializa um repositório, é chamada de main, em geral com o nome master
  - O principal do branch atual é chamado de HEAD
- **Repositório remoto**
  - Quando você cria um repositório, o Git cria um repositório remoto chamado **origin**
- **Comandos, subcomandos e opções**

---

```bash
git --version
git config --list
```

### Comandos básicos do Git

- git status
- git add
- git commit
- git log
- git help

## 2. Como criar e modificar um projeto Git

### Iniciar versionamento

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

### Alteração do arquivo index.html

```bash
    git commit -a -m "Adicionando um cabeçalho ao arquivo index.html"
    # A opção -a adiciona todos os arquivos modificados desde o último commit
    # Não será adicionado arquivos novos
    # Para adicionar novos arquivos, use git add .
```

### Criação do .gitignore

```bash
    code .gitignore
    git add -A
    git commit -m "Feito pequenas modificações"
```

### Adicionando um subdiretório

- O Git não considera a adição de um diretório vazio no versionamento
- Uma convenção comum é adicionar um arquivo vazio chamado .git-keep
  ```bash
      mkdir css
      touch css/.git-keep
      git add css
      git commit -m "Adicionado arquivo css/style.css"
  ```

### Substituir um arquivo

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

### Corrigir um commit: --amend

- Permite que você altere o histórico (e com que frequência uma pessoa tem a chance de alterar o histórico?).

```bash
    # Corrigir erro de digitação
    git commit --amend --no-edit
```

### Excluir um arquivo: git rm

- Esse comando exclui o arquivo em disco e faz com que o Git registre a exclusão do arquivo no índice.

```bash
    # Excluir um arquivo
    git rm css/site.css
    git commit -m "Excluído arquivo css/site.css"
```

### Recuperar um arquivo excluído: git checkout

- O Git facilita a recuperação de uma versão anterior, mesmo que a versão atual não exista mais. Seu melhor amigo nessa situação é o comando git checkout

```bash
    # Recuperar um arquivo excluído
    git checkout -- css/site.css
```

### Recuperar um arquivo excluído: git reset

- Você também pode excluir um arquivo usando git rm. Esse comando exclui o arquivo em disco e faz com que o Git registre a exclusão do arquivo no índice.
- O git reset remove o preparo da exclusão de arquivo do Git. Esse comando traz o arquivo de volta ao índice, mas o arquivo ainda está excluído em disco. Em seguida, você pode restaurá-lo no disco por meio do índice usando git checkout.

```bash
    # Recuperar um arquivo excluído
    git reset HEAD css/site.css
```

### Reverter um commit: git revert

```bash
    # Reverter um commit
    git revert HEAD
```

## 3. Colaborar com o Git

### Clonar um repositório (git clone)

```bash
    git clone url-do-repositorio .
    # O ponto representa o diretório atual
```

### Repositórios remotos (git pull)

- Quando o Git clona um repositório, ele **cria uma referência ao repositório original** chamada repositório remoto usando o nome **origin**

### Criar solicitação de pull (git request-pull / pull request)

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

### Criar um repositório remoto e solicitar um pull

```bash

    git remote add remote-name-repository url-do-repositorio
    git pull remote-name-repository master
    # ou
    git pull remote-name-repository main
```

### Criação de um repositório central (repositório simples)

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

### Configuração para colaboradores

```bash
    git clone url-do-repositorio
    git branch --set-upstream-to origin/main
```

## 4. Editar código por meio de branches e mesclagem no Git

### Branches no Git

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

### Resolver conflitos de mesclagem

- Há as seguintes opções:
  - **Execute o comando git merge --abort** para restaurar o branch main para o que era antes da tentativa de mesclagem.
  - **Execute o comando git reset --hard** para voltar ao local em que estava antes de iniciar a mesclagem.
  - Resolver o conflito manualmente usando as informações que o Git insere nos arquivos afetados.
- Os desenvolvedores parecem preferir a última opção

## 5. Introdução ao GitHub

### O que é o GitHub

- O GitHub é uma plataforma baseada em nuvem que utiliza o Git, um sistema de controle de versão distribuído, como núcleo
- Principais pilares:
  - IA
  - Colaboração
  - Produtividade
  - Segurança
  - Escala
- **Repositório**
  - Contém todos os arquivos do seu projeto e o histórico de revisão de cada arquivo
- **Gists**
  - Semelhante aos repositórios, os gists são uma forma simplificada de compartilhar trechos de código com outras pessoas.
- **Wikis**
  - Todo repositório no GitHub.com vem equipado com uma seção para hospedagem da documentação, chamada wiki

### Componentes de fluxo do GitHub

- Os estados primários de um arquivo em um repositório Git são:
  - **Não rastreado**
  - **Rastreado**
    - **Não modificado**
    - **Modificado em**
    - **Preparado**
    - **Confirmado**
- **Issues**
  - Criados para acompanhar ideias, comentários, tarefas ou bugs relacionados ao trabalho no GitHub.

## 6. Introdução aos produtos do GitHub

- Tipos de contas do GitHub
  - Pessoal (conta de usuário)
  - Organização
  - Empresa/Corporativa
- Tipos de planos do GitHub
  - Github Free para contas pessoais e organizações
  - GitHub Pro para contas pessoais
  - GitHub para equipes
  - GitHub Enterprises

## 7. Introdução ao GitHub Copilot

- O GitHub Copilot é a primeira ferramenta de desenvolvedor de IA em escala do mundo que pode ajudar você a escrever código mais rapidamente com menos trabalho
- O GitHub Copilot usa o OpenAI Codex para sugerir código e funções inteiras em tempo real, diretamente no editor.

## 8. Codificar com o GitHub Codespaces
* O GitHub Codespaces é um ambiente de desenvolvimento instantâneo e baseado em nuvem que usa um contêiner para fornecer linguagens, ferramentas e utilitários de desenvolvimento comuns
* https://github.com/codespaces

## 9. Gerenciar seu trabalho com projetos do GitHub

## . Comunicar-se com eficiência no GitHub usando o Markdown

## . Contribuir para um projeto de software livre no GitHub

## . Gerenciar um programa InnerSource usando o GitHub

## . Manter um repositório seguro com as melhores práticas do GitHub

## . Introdução à administração do GitHub

## . Autenticar e autorizar identidades de usuário no GitHub

## . Gerenciar alterações de repositório usando solicitações de pull no GitHub

## . Pesquisar e organizar o histórico do repositório usando o GitHub

## . Usar o GitHub Copilot com o Python
