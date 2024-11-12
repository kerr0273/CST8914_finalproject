//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

    document.addEventListener('DOMContentLoaded', () => {
     
        const content = document.getElementById('app');
      
        // Load Page 1 initially
        loadPage('page1');
      
        // Event listeners for navigation
        document.getElementById('page1-link').addEventListener('click', (e) => {
          e.preventDefault();
          loadPage('page1');
        });
        document.getElementById('page2-link').addEventListener('click', (e) => {
          e.preventDefault();
          loadPage('page2');
        });
        document.getElementById('form-page-link').addEventListener('click', (e) => {
          e.preventDefault();
          loadPage('form');
        });
      
        function loadPage(page) {
          content.innerHTML = '';  // Clear current content
      
          switch (page) {
            case 'page1':
              content.innerHTML = `<h2>Information Page 1</h2><p>This is the content of Page 1.</p>`;
              document.getElementById('page1-link').setAttribute('aria-current', 'page');
              break;
      
            case 'page2':
              content.innerHTML = `<h2>Information Page 2</h2><p>This is the content of Page 2.</p>`;
              document.getElementById('page2-link').setAttribute('aria-current', 'page');
              break;
      
            case 'form':
              content.innerHTML = `
                <h2>Form Page</h2>
                <form aria-label="Sample Form">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required aria-required="true">
                  <br>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required aria-required="true">
                  <br>
                  <button type="submit">Submit</button>
                </form>
              `;
              document.getElementById('form-page-link').setAttribute('aria-current', 'page');
              break;
          }
      
          // Reset aria-current attribute on non-active links
          document.querySelectorAll('nav a').forEach((link) => {
            if (link.id !== `${page}-link`) link.removeAttribute('aria-current');
          });
      
          // Move focus to the main content for screen readers
          content.focus();
        }
      });


}





knowledgeRunner()