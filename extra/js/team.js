const team =[
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        image :'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        image :'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        image :'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        image :'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        image :'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        image :'barbara-ramos-graphic-designer.jpg'
    },
]
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto (in questo fase usiamo il ciclo for…in )
for ( let key in team){
    console.log(team[key])
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
const imageElement = document.getElementById('image')
console.log(imageElement)
const nameElement = document.getElementById('name')
const jobElement = document.getElementById('job')

const cardEl = document.querySelector('.row')
for (let i = 0; i < team.length; i++) {
	const currentWorker = team[i]
	const name =currentWorker.name
    console.log(name)
	const job =currentWorker.job
	const image =currentWorker.image
	console.log(name, job, image)
    const card = `
    <div class="col-4 ">
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text"> ${name}</p>
            <p class="card-text"> ${job}</p>
        </div>
    </div>
</div>
    `
    cardEl.innerHTML += card
}
