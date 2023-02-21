const USERNAMES_LIST = document.getElementById('userNamesList');
function getAllUsers(data) {
  data.forEach(user => {
    USERNAMES_LIST.innerHTML += `<div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ${user.name}
            </button>
          </h2>
          <div id="flush-collapse" class="accordion-collapse collapse formato" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the first item's accordion body.
            </div>
          </div>
        </div>`
  });

}