let language='en';try{if(localStorage.getItem('blackhorse-language')==='ru')language='ru';}catch{}
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
function translateText(text){
 if(language!=='ru')return text;
 const trimmed=text.trim();let result=translations[trimmed];
 if(!result){
  result=trimmed.replace(/^Explore the silhouette, details and styling of (.+) in the BLACK HORSE collection\.$/,'Силуэт, детали и варианты стилизации $1 в каталоге BLACK HORSE.')
   .replace(/^Mention (.+) in your message\. This preview does not accept orders or payments\.$/,'Укажите $1 в сообщении. В этом предпросмотре заказы и платежи не принимаются.')
   .replace(/^View all (\d+) photographs$/,'Все фотографии ($1)')
   .replace(/^(\d+) pieces · Launch selection to be confirmed$/,'Моделей: $1 · Ассортимент к запуску уточняется')
   .replace(/ — view (\d+)$/,' — ракурс $1');
  if(result===trimmed)result=trimmed.split(/( · | \/ |← | — )/).map(part=>translations[part]||part).join('');
 }
 return text.replace(trimmed,result);
}
function localizeHTML(html){
 // Translate text and accessibility labels only; routes, asset paths and brand names stay stable.
 html=html.replace(/↗/g,arrow);
 if(language==='ru')html=html.replace(/>([^<]+)</g,(_,text)=>'>'+translateText(text)+'<').replace(/(alt|aria-label)="([^"]*)"/g,(_,attr,text)=>attr+'="'+translateText(text)+'"');
 return html;
}
function renderChrome(){
 document.documentElement.lang=language;
 document.querySelector('.skip').textContent=translateText('Skip to content');
 document.querySelector('.notice').textContent=translateText('PRIVATE CATALOGUE PREVIEW · PRICES & ORDERING TO BE CONFIRMED');
 document.querySelector('header').innerHTML=localizeHTML('<a class="wordmark" href="#home" aria-label="Black Horse home">BLACK HORSE<span>ATELIER</span></a><nav aria-label="Main navigation"><a href="#collection">Catalogue</a><a href="#story">Our world</a></nav>')+'<div class="languages" role="group" aria-label="'+translateText('Language')+'">'+['en','ru'].map(l=>'<button type="button" data-language="'+l+'" lang="'+l+'" aria-label="'+(l==='en'?'English':'Русский')+'" aria-pressed="'+(language===l)+'">'+l.toUpperCase()+'</button>').join('')+'</div>';
 document.querySelectorAll('[data-language]').forEach(button=>button.onclick=()=>{language=button.dataset.language;try{localStorage.setItem('blackhorse-language',language);}catch{}render(false);document.querySelector('[data-language="'+language+'"]').focus({preventScroll:true});});
 document.querySelector('footer').innerHTML=localizeHTML('<a class="footer-brand" href="#home">BLACK HORSE</a><div><span>Independent spirit. Sculptural form.</span><a href="#collection">Explore the catalogue</a><a href="https://www.instagram.com/blackhorse.kz/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div><p>Catalogue preview · Online purchasing is not yet available.</p>').replace('https://ig.me/m/blackhorse.kz','https://www.instagram.com/blackhorse.kz/');
 const contact=document.getElementById('contact');contact.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.7L4 20l1.2-4.5a8 8 0 1 1 14.8-4Z"/><path d="M8 11.5h8"/></svg><span>'+translateText('Message us')+'</span>';contact.setAttribute('aria-label',translateText('Contact BLACK HORSE'));
}
