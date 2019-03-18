# Local storage czyli co zrobić, by dane się nie gubiły

Dotychczas wszystkie informacje, które mogliśmy zdobyć od użytkownika (np. wprowadzone w formularzu) znikały, gdy tylko odświeżyliśmy stronę. Tak jednak nie musi być - dzięki mechanizmowi localStorage. Można go rozumieć jako specjalny schowek w przeglądarce internetowej umożliwiający przechowywanie wartości pod różnymi nazwami-kluczami, które możemy sami zdefiniować.

## Gdzie jest schowek?

Do obiektu *localStorage* możemy się dostać następująco:
```JS
window.localStorage
```

## Jak schować?

Do zapisywania elementów w schowku wykorzystujemy metodę ```setItem```:
```JS
var data = "some important text to store";
window.localStorage.setItem("myPreciousData", data);
```

W *localStorage* możemy trzymać wyłącznie napisy, zatem zmienne niebędące napisami musimy odpowiednio przygotować. Służy do tego funkcja ```JSON.stringify()```:
```JS
var otherData = {number: 42, text: "lorem ipsum"}
window.localStorage.setItem("myOtherPreciousData", JSON.stringify(otherData));
```

## Jak znaleźć?

Jeśli znamy klucz, pod jakim zapisaliśmy dane w localStorage - możemy je bez problemu odczytać:
```JS
data = window.localStorage.getItem("myPreciousData");
```

Jeśli przechowywane dane nie są napisem, ponownie musimy je odpowiednio przetworzyć, tym razem za pomocą funkcji ```JSON.parse()```:
```JS
otherData = JSON.parse(window.localStorage.getItem("myOtherPreciousData"));
```