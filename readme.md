# 🚀 Installation Typescript
![cover](./asset/cover.png)
1. Assurez-vous d'avoir Node.js installé sur votre système.
2. Ouvrez votre terminal/command prompt.
3. Exécutez la commande suivante pour installer TypeScript globalement :
```cmd
    npm install -g typescript
```
4. Vérifiez que TypeScript a été installé correctement en exécutant :
```cmd
    tsc --version
```
5. Initialisez un nouveau projet Node.js en exécutant la commande suivante :
```cmd
    npm init -y
``` 
6. Installez TypeScript en tant que dépendance de développement en exécutant :
```cmd
    npm install --save-dev typescript
``` 
7. Créez un fichier tsconfig.json à la racine de votre projet pour spécifier la configuration TypeScript. Vous pouvez le créer manuellement ou en exécutant :
```cmd
    npx tsc --init
    npx tsc --version
```
8. Pour compiler votre code TypeScript en JavaScript :
```cmd
    npx tsc 
```
Si votre fichier JavaScript cible doit être généré dans un répertoire spécifique tel que dist, vous pouvez le configurer dans votre fichier tsconfig.json. Voici comment le faire :
1. Ouvrez votre fichier tsconfig.json.
2. Recherchez la section "compilerOptions".
3. Ajoutez ou modifiez la clé "outDir" pour spécifier le répertoire de sortie où les fichiers JavaScript seront générés. Par exemple :
```json
    {
    "compilerOptions": {
        "outDir": "dist",
        // Autres options de configuration...
    },
    // Autres configurations...
    }

```
1. Pour executer la compilation ouvrez votre fichier package.json.
2. Trouvez la section "scripts".
3. Ajoutez un nouveau script avec une clé que vous pouvez choisir, par exemple "build" :
```json
    {
    "scripts": {
        "build": "tsc"
        // Autres scripts...
    },
    // Autres configurations...
    }
```
4. Maintenant, chaque fois que vous souhaitez compiler votre code TypeScript, vous pouvez simplement exécuter la commande suivante dans votre terminal :
```cmd
    npm run build
```
On peur surveiller les modifications des fichiers TypeScript et compiler automatiquement en JavaScript en utilisant directement le compilateur TypeScript (tsc) avec l'option --watch. Cela ne nécessite pas l'utilisation de npm.
```cmd
    tsc --watch
```
CTRL c : coupe l'execution

## Le typage en TypeScript commence toujours par une lettre minuscule. Par exemple :
- __"string"__ pour les chaînes de caractères
- __"number"__ pour les nombres
- __"boolean"__ pour les valeurs booléennes
- __"any"__ pour tout type
