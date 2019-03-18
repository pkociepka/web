# HTTP requests, czyli jak pytać, by nam odpowiedziano oraz jak rozumieć odpowiedzi

Jak już wspomniałem, Internet pełen jest danych, które możemy zdobyć i przetworzyć. Jak to jednak zrobić?

## Jak wykonywac zapytania?

Do wykonywania zapytań HTTP wykorzystamy ponownie bibliotekę *jQuery* (oczywiście są inne metody, jednak ta jest najbardziej elegancka). Przyjrzyjmy się przykładowi:

```JS
$.get("https://sail.pw-sat.pl/altitude.json",
    function(data) {
        console.log(data);
    });
```

Do funkcji ```get()``` przekazujemy dwa podstawowe parametry - adres URL, z którego chcemy pobrać dane oraz funkcję, która te dane przetworzy. Nasz przykład wypisuje otrzymane dane w konsoli. Okazuje się, że są one w formacie *JSON*, o którym już mówiliśmy.

> Uwaga!
> GET to tylko jedna z metod zdefiniowanych w standardzie HTTP. Jeśli interesuje Cię, jakie są inne metody i kiedy je stosować - zachęcam do poszukania odpowiedzi w Internecie.