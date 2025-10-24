const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1EL = document.getElementById('pass1-el')
let pass2EL = document.getElementById('pass2-el')

function generator() {
    let password1 = ""
    let password2 = ""
    
    for (i = 0; i < 15; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    pass1EL.textContent = password1
    pass2EL.textContent = password2
}

function copyPassword(el) {
  const text = el.textContent.trim();
  if (!text) return;

  // preferred modern API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyFeedback(el);
    }).catch(() => {
      fallbackCopy(text, el);
    });
  } else {
    fallbackCopy(text, el);
  }
}

function fallbackCopy(text, el) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showCopyFeedback(el); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
}

function showCopyFeedback(el) {
  const old = el.textContent;
  el.textContent = 'Copied!';
  setTimeout(() => { el.textContent = old; }, 900);
}




