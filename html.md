# Wprowadzenie do HTML

## Znaczniki

Strony internetowe tworzone są w specjalnym języku HTML (*HyperText Markup Language*). Przyjrzyjmy się najprostszej stronie:

```
<html>
    Moja pierwsza strona internetowa
</html>
```

Zapisz ją w pliku z rozszerzeniem ```.html```, a następnie otwórz ten plik (domyślnie powiniene się otworzyć za pomocą przeglądarki internetowej) - oto pierwsza stworzona przez ciebie strona internetowa :)

Zastanówmy się, co oznacza ten zapis. Elementry ograniczone ostrymi nawiasami (&lt; i &gt;) to tzw. *tagi* (lub *znaczniki*), czyli elementy języka HTML. Tagi występują w parach - otwierający ```<html>``` i zamykający ```</html>``` (zwróć uwagę na znak ```/``` w tagu zamykającym). Wszystko, co umieścimy wewnątrz tagów ```<html>``` to nasza strona internetowa.

## Formatowanie tekstu

Oczywiście strony nie składają się tylko z nudnego tekstu. Mamy wiele znaczników umożliwiających nam urozmaicenie i logiczne rozplanowanie tekstu. Przyjrzyjmy się bardziej rozbudowanemu przykładowi:

```
<html>
    Moja pierwsza strona internetowa. Zawiera tekst <b> pogrubiony</b> i <u>podkreślony</u>. Mogę także <font color="red">zmieniać</font> <font color="blue">kolor</font> <font color="green">tekstu</font>.
    <p>Jeśli strona zawiera dużo treści, dzielę ją na akapity.</p>
    <h2>Nagłówek</h2>
    <p>Akapitów może być wiele, warto wtedy dodać nagłówki, by czytelnik mógł szybko znaleźć interesującą go treść.</p>
</html>
```

Ponownie zachęcam do zapisania i uruchomienia tej strony. Jak widzisz, użyliśmy tym razem więcej znaczników - zastanówmy się po kolei, co oznacza każdy z nich.

### Wyróżnianie tekstu

```<b>``` powoduje <b>pogrubienie</b> tekstu znajdującego się wewnątrz.

```<i>``` powoduje <i>pochylenie</i> tekstu znajdującego się wewnątrz.

```<u>``` powoduje <u>podkreślenie</u> tekstu znajdującego się wewnątrz.

```<s>``` powoduje <s>przekreślenie</s> tekstu znajdującego się wewnątrz.

Istnieje także kilka innych znaczników służących do wyróżniania tekstu (np. ```<strong>``` i ```<em>```), ale na razie nie będziemy się nimi zajmować.

Warto zauważyć, że znaczniki te możesz dowolnie łączyć i zagnieżdżać, np.:

```
<html>
    <b> Ten tekst jest pogrubiony <i> a ten dodatkowo pochylony </i></b>
</html>
```

> **Uwaga!**
> Znaczniki koniecznie zamykaj w odpowiedniej kolejności - ostatni otwarty powinien być pierwszym, który zamkniesz

### Nagłówki i akapity

Znacznik ```<h2>``` służy do wyróżnienia w tekście nagłówków (sekcji, rozdziałów, akapitów). Do dyspozycji mamy sześć typów nagłówków, od ```<h1>``` do ```<h6>```, przy czym ```<h1>``` to nagłówek największy, a ```<h6>``` najmniejszy.

> Pamiętaj, że każdy znacznik należy zamykać - początek nagłówka wyznacza tag ```<h3>```, a koniec tag ```</h3>```

Do podziału tekstu na akapity służy znacznik ```<p>```. Każdy akapit twojej strony umieść w osobnej parze tagów ```<p> ... </p>```.

### Kolor tekstu

Do zmiany koloru użyliśmy tagu ```<font color="red">```. Jak widzisz, jest on nieco bardziej skomplikowany od poprzednich. `font` to nazwa tagu (tak samo jak poprzednie `p`, `h3` albo `b`). `color="red"` to tzw. *parametr*, czyli dodatkowa wartość, którą możemy ustawić w tym znaczniku. Tag `<font>` oferuje trzy parametry (choć nie musimy używać wszystkich na raz):

 * `color` służy do ustawienia koloru tekstu; w cudzysłowie przekazujemy angielską nazwę koloru;
 * `face` umożliwia wybór kroju czcionki, np. *Arial*, *Verdana*;
 * `size` ustawia wielkość czcionki (w punktach typograficznych, tak samo jak w edytorach tekstu).

W jednym tagu możemy użyć kilku parametrów. Zauważ też, że parametry przekazujemy tylko i wyłącznie w znaczniku otwierającym. Przykładowo:

```
<font color="orange" face="Arial" size="20"> Duży pomarańczowy tekst </font>
```

## Listy

Język HTML umożliwia nam tworzenie list wypunktowanych i list numerowanych.

### Listy wypunktowane

Cała lista ograniczona jest znacznikami ```<ul> ... </ul>``` (`ul` - *unordered list*). Poszczególne elementy listy znajdują się w tagach ```<li> ... </li>``` (`li` - *list element*). Następujący kod HTML:

```
<html>
    Kolory:
    <ul>
        <li> czerwony </li>
        <li> niebieski </li>
        <li> zielony </li>
    </ul>
</html>
```

zaowocuje listą wyglądającą mniej więcej tak:

> Kolory:

> * czerwony

> * niebieski

> * zielony

### Listy numerowane

Cała lista ograniczona jest znacznikami ```<ol> ... </ol>``` (`ol` - *ordered list*). Poszczególne elementy listy ponownie znajdują się w tagach ```<li> ... </li>```. Następujący kod HTML:

```
<html>
    Medale:
    <ol>
        <li> złoty </li>
        <li> srebrny </li>
        <li> brązowy </li>
    </ol>
</html>
```

wygeneruje następującą listę:

> Medale:

> 1. złoty

> 2. srebrny

> 3. brązowy

W przypadku list numerowanych możesz wybrać, w jaki sposób chcemy enumerować elementy - za pomocą liczb, liter czy liczb rzymskich. Służy do tego parametr `type`, np. `<ol type="a">` oznacza listę numerowaną małymi literami, a `<ol type="I">` - listę numerowaną wielkimi liczbami rzymskimi.

Spróbuj także numerować listę nie od pierwszego, a np. od piątego elementu - służy do tego parametr `start`, np. `<ol start="5">` oznacza, że numery w liście zaczną się od wartości *5*.

> Parametr `start` możemy także stosować w listach punktowanych literami, jednak zawsze musi on przyjmować wartość liczbową, np. `<ol type="A" start="5">` definiuje listę wypunktowaną wielkimi literami, poczynając od 'E'.

Nie są to wszystkie możliwości, które dają nam listy. Zachęcam do poszukania w Internecie dokumentacji opisującej listy HTML. Dobrym startem jest strona [W3Schools](https://www.w3schools.com/html/html_lists.asp) opisująca więcej możliwości niż opisałem powyżej.

## Sekcje *head* i *body*

Dokument HTML składa się, jak już mogłeś się przekonać, z opisu elementów widocznych dla użytkowników. Na wszystkie widoczne elementy mówimy *ciało* (ang. *body*). Dokument HTML posiada także *głowę* (ang. *head*), w której opisujemy elementy, które nie są dla użytkownika widoczne, np. sposób kodowania tekstu:

```
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        Tu umieszczamy treść naszej strony, razem ze wszystkimi pogrubieniami, nagłówkami, akapitami, listami i wieloma innymi ciekawymi rzeczami.
    </body>
</html>
```

## Zadanie
Przygotuj prostą stronę ze swoim CV.