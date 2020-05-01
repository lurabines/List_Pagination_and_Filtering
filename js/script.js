/******************************************
List Filter and Pagination
******************************************/

/**
 * Variables
 * @studentList {Select the list of all the students by class name '.student-item'}
 * @contactsPerPage {number}
 */
let studentList = document.querySelectorAll('.student-item');
let contactsPerPage = 10;


   /*
   Loop over items in the list parameter
   -- If the index of a list item is >= the index of the first
   item that should be shown on the page
   -- && the list item index is <= the index of the last item
   that should be shown on the page, show it
   */
  function showPage(list, page) {

   const startIndex = (page * contactsPerPage) - contactsPerPage;
   const endIndex = (page * contactsPerPage);

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList[i].style.display = 'block';
      } else {
         studentList[i].style.display = 'none';
      }
   }

   return false;
}  



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {
   
   const listLength = list.length;

   const numOfPages = Math.ceil(listLength / contactsPerPage);

   const divPagination = document.createElement('div');
   divPagination.className = "pagination";

   const ulPagination = document.createElement('ul');

   divPagination.appendChild(ulPagination);
   const mainpageDiv = document.querySelector('.page');
   mainpageDiv.appendChild(divPagination);   

   for (let i = 0; i < numOfPages; i++) {
      if (i < numOfPages) {
         let li = document.createElement("li");
         let a = document.createElement("a");
         a.href = "#";
         a.textContent = i + 1;

         a.addEventListener('click', function(){
            showPage(list, i+1);
         });         

         li.appendChild(a);
         ulPagination.appendChild(li);
      } 
   }
}


function createSearchBar() {
   const studentSeachDiv = document.createElement('div');
   studentSeachDiv.className = 'student-search';

   const studentSearchInput = document.createElement('input');
   studentSearchInput.placeholder = 'Search for students...';
   studentSearchInput.addEventListener('keyup', searchList);
   studentSeachDiv.appendChild(studentSearchInput);
   const studentSearchButton = document.createElement('button');
   studentSearchButton.addEventListener('click', function () {
      searchList();
   })
   studentSearchButton.textContent = 'Search';
   studentSeachDiv.appendChild(studentSearchButton);

   document.querySelector('.page-header').appendChild(studentSeachDiv);
}

function searchList() {
   let currentInput = document.querySelector('input').value;
   currentInput = currentInput.toLowerCase();
   // console.log(currentInput);
   for (let i = 0; i < studentList.length - 1; i++) {
      let thisProfile = document.querySelectorAll('.student-item')[i];
      let thisName = document.querySelectorAll('.student-item h3')[i];
      let txtValue = thisName.innerText;
      txtValue = txtValue.toLowerCase();
      if (txtValue.indexOf(currentInput) > -1) {
         thisProfile.style.display = '';
         // console.log(txtValue);
      } else {
         thisProfile.style.display = 'none';
      }

   }
   
}



createSearchBar();




showPage(studentList, 1);
appendPageLinks(studentList);
