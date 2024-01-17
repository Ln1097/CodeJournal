/* eslint-disable no-console */

const photoUrl = document.getElementById('photolink');
const img = document.getElementById('img');
photoUrl.addEventListener('input', function (event) {
  img.setAttribute('src', event.target);
});

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = {
    notes: event.target.elements.notesrow.value,
    title: event.target.elements.titlerow.value,
    photoUrl: event.target.elements.photorow.value,
  };
  input.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(input);
  img.setAttribute('src', './images/placeholder-image-square.jpg');
  form.reset();
  form.renderEntry();
  ul.prepend(renderEntry);
  viewSwap(dataEntriesView);
  toggleNoEntries();
});

function renderEntry(entry) {
  const list = document.createElement('li');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  list.appendChild(row);

  const image1 = document.createElement('img');
  image1.setAttribute(
    'src',
    'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg'
  );
  list.appendChild(image1);

  const head1 = document.createElement('h1');
  head1.textContent = 'A valley';
  list.appendChild(head1);

  const p1 = document.createElement('p');
  p1.textContent = 'A Golden Valley';
  list.appendChild(p1);

  const image2 = document.createElement('img');
  image2.setAttribute(
    'src',
    'https://cdn.mos.cms.futurecdn.net/ohsXtgy8Hmi9PzDNpKhJ5N.jpg'
  );
  list.appendChild(image2);

  const head2 = document.createElement('h1');
  head2.textContent = 'A waterfall';
  list.appendChild(head2);

  const p2 = document.createElement('p');
  p2.textContent = 'A flowing waterfall';
  list.appendChild(p2);

  const image3 = document.createElement('img');
  image3.setAttribute(
    'src',
    'https://tse1.mm.bing.net/th?id=OIP.JD-YqdMdFAuxI-VmJHAxBgHaEK&pid=Api&P=0&h=220'
  );
  list.appendChild(image3);

  const head3 = document.createElement('h1');
  head3.textContent = 'The Ocean';
  list.appendChild(head3);

  const p3 = document.createElement('p');
  p3.textContent = 'A vast Ocean';
  list.appendChild(p3);

  return list;
}
const ul = document.querySelector('ul');

window.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    ul.appendChild(renderEntry(data.entries[i]));
  }
  form.reset(viewSwap());
  toggleNoEntries();
});

const noEntries = document.querySelector('.noEntries');

function toggleNoEntries() {
  if (data.entries.length > 0) {
    noEntries.classList.add('hidden');
  } else {
    noEntries.classList.remove('hidden');
  }
}

const dataEntriesView = document.querySelector('[data-view="entries"]');
const dataEntryForm = document.querySelector('[data-view="entry-form"]');
function viewSwap(view) {
  if (view === 'entries') {
    dataEntriesView.className = 'entries';
    dataEntryForm.className = 'hidden';
  } else if (view === 'entry-form') {
    dataEntryForm.className = 'entry-form';
    dataEntriesView.className = 'hidden';
  }
}

const anchor = document.querySelector('.entriesView');
const button = document.querySelector('.button');

anchor.addEventListener('click', function (event) {
  viewSwap(dataEntriesView);
});

button.addEventListener('click', function handleClick(event) {
  viewSwap(dataEntryForm);
});
