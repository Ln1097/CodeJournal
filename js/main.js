const photoUrl=document.getElementById("photolink")
const img=document.getElementById("img")
photoUrl.addEventListener('input',function(event){
  img.setAttribute('src',event.target)
});

const form=document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault()
  const input={
    notes:form.notes,
    title:form.title,
    photoUrl:form.PhotoURL
  };
  input.entryId=data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(input)
  img.setAttribute('src', "./images/placeholder-image-square.jpg")
  form.reset()
})
