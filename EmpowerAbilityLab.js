function showLightbox(){
  document.getElementById("lightboxmodal").style.display = "block";
  //document.getElementById("dialoglabel").focus();
  document.getElementById("dialoglabel").tabIndex = "-1";
  //document.getElementById("dialoglabel").trigger('focus');
  document.getElementById("dialoglabel").setAttribute("aria-hidden","false");

}


// Close the Modal
function closeModal() {
  document.getElementById("lightboxmodal").style.display = "none";
}
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
          var liveRegion = document.getElementById("live-title");
          switch (page) {
            case 'page1':        
              document.title = "Home Page";             
              liveRegion.textContent = `Navigated to Home page.`;
              document.getElementById("page1-link").ariaPressed = "true";
              content.innerHTML = `     
                  <h2 id="page1heading">Welcome to Empower Ability Labs! </h2>
                  <p>Empower Ability Labs is a hub for learning and empathy-building.  We are on a mission to foster understanding and 
                  promote inclusive digital experiences for all. We offer a range of services designed to promote 
                  accessibility awareness, drive inclusivity, and enhance the user experience. And help you find 
                  answers on How do people with disabilities use technology and navigate the digital world? What tools do 
                  they employ? 
                  </p>
                  <p>
                    <button type="button" onclick="showLightbox()">Meet the Empower Community!</button>
                  </p>
                  <p>
                    <a href="#">Instruction for “Meet the Empower Community!</a>
                  </p> 
                 
                  <p>Instruction for Learn more links: </p>
                  <div class="row">
                    <div class="threecollayout">
                      <article class="column">
                      <h3>Our approach</h3>  
                      <p>Empower Ability Labs utilizes a hands-on approach to raise awareness and promote empathy. 
                      Our immersive workshops and lab days provide participants with a unique opportunity to 
                      step into the shoes of individuals with disabilities and navigate the world from their 
                      perspective.</p>
                      Learn more goes to </p>
                      <p><a href='#'>Learn more</a></p>
                      </article>

                      <article class="column">
                      <h3>Services</h3>
                      <p>Promote accessibility awareness and enhance the user experience.</p>
                      <ul>
                        <li>Empathy lab days and workshops</li>
                        <li>Go beyond WCAG compliance!</li
                        <li>Inspirational speakers.</li>
                      </ul>
                      <p><a href='#'>Learn more</a></p>
                      </article>
                      <article class="column">
                      <h3>Testimonials</h3>
                      <p>Invite a speaker with disabilities to share their unique journey. This captivating addition to your upcoming event will 
                      offer insights that resonate,  inspire, educate, and enrich your team’s understanding of inclusion.</p>
                      <p><a href='#'>Learn more</a></p>
                      </article>
                    </div>
                  </div>
                  <div class="row"></div>

                  <div role="dialog" 
                       class="modal" 
                       id="lightboxmodal"
                      aria-labelledby="dialoglabel"
                      aria-model="true"
                      >

                    <h3 id="dialoglabel">Community Steering Committee </h3>
                    <button type="button" class="close" onclick="closeModal()" aria-label="Close">
                      <span aria-hidden="true">Close</span>
                    </button>
                    <p>We get an aha! moments from product managers who try our services for the first time. We offered many lab days, workshops and offered usability testing services to many companies and organizations including:</p>
                    <ul>
                    <li>McGill University </li>
                    <li>Walmart.ca</li>
                    <li>Apple.ca</li>
                    <li>Google.ca</li>
                    <li>Government of Canada</li>
                    
                  </div>`;


                  document.getElementById('page1-link').setAttribute('aria-current', 'Home page title page');
                  document.getElementById('page1heading').tabIndex = "-1";
                
              break;
      
            case 'page2':
              liveRegion.textContent = `Navigated to Services page.`;
              document.title = "Services";
              //document.title.focus();
              content.innerHTML = `
                                  <h2>Services content architecture</h2>
                                  <p>Dedicated space or programs designed to cultivate empathy and understanding among individuals 
                                      towards the challenges faced by people with disabilities in using technology and interacting with 
                                      various environments.
                                  </p>
                                  <h3>Empathy Lab days and workshops </h3>
                                  <p>The lab days and workshops typically provide hands-on experiences, simulations, and interactions 
                                      with assistive technologies, tools, and scenarios that replicate the obstacles individuals with 
                                      disabilities encounter daily.
                                  </p>
                                  <h3>Inspirational speakers</h3>
                                  <p>Invite a speaker with disabilities to take share their unique journey. This captivating addition 
                                     to your upcoming event will offer insights that resonate, inspire, educate, and enrich your team 
                                     collective understanding of inclusion. 
                                  </p>
                                  <h3>Usability testing</h3>
                                  <p>Go beyond WCAG! Involve individuals with disabilities in usability testing to gather valuable 
                                  insights for refining product strategy and identifying accessibility concerns at an early stage when 
                                  solutions are more feasible and cost-effective. You have access to a diverse community of people 
                                  with disabilities, who use various assistive technologies. With technical expertise 
                                  ranging from novice to expert, our community can support your product lifecycle from user research, 
                                  to design, to QA.
                                  </p>
                                  `;
              document.getElementById('page2-link').setAttribute('aria-current', 'page');
              break;
      
            case 'form':
              liveRegion.textContent = `Navigated to Schedule a call page.`;

              document.title = "Schedule a call";
              //document.title.focus();
              content.innerHTML = `
                <h2>Schedule a call</h2>
                <p>At Empower Ability Labs, we are dedicated to cultivating empathy and driving positive change through immersive 
                   experiences.  Fill out the form below and we’ll get back to you as soon as we can to schedule a call with our 
                   sales team!
                </p>
                
                <form aria-label="Sample Form">
                  <label for="name">Business Name:</label>
                  <input type="text" id="busname" name="busname" required aria-required="true">
                  <br>
                  <label for="phone">Phone number (613-123-1234):</label>
                  <input type="phone" id="phone" name="phone" required aria-required="true">
                  <br>
                  <label for="email">Email: (required)</label>
                  <input type="email" id="email" name="email" required aria-required="true">
                  <br>
                  <fieldset>
                  <legend>What would you like to talk about:</legend>
                    <div>
                      <input type="checkbox" name="workshop" id="check_workshop">
                      <label for="check_workshop">Awareness lab days  and workshops</label>
                      <br>
                      <input type="checkbox" name="invite" id="check_invite">
                      <label for="check_invite">Invite a speaker with disabilities to your event</label>
                      <br>
                      <input type="checkbox" name="testing" id="check_testing">
                      <label for="check_testing">Usability testing</label>
                    </div>
                  </fieldset>
                  <div>
                  <label for="txtboxMultiline">Please tell us about your event </label>
                  <textarea id="txtboxMultiline" required></textarea>
            
                  </div>
                  <label class="switch">
                      <input type="checkbox" id="toggle-switch" onchange="toggleSwitch(this)">
                      <span class="slider"></span>
                  </label>
                <p>Receive emails about updates and services  
                Instruction on the icon : 
                This is a switch interactive element. Choose an image  and use it.</p>
                <p>Schedule a call 
                Instruction for “Schedule a call” : 
                This is a submit interactive element. Activating the Submit displays a thank you message or error messages.</p>
                  <button type="submit">Submit</button>
                </form>
               
                <p> </p>
                <p></p>
                <p>Email: (required)</p>
                <p>What would you like to talk about: </p>
                <p>Awareness lab days  and workshops</p>
                <p>Invite a speaker with disabilities to your event</p>
                <p>Usability testing </p>
                <p>Please tell us about your event 
                Instruction for “Please tell us about your event”: 
                This interactive text area element appears only when “invite a speaker to your event” checkbox is selected)</p>
                <p>Receive emails about updates and services  
                Instruction on the icon : 
                This is a switch interactive element. Choose an image  and use it.</p>
                <button onclick="scheduleCall()">Schedule a call</button> 
                Instruction for “Schedule a call” : 
                This is a submit interactive element. Activating the Submit displays a thank you message or error messages.</p>
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


function toggleSwitch(thingy){
  if(thingy.checked){
    console.log("Switch is ON");
  } else {
    console.log("Switch is OFF");
  }
}
function scheduleCall(){
  alert("Call was scheduled");
}






knowledgeRunner()

