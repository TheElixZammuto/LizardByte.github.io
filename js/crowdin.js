// this script requires jquery to be loaded on the source page, like so...
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

// use Jquery to load other javascript
$.getScript('https://proxy-translator.app.crowdin.net/assets/proxy-translator.js', function()
{
    window.proxyTranslator.init({
        baseUrl: "https://app.lizardbyte.dev",
        appUrl: "https://proxy-translator.app.crowdin.net",
        valuesParams: "U2FsdGVkX18A3bEmk8hvD0Lh4u84QCUqJyLfhhkt0TX/JoQKZU8jTqHC1MRIY367NSE3CLPAdGwJgDVtpZ5aF56tNothE5IygSTb17SJTxDBRhRBW9m0EDclegvSNcvt",
        distributionBaseUrl: "https://distributions.crowdin.net",
        filePath: "/app.lizardbyte.dev.json",
        distribution: "4cc96ceace138bd558f68791bw4",
        languages: {
            "en":"English",
            "de":"German",
            "it":"Italian",
            "es-ES":"Spanish",
        },
        languagesData: {
            "en":{"code":"en","name":"English","twoLettersCode":"en"},
            "de":{"code":"de","name":"German","twoLettersCode":"de"},
            "it":{"code":"it","name":"Italian","twoLettersCode":"it"},
            "es-ES":{"code":"es-ES","name":"Spanish","twoLettersCode":"es"},
        },
        defaultLanguage: "en",
        defaultLanguageTitle: "English",
        languageDetectType: "default",
        poweredBy: false,
        position: "bottom-left",
        submenuPosition: "top-left",
    });

    // change styling of language selector button
    let button = document.getElementsByClassName('cr-picker-button')[0];
    button.classList.add('border-white');
    button.classList.add('btn');
    button.classList.add('btn-outline-light');
    button.classList.add('bg-dark');
    button.classList.add('text-white');
    button.classList.add('rounded-0');

    // change styling of language selector menu
    let menu = document.getElementsByClassName('cr-picker-submenu')[0];
    menu.classList.add('border-white');
    menu.classList.add('bg-dark');
    menu.classList.add('text-white');
    menu.classList.add('rounded-0');

    // change styling of selected language in menu
    let selected = document.getElementsByClassName('cr-selected')[0];
    selected.classList.add('text-white');
});
