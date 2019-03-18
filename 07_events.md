# Zdarzenia, czyli nie wszystko dzieje się od razu

Tworząc stronę internetową chcielibyśmy, by działała płynnie niezależnie od okoliczności - użytkownika nie interesuje, że właśnie pobieramy dla niego bardzo dużo danych i jak wytrzyma parę sekund wieszającej się strony, to będziemy mu mogli te dane zaprezentować. Tak właśnie by się działo, gdyby wszystkie konieczne obliczenia były przez przeglądarkę wykonywane jedno po drugim, sekwencyjnie.

Na szczęście twórcy JavaScriptu przewidzieli wiele problemów i stworzyli język ***asynchroniczny***. O co chodzi? Okzuje się, że wiele akcji związanych z działaniami użytkownika (np. naciśnięcie przycisku), pobieraniem danych (*HTTP requests*) może być wykonane w tle - jedyne co musimy zrobić to zdefiniować akcję, która ma się wykonać, odpowiednio, gdy użytkownik naciśnie przycisk albo dane zostaną pobrane.

## Zdarzenia

JavaScript udostępnia wiele zdarzeń (ang. *events*) - dla każdego z nich możemy zdefiniować akcję, która wykona się, gdy zajdzie dane zdarzenie. Zdarzenia emituje m. in. każdy element DOM - gdy zostanie kliknięty, gdy użytkownik najedzie na niego myszką itp. Spójrzmy na przykład:

```HTML
<html>
    <head>
        <script>
            $("#button").on("click", function() {
                alert("You clicked the button");
            });
        </script>
    </head>
    <body>
        <input type="button" id="button" value="Click me">
    </body>
</html>
```