### SLIDER
1. Inserire le immagini dinamicamente
2. Al click sul pulsante right, mostrare l'immagine successiva
    Al click sul pulsante left, mostrare l'immagine precedente


### Implementazione
1.
**Dato**
Array di immagini

**Soluzione**
Ciclo for, per ogni elemento di array
    Creare Elemento immagine

2. Mostrare le immagini
Partenza: dobbiamo mostrare il primo elemento
Al primo elemento dobbiamo aggiungere la classe "current"

Settare variabile currentSlide 

Al click sulla freccia right:
    Se indice < (lunghezza - 1) dell'array 
        Togliere la classe da elemento corrente
        Incrementiamo l'indice
        Aggiungiamo la classe current al nuovo indice corrente

Al click sulla freccia sinistra
    Se indice > 0 
        Togliere la classe da elemento corrente
        decremento l'indice
        Aggiungiamo la classe current al nuovo indice corrente