// JavaScript Document

const allProjects = [
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Wojewódzki Szpital Specjalistyczny nr 3 w Rybniku",
    projekt:
      "Utworzenie zintegrowanego systemu wspomagania zarządzania wraz z zapewnieniem świadczenia usług drogą elektroniczną w Wojewódzkim Szpitalu Specjalistycznym nr 3 w Rybniku",
    wartosc: "1 875 245,70",
    dotacja: "1 587 685",
  },
  {
    podmiot: "Specjalistyczny Zespół Chorób Płuc i Gruźlicy w Bystrej",
    projekt:
      "Wprowadzenie e-usług oraz elektronicznego obiegu dokumentów w Specjalistycznym Zespole Chorób Płuc i Gruźlicy w Bystrej",
    wartosc: "1 895 058,43",
    dotacja: "1 449 065",
  },
  {
    podmiot:
      "Beskidzkie Centrum Onkologii - Szpital Miejski im. Jana Pawła II w Bielsku-Białej",
    projekt:
      "Rozwój e-usług medycznych oraz wprowadzenie elektronicznego obiegu dokumentów w Beskidzkim Centrum Onkologii – Szpitalu Miejskim im. Jana Pawła II w Bielsku - Bialej",
    wartosc: "1 750 905",
    dotacja: "1 480 95",
  },
  {
    podmiot:
      "Szpital Miejski Specjalistyczny im. Gabriela Narutowicza w Krakowie",
    projekt:
      "Lepsza jakość życia obywateli dzięki wdrożeniu usług publicznych opartych na ICT w Szpitalu Miejskim Specjalistycznym im. G. Narutowicza",
    wartosc: "16 293 475",
    dotacja: "4 211 511",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "E-pacjent w SPZOZ w Brzesku – wykorzystanie narzędzi ICT w podnoszeniu standardów obsługi pacjenta wraz z wdrożeniem e-usług medycznych",
    wartosc: "3 538 198",
    dotacja: "2 618 274",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Suchej Beskidzkiej",
    projekt:
      "Modernizacja systemu zarządzania ZOZ w Suchej Beskidzkiej z wykorzystaniem technologii informatycznych wraz z wdrożeniem e-usług.",
    wartosc: "3 933 678",
    dotacja: "2 898 784",
  },
  {
    podmiot:
      "Wojewódzki Specjalistyczny Szpital Dziecięcy im. św. Ludwika w Krakowie",
    projekt:
      "Zwiększenie wykorzystania narzędzi ICT w zakresie usług świadczonych przez Wojewódzki Specjalistyczny Szpital Dziecięcy im. św. Ludwika w Krakowie",
    wartosc: "627 321",
    dotacja: "447 083",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Kędzierzynie-Koźlu",
    projekt:
      "Wprowadzenie e-usług w Samodzielnym Publicznym Zespole Opieki Zdrowotnej w Kędzierzynie-Koźlu",
    wartosc: "6 265 006",
    dotacja: "5 293 199",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Zespół Opieki Zdrowotnej w Głuchołazach",
    projekt:
      "Rozwój e-usług medycznych oraz wdrożenie zintegrowanego systemu informatycznego w SPZOZ ZOZ w Głuchołazach",
    wartosc: "549 503",
    dotacja: "456 062,19",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Ostrowcu Świętokrzyskim",
    projekt:
      "Rozwój e-usług medycznych oraz wdrożenie zintegrowanego systemu informatycznego w Zespole Opieki Zdrowotnej w Ostrowcu Świętokrzyskim",
    wartosc: "3 100 303",
    dotacja: "2 599 999",
  },
  {
    podmiot: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Giżycku",
    projekt:
      "Informatyzacja SP ZOZ w Giżycku wraz z uruchomieniem witryny internetowej e-zozgizycko",
    wartosc: "1 446 604",
    dotacja: "1 221 812",
  },
  {
    podmiot: "SP Zespół Opieki Zdrowotnej w Nowej Dębie",
    projekt:
      "Kompleksowa informatyzacja SPZZOZ w Nowej Dębie jako element Podkarpackiego Systemu Informacji Medycznej (PSIM)",
    wartosc: "3 000 000,00",
    dotacja: "2 483 240",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Kolbuszowej",
    projekt:
      "Kompleksowa informatyzacja SPZOZ w Kolbu-szowej jako element Podkarpackiego Systemu Informacji Medycznej (PSIM)",
    wartosc: "2 650 266",
    dotacja: "2 236 809",
  },
  {
    podmiot: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Przeworsku",
    projekt:
      "Kompleksowa informatyzacja SP ZOZ w Przeworsku jako element Podkarpackiego Systemu Informacji Medycznej (PSIM)",
    wartosc: "3 018 006",
    dotacja: "2 556 726",
  },
  {
    podmiot: "Szpital Powiatowy w Mielcu",
    projekt:
      "Kompleksowa informatyzacja Szpitala Powiatowego im. Edmunda Biernackiego w Mielcu jako element Podkarpackiego Systemu Informacji Medycznej (PSIM)",
    wartosc: "4 449 788",
    dotacja: "3 777 441",
  },
  {
    podmiot: "Centrum Opieki Medycznej w Jarosławiu",
    projekt:
      "Kompleksowa informatyzacja Centrum Opieki Medycznej w Jarosławiu jako element Podkarpackiego Systemu Informacji Medycznej (PSIM)",
    wartosc: "2 989 888,00",
    dotacja: "2 533 000",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Żurominie",
    projekt:
      "Wdrożenie zintegrowanego systemu informatycznego w SP ZZOZ w Żurominie",
    wartosc: "3 191 296",
    dotacja: "2 712 602",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Wojewódzki Szpital Specjalistyczny nr 3 w Rybniku",
    projekt:
      "Podniesienie jakości działania systemu ratownictwa medycznego poprzez modernizację taboru ambulansów ratunkowcyh SP ZOZ WSS Nr 3 w Rybniku.",
    wartosc: "311 789",
    dotacja: "258 798",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Wojewódzki Szpital Specjalistyczny nr 3 w Rybniku",
    projekt:
      "Zakup wyrobów medycznych oraz wymiana dźwigów szpitalnych w celu poprawy jakości funkcjonowania Szpitalnego Oddziału Ratunkowego WSS Nr 3 w Rybniku",
    wartosc: "1 481 471",
    dotacja: "1 254 193",
  },
  {
    podmiot: "Specjalistyczny Zespół Chorób Płuc i Gruźlicy w Bystrej",
    projekt:
      '"Modernizacja obiektu "Dyrektorówki" w celu podniesienia jakości i dostępności usług lecznictwa otwartego oraz dostosowania obiektu do wymogów prawa"',
    wartosc: "2 952 530",
    dotacja: "1 845 435",
  },
  {
    podmiot: "Specjalistyczny Zespół Chorób Płuc i Gruźlicy w Bystrej",
    projekt:
      "Poprawa jakości oraz dostępności usług Specjalistycznego Zespołu Chorób Płuc i Gruźlicy w Bystrej poprzez dostosowanie Izby Przyjęć do wymogów prawnych",
    wartosc: "1 815 025",
    dotacja: "1 144 386",
  },
  {
    podmiot: "Specjalistyczny Zespół Chorób Płuc i Gruźlicy w Bystrej",
    projekt:
      "Rewitalizacja wraz z odtworzeniem walorów historycznych i krajobrazowych zabytkowego kompleksu parkowego przy ul. Fałata w Bystrej",
    wartosc: "2 458 882",
    dotacja: "1 781 493",
  },
  {
    podmiot: "Obwód Lecznictwa Kolejowego - s.p.z.o.z. w Bielsku - Białej",
    projekt:
      "Modernizacja Obwodu Lecznictwa Kolejowego S.P.Z.O.Z. w Bielsku - Białej w celu poprawy jakości i wzrostu dostępności świadczonych usług medycznych",
    wartosc: "2 723 653",
    dotacja: "1 660 248",
  },
  {
    podmiot: "Obwód Lecznictwa Kolejowego - s.p.z.o.z. w Bielsku - Białej",
    projekt:
      "Zakup nowej aparatury medycznej w celu poprawy jakości i wzrostu dostępności w Obwodzie Lecznictwa Kolejowego S.P.Z.O.Z. w Bielsku - Białej",
    wartosc: "809 643",
    dotacja: "297 850",
  },
  {
    podmiot: "Centrum Zdrowia w Mikołowie Sp. z o.o.",
    projekt:
      "Remont i przebudowa Przychodni Wielospecjalistycznej w Mikołowie przy ul. Okrzei 31",
    wartosc: "2 131 975",
    dotacja: "1 196 981",
  },
  {
    podmiot: "Powiat Zawierciański",
    projekt:
      "Poprawa bezpieczeństwa ludności poprzez utworzenie Szpitalnego Oddziału Ratunkowego w Szpitalu Powiatowym w Zawierciu",
    wartosc: "17 318 333",
    dotacja: "13 183 324",
  },
  {
    podmiot: "Powiat Zawierciański",
    projekt:
      "Zakup urządzeń medycznych wraz z przebudową i remontem pomieszczeń Zakładu RTG i USG w Zakładzie Lecznictwa Ambulatoryjnego w Zawierciu",
    wartosc: "1 015 484",
    dotacja: "839 225",
  },
  {
    podmiot: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Ogrodzieńcu",
    projekt:
      "Modernizacja Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Ogrodzieńcu w celu poprawy jakości i wzrostu dostępności świadczonych usług medycznych",
    wartosc: "1 020 448",
    dotacja: "758 726",
  },
  {
    podmiot: "Zespół Wojewódzkich Przychodni Specjalistycznych w Katowicach",
    projekt:
      "Likwidacja barier architektonicznych poprzez montaż dźwigu osobowego w budynku przy ulicy Powstańców 31 w Katowicach",
    wartosc: "1 159 217",
    dotacja: "651 332",
  },
  {
    podmiot: "Miasto Bielsko - Biała",
    projekt:
      "Restrukturyzacja wraz z modernizacją Szpitala Ogólnego im. dr Edmunda Wojtyły w Bielsku-Białej",
    wartosc: "5 897 554",
    dotacja: "4 500 288,40",
  },
  {
    podmiot:
      "Uzdrowisko Goczałkowice - Zdrój Wojewódzki Ośrodek Reumatologiczno - Rehabilitacyjny",
    projekt:
      "Przebudowa i wyposażenie pawilonów zabiegowych Zakładu Przyrodoleczniczego Uzdrowiska Goczałkowice-Zdrój WORR w celu podniesienia jakości i dostępności usług reumatologicznych i rehabilitacyjnych",
    wartosc: "7 027 041",
    dotacja: "2 196 807",
  },
  {
    podmiot:
      "Uzdrowisko Goczałkowice - Zdrój Wojewódzki Ośrodek Reumatologiczno - Rehabilitacyjny",
    projekt:
      "Dostosowanie Uzdrowiska w Goczałkowicach - Zdroju do potrzeb ruchu turystycznego, w tym międzynarodowej turystyki uzdrowiskowej",
    wartosc: "6 791 885",
    dotacja: "1 669 780",
  },
  {
    podmiot:
      "Beskidzkie Centrum Onkologii - Szpital Miejski im. Jana Pawła II w Bielsku- Białej",
    projekt:
      "Usprawnienie diagnostyki i analityki onkologicznej poprzez modernizację i dostosowanie do wymogów prawa Laboratorium i Zakładu Patomorfologii w Beskidzkim Centrum Onkologii",
    wartosc: "1 307 810",
    dotacja: "979 262",
  },
  {
    podmiot: "Przedsiębiorstwo Uzdrowiskowe „Ustroń” Spółka Akcyjna",
    projekt:
      "Przebudowa i wyposażenie części budynku Sanatorium i Szpitala Uzdrowiskowego „Równica” w Ustroniu dla potrzeb kuracjuszy z rzadkimi zespołami chorobowymi, alergiami i po transplantacjach narządów",
    wartosc: "3 494 332",
    dotacja: "807 943",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 7 Śląskiego Uniwersytetu Medycznego w Katowicach Górnośląskie Centrum Medyczne im. prof. Leszka Gieca",
    projekt:
      "Minimalizacja zagrożeń środowiskowych poprzez usunięcie i utylizację materiałów azbestowych z budynków Górnośląskiego Centrum Medycznego w Katowicach – Ochojcu",
    wartosc: "4 253 130",
    dotacja: "2 715 993",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 7 Śląskiego Uniwersytetu Medycznego w Katowicach Górnośląskie Centrum Medyczne im. prof. Leszka Gieca",
    projekt:
      "Kompleksowa termomodernizacja budynku GOK przy ul. Ziołowej 47 w Katowicach wraz z modernizacją źródła ciepła w celu ograniczenia emisji zanieczyszczeń na terenie miasta Katowice",
    wartosc: "7 088 176",
    dotacja: "4 721 749",
  },
  {
    podmiot: "Miejskie Zakłady Opieki Zdrowotnej w Żorach sp z o.o.",
    projekt:
      "Ograniczenie emisji zanieczyszczeń powietrza poprzez kompleksową modernizację gospodarki cieplnej Szpitala Miejskiego w Żorach",
    wartosc: "3 911 336",
    dotacja: "3 310 934",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 1 im. Prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    projekt:
      "Przeprowadzenie kompleksowej termomodernizacji budynków SPSK Nr 1 im. Prof. S. Szyszko SUM wraz z budową kolektorów słonecznych w celu poprawy jakości powietrza na terenie powiatu miasta Zabrze",
    wartosc: "5 465 609",
    dotacja: "4 644 722",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 1 im. Prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    projekt:
      "Rozwój innowacyjnej chirurgii poprzez utworzenie nowoczesnego Bloku Operacyjnego oraz OAiIT w SPSK Nr 1 im. Prof. S. Szyszko ŚUM - etap II",
    wartosc: "9 989 721",
    dotacja: "8 490 226",
  },
  {
    podmiot:
      "Swiętokrzyskie Centrum Ratownictwa Medycznego i Transportu Sanitarnego w Kielcach",
    projekt:
      "Modernizacja taboru ambulansów ratunkowych w Świętokrzyskim Centrum Ratownictwa Medycznego i Transportu Sanitarnego w Kielcach",
    wartosc: "5 470 914",
    dotacja: "4 282 412",
  },
  {
    podmiot:
      "Szpital Miejski Specjalistyczny im. Gabriela Narutowicza w Krakowie",
    projekt:
      "Poprawa bezpieczeństwa ludności poprzez dostosowanie infrastruktury ratownictwa medycznego SMS im. G. Narutowicza w Krakowie do wymogów prawa",
    wartosc: "8 614 477,83",
    dotacja: "4 196 589",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Dostosowanie Szpitalnego Oddziału Ratunkowego w SPZOZ w Brzesku do wymogów obowiązujących przepisów prawa, wraz z doposażeniem w aparaturę medyczną",
    wartosc: "4 128 391",
    dotacja: "3 504 985",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Podniesienie dostępności do SOR SPZOZ w Brzesku poprzez budowę lądowiska dla śmigłowców",
    wartosc: "906 428",
    dotacja: "767 353",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Zakup ambulansów przez Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    wartosc: "744 459",
    dotacja: "632 790",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Suchej Beskidzkiej",
    projekt:
      "Zwiększenie bezpieczeństwa zdrowotnego mieszkańców poprzez budowę lądowiska i doposażenie szpitalnego oddziału ratunkowego w ZOZ w Suchej Beskidzkiej",
    wartosc: "1 894 546",
    dotacja: "1 601 031",
  },
  {
    podmiot: "NZOZ MEDZAK Spólka Cywilna Gabriela Adamowska, Mariusz Ogłódek",
    projekt:
      "Poprawa bezpieczeństwa zdrowotnego mieszkańców powiatu kędzierzyńsko-kozielskiego poprzez adaptację i przebudowę części budynku usługowego na potrzeby NZOZ MEDZAK S.C.",
    wartosc: "384 561",
    dotacja: "230 742",
  },
  {
    podmiot: 'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ "OLMED"',
    projekt:
      "Zakup sprzętu i aparatury medycznej w celu podniesienia jakości usług medycznych Niepublicznego Zakladu Opieki Zdrowotnej OLMED w Kędzierzynie-Koźlu",
    wartosc: "292 196",
    dotacja: "224 171",
  },
  {
    podmiot: "Samodzielny Niepubliczny Zakład Opieki Zdrowotnej B-MED",
    projekt:
      "Poprawa jakości i dostępności ambulatoryjnej opieki medycznej na terenie powiatu kędzierzyńsko-kozielskiego poprzez modernizację i doposażenie SNZOZ B-MED",
    wartosc: "456 992",
    dotacja: "345 279",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Kędzierzynie-Koźlu",
    projekt: "Zakup aparatu RTG z osprzętem dla SPZOZ w Kędzierzynie-Koźlu",
    wartosc: "1 260 732",
    dotacja: "703 277",
  },
  {
    podmiot: "Zespół Zakładów Opieki Zdrowotnej w Oświęcimiu",
    projekt:
      "Przebudowa pawilonu głównego Szpitala Powiatowego w Oświęcimiu dla potrzeb Bloku Operacyjnego i Centralnej Sterylizatorni",
    wartosc: "13 574 416",
    dotacja: "8 143 186",
  },
  {
    podmiot: "Gmina Poręba",
    projekt:
      "Modernizacja i dosprzętowienie SP ZOZ w Porębie w celu poprawy jakości i dostępności usług medycznych",
    wartosc: "305 105",
    dotacja: "243 362",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Ostrowcu Świętokrzyskim",
    projekt:
      "Zwiększenie bezpieczeństwa pacjentów poprzez adaptację i wyposażenie pomieszczeń na potrzeby oddziału anestezjologii i intensywnej terapii w ZOZ w Ostrowcu Świętokrzyskim",
    wartosc: "3 326 614",
    dotacja: "1 995 968",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Ostrowcu Świętokrzyskim",
    projekt:
      "Podniesienie bezpieczeństwa i jakości zabiegów operacyjnych poprzez modernizację i zakup aparatury medycznej na blok operacyjny i oddział ginekologiczno-położniczy ZOZ w Ostrowcu Św.",
    wartosc: "15 340 012",
    dotacja: "8 002 865",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Szpital Powiatowy w Piszu",
    projekt:
      "Doposażenie SPZOZ Szpitala Powiatowego w Piszu w nowoczesny sprzęt i aparaturę medyczną w celu podniesienia standardu i zwiększenia dostępności usług medycznych świadczonych przez Szpital",
    wartosc: "1 735 157",
    dotacja: "942 785",
  },
  {
    podmiot: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Giżycku",
    projekt:
      "Rozbudowa i doposażenie SP ZOZ w Giżycku w celu poprawy bezpieczeństwa zdrowotnego na terenie powiatu giżyckiego i węgorzewskiego - etap I: SOR",
    wartosc: "16 677 122",
    dotacja: "12 776 513",
  },
  {
    podmiot: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Giżycku",
    projekt:
      "Doposażenie Pracowni Endoskopowej, Pracowni Bronchoskopii oraz Bloku operacyjnego SP ZOZ w Giżycku w nowoczesny sprzęt celem poprawy jakości opieki zdrowotnej w powiatach giżyckim i węgorzewskim",
    wartosc: "892 682",
    dotacja: "699 313",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Nisku",
    projekt:
      "Poprawa dostępności deficytowych usług medycznych na obszarach wiejskich poprzez dostosowanie Szpitala Powiatowego im. PCK w Nisku do obowiązujących wymogów prawnych – IV etap",
    wartosc: "20 798 439",
    dotacja: "4 382 254",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Nisku",
    projekt:
      "Poprawa efektywności wykorzystania infrastruktury energetycznej Budynku Głównego Szpitala Powiatowego im. PCK w Nisku poprzez termomodernizację i montaż kolektorów słonecznych",
    wartosc: "1 183 522",
    dotacja: "943 508",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Nisku",
    projekt:
      "Kompleksowa informatyzacja SPZZOZ w Nisku jako element Podkarpackiego Systemu Informacji Medycznej (PSIM)",
    wartosc: "2 496 387",
    dotacja: "2 113 524",
  },
  {
    podmiot: "SP Zespół Opieki Zdrowotnej w Nowej Dębie",
    projekt:
      "Poprawa jakości i dostępności świadczeń zdrowotnych w zakresie onkologii w SPZ ZOZ w Nowej Dębie",
    wartosc: "2 967 313",
    dotacja: "2 032 608",
  },
  {
    podmiot: "SP Zespół Opieki Zdrowotnej w Nowej Dębie",
    projekt: "Zakup dwóch ambulansów dla Szpitala Powiatowego w Nowej Dębie",
    wartosc: "749 988",
    dotacja: "625 045",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Kolbuszowej",
    projekt:
      "Poprawa jakości i dostępności opieki nad pacjentami z chorobami układu krążenia w SP ZOZ w Kolbuszowej poprzez stworzenie Sali Intensywnego Nadzoru Kardiologicznego wraz z zapleczem diagnostycznym",
    wartosc: "1 488 675",
    dotacja: "1 037 879",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Lesku",
    projekt:
      "Termomodernizacja Przychodni Rejonowo-Specjalistycznej SP ZOZ w Lesku oraz wykonanie wewnętrznej instalacji gazowej w celu poprawy efektywności wykorzystania infrastruktury energetycznej budynku",
    wartosc: "1 015 203",
    dotacja: "772 876",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Lesku",
    projekt:
      "Kompleksowa informatyzacja Samodzielnego Publicznego Zespołu Opieki Zdrowotnej w Lesku jako element Podkarpackiego Systemu Informacji Medycznej - PSIM",
    wartosc: "2 148 364",
    dotacja: "1 822 131",
  },
  {
    podmiot: "Wojewódzki Szpital Specjalistyczny w Białej Podlaskiej",
    projekt:
      "Podniesienie poziomu opieki zdrowotnej w województwie lubelskim poprzez zakup sprzętu medycznego oraz ucyfrowienie radiologii w Wojewódzkim Szpitalu Specjalistycznym w Białej Podlaskiej",
    wartosc: "4 272 183",
    dotacja: "3 630 319",
  },
  {
    podmiot: "Gmina Majdań Królewski",
    projekt:
      "Poprawa jakości i dostępności do usług medycznych w gminie Majdan Królewski",
    wartosc: "459 261",
    dotacja: "312 081",
  },
  {
    podmiot:
      "Uzdrowisko Goczałkowice - Zdrój Wojewódzki Ośrodek Reumatologiczno - Rehabilitacyjny",
    projekt:
      "Kompleksowa modernizacja gospodarki cieplnej Uzdrowiska Goczałkowice – Zdrój Wojewódzkiego Ośrodka Reumatologiczno - Rehabilitacyjnego",
    wartosc: "12 596 860",
    dotacja: "2 751 690",
  },
  {
    podmiot: "Powiat Brzeski",
    projekt:
      "Poprawa dostępności deficytowych usług opieki hospicyjnej poprzez modernizację i wyposażenie II piętra budynku PPZOL w Brzesku na potrzeby hospicjum",
    wartosc: "1 943 743",
    dotacja: "1 279 604",
  },
  {
    podmiot: "Przedsiębiorstwo Uzdrowiskowe „Ustroń” Spółka Akcyjna",
    projekt:
      "Termomodernizacja budynku Sanatorium i Szpitala Uzdrowiskowego „Równica” w Ustroniu przy ul. Sanatoryjnej 7",
    wartosc: "13 163 450",
    dotacja: "1 820 810",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Kędzierzynie-Koźlu",
    projekt:
      "Rozwój diagnostyki kardiologicznej w powiecie kędzierzyosko – kozielskim poprzez zakup nowoczesnego sprzę-tu na potrzeby SP ZOZ w Kędzierzynie - Koźlu",
    wartosc: "1 160 000",
    dotacja: "874 105",
  },
  {
    podmiot: "Powiat Zawierciański",
    projekt:
      "Zakup aparatury diagnostycznej i wprowadzenie radiografii cyfrowej w Szpitalu Powiatowym w Zawierciu",
    wartosc: "1 520 898",
    dotacja: "878 211",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 7 Śląskiego Uniwersytetu Medycznego w Katowicach Górnośląskie Centrum Medyczne im. prof. Leszka Gieca",
    projekt:
      "Zakup nowych urządzeń medycznych do diagnostyki chorób serca (aktualizacja dokumentacji)",
    wartosc: "9 182 676",
    dotacja: "1 470 126",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Wojewódzki Szpital Specjalistyczny nr 3 w Rybniku",
    projekt:
      "Nowoczesne ratownictwo medyczne – zakup dwóch karetek dla SPZOZ WSS nr 3 w Rybniku (aktualizacja dokumentacji)",
    wartosc: "493 709",
    dotacja: "362 755",
  },
  {
    podmiot:
      "Beskidzkie Centrum Onkologii im. Jana Pawła II w Bielsku - Białej",
    projekt:
      "Przebudowa i adaptacja budynku kuchni na przychodnie i aptekę w Beskidzkim Centrum Onkologii",
    wartosc: "1 490 961",
    dotacja: "1 118 221",
  },
  {
    podmiot: "Szpital im. Stanisława Leszczyńskiego w Katowicach",
    projekt:
      "Zakup zestawu do endoskopii dla Szpitala im.Stanisława Leszczyńskiego w Katowicach",
    wartosc: "735 870",
    dotacja: "551 903",
  },
  {
    podmiot: "Szpital Powiatowy w Zawieciu",
    projekt:
      "Modernizacja i doposażenie w sprzęt medyczny Bloku Operacyjnego Szpitala powiatowego w Zawierciu",
    wartosc: "3 052 355",
    dotacja: "1 986 972",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Nowej Dębie",
    projekt:
      "Program podniesienia jakości świadczeń zdrowotnych SPZZOZ w Nowej Dębie",
    wartosc: "2 448 796",
    dotacja: "1 485 016",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Nisku",
    projekt:
      "Podniesienie jakości świadczeń w SPZZOZ Nisko poprzez zakup sprzętu medycznego i diagnostycznego",
    wartosc: "2 133 004",
    dotacja: "1 599 753",
  },
  {
    podmiot: "SP ZOZ Szpital Kolejowy Wilkowice Bystra",
    projekt:
      "Podniesienie jakości świadczonych usług medycznych poprzez zakup sprzętu",
    wartosc: "1 032 690",
    dotacja: "774 517",
  },
  {
    podmiot: "SPZOZ w Mińsku Mazowieckim",
    projekt:
      "Doposażenie SPZOZ w Mińsku Mazowieckim w aparaturę i sprzęt medyczny",
    wartosc: "2 611 980",
    dotacja: "1 958 985",
  },
  {
    podmiot:
      "Beskidzkie Centrum Onkologii im. Jana Pawła II w Bielsku - Białej",
    projekt: "Program wczesnego wykrywania nowotworów piersi na Podbeskidziu",
    wartosc: "3 744 988",
    dotacja: "2 246 992",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 1 im. Prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    projekt: "Dobra diagnoza - leczenie - życie",
    wartosc: "2 342 212",
    dotacja: "1 990 880",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Lesku",
    projekt: "Program przeciwdziałania chorobom cywilizacyjnym w Bieszczadach",
    wartosc: "1 666 032",
    dotacja: "1 416 128",
  },
  {
    podmiot: "Szpital im. Stanisława Leszczyńskiego w Katowicach",
    projekt: "Profilaktyczny program wykrywania nowotworów piersi",
    wartosc: "7 481 932",
    dotacja: "4 489 148",
  },
  {
    podmiot:
      "Beskidzkie Centrum Onkologii im. Jana Pawła II w Bielsku - Białej",
    projekt:
      "Kompleksowa termomodernizacja Beskidzkiego Centrum Onkologii im. Jana Pawła II w Bielsku-Białej",
    wartosc: "4 258 869",
    dotacja: "4 065 436",
  },
  {
    podmiot: "Gmina Miejska Kraków",
    projekt:
      "Modernizacja i doposażenie bazy dydaktycznej kształcenia zawodowego Zespołu Szkół Poligraficzno-Księgarskich im. Zenona Klemensiewicza w Krakowie",
    wartosc: "3 984 787",
    dotacja: "2 771 178",
  },
  {
    podmiot: "Gmina Miejska Kraków",
    projekt:
      "Poprawa warunków oraz jakości kształcenia zawodowego poprzez zakup sprzętu i modernizację pracowni w Zespole Szkół Łączności w Krakowie",
    wartosc: "3 965 232",
    dotacja: "2 688 720",
  },
  {
    podmiot: "Gmina Miejska Kraków",
    projekt:
      "Wdrożenie nowoczesnych technologii w procesie nauczania zawodu poprzez wyposażenie pracowni w Zespole Szkół nr 1 w Krakowie",
    wartosc: "2 556 474",
    dotacja: "1 789 531",
  },
  {
    podmiot: "Gmina Miejska Kraków",
    projekt:
      "Modernizacja DPS przy ul. Kluzeka 6 w Krakowie w celu dostosowania jednostki do wymogów prawa oraz potrzeb osób niepełnosprawnych",
    wartosc: "2 241 355",
    dotacja: "1 556 922",
  },
  {
    podmiot: "Gmina Miejska Kraków",
    projekt:
      "Poprawa warunków kształcenia zawodowego w Zespole Szkół Gastronomicznych Nr 1 w Krakowie poprzez unowocześnienie pracowni nauki zawodu.",
    wartosc: "81 585",
    dotacja: "56 059",
  },
  {
    podmiot: "Gmina Miejska Kraków",
    projekt:
      "Modernizacja DPS przy Praskiej 25 w Krakowie w celu dostosowania placówki do wymogów standaryzacyjnych wynikających zprzepisów prawa",
    wartosc: "1 948 316",
    dotacja: "647 495",
  },
  {
    podmiot: "Fundacja Miejski Park i Ogród Zoologiczny w Krakowie",
    projekt:
      "Szlak Lasów Miejskich Krakowa – ochrona najcenniejszych biocenoz przed nadmierną presją turystów",
    wartosc: "979 106",
    dotacja: "681 314",
  },
  {
    podmiot: "Gmina Miejska Kraków",
    projekt:
      "Modernizacja obiektów hotelarskich oraz infrastruktury turystycznej Ośrodka Kolonijno-Wczasowego w Gołkowicach Górnych",
    wartosc: "1 906 073",
    dotacja: "883 860",
  },
  {
    podmiot: "Powiat Kędzierzyńsko - kozielski",
    projekt:
      "Przebudowa i doposażenie regionalnych placówek oświatowych Powiatu Kędzierzyosko - Kozielskiego. Benefi-cjent: Powiat Kędzierzyosko - Kozielski",
    wartosc: "2 716 406",
    dotacja: "1 901 484",
  },
  {
    podmiot: "Geocarbon sp. z o.o.",
    projekt:
      "Opracowanie innowacyjnej technologii wytwarzania prądu elektrycznego z przemysłowych odpadów cieplnych",
    wartosc: "71 836 500",
    dotacja: "28 997 035",
  },
  {
    podmiot: "Miasto Bielsko-Biała",
    projekt:
      "Zwiedzaj i wypoczywaj. Rewitalizacja Starówki i Parku Słowackiego w Bielsku-Białej - etap II",
    wartosc: "13 113 144",
    dotacja: "10 440 193",
  },
  {
    podmiot: "Fundacja Świętej Elżbiety Węgierskiej w Cieszynie",
    projekt:
      "Wdrożenie kompleksowej opieki medycznej nad osobami starszymi przez Fundację Świętej Elżbiety Węgierskiej w Cieszynie",
    wartosc: "3 640 439",
    dotacja: "2 912 351",
  },
  {
    podmiot: "Gmina Goczałkowice - Zdrój",
    projekt:
      "Turystyczna brama do Goczałkowic-Zdroju - adaptacja budynku dworca kolejowego wraz z otoczeniem na bazę okołoturystyczną",
    wartosc: "2 084 459",
    dotacja: "948 562",
  },
  {
    podmiot: "Powiat Zawierciański",
    projekt:
      "Kompleksowa termomodernizacja budynków Szpitala Powiatowego w Zawierciu wraz z budową kolektorów słonecznych w celu poprawy efektywności energetycznej budynków oraz wzrostu OZE",
    wartosc: "14 280 395",
    dotacja: "6 922 139",
  },
  {
    podmiot: "Szpital Powiatowy w Zawierciu",
    projekt:
      "Program badań onkologicznych układu pokarmowego w powiecie zawierciańskim i myszkowskim szansą na dłuższe życie w dobrym zdrowiu",
    wartosc: "2 345 980",
    dotacja: "1 494 389",
  },
  {
    podmiot: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Lesku",
    projekt:
      "Utworzenie Oddziału Opieki Paliatywnej w SP ZOZ w Lesku wraz z programem działań zmierzających do wydłużenia okresu życia ludności w Bieszczadach",
    wartosc: "2 889 040",
    dotacja: "2 345 980",
  },
  {
    podmiot: "Miasto Tychy",
    projekt:
      "Wyposażenie pracowni do nauki przedmiotów matematyczno - przyrodniczych oraz języków obcych w szkołach miasta Tychy",
    wartosc: "3 185 352",
    dotacja: "2 705 475",
  },
  {
    podmiot:
      "Publiczny Szpital Kliniczny nr 7 Śląskiego Uniwersytetu Medycznego w Katowicach - Górnośląskie Centrum Medyczne",
    projekt:
      "Termomodernizacja części niskiej Specjalistycznego Szpitala Wieloprofilowego wraz z modernizacją źródła ciepła",
    wartosc: "3 052 000",
    dotacja: "1 143 000",
  },
  {
    podmiot: "KrapkowickieCentrum ZdrowiaSp. z o.o.",
    projekt:
      "Zakup 4 szt. kardiomonitorów wrazz centralą monitorującąkardiomonitory dla podwyższeniajakości usług świadczonych naOddziale WewnętrznymKrapkowickiego Centrum ZdrowiaSp. z o.o.",
    wartosc: "50 000",
    dotacja: "50 000",
  },
  {
    podmiot: "Samodzielny PublicznyZakład OpiekiZdrowotnej ZOZ w Głuchołazach",
    projekt:
      "Budowa strony internetowej SPZakładu Opieki Zdrowotnej ZOZ wGłuchołazach dostosowanej dopotrzeb osób niepełnosprawnych",
    wartosc: "19 847",
    dotacja: "19 847",
  },
  {
    podmiot: "SzpitalPowiatowy w Zawierciu",
    projekt:
      "Budowa strony internetowejSzpitala w Zawierciudostosowanej do potrzeb osóbniepełnosprawnych",
    wartosc: "24 800",
    dotacja: "24 800",
  },
  {
    podmiot: "„KOL–MED” spzoz w Tarnowie",
    projekt:
      "Wykorzystanie narzędzi ICT dla podnoszenia standardów obsługi pacjenta i doskonalenia organizacji pracy w Centrum Medycznym „ KOL–MED” spzoz w Tarnowie",
    wartosc: "1 316 269",
    dotacja: "977 977",
  },
  {
    podmiot: "SPZOZ w Aleksandrowie Łódzkim",
    projekt:
      "Przebudowa wraz z zakupem sprzętu medycznego dla SPZOZ w Aleksandrowie Łódzkim w celu poprawy bezpieczeństwa zdrowotnego mieszkańców Gminy Aleksandrów Łódzkim",
    wartosc: "2 033 246",
    dotacja: "1 524 934",
  },
  {
    podmiot: "Szpital Wojewódzki w Bielsku - Białej",
    projekt:
      "Podniesienie efektywności energetycznej obiektów Szpitala Wojewódzkiego w Bielsku-Białej poprzez częściową termomodernizację i zastosowanie odnawialnych źródeł energii",
    wartosc: "565 000",
    dotacja: "425 286",
  },
  {
    podmiot:
      "Gmina Miejska Kraków/ Zespół Szkół Poligraficzno-Księgarskich im. ZenonaKlemensiewicza",
    projekt:
      "Adaptacja i modernizacja infrastrukturydydaktycznej kształcenia zawodowego ZespołuSzkół Poligraficzno-Medialnych im. Z.Klemensiewicza w Krakowie",
    wartosc: "798 000",
    dotacja: "678 300",
  },
  {
    podmiot:
      "Gmina Miejska Kraków/ Zespół Szkół Mechanicznych nr 1 im. Szczepana Humberta wKrakowie",
    projekt:
      "Modernizacja i doposażenie bazy dydaktycznej kształcenia zawodowego Zespołu Szkół Mechanicznych Nr 1 w Krakowie",
    wartosc: "418 782",
    dotacja: "355 965",
  },
  {
    podmiot: "Centrum Pulmonologii i Torakochirurgii w Bystrej",
    projekt:
      "Termomodernizacja obiektów CPiT w ramach Programu optymalizacji gospodarki cieplnej oraz ochrony środowiska naturalnego Centrum Pulmonologii i Torakochirurgii w Bystrej",
    wartosc: "3 680 440",
    dotacja: "1 938 075",
  },
  {
    podmiot: "SPZOZ ZOZ w Głuchołazach",
    projekt:
      "Zdrowie, edukacja, rozwój. SPZOZ ZOZ w Głuchołazach dla Seniorów i osób niesamodzielnych",
    wartosc: "917 098",
    dotacja: "889 567",
  },
  {
    podmiot: "SPZZOZ w Żurominie",
    projekt:
      "Zaopiekuj się mną! SPZZOZ w Żurominie naprzeciw potrzebom osób niesamodzielnych, zwłaszcza w wieku 65+",
    wartosc: "987 584",
    dotacja: "957 956",
  },
  {
    podmiot: "Centrum Zdrowia w Mikołowie Sp. z o.o.",
    projekt:
      "Dzienny Dom Opieki Medycznej w Centrum Zdrowia w Mikołowie Sp. z o.o. jako forma opieki nad osobami niesamodzielnymi, w tym starszymi przebywającymi na terenie powiatu mikołowskiego wraz z działaniami edukacyjnymi",
    wartosc: "926 999",
    dotacja: "899 189",
  },
  {
    podmiot:
      "Szpital Zakonu Bonifratrów św. Jana Grandego w Krakowie Sp. z o. o.",
    projekt:
      "Utworzenie Dziennego Domu Opieki Medycznej oferującego kompleksową opiekę medyczną, pielęgnację, rehabilitację i edukację, jako realizację Misji Szpitala Zakonu Bonifratrów św. Jana Grandego w Krakowie Sp. z o. o. - Czyńmy Dobro",
    wartosc: "1 018 171",
    dotacja: "987 626",
  },
  {
    podmiot:
      "GABINET SENIORA Kompleksowe Usługi Medyczne. Specjalistyczna Prywatna Praktyka Lekarska Tomasz WANTUŁA",
    projekt:
      "Czas zdrowia – opieka nad osobami starszymi, w tym z niepełnosprawnościami w powiecie kędzierzyńsko - kozielskim",
    wartosc: "201 540",
    dotacja: "190 455",
  },
  {
    podmiot: "Szpital Specjalistyczny im. Henryka Klimontowiczaw Gorlicach",
    projekt:
      "Rozbudowa i przebudowa wraz z doposażeniem Szpitalnego Oddziału Ratunkowego Szpitala Specjalistycznego im. H. Klimontowicza w Gorlicach z zastosowaniem energooszczędnych rozwiązań technologicznych",
    wartosc: "4 131 967",
    dotacja: "3 394 345",
  },
  {
    podmiot: "Samodzielny Publiczny Zespól Opieki Zdrowotnej w Brzesku",
    projekt:
      "Poprawa funkcjonowania ratownictwa medycznego w powiecie brzeskim poprzez doposażenie i zastosowanie technologii energooszczędnych w Szpitalnym Oddziale Ratunkowym w SPZOZ w Brzesku",
    wartosc: "3 610 218",
    dotacja: "2 927 734",
  },
  {
    podmiot:
      "Szpital Wojewódzki im. Prymasa Kardynała Stefana Wyszyńskiegow Sieradzu",
    projekt:
      "Poprawa jakości i dostępności świadczonych usług medycznych w ramach Szpitalnego Oddziału Ratunkowego Szpitala Wojewódzkiego im. Prymasa Kard. Stefana Wyszyńskiego w Sieradzu",
    wartosc: "2 465 917",
    dotacja: "2 079 929",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Ostrowcu Świętokrzyskim",
    projekt:
      "Budowa i wyposażenie pawilonu Szpitalnego Oddziału Ratunkowego w Ostrowcu Świętokrzyskim oraz utworzenie lądowiska dla helikopterów w celu poprawy funkcjonowania systemu ratownictwa medycznego",
    wartosc: "12 830 609",
    dotacja: "5 905 856,94",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Wojewódzki Szpital Specjalistyczny nr 3w Rybniku",
    projekt:
      "Modernizacja i rozbudowa Szpitalnego Oddziału Ratunkowego w Wojewódzkim Szpitalu Specjalistycznym nr 3 w Rybniku",
    wartosc: "4 136 998",
    dotacja: "3 398 200",
  },
  {
    podmiot: "Szpital Wojewódzki w Bielsku-Białej",
    projekt:
      "Przebudowa i doposażenie Szpitalnego Oddziału Ratunkowego Szpitala Wojewódzkiego w Bielsku-Białej w celu poprawy warunków udzielania świadczeń medycznych i właściwej segregacji w stanach zagrożenia zdrowia i życia",
    wartosc: "4 207 665",
    dotacja: "3 399 457",
  },
  {
    podmiot: "Zespól Opieki Zdrowotnej w Suchej Beskidzkiej",
    projekt:
      "Rozwój infrastruktury ratownictwa medycznego w powiecie suskim poprzez modernizację i doposażenie Szpitalnego Oddziału Ratunkowego w Suchej Beskidzkiej",
    wartosc: "4 306 801",
    dotacja: "3 383 853",
  },
  {
    podmiot: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Międzychodzie",
    projekt:
      "Wykonanie prac remontowo-budowlanych wraz z doposażeniem w sprzęt medyczny Szpitalnego Oddziału Ratunkowego w SPZOZ w Międzychodzie w celu poprawy funkcjonowania systemu ratownictwa medycznego w powiecie międzychodzkim",
    wartosc: "3 379 459",
    dotacja: "2 846 428",
  },
  {
    podmiot: "Opolskie Centrum Rehabilitacji w Korfantowie Sp.z.o.o.",
    projekt:
      "Subregion Środkowy – wysportowany i zdrowy! Program zdrowotny przeciwdziałający nadwadze, otyłości oraz cukrzycy wśród dzieci i młodzieży w wieku od 6 do 18 lat oraz dorosłych pomiędzy 45-65 rokiem życia.",
    wartosc: "3 952 752",
    dotacja: "3 735 350",
  },
  {
    podmiot: "FUNDACJA ŚLĄSKIE HOSPICJUM DLA DZIECI",
    projekt:
      "Centrum Opieki Dziennej dla nieuleczalnie chorych dzieci z terenu Subregionu Centralnego województwa śląskiego.",
    wartosc: "1 914 980",
    dotacja: "1 780 931",
  },
  {
    podmiot: "CENTRUM PULMONOLOGII I TORAKOCHIRURGII W BYSTREJ",
    projekt:
      "Inwestycja w odnawialne źródła energii - optymalizacja gospodarki energią elektryczną w Centrum Pulmonologii i Torakochirurgii w Bystrej",
    wartosc: "965 353",
    dotacja: "816 786",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Głubczycach",
    projekt:
      "Poprawa wydajności i skuteczności leczenia chorób cywilizacyjnych poprzez wyposażenie SPZOZ w Głubczycach",
    wartosc: "2 232 732",
    dotacja: "1 815 765",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Zespół Opieki Zdrowotnej",
    projekt:
      "Doposażenie i modernizacja Oddziału Pulmonologicznego z Pododdziałem Chemioterapii w SPZOZ ZOZ w Głuchołazach w celu podniesienia wydajności leczenia nowotworów płuc",
    wartosc: "2 024 744",
    dotacja: "1 721 033",
  },
  {
    podmiot: "Opolskie Centrum Rehabilitacji w Korfantowie Sp. z o.o.",
    projekt:
      "Zakup sprzętu medycznego dla Opolskiego Centrum Rehabilitacji w Korfantowie Sp. z o.o. - dla potrzeb osób chorych na osteoporozę, choroby układu kostnomięśniowego z województwa opolskiego",
    wartosc: "1 811 220",
    dotacja: "1 538 491",
  },
  {
    podmiot: "Krapkowickie Centrum Zdrowia Sp. z o.o.",
    projekt:
      "Podniesienie wydajności leczenia chorób cywilizacyjnych poprzez wyposażenie w specjalistyczny sprzęt medyczny Oddziału Chirurgii z Pododdziałem Chirurgii Onkologicznej oraz Oddziału Wewnętrznego z Pododdziałem Gastroenterologii w Krapkowickim Centrum Zdrowia spółka z o. o.",
    wartosc: "2 417 250",
    dotacja: "1 982 145",
  },
  {
    podmiot: "Szpital Wojewódzki w Opolu Sp. z o.o.",
    projekt:
      "Podniesienie wydajności leczenia nowotworów układu krwiotwórczego i nowotworów układu oddechowego poprzez odpowiednie dostosowanie infrastruktury i wyposażenie Szpitala Wojewódzkiego w Opolu",
    wartosc: "2 352 396",
    dotacja: "1 999 536",
  },
  {
    podmiot: "Krapkowickie Centrum Zdrowia Sp. z o.o. w Krapkowicach",
    projekt:
      "Podniesienie wydajności usług medycznych w zakresie opieki nad matką i dzieckiem poprzez wyposażenie w specjalistyczny sprzęt medyczny Oddziału GinekologicznoPołożniczego i Noworodków w Krapkowickim Centrum Zdrowia spółka z o. o.",
    wartosc: "1 778 430",
    dotacja: "1 511 665",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Suchej Beskidzkiej",
    projekt:
      "Poprawa bilansu energetycznego budynków Szpitala w Suchej Beskidzkiej poprzez modernizację źródła ciepła wraz z wymianą instalacji sanitarnych",
    wartosc: "6 939 378",
    dotacja: "2 693 647",
  },
  {
    podmiot: "Miejski Klub Sportowy TARNOVIA w Tarnowie",
    projekt:
      "Poprawa efektywności energetycznej budynku hali sportowej w Miejskim Klubie Sportowym TARNOVIA, ul. Bandrowskiego 9, 33-100 Tarnów",
    wartosc: "871 611",
    dotacja: "463 526",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Zadbaj o zdrowie! Program profilaktyki raka jelita grubego dla mieszkańców powiatu brzeskiego",
    wartosc: "623 675",
    dotacja: "592 491",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Suchej Beskidzkiej",
    projekt:
      "Pro life! Program profilaktyki raka jelita grubego dla osób z terenu powiatu suskiego",
    wartosc: "530 087",
    dotacja: "503 583",
  },
  {
    podmiot:
      "Szpital Zakonu Bonifratrów św. Jana Grandego w Krakowie Sp. z o. o.",
    projekt:
      "Program profilaktyki raka jelita grubego dla mieszkańców Krakowa - przede wszystkim w wieku 50-65 lat.",
    wartosc: "612 711",
    dotacja: "582 075",
  },
  {
    podmiot: "Opolskie Centrum Rehabilitacju w Korfantowie Sp. z o.o.",
    projekt:
      "Kompleksowe wsparcie dla osób starszych i niepełnosprawnych oraz ich opiekunów z gminy Korfantów oraz okolic.",
    wartosc: "1 777 523",
    dotacja: "1 599 823",
  },
  {
    podmiot: "Krapkowickie Centrum Zdrowia Sp. z.o.o",
    projekt:
      "Bądź sprytniejszy niż rak! Program badań profilaktycznych raka jelita grubego dla mieszkańców powiatu krapkowickiego.",
    wartosc: "949 365",
    dotacja: "901 897",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 1 im. Prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    projekt:
      "Przebudowa i nowoczesne wyposażanie Oddziału Urologicznego SPSK nr 1 im. Prof. S. Szyszko SUM szansą na skuteczną walkę z nowotworami układu moczowo-płciowego ",
    wartosc: "7 747 150",
    dotacja: "5 872 210",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 1 im. Prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    projekt:
      "Budowa instalacji do produkcji energii w wysokosprawnej kogeneracji na bazie istniejącej kotłowni w Samodzielnym Publicznym Szpitalu Klinicznym nr 1 im. prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    wartosc: "1 275 303",
    dotacja: "1 065 188",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 1 im. Prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    projekt:
      "Zintegrowany system opieki medycznej obejmujący prowadzenie działań profilaktycznych i wczesnej diagnostyki chorób naczyń mózgowych wśród osób 40 do 65 lat",
    wartosc: "936 475",
    dotacja: "936 475",
  },
  {
    podmiot:
      "Samodzielny Publiczny Szpital Kliniczny Nr 1 im. Prof. Stanisława Szyszko Śląskiego Uniwersytetu Medycznego w Katowicach",
    projekt:
      "Podniesienie standardu leczenia na oddziałach dedykowanych dzieciom w SPSK Nr 1 im. Prof. S. Szyszko SUM w Katowicach poprzez ich przebudowę i wyposażenie",
    wartosc: "29 673 144",
    dotacja: "29 530 956",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Wojewódzki Szpital Specjalistyczny nr 3 w Rybniku",
    projekt:
      "Modernizacja źródła ciepła i energii dla obiektów SPZOZ WSS nr 3 w Rybniku",
    wartosc: "7 185 291",
    dotacja: "4 634 888",
  },
  {
    podmiot: "Szpital Specjalistyczny im. H. Klimontowicza w Gorlicach",
    projekt:
      "Poprawa funkcjonowania infrastruktury systemu ratownictwa medycznego w powiecie gorlickim poprzez doposażenie Szpitalnego Oddziału Ratunkowego Szpitala Specjalistycznego im. H. Klimontowicza w Gorlicach",
    wartosc: "2 787 870",
    dotacja: "2 366 553",
  },
  {
    podmiot: "Wojewódzki Szpital Specjalistyczny nr 3 w Rybniku",
    projekt:
      "Poprawa jakości usług medycznych poprzez inwestycję w infrastrukturę Szpitalnego Oddziału Ratunkowego oraz lądowiska dla smigłowców ratowniczych w Wojewódzkim Szpitalu Specjalistycznym nr 3 w Rybniku",
    wartosc: "3 067 757",
    dotacja: "2 543 229",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Ostrowcu Świetokrzyskim",
    projekt:
      "Budowa i wyposażenie pawilonu szpitalnego oddziału ratunkowego w Ostrowcu Świętokrzyskim w celu poprawy funkcjonowania systemu ratownictwa medycznego",
    wartosc: "10 055 621",
    dotacja: "5 949 351",
  },
  {
    podmiot: "Szpital Wojewódzki w Bielsku - Białej",
    projekt:
      "Doposażenie Szpitalnego Oddziału Ratunkowego Szpitala Wojewódzkiego w Bielsku-Białej w celu poprawy warunków udzielania świadczeń medycznych w stanach zagrożenia zdrowia i życia",
    wartosc: "2 592 384",
    dotacja: "2 220 913",
  },
  {
    podmiot:
      "Zespół Opieki Zdrowotnej w Skarżysku-Kamiennej Szpital Powiatowy im. Marii SkłodowskiejCurie",
    projekt:
      "Budowa lądowiska dla śmigłowców ratunkowych dla potrzeb ZOZ w Skarżysku Kamiennej oraz doposażenie Szpitalnego Oddziału Ratunkowego w sprzęt medyczny",
    wartosc: "2 301 957",
    dotacja: "1 910 817",
  },
  {
    podmiot: "Gmina Mszana Dolna",
    projekt:
      "Ochrona środowiska naturalnego Gminy Mszana Dolna poprzez wymianę starych pieców na nowoczesne kotły w ramach działania 4.4.2",
    wartosc: "2 169 887",
    dotacja: "2 136 341",
  },
  {
    podmiot: "Gmina Mszana Dolna",
    projekt:
      "Ochrona środowiska naturalnego Gminy Mszana Dolna poprzez wymianę starych pieców węglowych na nowoczesne kotły w ramach RPO działanie 4.4.3.",
    wartosc: "2 337 604",
    dotacja: "2 288 107",
  },
  {
    podmiot: "Gmina Mszana Dolna",
    projekt:
      'Przebudowa segmentu "A" budynku Miejskiego Centrum Kultury "Sokół" w Mszanie Dolnej.',
    wartosc: "2 965 688",
    dotacja: "1 478 539",
  },
  {
    podmiot: "Gmina Jodłownik",
    projekt:
      "Przedszkole otwartym oknem na świat - tworzenie nowych miejsc przedszkolnych oraz rozszerzenie oferty dodatkowej ośrodków wychowania przedszkolnego w Gminie Jodłownik",
    wartosc: "1 486 379",
    dotacja: "1 220 014",
  },
  {
    podmiot: "Opolskie Centrum Rehabilitacji w Korfantowie Sp. z o.o.",
    projekt:
      "Upowszechnianie świadczenia e-usług w ramach sieci współpracy jednostek medycznych i placówki edukacyjnej na terenie Województwa Opolskiego",
    wartosc: "6 655 779",
    dotacja: "5 253 152",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Głubczycach",
    projekt:
      "Wdrożenie e-usług w SPZOZ w Głubczycach szansą na poprawę jakości i dostępności do świadczeń opieki zdrowotnej",
    wartosc: "2 652 002",
    dotacja: "2 253 156",
  },
  {
    podmiot: "Krapkowickie Centrum Zdrowia spółka z o. o.",
    projekt: "Wprowadzenie e-usług w Krapkowickim Centrum Zdrowia Sp. z o.o.",
    wartosc: "978 957",
    dotacja: "832 113",
  },
  {
    podmiot: "Miasto Mszana Dolna",
    projekt:
      "Rozwój systemu gospodarki odpadami poprzez budowę punktu selektywnego zbierania odpadów komunalnych wraz z niezbędną infrastrukturą w Mszanie Dolnej",
    wartosc: "403 074",
    dotacja: "279 422",
  },
  {
    podmiot: "Miasto Mszana Dolna",
    projekt:
      "Wzmocnienie stanu bezpieczeństwa ekologicznego poprzez usuwanie i utylizację azbestu oraz wyrobów azbestowych z terenu Miasta Mszana Dolna",
    wartosc: "73 706",
    dotacja: "62 650",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Suchej Beskidzkiej",
    projekt:
      "Kompleksowa modernizacja i wyposażenie oddziałów szpitalnych ZOZ Sucha Beskidzka – Dziennego Chemioterapii Onkologicznej, Neonatologicznego oraz Ginekologiczno – Położniczego wraz z Blokiem Porodowym",
    wartosc: "13 477 778",
    dotacja: "7 069 196",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Poprawa jakości i dostępności usług świadczonych przez SPZOZ w Brzesku poprzez inwestycje w Blok Operacyjny i Pododdział Chirurgii Urazowo – Ortopedyczne",
    wartosc: "9 712 747",
    dotacja: "5 344 173",
  },
  {
    podmiot: "ZESPÓŁ OPIEKI ZDROWOTNEJ W DĄBROWIE TARNOWSKIEJ",
    projekt:
      "Inwestycje w infrastrukturę Zespołu Opieki Zdrowotnej w Dąbrowie Tarnowskiej w celu poprawy jakości oraz dostępności świadczonych usług",
    wartosc: "6 084 620",
    dotacja: "4 221 030",
  },
  {
    podmiot: "Szpital Specjalistyczny im. Henryka Klimontowicza w Gorlicach",
    projekt:
      "Podniesienie funkcjonalności Szpitala Specjalistycznego im. Henryka Klimontowicza w Gorlicach w celu dostosowania do aktualnych trendów demograficzno-epidemiologicznych",
    wartosc: "12 664 255",
    dotacja: "9 298 096",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Utworzenie Dziennego Domu Opieki Medycznej w SPZOZ w Brzesku dla osób niesamodzielnych, w tym starszych z powiatu brzeskiego, szansą na poprawę jakości życia",
    wartosc: "3 357 067",
    dotacja: "3 113 008",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Lepsze życie! program badań prenatalnych oraz działań z zakresu wczesnej interwencji prowadzone na terenie powiatu brzeskiego i bocheńskiego",
    wartosc: "3 418 814",
    dotacja: "3 170 266",
  },
  {
    podmiot:
      "SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ ZESPÓŁ OPIEKI ZDROWOTNEJ W GŁUCHOŁAZACH",
    projekt:
      "Podniesienie dostępności leczenia chorób układu krążenia pacjentów woj. opolskiego poprzez doposażenie w specjalistyczny sprzęt medyczny Poradni Kardiologicznej i Oddziału Rehabilitacji Kardiologicznej SPZOZ ZOZ w Głuchołazach.",
    wartosc: "767 822",
    dotacja: "652 649",
  },
  {
    podmiot: "Opolskie Centrum Rehabilitacji w Korfantowie Sp. z o.o.",
    projekt:
      "Podniesienie efektywności leczenia chorób cywilizacyjnych poprzez wyposażenie w specjalistyczny sprzęt medyczny oraz przeprowadzenie prac modernizacyjnych Oddziału Rehabilitacji Ogólnoustrojowej z Pododdziałem Neurologicznym Opolskiego Centrum Rehabilitacji w Korfantowie Sp. z o.o.",
    wartosc: "912 280",
    dotacja: "775 438",
  },
  {
    podmiot: "CENTRUM PULMONOLOGII I TORAKOCHIRURGII W BYSTREJ",
    projekt:
      "Optymalizacja zabezpieczenia prognozowanych potrzeb na świadczenia hospitalizacyjne w zakresie chorób układu oddechowego w województwie śląskim poprzez przebudowę, modernizację oraz doposażenie kompleksu budynków na potrzeby oddziałów pulmonologicznych z pododdziałem chemioterapii",
    wartosc: "20 008 336",
    dotacja: "14 513 745",
  },
  {
    podmiot: "Szpital Wojewódzki w Bielsku-Białej",
    projekt:
      "Zdrowy Śląsk! Zwiększenie dostępności i jakości świadczeń medycznych w Szpitalu Wojewódzkim w Bielsku-Białej poprzez doposażenie i wymianę sprzętu medycznego.",
    wartosc: "15 543 153",
    dotacja: "13 211 680",
  },
  {
    podmiot: "Szpital Zakonu Bonifratrów w Katowicach sp. z o.o.",
    projekt:
      "Rozbudowa i doposażenie Bonifraterskiego Ośrodka Zdrowia w Katowicach przy ul. Leopolda Markiefki 87 na potrzeby realizacji podstawowej i specjalistycznej ambulatoryjnej opieki zdrowotnej, w tym w modelu opieki koordynowanej w regionie śląskim",
    wartosc: "5 559 647",
    dotacja: "4 633 237",
  },
  {
    podmiot:
      "SAMODZIELNY PUBLICZNY SZPITAL KLINICZNY NR 1 IM.PROF.STANISŁAWA SZYSZKO ŚLĄSKIEGO UNIWERSYTETU MEDYCZNEGO W KATOWICACH",
    projekt: "Poprawa warunków pracy personelu zatrudnionego w szpitalu.",
    wartosc: "1 514 272",
    dotacja: "1 332 560",
  },
  {
    podmiot: "Szpital Wojewódzki w Bielsku-Białej",
    projekt:
      "Poprawa warunków pracy i ograniczenie występowania zdrowotnych czynników ryzyka w miejscu pracy szansą na długotrwałe zatrudnienie",
    wartosc: "1 233 110",
    dotacja: "1 085 137",
  },
  {
    podmiot:
      "Uzdrowisko Goczałkowice-Zdrój spółka z ograniczoną odpowiedzialnością",
    projekt:
      "Zastosowanie odnawialnych źródeł energii w budynkach należących do Uzdrowiska Goczałkowice-Zdrój Sp. z o.o. w celu zwiększenia poziomu produkcji energii ze źródeł odnawialnych.",
    wartosc: "2 511 649",
    dotacja: "1 458 853",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Janowie Lubelskim",
    projekt: "Wdrożenie systemu e-zdrowia w SPZZOZ w Janowie Lubelskim.",
    wartosc: "3 276 510",
    dotacja: "2 768 829",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zakład Opieki Zdrowotnej Wojewódzki Szpital Specjalistyczny nr 3 w Rybniku",
    projekt:
      "Dofinansowanie zakupu sprzętu medycznego dla Szpitalnego Oddziału Ratunkowego w SP ZOZ WSS nr 3 w Rybniku",
    wartosc: "443 900",
    dotacja: "377 315",
  },
  {
    podmiot:
      "Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej w Janowie Lubelskim",
    projekt:
      "Dofinansowanie zakupu sprzętu medycznego dla Szpitalnego Oddziału Ratunkowego w Janowie Lubelskim",
    wartosc: "496 180",
    dotacja: "421 753",
  },
  {
    podmiot: "Zespół Opieki Zdrowotnej w Suchej Beskidzkiej",
    projekt:
      "Dofinansowanie zakupu sprzętu medycznego dla Szpitalnego Oddziału Ratunkowego w Zespole Opieki Zdrowotnej w Suchej Beskidzkiej",
    wartosc: "394 400",
    dotacja: "335 240",
  },
  {
    podmiot: "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Brzesku",
    projekt:
      "Dofinansowanie zakupu sprzętu medycznego dla Szpitalnego Oddziału Ratunkowego w Samodzielnym Publicznym Zespole Opieki Zdrowotnej w Brzesku",
    wartosc: "362 500",
    dotacja: "308 125",
  },
  {
    podmiot: "Szpital Zakonu Bonifratrów w Katowicach sp. z o.o.",
    projekt:
      "Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o.",
    wartosc: "6 160 419",
    dotacja: "5 211 264",
  },
]

export default allProjects
