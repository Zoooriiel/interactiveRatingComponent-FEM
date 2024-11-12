const ratingButtons = document.querySelectorAll(".button")
const submitButton = document.querySelector("#submit-button")


ratingButtons.forEach(button => {

     button.addEventListener("click", () => {

        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        const rating = button.getAttribute('rating-value');
        localStorage.setItem('selectedRating', rating)



         if (submitButton.classList.contains('inactive')){
             submitButton.classList.replace('inactive', 'active');

             submitButton.classList.add('selected');

             submitButton.addEventListener('click', () => {
                 window.location.href = `thank-you.html`;
             })
            
              }
            else{
             submitButton.classList.replace('active', 'inactive')
            }
        });
      
     });

     if (window.location.pathname === 'thank-you.html') {
        const selectionText = document.getElementById('selection-text');
      
        // Retrieve the rating from localStorage
        const storedRating = localStorage.getItem('selectedRating');
        
        if (storedRating) {
          selectionText.textContent = `You selected ${storedRating} out of 5`;
          
        }
      }


