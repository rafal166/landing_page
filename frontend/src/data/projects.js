// Lista projektów prezentowanych w portfolio.
// Aby dodać kolejny projekt, dopisz nowy obiekt do tablicy poniżej.
// - image: ścieżka do screenshotu w katalogu public (np. '/projects/nazwa.png')
//          lub null, jeśli na razie bez obrazka.
// - demoUrl: link do działającego demo lub null.
// - repoUrl: link do repozytorium lub null.
// - tags: technologie użyte w projekcie.

export const projects = [
    {
        title: 'Konfigurator stołu 3D',
        description: 'Interaktywny konfigurator mebli w przeglądarce. Użytkownik dobiera blat, nogi i krzesła, ' +
            'wybiera materiały oraz wymiary, a scena 3D aktualizuje się w czasie rzeczywistym.',
        image: '/projects/konfigurator-stolu.png',
        demoUrl: 'https://demo.r2solutions.pl',
        repoUrl: null,
        tags: ['PHP', 'JavaScript', '3D / WebGL', 'Konfigurator'],
    },
    {
        title: 'Konfigurator stołów Sowacki',
        description: 'Pierwsza wersja konfiguratora mebli dla Fabryki Stołów Sowacki. Wybór kształtu nóg, ' +
            'blatów i materiałów z podglądem 3D — fundament, na którym powstały kolejne odsłony projektu.',
        image: '/projects/konfigurator-sowacki.png',
        demoUrl: 'https://konfigurator.sowacki.pl',
        repoUrl: null,
        tags: ['PHP', 'JavaScript', '3D', 'Konfigurator'],
    },
    {
        title: 'SNS Automatyk — Politechnika Wrocławska',
        description: 'Strona koła naukowego SNS Automatyk z Wydziału Elektrycznego PWr: sekcja o kole, ' +
            'projekty, blog i aktualności.',
        image: '/projects/automatyk-pwr.png',
        demoUrl: 'https://automatyk.pwr.edu.pl',
        repoUrl: null,
        tags: ['PHP', 'Strona WWW', 'CMS'],
    },
    // Kolejne projekty dodaj tutaj, np.:
    // {
    //     title: 'Nazwa projektu',
    //     description: 'Krótki opis tego, co robi projekt.',
    //     image: '/projects/nazwa.png',
    //     demoUrl: 'https://...',
    //     repoUrl: 'https://github.com/...',
    //     tags: ['PHP', 'Symfony', 'MySQL'],
    // },
];
