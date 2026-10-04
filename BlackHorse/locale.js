let language='en';try{if(['en','ru','kk'].includes(localStorage.getItem('blackhorse-language')))language=localStorage.getItem('blackhorse-language');}catch{}
const arrow='<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const translations={
 'PRIVATE CATALOGUE PREVIEW · PRICES & ORDERING TO BE CONFIRMED':'ПРЕДПРОСМОТР КАТАЛОГА · ЦЕНЫ И УСЛОВИЯ ЗАКАЗА УТОЧНЯЮТСЯ',
 'Skip to content':'Перейти к содержимому','Black Horse home':'Black Horse — главная','Main navigation':'Основная навигация','Language':'Язык',
 'Independent spirit. Sculptural form.':'Доспехи женственности',
 'Catalogue preview · Online purchasing is not yet available.':'Предпросмотр каталога · Онлайн-покупки пока недоступны.',
 'Explore the catalogue':'Смотреть каталог','The catalogue':'Каталог','Catalogue':'Каталог','Our world':'Наш мир','Message us':'Написать нам',
 'Contact BLACK HORSE':'Связаться с BLACK HORSE',
 'Open Instagram chat':'Открыть чат Instagram',
 'Open @blackhorse.kz profile':'Открыть профиль @blackhorse.kz',
 'If chat does not open, visit our profile and tap Message. Instagram may ask you to sign in.':'Если чат не открылся, перейдите в профиль и нажмите «Написать». Instagram может попросить войти в аккаунт.',
 'An ornate, sculptural silhouette, seen through a steppe-inspired editorial story.':'Выразительный скульптурный силуэт в фотосъёмке, вдохновлённой просторами степи.',
 'A structured silhouette with ornamental detailing and a distinctive metalwork finish.':'Чёткий силуэт, орнаментальные детали и выразительный металлический декор.',
 'Strong curved lines and a sculpted waist. Explore the different styling and colour treatments in the gallery.':'Выразительные изгибы и подчёркнутая талия. В галерее — разные образы и цветовые решения.',
 'A sharp, fitted silhouette with a front zip, photographed in a dramatic black-and-red campaign.':'Приталенный силуэт с молнией спереди в эффектной чёрно-красной фотосъёмке.',
 'Long fringe brings movement to a defined waist. Explore the different lengths and styling shown here.':'Длинная бахрома подчёркивает талию и оживает в движении. В галерее — варианты длины и стилизации.',
 'Piece not found':'Модель не найдена','Return to catalogue':'Вернуться в каталог','Show fewer photographs':'Свернуть фотографии',
 'Price and availability: awaiting confirmation.':'Цена и наличие уточняются.',
 'Sizes, materials, colour options and production time will be confirmed before ordering opens.':'Размеры, материалы, цвета и сроки изготовления будут уточнены до открытия заказов.',
 'Contact BLACK HORSE on Instagram':'Написать BLACK HORSE в Instagram','Explore more':'Другие модели',
 'Product categories':'Категории изделий','All':'Все','Corsets':'Корсеты','Basques':'Баски','Belts':'Пояса','View piece':'Подробнее',
 'Launch selection to be confirmed':'Ассортимент к запуску уточняется',
 'Nomad Angel photographed with a horse in a steppe landscape':'Nomad Angel: съёмка с лошадью в степи',
 'The BLACK HORSE world':'Мир BLACK HORSE','Rooted in spirit.':'Сила в истоках.','Shaped for presence.':'Характер в форме.',
 'Discover Dinara’s world of sculptural corsets, ornamental details and expressive silhouettes.':'Откройте мир Динары: скульптурные корсеты, орнаментальные детали и выразительные силуэты.',
 'The collection moves between sharply defined shapes and a richly detailed, steppe-inspired visual language.':'В коллекции чёткие формы сочетаются с богатством деталей и образами, вдохновлёнными степью.',
 'Atelier':'Ателье','A conversation':'Поговорим','about your piece.':'о вашей модели.',
 'For questions about a design, its fit or possible variations, contact BLACK HORSE directly. Include the piece’s name and what you would like to know.':'По вопросам дизайна, посадки или возможных вариантов напишите напрямую BLACK HORSE. Укажите название модели и ваш вопрос.',
 'Available sizes, custom options, lead times and prices are still being confirmed for this catalogue.':'Доступные размеры, индивидуальные варианты, сроки и цены для каталога пока уточняются.',
 'Contact the atelier':'Написать в ателье','Nomad Angel corset, styled with a horse in the steppe':'Корсет Nomad Angel в образе для съёмки с лошадью в степи',
 'Ornamental details of the Nomad Angel corset':'Орнаментальные детали корсета Nomad Angel',
 'An untamed':'Элегантность','kind of elegance.':'свободного духа.','A first look':'Первое знакомство','Shape. Spirit. Presence.':'Форма. Дух. Характер.',
 'View all 21 pieces':'Все модели: 21','Wonder Woman sculptural corset with an ornamental headpiece':'Скульптурный корсет Wonder Woman с декоративным головным убором',
 'Sculptural expression':'Выразительность формы','Not just worn.':'Не просто носить.','Felt.':'Чувствовать.',
 'Defined waists. Dramatic lines.':'Подчёркнутая талия. Эффектные линии.',
 'Details that deserve a second look.':'Детали, которые хочется рассматривать.',
 'Discover Wonder Woman':'Открыть Wonder Woman',
 'Message BLACK HORSE on Instagram (opens in a new tab)':'Написать BLACK HORSE в Instagram (в новой вкладке)'
};
const translationsKk={
 'PRIVATE CATALOGUE PREVIEW · PRICES & ORDERING TO BE CONFIRMED':'КАТАЛОГТЫҢ АЛДЫН АЛА НҰСҚАСЫ · БАҒАЛАР МЕН ТАПСЫРЫС ШАРТТАРЫ НАҚТЫЛАНУДА',
 'Skip to content':'Негізгі мазмұнға өту','Black Horse home':'BLACK HORSE — басты бет','Main navigation':'Негізгі мәзір','Language':'Тіл',
 'Independent spirit. Sculptural form.':'Нәзіктіктің сауыты',
 'Catalogue preview · Online purchasing is not yet available.':'Каталогтың алдын ала нұсқасы · Сайт арқылы сатып алу әзірге қолжетімсіз.',
 'Explore the catalogue':'Каталогты қарау','The catalogue':'Каталог','Catalogue':'Каталог','Our world':'Біздің әлем','Message us':'Бізге жазыңыз',
 'Contact BLACK HORSE':'BLACK HORSE-қа хабарласу',
 'Open Instagram chat':'Instagram чатын ашу','Open @blackhorse.kz profile':'@blackhorse.kz парақшасын ашу',
 'If chat does not open, visit our profile and tap Message. Instagram may ask you to sign in.':'Чат ашылмаса, парақшамызға өтіп, «Хабарлама» түймесін басыңыз. Instagram жүйеге кіруді сұрауы мүмкін.',
 'An ornate, sculptural silhouette, seen through a steppe-inspired editorial story.':'Дала рухынан шабыт алған фотосуреттегі өрнекті, айқын пішінді бейне.',
 'A structured silhouette with ornamental detailing and a distinctive metalwork finish.':'Айқын пішін, оюлы бөлшектер және ерекше металл әшекей.',
 'Strong curved lines and a sculpted waist. Explore the different styling and colour treatments in the gallery.':'Айқын иілімдер мен белді ерекше көрсететін пішін. Галереядан түрлі образдар мен түстерді қараңыз.',
 'A sharp, fitted silhouette with a front zip, photographed in a dramatic black-and-red campaign.':'Алдыңғы сыдырмасы бар қынама бел пішін. Қара-қызыл түсті фотосерияда көрсетілген.',
 'Long fringe brings movement to a defined waist. Explore the different lengths and styling shown here.':'Ұзын шашақ белді айқындап, қозғалысқа көрік береді. Мұнда әртүрлі ұзындық пен үйлестіру тәсілдері көрсетілген.',
 'Piece not found':'Үлгі табылмады','Return to catalogue':'Каталогқа оралу','Show fewer photographs':'Фотосуреттерді жасыру',
 'Price and availability: awaiting confirmation.':'Бағасы мен қолжетімділігі нақтылануда.',
 'Sizes, materials, colour options and production time will be confirmed before ordering opens.':'Өлшемдер, материалдар, түстер және дайындалу мерзімі тапсырыс қабылдау басталғанға дейін нақтыланады.',
 'Contact BLACK HORSE on Instagram':'BLACK HORSE-қа Instagram арқылы жазу','Explore more':'Басқа үлгілер',
 'Product categories':'Бұйым санаттары','All':'Барлығы','Corsets':'Корсеттер','Basques':'Баскалар','Belts':'Белдіктер','View piece':'Толығырақ',
 'Launch selection to be confirmed':'Ұсынылатын үлгілер тізімі нақтылануда',
 'Nomad Angel photographed with a horse in a steppe landscape':'Даладағы атпен түскен Nomad Angel',
 'The BLACK HORSE world':'BLACK HORSE әлемі','Rooted in spirit.':'Рухы тамырында.','Shaped for presence.':'Болмысы пішінінде.',
 'Discover Dinara’s world of sculptural corsets, ornamental details and expressive silhouettes.':'Динараның айқын пішінді корсеттері, оюлы бөлшектері мен әсерлі образдары әлемін ашыңыз.',
 'The collection moves between sharply defined shapes and a richly detailed, steppe-inspired visual language.':'Бұл топтамада айқын пішіндер, бай бөлшектер және даладан шабыт алған бейнелер тоғысады.',
 'Atelier':'Ателье','A conversation':'Өзіңіздің','about your piece.':'бұйымыңыз туралы сөйлесейік.',
 'For questions about a design, its fit or possible variations, contact BLACK HORSE directly. Include the piece’s name and what you would like to know.':'Үлгінің дизайны, қонымы немесе ықтимал өзгерістері туралы сұрақтарыңыз болса, BLACK HORSE-қа тікелей жазыңыз. Үлгінің атауын және сұрағыңызды көрсетіңіз.',
 'Available sizes, custom options, lead times and prices are still being confirmed for this catalogue.':'Қолжетімді өлшемдер, жеке тапсырыс нұсқалары, дайындалу мерзімі мен бағалар әлі нақтылануда.',
 'Contact the atelier':'Ательеге жазу','Nomad Angel corset, styled with a horse in the steppe':'Даладағы атпен түскен Nomad Angel корсеті',
 'Ornamental details of the Nomad Angel corset':'Nomad Angel корсетінің оюлы бөлшектері',
 'An untamed':'Еркін рухты','kind of elegance.':'әсемдік.','A first look':'Алғашқы танысу','Shape. Spirit. Presence.':'Пішін. Рух. Болмыс.',
 'View all 21 pieces':'Барлық 21 үлгі','Wonder Woman sculptural corset with an ornamental headpiece':'Әшекейлі бас киіммен көрсетілген Wonder Woman корсеті',
 'Sculptural expression':'Айқын пішін','Not just worn.':'Жай ғана киім емес.','Felt.':'Сезім.',
 'Defined waists. Dramatic lines.':'Айқындалған бел. Әсерлі сызықтар.',
 'Details that deserve a second look.':'Қайта қарағыңыз келетін бөлшектер.',
 'Discover Wonder Woman':'Wonder Woman үлгісін қарау',
 'Message BLACK HORSE on Instagram (opens in a new tab)':'BLACK HORSE-қа Instagram арқылы жазу (жаңа бетте ашылады)'
};
function localized(en,ru,kk){return language==='ru'?ru:language==='kk'?kk:en}
function translateText(text){
 if(language==='en')return text;
 const trimmed=text.trim(),dictionary=language==='ru'?translations:translationsKk;
 let result=dictionary[trimmed];
 if(!result){
  if(language==='ru')result=trimmed.replace(/^Explore the silhouette, details and styling of (.+) in the BLACK HORSE collection\.$/,'Силуэт, детали и варианты стилизации $1 в каталоге BLACK HORSE.')
   .replace(/^Mention (.+) in your message\. This preview does not accept orders or payments\.$/,'Укажите $1 в сообщении. В этом предпросмотре заказы и платежи не принимаются.')
   .replace(/^View all (\d+) photographs$/,'Все фотографии ($1)')
   .replace(/^(\d+) pieces · Launch selection to be confirmed$/,'Моделей: $1 · Ассортимент к запуску уточняется')
   .replace(/ — view (\d+)$/,' — ракурс $1');
  else result=trimmed.replace(/^Explore the silhouette, details and styling of (.+) in the BLACK HORSE collection\.$/,'BLACK HORSE топтамасындағы $1 үлгісінің пішінін, бөлшектерін және үйлестіру жолдарын қараңыз.')
   .replace(/^Mention (.+) in your message\. This preview does not accept orders or payments\.$/,'Хабарламада $1 атауын көрсетіңіз. Бұл алдын ала нұсқада тапсырыс пен төлем қабылданбайды.')
   .replace(/^View all (\d+) photographs$/,'Барлық фотосурет ($1)')
   .replace(/^(\d+) pieces · Launch selection to be confirmed$/,'Үлгілер саны: $1 · Ұсынылатын үлгілер тізімі нақтылануда')
   .replace(/ — view (\d+)$/,' — көрініс $1');
  if(result===trimmed)result=trimmed.split(/( · | \/ |← | — )/).map(part=>dictionary[part]||part).join('');
 }
 return text.replace(trimmed,result);
}
function localizeHTML(html){
 // Translate text and accessibility labels only; routes, asset paths and brand names stay stable.
 html=html.replace(/↗/g,arrow);
 if(language!=='en')html=html.replace(/>([^<]+)</g,(_,text)=>'>'+translateText(text)+'<').replace(/(alt|aria-label)="([^"]*)"/g,(_,attr,text)=>attr+'="'+translateText(text)+'"');
 return html;
}
function renderChrome(){
 document.documentElement.lang=language;
 document.querySelector('.skip').textContent=translateText('Skip to content');
 document.querySelector('.notice').textContent=translateText('PRIVATE CATALOGUE PREVIEW · PRICES & ORDERING TO BE CONFIRMED');
 document.querySelector('header').innerHTML=localizeHTML('<a class="wordmark" href="#home" aria-label="Black Horse home">BLACKHORSE</a><nav aria-label="Main navigation"><a href="#collection">Catalogue</a><a href="#story">Our world</a></nav>')+'<div class="languages" role="group" aria-label="'+translateText('Language')+'">'+['en','ru','kk'].map(l=>'<button type="button" data-language="'+l+'" lang="'+l+'" aria-label="'+(l==='en'?'English':l==='ru'?'Русский':'Қазақша')+'" aria-pressed="'+(language===l)+'">'+(l==='kk'?'ҚАЗ':l.toUpperCase())+'</button>').join('')+'</div>';
 document.querySelectorAll('[data-language]').forEach(button=>button.onclick=()=>{language=button.dataset.language;try{localStorage.setItem('blackhorse-language',language);}catch{}render(false);document.querySelector('[data-language="'+language+'"]').focus({preventScroll:true});});
 document.querySelector('footer').innerHTML='<span>BLACK HORSE</span><span>'+translateText('Independent spirit. Sculptural form.')+'</span>';
 const contact=document.getElementById('contact');contact.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.7L4 20l1.2-4.5a8 8 0 1 1 14.8-4Z"/><path d="M8 11.5h8"/></svg><span>'+translateText('Message us')+'</span>';contact.setAttribute('aria-label',translateText('Contact BLACK HORSE'));
 contact.setAttribute('aria-expanded','false');contact.setAttribute('aria-controls','contact-options');
 let panel=document.getElementById('contact-options');if(!panel){panel=document.createElement('div');panel.id='contact-options';document.body.appendChild(panel);}panel.hidden=true;
 panel.innerHTML='<p>'+translateText('Contact BLACK HORSE')+'</p><a href="https://ig.me/m/blackhorse.kz">Instagram '+arrow+'</a><button type="button" disabled>WhatsApp <small>'+localized('Number coming soon','Номер скоро появится','Нөмір жақында қосылады')+'</small></button><a class="profile-fallback" href="https://www.instagram.com/blackhorse.kz/">'+localized('Visit Instagram profile','Открыть профиль Instagram','Instagram парақшасын ашу')+'</a>';
 contact.onclick=()=>{panel.hidden=!panel.hidden;contact.setAttribute('aria-expanded',String(!panel.hidden));};
 document.onkeydown=e=>{if(e.key==='Escape'&&!panel.hidden){panel.hidden=true;contact.setAttribute('aria-expanded','false');contact.focus();}};
 document.onclick=e=>{if(!panel.contains(e.target)&&!contact.contains(e.target)){panel.hidden=true;contact.setAttribute('aria-expanded','false');}};
}

