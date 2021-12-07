var gProj = [
  {
    id: '1',
    name: 'pacman',
    title: 'Better eat those ghost',
    desc: 'this game is one of my very first project, i hope you enjoy playing it ',
    // URL: './projs/pacman/index.html,
    imgSrc: 'img/pacman.png',
    publishedAt: Date.now(),
    labels: 'Matrixes',
  },
  {
    id: '2',
    name: 'touchNums',
    title: 'would you gonna be fast enough ',
    desc: 'this game is one of my very first project, i hope you enjoy playing it ',
    imgSrc: 'img/touchTheNum.png',
    publishedAt: Date.now(),
    labels: 'Matrixes',
  },
  {
    id: '3',
    name: 'bookStore',
    title: 'reading makes you smarter',
    desc: 'this game is one of my very first project, i hope you enjoy playing it ',
    imgSrc: 'img/bookStore.png',
    publishedAt: Date.now(),
    labels: 'Matrixes',
  },
];

renderProjects();
function renderProjects() {
  var HTMLsStr = gProj.map((project) => {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item" >
          <a  onclick="renderModal('${project.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal">
          <div class="portfolio-hover">
          <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
          </div>
          </div>
          <img class="img-fluid" src="${project.imgSrc}" >
          </a>
         
          <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>

          </div>
         </div>`;
  });
  document.querySelector('.projects').innerHTML = HTMLsStr.join(' ');
}

function renderModal(id) {
  console.log(id);

  var project = gProj.find((proj) => {
    return proj.id === id;
  });
  console.log(project);
  var HTMLsStr = `<h2>${project.name}</h2>
  <p class="item-intro text-muted">${project.title}</p>
  <img class="img-fluid d-block mx-auto" src="${project.imgSrc}" alt="">
  <a href="/projs/${project.name}">project</a>
  <p>${project.desc}</p>
  <ul class="list-inline">
    <li>Date:${project.publishedAt} </li>
   
    <li>Category: ${project.labels}</li>
  </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>`;
  console.log(document.querySelector('.modal-body'));

  $('.modal-body').html(HTMLsStr);
}

function sendMail() {
  let email = $('.email').val();
  let subject = $('.subject').val();
  let text = $('.txt').val();

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${text}`
  );
}
