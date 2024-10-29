
``` bash
mkdir nome-della-app # creazione della directory principale
```

``` bash
cd nome-della-app # entra nella directory 
```

``` bash
npm init # crezione del package.json 
```

``` bash
npm install express # installazione di ambiente di sviluppo back-end 
```

``` bash
node app.js # fa partire il server ma deve essere riavviato a dogni modifica 
```

``` bash
npm install --save-dev nodemon # scarica nell'ambiente di sviluppo uno strumento che rileva le modifiche e aggiorna automaticamente  
```

``` bash
npm install sqlite3 # database di test  
```

``` bash
npm install ejs --save # per avere un motore di compilazione font-end come blade con laravell 
```





<!-- ............................................ -->
### HOW TO MIGRATE DATABASE
<!-- ............................................ -->

```bash
cd app/actions #per entrare nella directory
```

```bash
node migrate.js #esegui il file di migrazione
```






<!-- ............................................ -->
### HOW TO DEELCT DATABASE
<!-- ............................................ -->

```bash
cd app/actions #per entrare nella directory
```

```bash
node deleteDatabase.js #elimina il database
```