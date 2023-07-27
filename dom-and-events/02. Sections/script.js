function create(words) {
   const pageContent = document.querySelector('#content');
   const wordsArray = words;
   const fragment = document.createDocumentFragment(); // Create a document fragment

   for (let index = 0; index < wordsArray.length; index++) {
     const element = wordsArray[index];
     const div = document.createElement('div');
     div.id = element.split(' ').join('');
     div.innerHTML = `<p style="display:none;">${element}</p>`;

     div.addEventListener('click', () => {
       const paragraphs = div.getElementsByTagName('p');
       for (let i = 0; i < paragraphs.length; i++) {
         paragraphs[i].style.display = 'block';
       }
     }, true);

     fragment.appendChild(div); // Append each div to the fragment
   }

   pageContent.appendChild(fragment); // Append the fragment to the pageContent
 }
