# Dashboard

## - '/'

-statystyki dzisiejszych zamówień (zdalne i lokalne)
-lista rezerwacji i eventów zaplnowanych na dzisiaj

# Logowanie

## '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashbordu)

# Widok dostępności stolików

## '/tables'
  - wybór daty i godziny
  - tabele z listą rezerwacji oraz wydarzeń
   - każda kalomna będzie jednym stolikiem
   - każdy wiersz będzie blokiem 30 minut
   - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sa różne stoliki
   - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

## 'tables/booking/:id'
  - zawiera wszystkie informacje dotycące rezerwacji
  - umożliwia edycję i zapisanie zmian
## 'tables/booking/new'
  - analogicznie do powyższej, bez początkowych informacji
## 'tables/events/:id'
  - analogicznie do powyższej, dla eventów
## 'tables/events/new'
  - analogicznie do powyższej, dla eventów, bez początkowych informacji


# Widok kelnera

## '/waiter'
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji ( status, czas od ostatniej aktywnośći)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
## '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamównie (zamówienie produktu z opcjami i ceną)
  -kwote zamówienia
## 'waiter/order/:id'
  -jak powyższa

# Widok kuchni

## '/kitchen'
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamównionych dań
  - na liście musi być mozliwość oznaczenia zamówienia jako zrealizowane
