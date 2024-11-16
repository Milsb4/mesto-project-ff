(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"4397dce6-8787-4df4-b446-3a1fb71ed542","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e))},n=document.querySelector("#card-template").content,r=function(e,t,r,o,c){var a=n.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__title"),i=a.querySelector(".card__image"),l=a.querySelector(".card__like-button"),s=a.querySelector(".card__like-button-counter");u.textContent=e.name,i.alt=e.name,i.src=e.link,s.textContent=e.likes.length,a.querySelector(".card__like-button").addEventListener("click",(function(){o(a,p,s)}));var d=a.querySelector(".card__delete-button"),p=e._id;return e.owner._id!==t?a.querySelector(".card__delete-button").style.background="none":d.addEventListener("click",(function(){r(p,a)})),i.addEventListener("click",(function(){return c(e)})),e.likes.some((function(e){return e._id===t}))&&l.classList.toggle("card__like-button_is-active"),a},o=function(n,r,o){var c=n.querySelector(".card__like-button");c.classList.contains("card__like-button_is-active")?(c.classList.remove("card__like-button_is-active"),function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length}))):(c.classList.add("card__like-button_is-active"),function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length})))},c=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u),document.addEventListener("click",i)},a=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),document.removeEventListener("click",i)},u=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");a(t)}},i=function(e){var t=document.querySelector(".popup_is-opened");e.target===t&&a(t)},l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=function(e,t){e.disabled=t,e.classList.add(l.inactiveButtonClass)},f=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t)})),p(r,!0)},_=function(e,t){e.submitter.textContent=t?"Сохранение...":"Сохранить"};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y,v=document.querySelector(".places__list"),h=document.querySelectorAll(".popup"),S=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_image"),k=document.querySelector(".profile__edit-button"),E=document.querySelectorAll(".popup__close"),L=document.querySelector(".profile__add-button"),C=document.querySelector(".popup__caption"),g=document.querySelector(".popup__image"),A=document.querySelector(".popup_type_avatar"),x=document.querySelector(".popup_type_delete"),U=x.querySelector(".popup__button"),T=document.querySelector(".profile__image"),w=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),B=document.querySelector(".popup__input_type_name"),O=document.querySelector(".popup__input_type_description"),D=document.querySelector(".popup__input_type_url"),P=document.querySelector(".popup__input_type_card-name"),I=document.querySelector(".popup__input_type_avatar"),M=b.querySelector(".popup__form");k.addEventListener("click",(function(){B.value=w.textContent,O.value=j.textContent,c(b),f(b,l)})),L.addEventListener("click",(function(){c(S),f(S,l)}));var N=function(e){g.src=e.link,g.alt=e.name,C.textContent=e.name,c(q)};T.addEventListener("click",(function(){c(A),f(A,l)})),E.forEach((function(e){e.addEventListener("click",(function(){e.closest(".popup").classList.remove("popup_is-opened")}))})),M.addEventListener("submit",(function(n){n.preventDefault(),w.textContent=B.value,j.textContent=O.value,_(n,!0),function(n,r){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})}).then(t)}(B.value,O.value).then(a(b)).catch((function(e){console.error("Ошибка при отправке данных пользователя:",e)})).finally((function(){_(n,!1)}))})),S.addEventListener("submit",(function(n){var c,u={name:P.value,link:D.value};n.preventDefault(),_(n,!0),(c=u,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c.name,link:c.link})}).then(t)).then((function(e){var t=r(e,y,J,o,N);v.prepend(t),a(S),n.target.reset()})).catch((function(e){console.error("Ошибка при отправке данных карточки:",e)})).finally((function(){_(n,!1)}))})),h.forEach((function(e){return e.classList.add("popup_is-animated")})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.setCustomValidity(""),t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(l),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then(t)]).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],u=c[1];w.textContent=u.name,j.textContent=u.about,y=u._id,T.style.backgroundImage="url(".concat(u.avatar,")"),a.forEach((function(e){v.append(r(e,y,J,o,N))}))}));var J=function(n,r){c(x),U.onclick=function(){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(n).then((function(){!function(e){e?e.remove():console.error("Элемент не найден")}(r),a(x)})).catch((function(e){console.log("Ошибка при удалении карточки:",e)}))}};A.addEventListener("submit",(function(n){var r;n.preventDefault(),_(n,!0),(r=I.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){T.style.backgroundImage="url(".concat(e.avatar,")"),a(A)})).catch((function(e){console.log("Ошибка при отправке URL:",e)})).finally((function(){_(n,!1)}))}))})();