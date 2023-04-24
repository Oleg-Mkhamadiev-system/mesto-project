(()=>{"use strict";var e=document.querySelector(".popup_content_profile"),t=document.querySelector(".popup_content_elements"),r=document.querySelector(".popup_content_images"),n=document.querySelector(".popup_content_avatar"),o=document.querySelector(".popup_delete_confirm"),c=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),l=(document.querySelector(".profile__avatar-button"),document.querySelectorAll(".popup__close-button")),a=e.querySelector(".popup__form"),p=e.querySelector(".popup__input_data_name"),s=e.querySelector(".popup__input_data_profession"),i=document.querySelector(".profile__title"),d=document.querySelector(".profile__subtitle"),_=(document.querySelector(".profile__avatar"),t.querySelector(".popup__form")),m=(n.querySelector(".popup__form"),o.querySelector(".popup__form"),t.querySelector(".popup__input_data_place")),f=t.querySelector(".popup__input_link_image"),v=(document.querySelector(".elements__card-text"),document.querySelector(".elements__card-image"),document.querySelector(".elements__card"),document.querySelector(".popup__image")),y=document.querySelector(".popup__figcaption"),S=Array.from(document.querySelectorAll(".popup")),q=document.querySelector(".elements__cards"),b=["inputSelector","submitButtonSelector","inactiveButtonClass"];function k(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g,L,E,h=function(e,t,r,n){var o=n.inputErrorClass,c=n.errorClass,u=e.querySelector("#".concat(t.id,"-error"));t.classList.add(o),u.textContent=r,u.classList.add(c)},x=function(e,t,r){e.some((function(e){return!e.validity.valid}))?(t.disabled=!0,t.classList.add(r)):(t.disabled=!1,t.classList.remove(r))};function C(e){e.classList.add("popup_opened"),document.addEventListener("keydown",O)}function j(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",O)}function O(e){"Escape"===e.key&&j(document.querySelector(".popup_opened"))}function A(e){var t=e.link,n=e.name,o=document.querySelector(".template__elements").content.querySelector(".elements__card").cloneNode(!0);o.querySelector(".elements__card-text").textContent=n;var c=o.querySelector(".elements__card-image");c.src=t,c.alt=n,c.addEventListener("click",(function(){!function(e,t){v.src=t,v.alt=e,y.textContent=e,C(r)}(n,t)}));var u=o.querySelector(".elements__like-button");return u.addEventListener("click",(function(){u.classList.toggle("elements__like-button_active")})),o.querySelector(".elements__delete-button").addEventListener("click",(function(e){e.target.closest(".elements__card").remove()})),o}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=A(e);q.prepend(t)})),c.addEventListener("click",(function(){p.value=i.textContent,s.value=d.textContent,C(e)})),u.addEventListener("click",(function(){C(t)})),a.addEventListener("submit",(function(t){t.preventDefault(),i.textContent=p.value,d.textContent=s.value,j(e)})),_.addEventListener("submit",(function(e){e.preventDefault();var r=A({name:m.value,link:f.value});q.prepend(r),j(t);var n=e.submitter;n.disabled=!0,n.classList.add("popup__save-button_disabled"),_.reset()})),l.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return j(t)}))})),S.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&j(e)}))})),L=(g={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"}).formSelector,E=k(g,["formSelector"]),Array.from(document.querySelectorAll(L)).forEach((function(e){!function(e,t){var r=t.inputSelector,n=t.submitButtonSelector,o=t.inactiveButtonClass,c=k(t,b),u=Array.from(e.querySelectorAll(r)),l=e.querySelector(n);x(u,l,o),u.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,r){t.validity.valid?function(e,t,r){var n=r.inputErrorClass,o=r.errorClass,c=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n),c.textContent="",c.classList.remove(o)}(e,t,r):t.validity.patternMismatch?h(e,t,t.dataset.errorMessage,r):h(e,t,t.validationMessage,r)}(e,t,c),x(u,l,o)}))}))}(e,E)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQWFLLFlBQWMsR0FFM0JMLEVBQWFHLFVBQVVXLE9BQU9mLEVBQ2hDLENBN0NJeUQsQ0FBZTlELEVBQWFDLEVBQWNILEdBQ2pDRyxFQUFhZ0IsU0FBUzhDLGdCQUMvQmhFLEVBQWVDLEVBQ2JDLEVBQ0FBLEVBQWErRCxRQUFROUQsYUFDckJKLEdBR0ZDLEVBQ0VDLEVBQ0FDLEVBQ0FBLEVBQWFnRSxrQkFDYm5FLEVBR04sQ0FtRU1vRSxDQUFtQmxFLEVBQWFDLEVBQWNILEdBRTlDYyxFQUFrQkMsRUFBV0MsRUFBY0MsRUFDN0MsR0FDRixHQUNGLENBUUlvRCxDQUFrQm5FLEVBQWFGLEVBQ2pDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL21lc3RvLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9tZXN0by1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0L/QvtC/0LDQv9GLXG5leHBvcnQgY29uc3QgcG9wdXBQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NvbnRlbnRfcHJvZmlsZScpO1xuZXhwb3J0IGNvbnN0IHBvcHVwUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY29udGVudF9lbGVtZW50cycpO1xuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NvbnRlbnRfaW1hZ2VzJyk7XG5leHBvcnQgY29uc3QgcG9wdXBBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY29udGVudF9hdmF0YXInKTtcbmV4cG9ydCBjb25zdCBwb3B1cERlbGV0ZUNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZGVsZXRlX2NvbmZpcm0nKTtcblxuLy8g0LrQvdC+0L/QutC4INC+0YLQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9C+0LJcbmV4cG9ydCBjb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVBdmF0YXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyLWJ1dHRvbicpO1xuXG4vLyDQutC+0LvQu9C10LrRhtC40Y8g0LrQvdC+0L/QvtC6INC30LDQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9C+0LIg0L/QviDQutGA0LXRgdGC0LjQutGDXG5leHBvcnQgY29uc3QgcG9wdXBCdXR0b25DbG9zZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlLWJ1dHRvbicpO1xuXG4vLyDRhNC+0YDQvNCwINC00L7QsdCw0LLQu9C10L3QuNGPINC00LDQvdC90YvRhVxuZXhwb3J0IGNvbnN0IGZvcm1FZGl0RWxlbWVudCA9IHBvcHVwUHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcbmV4cG9ydCBjb25zdCBuYW1lSW5wdXQgPSBwb3B1cFByb2ZpbGUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF9kYXRhX25hbWUnKTtcbmV4cG9ydCBjb25zdCBhYm91dElucHV0ID0gcG9wdXBQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfZGF0YV9wcm9mZXNzaW9uJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX3RpdGxlJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZVN1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX3N1YnRpdGxlJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZUF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hdmF0YXInKTtcblxuLy8g0YTQvtGA0LzQsCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvdC+0LLRi9GFINC60LDRgNGC0L7Rh9C10LpcbmV4cG9ydCBjb25zdCBmb3JtTmV3Q2FyZEVsZW1lbnQgPSBwb3B1cFBsYWNlLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xuZXhwb3J0IGNvbnN0IGZvcm1BdmF0YXJFbGVtZW50ID0gcG9wdXBBdmF0YXIucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG5leHBvcnQgY29uc3QgZm9ybUNvbmZpcm1FbGVtZW50ID0gcG9wdXBEZWxldGVDb25maXJtLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xuZXhwb3J0IGNvbnN0IG5hbWVQbGFjZUlucHV0ID0gcG9wdXBQbGFjZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X2RhdGFfcGxhY2UnKTtcbmV4cG9ydCBjb25zdCBsaW5rSW1hZ2VJbnB1dCA9IHBvcHVwUGxhY2UucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF9saW5rX2ltYWdlJyk7XG5leHBvcnQgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2NhcmQtdGV4dCcpO1xuZXhwb3J0IGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY2FyZC1pbWFnZScpO1xuXG5leHBvcnQgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2NhcmQnKTtcblxuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpO1xuZXhwb3J0IGNvbnN0IHBvcHVwRmlnY2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZmlnY2FwdGlvbicpO1xuXG4vLyDQutC+0LvQu9C10LrRhtC40Y8g0L/QvtC/0LDQv9C+0LJcbmV4cG9ydCBjb25zdCBwb3B1cEVsZW1lbnRMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKSk7XG5cbi8vINGB0L7Qt9C00LDRjiDQv9GD0YHRgtC+0Lkg0LrQvtC90YLQtdC50L3QtdGALCDRh9GC0L7QsdGLINCy0LvQvtC20LjRgtGMINC60LDRgNGC0L7Rh9C60Lgg0LIg0YHQtdC60YbQuNGOIGVsZW1lbnRzXG5leHBvcnQgY29uc3QgY29udGFpbmVyU2VsZWN0b3IgPSAnLmVsZW1lbnRzX19jYXJkcyc7XG5leHBvcnQgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2NhcmRzJyk7XG5cbi8vINC80LDRgdGB0LjQsiDQutCw0YDRgtC+0YfQtdC6XG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogJ9CQ0YDRhdGL0LcnLFxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICfQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2NoZWx5YWJpbnNrLW9ibGFzdC5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JjQstCw0L3QvtCy0L4nLFxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JrQsNC80YfQsNGC0LrQsCcsXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ9Cl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9JyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JHQsNC50LrQsNC7JyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGcnXG4gIH1cbl07XG5cblxuLy8g0L7QsdGK0LXQutGCINCy0LDQu9C40LTQsNGG0LjQuFxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25Db25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3NhdmUtYnV0dG9uJyxcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zYXZlLWJ1dHRvbl9kaXNhYmxlZCcsXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dC1lcnJvcl92aXNpYmxlJ1xufTtcbiIsIlxuLy8g0YPQvdC40LLQtdGA0YHQsNC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y8sINC/0L7QutCw0LfRi9Cy0LDRjtGJ0LDRjyDQstCw0LvQuNC00L3QvtGB0YLRjCDQuNC70Lgg0L3QtSDQstCw0LvQuNC00L3QvtGB0YLRjCDQuNC90L/Rg9GC0L7QslxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHJlc3QpID0+IHtcblxuICAvLyDQv9C10YDQtdC80LXQvdC90LDRjyDRgdC+0LbQtdGA0LbQsNGJ0LDRjyDQstCw0LvQuNC00L3QvtGB0YLRjCDQuNC90L/Rg9GC0LBcbiAgY29uc3QgaXNWYWxpZCA9IGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcblxuICBpZiAoaXNWYWxpZCkge1xuICAgIC8vINC10YHQu9C4INC40L3Qv9GD0YIg0LLQsNC70LjQtNC10L0sINGC0L4g0YHQv9GA0Y/Rh9GOINC+0YjQuNCx0LrRg1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHJlc3QpO1xuICB9IGVsc2UgaWYgKGlucHV0RWxlbWVudC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICBzaG93SW5wdXRFcnJvcihmb3JtRWxlbWVudCxcbiAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgIGlucHV0RWxlbWVudC5kYXRhc2V0LmVycm9yTWVzc2FnZSxcbiAgICAgIHJlc3QpXG4gIH0gZWxzZSB7XG4gICAgLy8g0LXRgdC70Lgg0L3QtSDQstCw0LvQuNC00LXQvSwg0YLQviDQv9C+0LrQsNC30YvQstCw0Y4g0L7RiNC40LHQutGDXG4gICAgc2hvd0lucHV0RXJyb3IoXG4gICAgICBmb3JtRWxlbWVudCxcbiAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHJlc3RcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBzaG93SW5wdXRFcnJvciA9IChcbiAgZm9ybUVsZW1lbnQsXG4gIGlucHV0RWxlbWVudCxcbiAgZXJyb3JNZXNzYWdlLFxuICB7IGlucHV0RXJyb3JDbGFzcywgZXJyb3JDbGFzcyB9XG4pID0+IHtcbiAgLy8g0LLRi9Cx0LjRgNCw0Y4g0Y3Qu9C10LzQtdC90YIg0L7RiNC40LHQutC4INC90LAg0L7RgdC90L7QstC1INGD0L3QuNC60LDQu9GM0L3QvtCz0L4g0LrQu9Cw0YHRgdCwXG4gIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgLy8g0LjQvdC/0YPRgtGDINC00L7QsdCw0LLQu9GP0Y4g0YLQuNC/INC+0YjQuNCx0LrQuFxuICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbnB1dEVycm9yQ2xhc3MpO1xuICAvLyDQvtGI0LjQsdC60LUg0L/QtdGA0LXQtNCw0Y4g0YLQtdC60YHRgiDRgdC+0L7QsdGJ0LXQvdC40Y9cbiAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAvLyDQvtGI0LjQsdC60LUg0LTQvtCx0LDQstC70Y/RjiDQutC70LDRgdGBINC+0YjQuNCx0LrQuFxuICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChlcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKFxuICBmb3JtRWxlbWVudCxcbiAgaW5wdXRFbGVtZW50LFxuICB7IGlucHV0RXJyb3JDbGFzcywgZXJyb3JDbGFzcyB9XG4pID0+IHtcbiAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICAvLyDRgyDQuNC90L/Rg9GC0LAg0YPQsdC40YDQsNGOINGC0LjQvyDQvtGI0LjQsdC60LhcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaW5wdXRFcnJvckNsYXNzKTtcbiAgLy8g0YPQsdC40YDQsNGOINGC0LXQutGB0YIg0L7RiNC40LHQutC4XG4gIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIC8vINGD0LHQuNGA0LDRjiDQutC70LDRgdGBINC+0YjQuNCx0LrQuFxuICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShlcnJvckNsYXNzKTtcbn07XG5cbi8vINGE0YPQvdC60YbQuNGPINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDRgdC+0YHRgtC+0Y/QvdC40Y8g0LrQvdC+0L/QutC4XG5jb25zdCB0b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIHN1Ym1pdEJ1dHRvbiwgaW5hY3RpdmVCdXR0b25DbGFzcykgPT4ge1xuICAvLyDQv9C10YDQtdC80LXQvdC90LDRjyDRgdC+0LTQtdGA0LbQuNGCINCyINGB0LXQsdC1INGC0L4sINGH0YLQviDQuNC80LXQtdGCINC90LXQstCw0LvQuNC00L3Ri9C5INC40L3Qv9GD0YJcbiAgLy8g0LXRgdC70Lgg0LrQsNC60L7QuS3QvdC40LHRg9C00Ywg0LjQvdC/0YPRgiDQvdC10LLQsNC70LjQtNC90YvQuSwg0LLQtdGA0L3QtdGCIHRydWUg0LzQtdGC0L7QtNC+0Lwgc29tZVxuICBjb25zdCBoYXNJbnZhbGlkSW5wdXQgPSBpbnB1dExpc3Quc29tZShcbiAgICAoaW5wdXRFbGVtZW50KSA9PiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkXG4gICk7XG5cbiAgaWYgKGhhc0ludmFsaWRJbnB1dCkge1xuICAgIC8vINC10YHQu9C4INGF0L7RgtGPINCx0Ysg0L7QtNC40L0g0LjQvdC/0YPRgiDQvdC10LLQsNC70LjQtNC90YvQuSwg0LrQvdC+0L/QutCwINC30LDQsdC70L7QutC40YDRg9C10YLRgdGPXG4gICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChpbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyDQtdGB0LvQuCDQstGB0LUg0LjQvdC/0YPRgtGLINCy0LDQu9C40LTQvdGLLCDQutC90L7Qv9C60LAg0YDQsNC30LHQu9C+0LrQuNGA0YPQtdGC0YHRj1xuICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICB9XG59O1xuXG4vLyDQvdCw0LrQu9Cw0LTRi9Cy0LDRjiDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDRhNC+0YDQvNGLXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChcbiAgZm9ybUVsZW1lbnQsXG4gIHsgaW5wdXRTZWxlY3Rvciwgc3VibWl0QnV0dG9uU2VsZWN0b3IsIGluYWN0aXZlQnV0dG9uQ2xhc3MsIC4uLnJlc3QgfVxuKSA9PiB7XG4gIC8vINC90LDRhdC+0LbRgyDRgyDRjdGC0L7QuSDRhNC+0YDQvNGLINC40L3Qv9GD0YLRiyDQuCDQutC90L7Qv9C60YMg0YHQsNCx0LzQuNGCXG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChpbnB1dFNlbGVjdG9yKSk7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAvLyDQstGL0LfRi9Cy0LDRjiDQutC90L7Qv9C60YMg0LjQt9C90LDRh9Cw0LvRjNC90L4sINC60L7RgtC+0YDQsNGPINGB0LDQvNCwINGB0LXQsdGPINC/0YDQvtCy0LXRgNC40YIsXG4gIC8vINC10YHQu9C4INC10YHRgtGMINC90LXQstCw0LvQuNC00L3Ri9C5INC40L3Qv9GD0YIsINC60L3QvtC/0LrQsCDQt9Cw0LHQu9C+0LrQuNGA0YPQtdGC0YHRj1xuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIHN1Ym1pdEJ1dHRvbiwgaW5hY3RpdmVCdXR0b25DbGFzcyk7XG5cbiAgLy8g0L3QsCDQutCw0LbQtNGL0Lkg0LjQvdC/0YPRgiDQvdCw0LLQtdGI0LjQstCw0Y4g0YHQu9GD0YjQsNGC0LXQu9GPXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAvLyDQstGL0LfRi9Cy0LDRjiDRhNGD0L3QutGG0LjRjiwg0L/RgNC+0LLQtdGA0Y/RjtGJ0YPRjiDQuNC90L/Rg9GCINC90LAg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCByZXN0KTtcbiAgICAgIC8vINCy0YvQt9GL0LLQsNGOINGE0YPQvdC60YbQuNGOINGA0LDQt9Cx0LvQvtC60LjRgNC+0LLQutC4INC60L3QvtC/0LrQuCDQv9GA0Lgg0LLQsNC70LjQtNC90L7RgdGC0Lgg0LLRgdC10YUg0LjQvdC/0YPRgtC+0LJcbiAgICAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uLCBpbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyDRhNGD0L3QutGG0LjRjyDQt9Cw0L/Rg9GB0LrQsCDQstCw0LvQuNC00LDRhtC40LhcbmNvbnN0IGVuYWJsZVZhbGlkYXRpb24gPSAoeyBmb3JtU2VsZWN0b3IsIC4uLnJlc3QgfSkgPT4ge1xuICAvLyDQvdCw0YXQvtC20YMg0LLRgdC1INGE0L7RgNC80Ysg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gIGNvbnN0IGZvcm1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGZvcm1TZWxlY3RvcikpO1xuICAvLyDQvdCwINC60LDQttC00YPRjiDRhNC+0YDQvNGDINC90LDQstC10YjQuNCy0LDRjiDRgdC70YPRiNCw0YLQtdC70Y9cbiAgZm9ybUxpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCwgcmVzdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZW5hYmxlVmFsaWRhdGlvbiB9O1xuIiwiXG5pbXBvcnQge1xuICBuYW1lSW5wdXQsXG4gIGFib3V0SW5wdXQsXG4gIG5hbWVQbGFjZUlucHV0LFxuICBsaW5rSW1hZ2VJbnB1dCxcbiAgcHJvZmlsZVRpdGxlLFxuICBwcm9maWxlU3VidGl0bGUsXG4gIHBvcHVwSW1hZ2VDb250ZW50LFxuICBwb3B1cEZpZ2NhcHRpb24sXG4gIHBvcHVwUHJvZmlsZSxcbiAgcG9wdXBQbGFjZSxcbiAgcG9wdXBJbWFnZXMsXG4gIGNhcmRzQ29udGFpbmVyLFxuICBmb3JtTmV3Q2FyZEVsZW1lbnRcbn0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jYXJkLmpzXCI7XG5cbmZ1bmN0aW9uIG9wZW5Qb3B1cChwb3B1cEVsZW1lbnQpIHtcbiAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XG4gIC8vINC90LDQstC10YjQuNCy0LDRjiDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQvdCwINC30LDQutGA0YvRgtC40LUg0L7RgtC60YDRi9GC0L7Qs9C+INC/0L7Qv9Cw0L/QsCDQv9C+INC60L3QvtC/0LrQtVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZUJ5RXNjKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cEVsZW1lbnQpIHtcbiAgcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XG4gIC8vINGD0LTQsNC70Y/RjiDQvtCx0YDQsNCx0L7RgtGH0LjQulxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZUJ5RXNjKTtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRQb3B1cCgpIHtcbiAgbmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZVRpdGxlLnRleHRDb250ZW50O1xuICBhYm91dElucHV0LnZhbHVlID0gcHJvZmlsZVN1YnRpdGxlLnRleHRDb250ZW50O1xuICBvcGVuUG9wdXAocG9wdXBQcm9maWxlKTtcbn1cblxuZnVuY3Rpb24gb3BlbkFkZFBvcHVwKCkge1xuICBvcGVuUG9wdXAocG9wdXBQbGFjZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEVkaXRGb3JtKGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgcHJvZmlsZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZUlucHV0LnZhbHVlO1xuICBwcm9maWxlU3VidGl0bGUudGV4dENvbnRlbnQgPSBhYm91dElucHV0LnZhbHVlO1xuICBjbG9zZVBvcHVwKHBvcHVwUHJvZmlsZSk7XG59XG5cbi8vINGE0YPQvdC60YbQuNGPINC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C10LpcbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEFkZEZvcm0oZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0ge1xuICAgIG5hbWU6IG5hbWVQbGFjZUlucHV0LnZhbHVlLFxuICAgIGxpbms6IGxpbmtJbWFnZUlucHV0LnZhbHVlXG4gIH07XG4gIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGRhdGEpO1xuICBjYXJkc0NvbnRhaW5lci5wcmVwZW5kKG5ld0NhcmQpO1xuICBjbG9zZVBvcHVwKHBvcHVwUGxhY2UpO1xuICBjb25zdCBidXR0b24gPSBldnQuc3VibWl0dGVyO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInBvcHVwX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiKTtcbiAgZm9ybU5ld0NhcmRFbGVtZW50LnJlc2V0KCk7XG59XG5cbi8vINGE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9CwINC60LDRgNGC0LjQvdC60LhcbmZ1bmN0aW9uIG9wZW5Qb3B1cEltYWdlcyhuYW1lLCBsaW5rKSB7XG4gIHBvcHVwSW1hZ2VDb250ZW50LnNyYyA9IGxpbms7XG4gIHBvcHVwSW1hZ2VDb250ZW50LmFsdCA9IG5hbWU7XG4gIHBvcHVwRmlnY2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gIG9wZW5Qb3B1cChwb3B1cEltYWdlcyk7XG59XG5cbi8vINGE0YPQvdC60YbQuNGPINC30LDQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9C+0LIg0L/QviDQutC70LjQutGDINC90LAg0LrQvdC+0L/QutGDIEVzY2FwZVxuZnVuY3Rpb24gY2xvc2VCeUVzYyhldnQpIHtcbiAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBjb25zdCBwb3B1cE9wZW5lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfb3BlbmVkXCIpO1xuICAgIGNsb3NlUG9wdXAocG9wdXBPcGVuZWQpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIG9wZW5FZGl0UG9wdXAsXG4gIG9wZW5BZGRQb3B1cCxcbiAgY2xvc2VQb3B1cCxcbiAgb3BlblBvcHVwSW1hZ2VzLFxuICBoYW5kbGVTdWJtaXRFZGl0Rm9ybSxcbiAgaGFuZGxlU3VibWl0QWRkRm9ybSxcbn07XG4iLCJpbXBvcnQgeyBvcGVuUG9wdXBJbWFnZXMgfSBmcm9tICcuL21vZGFsLmpzJztcblxuLy8g0YTRg9C90LrRhtC40Y8g0YHQvtC30LTQsNC90LjRjyDQutCw0YDRgtC+0YfQtdC6XG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNhcmREYXRhKSB7XG4gIGNvbnN0IHsgbGluaywgbmFtZSB9ID0gY2FyZERhdGE7XG5cbiAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlX19lbGVtZW50cycpLmNvbnRlbnQ7XG4gIGNvbnN0IG5ld0NhcmRFbGVtZW50ID0gdGVtcGxhdGVFbGVtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmRcIilcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIG5ld0NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmQtdGV4dFwiKS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGNvbnN0IGNhcmRJbWFnZUVsZW1lbnQgPSBuZXdDYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmVsZW1lbnRzX19jYXJkLWltYWdlXCJcbiAgKTtcblxuICBjYXJkSW1hZ2VFbGVtZW50LnNyYyA9IGxpbms7XG4gIGNhcmRJbWFnZUVsZW1lbnQuYWx0ID0gbmFtZTtcbiAgY2FyZEltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Qb3B1cEltYWdlcyhuYW1lLCBsaW5rKTtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uTGlrZSA9IG5ld0NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2xpa2UtYnV0dG9uXCIpO1xuXG4gIGJ1dHRvbkxpa2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXR0b25MaWtlLmNsYXNzTGlzdC50b2dnbGUoXCJlbGVtZW50c19fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICB9KTtcblxuICBjb25zdCBjYXJkRGVsZXRlQnV0dG9uID0gbmV3Q2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5lbGVtZW50c19fZGVsZXRlLWJ1dHRvblwiXG4gICk7XG5cbiAgY2FyZERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGV2dC50YXJnZXQuY2xvc2VzdChcIi5lbGVtZW50c19fY2FyZFwiKTtcblxuICAgIGNhcmRFbGVtZW50cy5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0NhcmRFbGVtZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVDYXJkIH07XG4iLCJpbXBvcnQge1xuICBwcm9maWxlRWRpdEJ1dHRvbixcbiAgcHJvZmlsZUFkZEJ1dHRvbixcbiAgcG9wdXBCdXR0b25DbG9zZUxpc3QsXG4gIGZvcm1FZGl0RWxlbWVudCxcbiAgZm9ybU5ld0NhcmRFbGVtZW50LFxuICBwb3B1cEVsZW1lbnRMaXN0LFxuICBjYXJkc0NvbnRhaW5lcixcbiAgdmFsaWRhdGlvbkNvbmZpZyxcbiAgaW5pdGlhbENhcmRzXG59IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBlbmFibGVWYWxpZGF0aW9uIH0gZnJvbSBcIi4vdmFsaWRhdGUuanNcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2NhcmQuanNcIjtcbmltcG9ydCB7IG9wZW5FZGl0UG9wdXAsXG4gIG9wZW5BZGRQb3B1cCxcbiAgY2xvc2VQb3B1cCxcbiAgaGFuZGxlU3VibWl0RWRpdEZvcm0sXG4gIGhhbmRsZVN1Ym1pdEFkZEZvcm0sXG59IGZyb20gJy4vbW9kYWwuanMnO1xuXG5pbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcblxuaW5pdGlhbENhcmRzLmZvckVhY2goKGRhdGEpID0+IHtcbiAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSk7XG4gIGNhcmRzQ29udGFpbmVyLnByZXBlbmQobmV3Q2FyZCk7XG59KTtcblxuLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQvdCwINC+0YLQutGA0YvRgtC40LUg0L/QvtC/0LDQv9C+0LJcbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdFBvcHVwKTtcbnByb2ZpbGVBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5BZGRQb3B1cCk7XG5cbi8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0L3QsCDRgdCw0LHQvNC40YLQvdGL0LUg0LrQvdC+0L/QutC4XG5mb3JtRWRpdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXRFZGl0Rm9ybSk7XG5mb3JtTmV3Q2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXRBZGRGb3JtKTtcblxuLy8g0L7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDQt9Cw0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QvtCyINC/0L4g0LrQu9C40LrRgyDQvNGL0YjQuCDQvdCwINC60YDQtdGB0YLQuNC6XG5cbnBvcHVwQnV0dG9uQ2xvc2VMaXN0LmZvckVhY2goKGJ0bikgPT4ge1xuICBjb25zdCBwb3B1cCA9IGJ0bi5jbG9zZXN0KFwiLnBvcHVwXCIpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAocG9wdXApKTtcbn0pO1xuXG4vLyDQv9C10YDQtdCx0LjRgNCw0Y4g0LrQvtC70LvQtdC60YbQuNGOINC80LDRgdGB0LjQstCwINC/0L7Qv9Cw0L/QvtCyINC80LXRgtC+0LTQvtC8IGZvckVhY2hcbnBvcHVwRWxlbWVudExpc3QuZm9yRWFjaCgocG9wdXBFbGVtZW50KSA9PiB7XG4gIC8vINC90LDQstC10YjQuNCy0LDRjiDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQvdCwINC30LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9C+0LIg0L/QviDQutC70LjQutGDINC90LAg0L7QstC10YDQu9GN0LlcbiAgcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX292ZXJsYXlcIikpIHtcbiAgICAgIGNsb3NlUG9wdXAocG9wdXBFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vINCy0YvQt9GL0LLQsNGOINGE0YPQvdC60YbQuNGOINCy0LDQu9C40LTQsNGG0LjQuFxuZW5hYmxlVmFsaWRhdGlvbih2YWxpZGF0aW9uQ29uZmlnKTtcbiJdLCJuYW1lcyI6WyJwb3B1cFByb2ZpbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cFBsYWNlIiwicG9wdXBJbWFnZXMiLCJwb3B1cEF2YXRhciIsInBvcHVwRGVsZXRlQ29uZmlybSIsInByb2ZpbGVFZGl0QnV0dG9uIiwicHJvZmlsZUFkZEJ1dHRvbiIsInBvcHVwQnV0dG9uQ2xvc2VMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm1FZGl0RWxlbWVudCIsIm5hbWVJbnB1dCIsImFib3V0SW5wdXQiLCJwcm9maWxlVGl0bGUiLCJwcm9maWxlU3VidGl0bGUiLCJmb3JtTmV3Q2FyZEVsZW1lbnQiLCJuYW1lUGxhY2VJbnB1dCIsImxpbmtJbWFnZUlucHV0IiwicG9wdXBJbWFnZUNvbnRlbnQiLCJwb3B1cEZpZ2NhcHRpb24iLCJwb3B1cEVsZW1lbnRMaXN0IiwiQXJyYXkiLCJmcm9tIiwiY2FyZHNDb250YWluZXIiLCJfcmVmNCIsImZvcm1TZWxlY3RvciIsInJlc3QiLCJzaG93SW5wdXRFcnJvciIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiX3JlZiIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJlcnJvckVsZW1lbnQiLCJjb25jYXQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJzdWJtaXRCdXR0b24iLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJkaXNhYmxlZCIsInJlbW92ZSIsIm9wZW5Qb3B1cCIsInBvcHVwRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZUJ5RXNjIiwiY2xvc2VQb3B1cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXkiLCJjcmVhdGVDYXJkIiwiY2FyZERhdGEiLCJsaW5rIiwibmFtZSIsIm5ld0NhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmRJbWFnZUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJvcGVuUG9wdXBJbWFnZXMiLCJidXR0b25MaWtlIiwidG9nZ2xlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImZvckVhY2giLCJkYXRhIiwibmV3Q2FyZCIsInByZXBlbmQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwic3VibWl0dGVyIiwicmVzZXQiLCJidG4iLCJwb3B1cCIsImNvbnRhaW5zIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX3JlZjMiLCJfZXhjbHVkZWQiLCJfcmVmMiIsImhpZGVJbnB1dEVycm9yIiwicGF0dGVybk1pc21hdGNoIiwiZGF0YXNldCIsInZhbGlkYXRpb25NZXNzYWdlIiwiY2hlY2tJbnB1dFZhbGlkaXR5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9