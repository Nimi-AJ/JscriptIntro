




let showPopUp = function () {
    document.querySelector('.modal_wrapper').style.display = 'flex';
    }
    document.getElementById('addNote').addEventListener('click', showPopUp);
    
    
    let closePopUp = function () {	document.querySelector('.modal_wrapper').style.display = 'none';
    }
    document.getElementById('modal_close').addEventListener('click', closePopUp);
    
    let inputNote1 = document.querySelector('.text1');
    let inputNote2 = document.querySelector('.text2');
    
    
    
    //Event listener for newNote Function
    document.getElementById('btn_2').addEventListener('click', newNote);
    
    
    let list = [];
    let listOfArticles = document.querySelector("notes_wrapper");
    let count = document.querySelector('.count');
    
    //Function that takes in text as input
         
    function newNote(note1, note2) {
        note1 = inputNote1.value;
      note2 = inputNote2.value;
        let article = `<article class="specialone">
                      <h2>$[note1]<h2>
                                    <br></br>
                      <p>$[note2]</p>
                                    </article>`;
        
    
    list.push(article);
    numberofNotes = list.length + 2;
    
    let position = "afterbegin";
    listOfArticles.insertAdjacentHTML(position, article);
    count.innerHTML = `<p> You have ${numberOfNotes} notes</p>`;
    
    }
     
    
    
    
    
    