function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.querySelector('#searchField')
      const tables = document.querySelectorAll('tbody tr')
      tables.forEach(row => {
         let result=[];
         row.classList.remove("select")
         for (const element of row.querySelectorAll('td')) {
            
            if (element.textContent.includes(searchField.value) ) {
            
               result.push(row)
               
            }
         }
         
         for (const element of result){
            element.classList.add("select");

         };
         
      });
      searchField.value = ''
      
   }
}