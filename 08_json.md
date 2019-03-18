# JSON, czyli złożone struktury danych

Zapewne spotkaliście się już w Pythonie ze strukturami danych - przede wszystkim z listami i słownikami. W JavaScripcie takie struktury także występują, mało tego - mają bardzo podobną składnię do tych pythonowych.

## Słowniki

Słownik służą do przechowywania zbiorów klucz-wartość. Tworzymy je bardzo podobnie jak w Pythonie:

```JS
var car = {
    name: "Ferrari",
    color: "red"
}
```

Nieco inaczej wygląda odwoływanie się do wartości przechowywanych w słowniku. Możemy to zrobić na dwa sposoby:

```JS
car.color; // pierwszy, preferowany sposób

car['color']; // drugi sposób, analogiczny do Pythona
```

## Listy

W listach możemy przechowywać wiele wartości, dokładnie tak jak w Pythonie:

```JS
var colors = ['red', 'green', 'blue'];
```

Odwoływanie się do elementu pod danym indeksem także jest analogiczne do Pythona:

```JS
colors[1];
// green
```

Aby przeiterować po elementach listy, wykorzystujemy metodę ```forEach()```, do której musimy przekazać funkcję, którą chcemy wykonać na każdym elemencie:

```JS
colors.forEach( function(color) {
    console.log(color);
});
// red
// green
// blue
```

Podobną składnię ma metoda ```map()``` zwracająca listę elementów przetworzonych przez przekazaną funkcję:

```JS
var list = [1, 2, 3];
list.map( function(x) {
    return 2*x;
});
// [2, 4, 6]
```

> Uwaga!
> Funkcja przekazywana jako argument metody ```map()``` MUSI zwracać jakąś wartość.

Niebawem dowiemy się, w jaki sposób pobierać dane z różnych serwerów dostępnych w Internecie. Gros tych serwerów zwraca dane w formacie takich właśnie słowników i list (format ten nosi nazwę *JSON* - *JavaScript Object Notation).