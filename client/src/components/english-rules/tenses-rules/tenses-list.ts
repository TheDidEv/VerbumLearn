//chatGPT was created, so errors are possible
export const tenses = [
    {
        name: "Present Simple",
        appointment: 'Для позначення звичайних, регулярних дій.',
        rules_statement: {
            rule_HeShiIt: 'З He/She/It до дієслова додаємо закінчення s (He/She/It + Vs + ...)-(V - смислове дієслово без частки to)',
            rule_IYouWeThey: 'З I/You/We/They до дієслова не потрібно додавати закінчення s (I/You/We/They + V + ...)-(V - смислове дієслово без частки to)',
            example_IYouWeThey: 'I study French. – Я вчу французьку мову. You speak English. – Ти розмовляєш англійською. We play the violins. – Ми граємо на скрипках. Cats like milk. – Коти люблять молоко.',
            example_HeShiIt: 'She speaks English. – Вона розмовляє англійською. He plays the violin. – Він грає на скрипці. Simon`s cat likes milk. – Кіт Саймона любить молоко.'
        },
        rules_denial: {
            rule_HeShiIt: 'З He/She/It, заперечне речення утворюється за допомогою допоміжного дієслова does з заперечною часткою not (does not, doesn`t), що ставиться після підмета (He/She/It + does + not + V)',
            rule_IYouWeThey: 'З I/You/We/They, заперечне речення утворюється за допомогою допоміжного дієслова do з заперечною часткою not (do not, doesn`t), що ставиться після підмета (He/She/It + do + not + V)',
            example_IYouWeThey: 'I do not speak English. – Я не розмовляю англійською. They do not play the violin. – Вони не грають на скрипках. Cats don`t like tomatoes. – Коти не люблять помідори.',
            example_HeShiIt: 'She does not speak English. – Вона не розмовляє англійською. He does not play the violin. – Він не грає на скрипці. Simon`s cat doesn`t like to swim. – Кіт Саймона не любить плавати.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It у питанні ставимо допоміжне дієслово "does" перед підметом (Does + He/She/It + base form of the main verb + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They у питанні ставимо допоміжне дієслово "do" перед підметом (Do + I/You/We/They + base form of the main verb + ...)?',
            example_IYouWeThey: 'Do I study French? – Чи я вчу французьку мову? Do you speak English? – Чи ти розмовляєш англійською? Do we play the violins? – Чи ми граємо на скрипках? Do cats like milk? – Чи коти люблять молоко?',
            example_HeShiIt: 'Does she speak English? – Чи вона розмовляє англійською? Does he play the violin? – Чи він грає на скрипці? Does Simon`s cat like milk? – Чи кіт Саймона любить молоко?'
        },
        tenses_marker: {
            rules: 'Present Simple може вживатися з певними словами та виразами, що вказують як часто відбувається або не відбувається певна дія. Так звані слова-марке часу.',
            markers: 'always – завжди; often – часто; usually – звичайно; regularly – постійно, регулярно; from time to time – час від часу; sometimes – інколи; seldom – зрідка, подеколи; rarely – рідко; never – ніколи; every day – кожного дня, щодня, кожний день; every week – кожного тижня, щотижня, кожний тиждень; every month – кожного місяця, щомісяця, кожний місяць; every year – кожного роки, щороку, кожний рік; at the weekend – на вихідних; at weekends – по вихідним; at 7 o`clock – о 7-й годині (в розкладах); twice a week – два рази (двічі) на тиждень; three times a week – три рази (тричі) на тиждень; four times a month – чотири рази на місяць; on Mondays – щопонеділка; on Sundays – щонеділі'
        },
    },
    {
        name: "Past Simple",
        appointment: 'Для позначення дій, які відбулися в минулому.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It додаємо закінчення -ed або -d (He/She/It + V-ed + ...)-(V - смислове дієслово без частки to)',
            rule_IYouWeThey: 'Для I/You/We/They додаємо закінчення -ed або -d (I/You/We/They + V-ed + ...)-(V - смислове дієслово без частки to)',
            example_IYouWeThey: 'I studied French. – Я вчив/вчила французьку мову. You spoke English. – Ти розмовляв/розмовляла англійською. We played the violins. – Ми грали на скрипках. Cats liked milk. – Коти любили молоко.',
            example_HeShiIt: 'She spoke English. – Вона розмовляла англійською. He played the violin. – Він грав на скрипці. Simon`s cat liked milk. – Кіт Саймона любив молоко.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It у запереченні використовуємо допоміжне дієслово did та заперечну частку not (did not, didn`t), що ставиться перед смисловим дієсловом (He/She/It + did + not + base form of the main verb + ...)',
            rule_IYouWeThey: 'Для I/You/We/They у запереченні використовуємо допоміжне дієслово did та заперечну частку not (did not, didn`t), що ставиться перед смисловим дієсловом (I/You/We/They + did + not + base form of the main verb + ...)',
            example_IYouWeThey: 'I did not speak English. – Я не розмовляв/розмовляла англійською. They did not play the violin. – Вони не грали на скрипках. Cats didn`t like tomatoes. – Коти не любили помідори.',
            example_HeShiIt: 'She did not speak English. – Вона не розмовляла англійською. He did not play the violin. – Він не грав на скрипці. Simon`s cat didn`t like to swim. – Кіт Саймона не любив плавати.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It у питанні використовуємо допоміжне дієслово did перед підметом (Did + He/She/It + base form of the main verb + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They у питанні використовуємо допоміжне дієслово did перед підметом (Did + I/You/We/They + base form of the main verb + ...)?',
            example_IYouWeThey: 'Did I study French? – Чи я вчив/вчила французьку мову? Did you speak English? – Чи ти розмовляв/розмовляла англійською? Did we play the violins? – Чи ми грали на скрипках? Did cats like milk? – Чи коти любили молоко?',
            example_HeShiIt: 'Did she speak English? – Чи вона розмовляла англійською? Did he play the violin? – Чи він грав на скрипці? Did Simon`s cat like milk? – Чи кіт Саймона любив молоко?'
        },
        tenses_marker: {
            rules: 'Past Simple може вживатися з певними словами та виразами, що вказують на конкретний період часу в минулому.',
            markers: 'yesterday – вчора; last week – минулого тижня; last month – минулого місяця; last year – минулого року; in 2000 – у 2000 році; two days ago – два дні тому; three weeks ago – три тижні тому; a month ago – місяць тому; a year ago – рік тому'
        },
    },
    {
        name: "Present Continuous",
        appointment: 'Для позначення дій, які відбуваються в момент розмови або в даний період часу.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо допоміжне дієслово "is" та додаємо закінчення -ing до смислового дієслова (He/She/It + is + V-ing + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо допоміжне дієслово "are" та додаємо закінчення -ing до смислового дієслова (I/You/We/They + are + V-ing + ...)',
            example_IYouWeThey: 'I am studying English. – Я вивчаю англійську мову. You are speaking French. – Ти розмовляєш французькою. We are playing the violins. – Ми граємо на скрипках. Cats are liking milk. – Коти люблять молоко.',
            example_HeShiIt: 'She is speaking English. – Вона розмовляє англійською. He is playing the violin. – Він грає на скрипці. Simon`s cat is liking milk. – Кіт Саймона любить молоко.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "is" та заперечну частку "not" (He/She/It + is + not + V-ing + ... або He/She/It + isn`t + V-ing + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "are" та заперечну частку "not" (I/You/We/They + are + not + V-ing + ... або I/You/We/They + aren`t + V-ing + ...)',
            example_IYouWeThey: 'I am not studying English. – Я не вивчаю англійську мову. They are not playing the violin. – Вони не грають на скрипці. Cats aren`t liking tomatoes. – Коти не люблять помідори.',
            example_HeShiIt: 'She is not speaking English. – Вона не розмовляє англійською. He is not playing the violin. – Він не грає на скрипці. Simon`s cat isn`t liking to swim. – Кіт Саймона не любить плавати.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "is" перед підметом (Is + He/She/It + V-ing + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "are" перед підметом (Are + I/You/We/They + V-ing + ...)?',
            example_IYouWeThey: 'Am I studying English? – Чи я вивчаю англійську мову? Are you speaking French? – Чи ти розмовляєш французькою? Are we playing the violins? – Чи ми граємо на скрипках? Are cats liking milk? – Чи коти люблять молоко?',
            example_HeShiIt: 'Is she speaking English? – Чи вона розмовляє англійською? Is he playing the violin? – Чи він грає на скрипці? Is Simon`s cat liking milk? – Чи кіт Саймона любить молоко?'
        },
        tenses_marker: {
            rules: 'Present Continuous може вживатися з певними словами та виразами, що вказують на тривалість або тимчасовість дії.',
            markers: 'now – зараз; at the moment – в даний момент; right now – прямо зараз; currently – в даний час; look! – дивись!; listen! – слухай!; this week – цього тижня; these days – в ці дні; temporarily – тимчасово'
        },
    },
    {
        name: "Present Perfect",
        appointment: 'Для позначення дій, які відбулися в невизначеному минулому і мають зв`язок із теперішнім часом.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо допоміжне дієслово "has" та третю форму смислового дієслова (He/She/It + has + V3 + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо допоміжне дієслово "have" та третю форму смислового дієслова (I/You/We/They + have + V3 + ...)',
            example_IYouWeThey: 'I have visited London. – Я відвідав/відвідала Лондон. You have learned French. – Ти вивчив/вивчила французьку мову. We have played the violins. – Ми грали на скрипках. Cats have liked milk. – Коти любили молоко.',
            example_HeShiIt: 'She has spoken English. – Вона розмовляла англійською. He has played the violin. – Він грав на скрипці. Simon`s cat has liked milk. – Кіт Саймона любив молоко.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "has", заперечну частку "not" та третю форму смислового дієслова (He/She/It + has + not + V3 + ... або He/She/It + hasn`t + V3 + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "have", заперечну частку "not" та третю форму смислового дієслова (I/You/We/They + have + not + V3 + ... або I/You/We/They + haven`t + V3 + ...)',
            example_IYouWeThey: 'I have not visited London. – Я не відвідав/відвідала Лондон. They have not played the violin. – Вони не грали на скрипці. Cats haven`t liked tomatoes. – Коти не любили помідори.',
            example_HeShiIt: 'She has not spoken English. – Вона не розмовляла англійською. He has not played the violin. – Він не грав на скрипці. Simon`s cat hasn`t liked to swim. – Кіт Саймона не любив плавати.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "has" перед підметом (Has + He/She/It + V3 + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "have" перед підметом (Have + I/You/We/They + V3 + ...)?',
            example_IYouWeThey: 'Have I visited London? – Чи я відвідав/відвідала Лондон? Have you learned French? – Чи ти вивчив/вивчила французьку мову? Have we played the violins? – Чи ми грали на скрипках? Have cats liked milk? – Чи коти любили молоко?',
            example_HeShiIt: 'Has she spoken English? – Чи вона розмовляла англійською? Has he played the violin? – Чи він грав на скрипці? Has Simon`s cat liked milk? – Чи кіт Саймона любив молоко?'
        },
        tenses_marker: {
            rules: 'Present Perfect може вживатися з певними словами та виразами, які вказують на зв`язок між минулим і теперішнім часом.',
            markers: 'already – вже; yet – ще; ever – коли-небудь; never – ніколи; so far – до цього моменту; recently – недавно; lately – останнім часом; in your life – за твоє життя; since morning – зранку; for two hours – протягом двох годин; just – тільки що; recently – недавно; since I was born – з моменту мого народження; how many times – скільки разів'
        },
    },
    {
        name: "Past Continuous",
        appointment: 'Для позначення дій, які відбувалися в певний момент у минулому.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо допоміжне дієслово "was" та присудок у формі -ing (He/She/It + was + present participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо допоміжне дієслово "were" та присудок у формі -ing (I/You/We/They + were + present participle + ...)',
            example_IYouWeThey: 'I was studying French. – Я вивчав/вивчала французьку мову. You were speaking English. – Ти розмовляв/розмовляла англійською. We were playing the violins. – Ми грали на скрипках. Cats were liking milk. – Коти любили молоко.',
            example_HeShiIt: 'She was speaking English. – Вона розмовляла англійською. He was playing the violin. – Він грав на скрипці. Simon`s cat was liking milk. – Кіт Саймона любив молоко.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "was", заперечну частку "not" та присудок у формі -ing (He/She/It + was + not + present participle + ... або He/She/It + wasn`t + present participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "were", заперечну частку "not" та присудок у формі -ing (I/You/We/They + were + not + present participle + ... або I/You/We/They + weren`t + present participle + ...)',
            example_IYouWeThey: 'I was not studying French. – Я не вивчав/вивчала французьку мову. They were not playing the violin. – Вони не грали на скрипці. Cats weren`t liking tomatoes. – Коти не любили помідори.',
            example_HeShiIt: 'She was not speaking English. – Вона не розмовляла англійською. He was not playing the violin. – Він не грав на скрипці. Simon`s cat wasn`t liking to swim. – Кіт Саймона не любив плавати.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "was" перед підметом (Was + He/She/It + present participle + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "were" перед підметом (Were + I/You/We/They + present participle + ...)?',
            example_IYouWeThey: 'Was I studying French? – Чи я вивчав/вивчала французьку мову? Were you speaking English? – Чи ти розмовляв/розмовляла англійською? Were we playing the violins? – Чи ми грали на скрипках? Were cats liking milk? – Чи коти любили молоко?',
            example_HeShiIt: 'Was she speaking English? – Чи вона розмовляла англійською? Was he playing the violin? – Чи він грав на скрипці? Was Simon`s cat liking milk? – Чи кіт Саймона любив молоко?'
        },
        tenses_marker: {
            rules: 'Past Continuous може вживатися з певними словами та виразами, що вказують на тривалість дії в певний момент у минулому.',
            markers: 'while – поки, в той час як; when – коли; as – коли, у той час як; at (a specific time) – о (конкретний час); at that moment – в той момент; at 6 o`clock – о 6-й годині (в розкладах); at the same time – в той самий час; all day yesterday – весь день вчора; all night last night – цілу ніч минулого вечора; yesterday at this time – вчора в цей час; while I was working – поки я працював/працювала; when they were playing – коли вони грали'
        },
    },
    {
        name: "Future Simple",
        appointment: 'Для позначення дій, які відбудуться в майбутньому.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо допоміжне дієслово "will" та базову форму смислового дієслова (He/She/It + will + base form of the main verb + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо допоміжне дієслово "will" та базову форму смислового дієслова (I/You/We/They + will + base form of the main verb + ...)',
            example_IYouWeThey: 'I will visit London. – Я відвідаю Лондон. You will learn French. – Ти вивчиш французьку мову. We will play the violins. – Ми гратимемо на скрипках. Cats will like milk. – Коти полюблять молоко.',
            example_HeShiIt: 'She will speak English. – Вона буде розмовляти англійською. He will play the violin. – Він буде грати на скрипці. Simon`s cat will like milk. – Кіт Саймона буде любити молоко.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "will", заперечну частку "not" та базову форму смислового дієслова (He/She/It + will + not + base form of the main verb + ... або He/She/It + won`t + base form of the main verb + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "will", заперечну частку "not" та базову форму смислового дієслова (I/You/We/They + will + not + base form of the main verb + ... або I/You/We/They + won`t + base form of the main verb + ...)',
            example_IYouWeThey: 'I will not visit London. – Я не відвідаю Лондон. They will not play the violin. – Вони не будуть грати на скрипці. Cats won`t like tomatoes. – Коти не полюблять помідори.',
            example_HeShiIt: 'She will not speak English. – Вона не буде розмовляти англійською. He will not play the violin. – Він не буде грати на скрипці. Simon`s cat won`t like to swim. – Кіт Саймона не буде любити плавати.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "will" перед підметом (Will + He/She/It + base form of the main verb + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "will" перед підметом (Will + I/You/We/They + base form of the main verb + ...)?',
            example_IYouWeThey: 'Will I visit London? – Чи я відвідаю Лондон? Will you learn French? – Чи ти вивчиш французьку мову? Will we play the violins? – Чи ми будемо грати на скрипках? Will cats like milk? – Чи коти полюблять молоко?',
            example_HeShiIt: 'Will she speak English? – Чи вона буде розмовляти англійською? Will he play the violin? – Чи він буде грати на скрипці? Will Simon`s cat like milk? – Чи кіт Саймона буде любити молоко?'
        },
        tenses_marker: {
            rules: 'Future Simple може вживатися з певними словами та виразами, що вказують на події в майбутньому.',
            markers: 'tomorrow – завтра; next week – наступного тижня; next month – наступного місяця; next year – наступного року; in the future – в майбутньому; soon – скоро; in a week – за тиждень; in a month – за місяць; in a year – за рік; by the end of the day – до кінця дня; by the end of the week – до кінця тижня; by the end of the month – до кінця місяця; by the end of the year – до кінця року'
        },
    },
    {
        name: "Future Continuous",
        appointment: 'Для позначення дій, які будуть тривати в майбутньому до певного моменту.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It буде використовуватися допоміжне дієслово "will be", а після нього присудок у формі -ing (He/She/It + will be + present participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They буде використовуватися допоміжне дієслово "will be", а після нього присудок у формі -ing (I/You/We/They + will be + present participle + ...)',
            example_IYouWeThey: 'I will be studying French. – Я буду вивчати французьку мову. You will be speaking English. – Ти будеш розмовляти англійською. We will be playing the violins. – Ми будемо грати на скрипках. Cats will be liking milk. – Коти будуть любити молоко.',
            example_HeShiIt: 'She will be speaking English. – Вона буде розмовляти англійською. He will be playing the violin. – Він буде грати на скрипці. Simon`s cat will be liking milk. – Кіт Саймона буде любити молоко.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "will", заперечну частку "not" та "be" перед присудком у формі -ing (He/She/It + will not be + present participle + ... або He/She/It + won`t be + present participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "will", заперечну частку "not" та "be" перед присудком у формі -ing (I/You/We/They + will not be + present participle + ... або I/You/We/They + won`t be + present participle + ...)',
            example_IYouWeThey: 'I will not be studying French. – Я не буду вивчати французьку мову. They will not be playing the violin. – Вони не будуть грати на скрипках. Cats won`t be liking tomatoes. – Коти не будуть любити помідори.',
            example_HeShiIt: 'She will not be speaking English. – Вона не буде розмовляти англійською. He will not be playing the violin. – Він не буде грати на скрипці. Simon`s cat won`t be liking to swim. – Кіт Саймона не буде любити плавати.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "will" перед підметом, після чого "be" та присудок у формі -ing (Will + He/She/It + be + present participle + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "will" перед підметом, після чого "be" та присудок у формі -ing (Will + I/You/We/They + be + present participle + ...)?',
            example_IYouWeThey: 'Will I be studying French? – Чи я буду вивчати французьку мову? Will you be speaking English? – Чи ти будеш розмовляти англійською? Will we be playing the violins? – Чи ми будемо грати на скрипках? Will cats be liking milk? – Чи коти будуть любити молоко?',
            example_HeShiIt: 'Will she be speaking English? – Чи вона буде розмовляти англійською? Will he be playing the violin? – Чи він буде грати на скрипці? Will Simon`s cat be liking milk? – Чи кіт Саймона буде любити молоко?'
        },
        tenses_marker: {
            rules: 'Future Continuous може вживатися з певними словами та виразами, що вказують на тривалість дії в майбутньому до певного моменту.',
            markers: 'by the time – до того часу, як; by next week – до наступного тижня; by 6 o`clock – до 6-й години (в розкладах); this time tomorrow – у цей час завтра; in an hour – за годину; all day tomorrow – весь день завтра; tomorrow at this time – завтра в цей час; this time next year – у цей час наступного року; in a month – за місяць; in a year – за рік; at 7 o`clock tomorrow – о 7-й годині завтра (в розкладах); this weekend – на цих вихідних; next Saturday – наступної суботи; next month – наступного місяця; next year – наступного року'
        },
    },
    {
        name: "Past Perfect",
        appointment: 'Для позначення дій, які відбулися до певного моменту в минулому.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо допоміжне дієслово "had" перед смисловим дієсловом у третій формі (He/She/It + had + past participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо допоміжне дієслово "had" перед смисловим дієсловом у третій формі (I/You/We/They + had + past participle + ...)',
            example_IYouWeThey: 'I had studied French before I moved to Paris. – Я вивчив/вивчила французьку мову, перш ніж переїхав/переїхала до Парижу. You had spoken English well before you went to London. – Ти добре розмовляв/розмовляла англійською, перш ніж поїхав/поїхала до Лондона. We had played the violins together many times before the concert. – Ми грали на скрипках разом багато разів перед концертом. Cats had liked milk until they tried fish. – Коти любили молоко, поки не спробували рибу.',
            example_HeShiIt: 'She had spoken English well before she moved to the USA. – Вона добре розмовляла англійською, перш ніж переїхала до США. He had played the violin since he was a child. – Він грав на скрипці з дитинства. Simon`s cat had liked milk until it discovered the joy of hunting. – Кіт Саймона любив молоко, поки не відкрив для себе радість полювання.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "had", заперечну частку "not" та смислове дієслово у третій формі (He/She/It + had + not + past participle + ... або He/She/It + hadn`t + past participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "had", заперечну частку "not" та смислове дієслово у третій формі (I/You/We/They + had + not + past participle + ... або I/You/We/They + hadn`t + past participle + ...)',
            example_IYouWeThey: 'I had not studied French before I moved to Paris. – Я не вивчив/вивчила французьку мову, перш ніж переїхав/переїхала до Парижу. They had not played the violin together before the concert. – Вони не грали на скрипках разом перед концертом. Cats hadn`t liked fish before they tried it. – Коти не любили рибу, поки не спробували її.',
            example_HeShiIt: 'She had not spoken English well before she moved to the USA. – Вона не добре розмовляла англійською, перш ніж переїхала до США. He hadn`t played the violin since he was a child. – Він не грав на скрипці з дитинства. Simon`s cat hadn`t liked hunting until it discovered the joy of it. – Кіт Саймона не любив полювати, поки не відкрив для себе радість цього.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "had" перед підметом, після чого смислове дієслово у третій формі (Had + He/She/It + past participle + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "had" перед підметом, після чого смислове дієслово у третій формі (Had + I/You/We/They + past participle + ...)?',
            example_IYouWeThey: 'Had I studied French before I moved to Paris? – Чи я вивчив/вивчила французьку мову, перш ніж переїхав/переїхала до Парижу? Had they played the violin together before the concert? – Чи вони грали на скрипках разом перед концертом? Had cats liked fish before they tried it? – Чи коти любили рибу, поки не спробували її?',
            example_HeShiIt: 'Had she spoken English well before she moved to the USA? – Чи вона добре розмовляла англійською, перш ніж переїхала до США? Had he played the violin since he was a child? – Чи він грав на скрипці з дитинства? Had Simon`s cat liked hunting before it discovered the joy of it? – Чи кіт Саймона любив полювати, поки не відкрив для себе радість цього?'
        },
        tenses_marker: {
            rules: 'Past Perfect може вживатися з певними словами та виразами, що вказують на певний момент у минулому до визначеного часу.',
            markers: 'by the time – до того часу; before – перед; after – після; already – вже; just – тільки що; never – ніколи; yet – вже; so far – до цього часу; when – коли'
        },
    },
    {
        name: "Future Perfect",
        appointment: 'Для позначення дій, які будуть завершені до певного моменту в майбутньому.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо допоміжне дієслово "will have" перед смисловим дієсловом у третій формі (He/She/It + will have + past participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо допоміжне дієслово "will have" перед смисловим дієсловом у третій формі (I/You/We/They + will have + past participle + ...)',
            example_IYouWeThey: 'I will have studied French by the time I move to Paris. – Я буду вивчив/вивчила французьку мову до того часу, коли я переїду до Парижу. You will have spoken English well before you go to London. – Ти будеш добре розмовляв/розмовляла англійською до того, як ти поїдеш до Лондона. We will have played the violins together before the concert. – Ми будемо грати на скрипках разом до концерту. Cats will have liked milk until they try fish. – Коти будуть любити молоко, поки не спробують рибу.',
            example_HeShiIt: 'She will have spoken English well before she moves to the USA. – Вона буде добре розмовляти англійською до того, як вона переїде до США. He will have played the violin since he was a child. – Він буде грати на скрипці з дитинства. Simon`s cat will have liked milk until it discovers the joy of hunting. – Кіт Саймона буде любити молоко, поки не відкриє для себе радість полювання.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "will have", заперечну частку "not" та смислове дієслово у третій формі (He/She/It + will have + not + past participle + ... або He/She/It + won`t have + past participle + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "will have", заперечну частку "not" та смислове дієслово у третій формі (I/You/We/They + will have + not + past participle + ... або I/You/We/They + won`t have + past participle + ...)',
            example_IYouWeThey: 'I will not have studied French by the time I move to Paris. – Я не буду вивчив/вивчила французьку мову до того часу, коли я переїду до Парижу. They will not have played the violin together before the concert. – Вони не будуть грати на скрипках разом до концерту. Cats won`t have liked fish before they try it. – Коти не будуть любити рибу, поки не спробують її.',
            example_HeShiIt: 'She will not have spoken English well before she moves to the USA. – Вона не буде добре розмовляти англійською до того, як вона переїде до США. He won`t have played the violin since he was a child. – Він не буде грати на скрипці з дитинства. Simon`s cat won`t have liked hunting until it discovers the joy of it. – Кіт Саймона не буде любити полювати, поки не відкриє для себе радість цього.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "will have" перед підметом, після чого смислове дієслово у третій формі (Will + He/She/It + have + past participle + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "will have" перед підметом, після чого смислове дієслово у третій формі (Will + I/You/We/They + have + past participle + ...)?',
            example_IYouWeThey: 'Will I have studied French by the time I move to Paris? – Чи я буду вивчив/вивчила французьку мову до того часу, коли я переїду до Парижу? Will they have played the violin together before the concert? – Чи вони будуть грати на скрипках разом до концерту? Will cats have liked fish before they try it? – Чи коти будуть любити рибу, поки не спробують її?',
            example_HeShiIt: 'Will she have spoken English well before she moves to the USA? – Чи вона буде добре розмовляти англійською до того, як вона переїде до США? Will he have played the violin since he was a child? – Чи він буде грати на скрипці з дитинства? Will Simon`s cat have liked hunting until it discovers the joy of it? – Чи кіт Саймона буде любити полювати, поки не відкриє для себе радість цього?'
        },
        tenses_marker: {
            rules: 'Future Perfect може вживатися з певними словами та виразами, що вказують на певний момент у майбутньому до визначеного часу.',
            markers: 'by the time – до того часу; before – перед; by 2050 – до 2050 року; by the end of the year – до кінця року; by next month – до наступного місяця; by the age of – до віку; in a year – за рік; in ten years – за десять років; in the future – в майбутньому; by the time... – до того часу, коли...'
        },
    },
    {
        name: "Past Perfect Continuous",
        appointment: 'Для позначення тривалої дії, яка тривала до певного моменту в минулому.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо допоміжне дієслово "had been" перед смисловим дієсловом у -ing формі (He/She/It + had been + V-ing + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо допоміжне дієслово "had been" перед смисловим дієсловом у -ing формі (I/You/We/They + had been + V-ing + ...)',
            example_IYouWeThey: 'I had been studying French for two hours before I moved to Paris. – Я вивчав/вивчала французьку мову протягом двох годин, перш ніж я переїхав/переїхала до Парижу. You had been speaking English well for several months before you went to London. – Ти добре розмовляв/розмовляла англійською протягом кількох місяців, перш ніж ти поїхав/поїхала до Лондона. We had been playing the violins together for years before the concert. – Ми грали на скрипках разом протягом років до концерту. Cats had been liking milk until they tried fish. – Коти любили молоко, поки не спробували рибу.',
            example_HeShiIt: 'She had been speaking English well before she moved to the USA. – Вона добре розмовляла англійською протягом тривалого часу, перш ніж вона переїхала до США. He had been playing the violin since he was a child. – Він грав на скрипці протягом усього часу з дитинства. Simon`s cat had been liking milk until it discovered the joy of hunting. – Кіт Саймона любив молоко, поки не відкрив для себе радість полювання.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо допоміжне дієслово "had been", заперечну частку "not" та смислове дієслово у -ing формі (He/She/It + had not been + V-ing + ... або He/She/It + hadn`t been + V-ing + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо допоміжне дієслово "had been", заперечну частку "not" та смислове дієслово у -ing формі (I/You/We/They + had not been + V-ing + ... або I/You/We/They + hadn`t been + V-ing + ...)',
            example_IYouWeThey: 'I had not been studying French for very long before I moved to Paris. – Я не вивчав/вивчала французьку мову дуже довго, перш ніж я переїхав/переїхала до Парижу. They had not been playing the violin together before the concert. – Вони не грали на скрипках разом до концерту. Cats hadn`t been liking fish before they tried it. – Коти не любили рибу, поки не спробували її.',
            example_HeShiIt: 'She had not been speaking English well before she moved to the USA. – Вона не добре розмовляла англійською протягом тривалого часу, перш ніж вона переїхала до США. He hadn`t been playing the violin since he was a child. – Він не грав на скрипці протягом усього часу з дитинства. Simon`s cat hadn`t been liking hunting until it discovered the joy of it. – Кіт Саймона не любив полювати, поки не відкрив для себе радість цього.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо допоміжне дієслово "had been" перед підметом, після чого смислове дієслово у -ing формі (Had + He/She/It + been + V-ing + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо допоміжне дієслово "had been" перед підметом, після чого смислове дієслово у -ing формі (Had + I/You/We/They + been + V-ing + ...)?',
            example_IYouWeThey: 'Had I been studying French for very long before I moved to Paris? – Чи я вивчав/вивчала французьку мову дуже довго, перш ніж я переїхав/переїхала до Парижу? Had they been playing the violin together before the concert? – Чи вони грали на скрипках разом до концерту? Had cats been liking fish before they tried it? – Чи коти любили рибу, поки не спробували її?',
            example_HeShiIt: 'Had she been speaking English well before she moved to the USA? – Чи вона добре розмовляла англійською протягом тривалого часу, перш ніж вона переїхала до США? Had he been playing the violin since he was a child? – Чи він грав на скрипці протягом усього часу з дитинства? Had Simon`s cat been liking hunting until it discovered the joy of it? – Чи кіт Саймона любив полювати, поки не відкрив для себе радість цього?'
        },
        tenses_marker: {
            rules: 'Past Perfect Continuous може вживатися з певними словами та виразами, що вказують на тривалість дії до певного моменту в минулому.',
            markers: 'for – протягом (період тривалості); since – з (початок тривалості); how long – як довго; the whole day/week/month/year – цілий день/тиждень/місяць/рік; all day/week/month/year – весь день/тиждень/місяць/рік'
        },
    },
    {
        name: "Future Perfect Continuous",
        appointment: 'Для позначення тривалої дії, яка буде тривати до певного моменту в майбутньому.',
        rules_statement: {
            rule_HeShiIt: 'Для He/She/It використовуємо "will have been" перед смисловим дієсловом у -ing формі (He/She/It + will have been + V-ing + ...)',
            rule_IYouWeThey: 'Для I/You/We/They використовуємо "will have been" перед смисловим дієсловом у -ing формі (I/You/We/They + will have been + V-ing + ...)',
            example_IYouWeThey: 'I will have been studying French for five years by the time I move to Paris. – Я буду вивчав/вивчала французьку мову протягом п`яти років до того, як я переїду до Парижу. You will have been speaking English fluently for a year before you go to London. – Ти будеш розмовляв/розмовляла англійською вільно протягом року до того, як ти поїдеш до Лондона. We will have been playing the violins together since childhood by the time of the concert. – Ми будемо грати на скрипках разом з дитинства до часу концерту. Cats will have been liking milk until they discover another favorite treat. – Коти будуть любити молоко до того моменту, поки не відкриють іншу улюблену ласощі.',
            example_HeShiIt: 'She will have been speaking English well before she moves to the USA. – Вона буде говорити англійською добре до того, як вона переїде до США. He will have been playing the violin for many years by the time of the concert. – Він буде грати на скрипці протягом багатьох років до часу концерту. Simon`s cat will have been enjoying hunting before it discovers other entertainment. – Кіт Саймона буде насолоджуватися полюванням до того, як він відкриє для себе інші розваги.'
        },
        rules_denial: {
            rule_HeShiIt: 'Для He/She/It в запереченні використовуємо "will not have been" або "won`t have been" перед смисловим дієсловом у -ing формі (He/She/It + will not have been + V-ing + ... або He/She/It + won`t have been + V-ing + ...)',
            rule_IYouWeThey: 'Для I/You/We/They в запереченні використовуємо "will not have been" або "won`t have been" перед смисловим дієсловом у -ing формі (I/You/We/They + will not have been + V-ing + ... або I/You/We/They + won`t have been + V-ing + ...)',
            example_IYouWeThey: 'I will not have been studying French for very long before I move to Paris. – Я не буду вивчав/вивчала французьку мову дуже довго до того, як я переїду до Парижу. They will not have been playing the violin together before the concert. – Вони не будуть грати на скрипках разом до часу концерту. Cats won`t have been liking fish before they try it. – Коти не будуть любити рибу до того, як спробують її.',
            example_HeShiIt: 'She will not have been speaking English well before she moves to the USA. – Вона не буде говорити англійською добре до того, як вона переїде до США. He won`t have been playing the violin for very long before the concert. – Він не буде грати на скрипці дуже довго до часу концерту. Simon`s cat won`t have been enjoying hunting before it discovers other entertainment. – Кіт Саймона не буде насолоджуватися полюванням до того, як він відкриє для себе інші розваги.'
        },
        rules_question: {
            rule_HeShiIt: 'Для He/She/It в питанні ставимо "will have been" перед підметом, після чого смислове дієслово у -ing формі (Will + He/She/It + have been + V-ing + ...)?',
            rule_IYouWeThey: 'Для I/You/We/They в питанні ставимо "will have been" перед підметом, після чого смислове дієслово у -ing формі (Will + I/You/We/They + have been + V-ing + ...)?',
            example_IYouWeThey: 'Will I have been studying French for very long before I move to Paris? – Чи я буду вивчав/вивчала французьку мову дуже довго до того, як я переїду до Парижу? Will they have been playing the violin together before the concert? – Чи вони будуть грати на скрипках разом до часу концерту? Will cats have been liking fish before they try it? – Чи коти будуть любити рибу до того, як спробують її?',
            example_HeShiIt: 'Will she have been speaking English well before she moves to the USA? – Чи вона буде говорити англійською добре до того, як вона переїде до США? Will he have been playing the violin for very long before the concert? – Чи він буде грати на скрипці дуже довго до часу концерту? Will Simon`s cat have been enjoying hunting before it discovers other entertainment? – Чи кіт Саймона буде насолоджуватися полюванням до того, як він відкриє для себе інші розваги?'
        },
        tenses_marker: {
            rules: 'Future Perfect Continuous може вживатися з певними словами та виразами, що вказують на тривалість дії до певного моменту в майбутньому.',
            markers: 'for – протягом (до моменту в майбутньому); by the time – до того моменту, коли; how long – як довго; all day/week/month/year – весь день/тиждень/місяць/рік; the whole day/week/month/year – цілий день/тиждень/місяць/рік'
        },
    },
]