# *jQuery*, czyli upraszczanie sobie życia

*jQuery* to biblioteka języka JavaScript ułatwiająca nam wyszukiwanie elementów w drzewie DOM, wszechstronną manipulację tymi elementami oraz kilka innych czynności, o których wspomnimy później.

## Jak zacząć?

Aby używać *jQuery*, musimy umieścić link do odpowiedniego pliku z kodem źródłowym na naszej stronie. Najprościej wykorzystać kod dostarczany przez *Google*:

```HTML
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
```

W ten sposób za każdym razem gdy ktoś otwiera naszą stronę internetową, przeglądarka sama pobiera odpowiedni plik. Możemy teraz używać *jQuery*.

## Wyszukiwanie elementów

Dotychczas wyszukiwaliśmy obiekty z drzewa DOM 'ręcznie', za pomocą funkcji dostarczanej przez bibliotekę standardową:

```JS
document.getElementById('id-to-find');
```

Za pomocą jQuery możemy to zrobić znacznie prościej:

```JS
$('#id-to-find')
```

> Uwaga!
> Bardzo istotny jest znak '#' - oznacza on, że wyszukujemy element po identyfikatorze.

Możemy także wyszukiwać elementy po nazwie klasy. Poprzednio wyglądało to następująco:

```JS
document.getElementByClassName('class-to-find')
```

Z *jQuery*:

```JS
$('.class-to-find')
```

Dodatkowo selektory używane do wyszukiwania elementów można w łatwy sposób łączyć, np. jeśli chcemy znaleźć elementy &lt;h3&gt; należące do klasy *fancy-header*, wystarczy napisać

```JS
$('h3.fancyHeader')
```

## Tworzenie elementów

Dotychczas tworzenie elementów HTML było nieco uciążliwe:

```JS
var div = document.createElement('div');
// element tekstowy
var text = document.createTextNode('Ala ma kota');
```

Następnie dodawaliśmy węzeł tekstowy do wcześniej stworzonego elementu &lt;div&gt;:

```JS
div.appendChild(text);
```

Używając *jQuery*, problem zdecydowanie się upraszcza:

```JS
var div = $("<div></div>").text("Ala ma kota");
```

## Dodawanie jednego elementu do drugiego

Na poprzednich zajęciach używaliśmy wspomnianej funkcji ```appendChild()```, wcześniej jednak musieliśmy wyszukać element, do którego chcemy dodawać. Z *jQuery* jest to znacznie prostsze:

```JS
$('body').append(div);
```

Metoda ```append()``` dodaje element jako ostatnie dziecko. Jeśli chcemy dodać go jako dziecko pierwsze (czyli na samej górze), użyjmy metody ```prepend()```.