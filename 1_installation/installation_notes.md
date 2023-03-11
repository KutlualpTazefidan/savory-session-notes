- Install Ubuntu through the store -> if uninstalled: open powershell and use : wsl --unregister Ubuntu

- Install node and update it following the instructions below: 
  https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl
- Install zsh and then oy my zsh
- Install git: sudo apt-get install git
- Git configuration:
  - git config --global user.name "Kutlualp Tazefidan"
  - git config --global user.email ktazefidan@hotmail.com
  - ssh-keygen -t ed25519 -C "YOUR_EMAIL@example.com"

- to update node version follow this page:
https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl

vscode settings:
Open Visual Studio Code
Open the Extensions Panel (⇧⌘X)
Install the following extensions
Auto Rename Tag
Live Preview
Prettier - Code formatter
ESLint
Open the Visual Studio Code settings (⌘,)
Search for "Default Formatter" and set to "Prettier - Code formatter"
Search for "Format On Save" and check the checkbox
💡 This will set up Visual Studio Code to automatically format your code on save using Prettier.
