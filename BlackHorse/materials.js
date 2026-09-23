// Add Dinara's photographed swatches here when supplied.
// Each shade: { id, name: { en, ru }, image: 'assets/leather/filename.jpg' }.
// Set leatherShadeIds on each product to its confirmed compatible shade IDs.
// No colour or product availability is assumed before confirmation.
window.leatherShades=[];
const selectedLeather={};
function leatherOptions(p){
 const shades=(p.leatherShadeIds||[]).map(id=>window.leatherShades.find(s=>s.id===id)).filter(Boolean);
 const title=language==='ru'?'Цвета кожи':'Leather colours';
 if(!shades.length)return '<div class="leather-options"><p class="leather-label">'+title+'</p><p class="leather-empty">'+(language==='ru'?'Образцы скоро появятся':'Samples coming soon')+'</p></div>';
 return '<div class="leather-options"><p class="leather-label">'+title+'</p><div class="swatches" role="group" aria-label="'+title+' — '+esc(p.name)+'">'+shades.map(s=>'<button type="button" class="swatch" data-product="'+esc(p.slug)+'" data-shade="'+esc(s.id)+'" aria-label="'+esc(s.name[language]||s.name.en)+'" aria-pressed="'+(selectedLeather[p.slug]===s.id)+'"><img src="'+esc(s.image)+'" alt="" loading="lazy"></button>').join('')+'</div><p class="shade-name" aria-live="polite">'+esc(shades.find(s=>s.id===selectedLeather[p.slug])?.name[language]||(language==='ru'?'Выберите оттенок':'Select a shade'))+'</p></div>';
}
function bindLeatherOptions(){
 document.querySelectorAll('[data-shade]').forEach(button=>button.onclick=()=>{
  selectedLeather[button.dataset.product]=button.dataset.shade;
  document.querySelectorAll('[data-shade]').forEach(other=>{if(other.dataset.product===button.dataset.product)other.setAttribute('aria-pressed',other.dataset.shade===button.dataset.shade);});
  const shade=window.leatherShades.find(s=>s.id===button.dataset.shade);
  button.closest('.leather-options').querySelector('.shade-name').textContent=shade.name[language]||shade.name.en;
 });
}
