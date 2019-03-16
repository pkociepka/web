# CSS, czyli jak nadać styl stronie internetowej

W języku HTML możemy zdefiniować strukturę strony internetowej. Nadchodzi jednak moment, gdy poza strukturą zaczyna być istotny także jej wygląd - wtedy właśnie potrzebujemy stylów.

## Co to jest styl?

Współczesne przeglądarki internetowe obsługują multum parametrów, za pomocą których możemy sterować wyglądem elementów strony internetowej. Możemy je przekazać do danego elementu HTML w następujący sposób:

```HTML
<div style="width: 100px, height: 100px, background-color: black"> </div>
```

W przykładzie tworzymy element ```div``` o wymiarach 100x100 pikseli, z czarnym tłem.

## Skąd wziąć style?

Parametrów modyfikujących wygląd strony jest tak dużo, że nie ma sensu ich tutaj wymieniać. Mając konkretne wymagania co do wyglądu, wystarczy że użyjecie wyszukiwarki internetowej. Warto jednak wiedzieć, że bardzo dobrze opisaną bazę (niemal) wszystkich parametrów znajdziecie pod adresem <https://www.w3schools.com/cssref/>

<!-- ## Robimy porządki, czyli style w osobnym pliku -->

## Gdzie umieścić style?

Najlepiej style definiować w osobnym pliku z rozszerzeniem ```.css```. Ważne, żeby powiedzieć stronie internetowej, gdzie może szukać definicji tych stylów. W tym celu do nagłówka strony musimy dopisać odpowiedni odnośnik:
```HTML
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
```

## Selektory

Selektory określają zbiór elementów, do których należy zaaplikować dany styl. Trzy podstawowe selektory to:

* ```#id``` - obejmuje jeden element o zdefiniowanym identyfikatorze (identyfikator elementu definiujemy w HTML następująco: ```<div id="someElement">```)

* ```.className``` - dotyczy wszystkich elementów należących do podanej klasy (klasę, podobnie jak id, definiujemy w HTML: ```<div class="someClass">```). Pamiętajmy, że może istnieć wiele elementów należących do tej samej klasy oraz że jeden element może należeć do kilku klas

* ```tagName``` - dotyczy wszystkich elementów HTML o podanej nazwie (np. selektor ```h3``` dotyczy wszystkich elementów ```<h3>```)
Selektory można ze sobą łączyć, po więcej szczegółów warto zajrzeć na <https://www.w3schools.com/cssref/css_selectors.asp>

## Bootstrap

Pojawia się pytanie - czy musimy wymyślać wszystkie style na nowo? Przecież ktoś już na pewno robił to samo, warto by skorzystać z gotowych elementów. Pytanie było na tyle popularne, że obecnie istnieje kilka popularnych *bibliotek stylów*. Jedną z nich jest Bootstrap.

### Skąd go wziąć?

W sekcji ```head``` musimy zalinkować odpowiedni arkusz stylów:
```HTML
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```

### Jak go używać?

Listę wszystkich komponentów możesz znaleźć tutaj: <https://getbootstrap.com/docs/4.3/components/>

## Zadanie

Nadaj swojemu CV ładną formę graficzną


