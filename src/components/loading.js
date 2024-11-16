export const buttonLoading = (evt, status) => {
   evt.submitter.textContent =  status ? "Сохранение..." : "Сохранить";
}