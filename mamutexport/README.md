# Eksportering av regnskap fra Mamut til regneark

## Automatisk eksportering av MSSQL-databasen
Per april 2015 har vi fornyet scriptet slik at det nå kobler seg direkte til MSSQL-databasen Mamut benytter, og henter ut data, i stedet for å gjøre dette manuelt i Mamut.

For å bruke dette, kjør scriptet ```exporter.py``` på maskinen Mamut ligger. Da får man en CSV-fil som gjelder alle regnskapsårene.

Pros:
* Slipper å trykke seg frem i Mamut for å generere rapporten, lagre riktig sted osv
* Får rapport for alle regnskapsår på en gang

Cons:
* Må ha Python med pymssql-pakke fungerende på Mamut-maskina

Hvis Mamut flyttes til ny maskin, er det mulig porter + TCP/IP-oppsett for MSSQL-databasen må oppdateres.

## Legacy: Manuell eksportering

Scriptet ```parser.py``` leser inn filen ```MAMUT32.TXT``` og genererer ```result.csv```.

### Eksportere fra Mamut
1. Trykk på "RAPPORTER" øverst i Mamut, gå til "Regnskap"
2. Velg hovedbokutskrift 3, Send til: "Fil/Excel", trykk "Skriv ut"
3. Velg ønsket regnskapsår
4. Filformat: "ASCII tekst-fil", Feltskilletegn: TAB (CSV funker ikke som det skal!)
5. Lagre i ```~cyb/okonomi/6 Eksport fra Mamut/``` med filnavn "mamut32.txt" (standard valg)

### Konvertere formatet og hente inn i regnearket
1. Logg inn på cyb-brukeren med SSH og gå til ```~cyb/okonomi/6 Eksport fra Mamut/```
2. (Nå skal det være en fil som heter MAMUT32.TXT med data fra Mamut)
3. Kjør scriptet: $ ./parser.py
4. Filen result.csv inneholder nå korrekt data.
5. Kopier result.csv til datasets-mappa til regnearket og gi nytt navn
6. Importer filen ved hjelp av knappen på Fildata-arket i regnearket

