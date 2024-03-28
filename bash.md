# **BASH (CLI - Command Line Interface)**

#### [Back to README.md](README.md)
---
  
#### [Reference - Oracle](https://docs.oracle.com/cd/E19253-01/806-7612/index.html)
---
#### Terminal > Shell > Kernel
#### Shell é o ambiente de desenvolvimento (Bash - bourne-again shell)
#### [Rocketseat - Configuração do Terminal](https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/)
---
#### Editores de text: **nano e vim**
---
## **Main commands:** 

### **Directory/Files**
- To show the current directory: ```pwd```
- To show hidden files: ```ls -a``` / ```ls -la```
- To show files permissions: ```ls -l```
- To show files permissions: ```ls -lh```
- To show files permissions: ```ls -la file_name```
---
- To remove an empty directory: ```rmdir directory_name```
- To remove an directory and its contents: ```rm -r directory_name```
---
- To create a directory: ```mkdir directory_name```
- To copy a directory: ```cp -r directory_name new_directory_name```
- To rename a directory: ```mv directory_name new_directory_name```
---
- To remove a file: ```rm file_name```
- To copy a file: ```cp file_name folder_name```
- To move a file: ```mv file_name folder_name```
- To rename a file: ```mv file_name new_file_name```
- To create a file: ```touch file_name```
- Create a simple file: ```touch file_name.txt```
- Create a file with date and time: ```touch `date +%Y-%m-%d-%H%M%S`.txt```
---
- To show the content of a file: ```cat file_name```
- To show the content of a file: ```less file_name```
---
- To show type of a file: ```file file_name``` or ```file *```
- To show more details about the file: ```stat file_name```
- To send the output of a command to a file: ```command > file_name```
### **Search**
- To search for a file: ```find . -name file_name```
- To search for a file with a specific content: ```grep "content" file_name```
- To search for a file with a specific content in a directory: ```grep -r "content" directory_name```
- To search for a file with a specific content in a directory and show the line number: ```grep -rnw "content" directory_name```
- To search: ```sed -n '/string/p' file_name```
- To search and replace a string in a file: ```sed -i 's/old_string/new_string/g' 
### **Compare**
- To compare two files: ```diff file_name_1 file_name_2```
- To compare two directories: ```diff -r directory_name_1 directory_name_2```
- To compare two files and show the differences side by side: ```diff -y file_name_1 file_name_2```
### **vi Editor**
- To open a file (vi): ```vi file_name```
- To open a file (vim): ```vim file_name```
### **General**
- To show the manual of a command: ```man command_name```
- To show the history of commands: ```history```
- To show date and time: ```date```
### Users/Group
- User id: ```id```
- Domain name: ```hostname```
- Create new user: ```adduser username```
- Access the user: ```su username```
- Access home directory: ```cd ~```
- User exit: ```exit```
---
- Create new group: ```addgroup groupname```
- Associate a group to a user: ```usermod -g groupname username```
- Associate other groups to a user: ```usermod =a -G groupname username```

### Installations (Ubuntu)
- Install a package: ```apt-get install package_name```
- Update a package: ```apt-get update package_name```