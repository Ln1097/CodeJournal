const photoUrl=document.getElementById("photolink")
const img=document.getElementById("img")
photoUrl.addEventListener('input',function(event){
  img.setAttribute('src',event.target)
});

const form=document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault()
  const input={
    notes: event.target.elements.notesrow.value,
    title: event.target.elements.titlerow.value,
    photoUrl: event.target.elements.photorow.value
  };
  input.entryId=data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(input)
  img.setAttribute('src', "./images/placeholder-image-square.jpg")
  form.reset()
})
