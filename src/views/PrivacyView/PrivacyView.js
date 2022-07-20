import { Container } from "../../components/atoms/Container/Container.styles";
import TitleWrapper from "../../components/molecules/TitleWrapper/TitleWrapper";

const PrivacyView = () => {
  return (
    <Container padding="3rem">
      <TitleWrapper
        title="Polityka prywatności"
        subtitle="tak dbamy o Twoją prywatność"
        icon={["fas", "lock"]}
      />
      <p>
        Polityka prywatności opisuje zasady przetwarzania przez nas informacji
        na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw.
        cookies.
      </p>
      <ol>
        <li>
          <b>Informacje ogólne</b>
          <ol>
            <li>
              Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
              adresem url: temp.pl
            </li>
            <li>
              Operatorem serwisu oraz Administratorem danych osobowych jest:
              Świętkorzyski Urząd Wojewódzki w Kielcah al. IX Wieków Kielc 3,
              25-516 Kielce
            </li>
            <li>
              Adres kontaktowy poczty elektronicznej operatora:
              iod@kielce.uw.gov.pl
            </li>
            <li>
              Operator jest Administratorem Twoich danych osobowych w
              odniesieniu do danych podanych dobrowolnie w Serwisie.
            </li>
          </ol>
        </li>
        <li>
          <b>Wybrane metody ochrony danych stosowane przez Operatora</b>
          <ol>
            <li>
              Miejsca logowania i wprowadzania danych osobowych są chronione w
              warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
              dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
              komputerze użytkownika i mogą być odczytane jedynie na docelowym
              serwerze.
            </li>
            <li>
              Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki
              sposób, że jedynie posiadający Operator klucz może je odczytać.
              Dzięki temu dane są chronione na wypadek wykradzenia bazy danych z
              serwera.
            </li>
            <li>
              Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja
              hashująca działa jednokierunkowo - nie jest możliwe odwrócenie jej
              działania, co stanowi obecnie współczesny standard w zakresie
              przechowywania haseł użytkowników.
            </li>
            <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
            <li>
              W celu ochrony danych Operator regularnie wykonuje kopie
              bezpieczeństwa.
            </li>
            <li>
              Istotnym elementem ochrony danych jest regularna aktualizacja
              wszelkiego oprogramowania, wykorzystywanego przez Operatora do
              przetwarzania danych osobowych, co w szczególności oznacza
              regularne aktualizacje komponentów programistycznych.
            </li>
          </ol>
        </li>
        <li>
          <b>
            Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
          </b>
          <ol>
            <li>
              W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
              dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
              wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
              ciążących na Administratorze. Dotyczy to upoważnionych pracowników
              i współpracowników, którzy korzystają z danych w celu realizacji
              celu działania strony
            </li>
            <li>
              Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
              niż jest to konieczne do wykonania związanych z nimi czynności
              określonych osobnymi przepisami (np. o prowadzeniu rachunkowości).
              W odniesieniu do danych marketingowych dane nie będą przetwarzane
              dłużej niż przez 3 lata.
            </li>
            <li>
              Przysługuje Ci prawo żądania od Administratora:
              <ul>
                <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>oraz przenoszenia danych.</li>
              </ul>
            </li>
            <li>
              Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
              przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych
              osobowych w celu wykonania prawnie uzasadnionych interesów
              realizowanych przez Administratora, w tym profilowania, przy czym
              prawo sprzeciwu nie będzie mogło być wykonane w przypadku
              istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania,
              nadrzędnych wobec Ciebie interesów, praw i wolności, w
              szczególności ustalenia, dochodzenia lub obrony roszczeń.
            </li>
            <li>
              Na działania Administratora przysługuje skarga do Prezesa Urzędu
              Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
            </li>
            <li>
              Podanie danych osobowych jest dobrowolne, lecz niezbędne do
              obsługi Serwisu.
            </li>
            <li>
              W stosunku do Ciebie mogą być podejmowane czynności polegające na
              zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
              świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia
              przez Administratora marketingu bezpośredniego.
            </li>
            <li>
              Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
              przepisów o ochronie danych osobowych. Oznacza to, że nie
              przesyłamy ich poza teren Unii Europejskiej.
            </li>
          </ol>
        </li>
      </ol>
    </Container>
  );
};

export default PrivacyView;
