/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
window.addEventListener('beforeunload',(event)=>{
  const dataJSON=JSON.stringify(data)
  localStorage.setItem('data',dataJSON)
});

const storedData=localStorage.getItem('data');
if(storedData!==null){
  data=JSON.parse(storedData);
}
