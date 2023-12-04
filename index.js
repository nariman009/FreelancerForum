const spanCount = document.querySelector('#spanCount');
const spanAverageCount = document.querySelector('#spanAverageCount');
const ul = document.querySelector('ul');


const freelancers = [
    { name: 'Sam', occupation: 'Developer', price: 65},
    { name: 'Tom', occupation: 'Programmer', price: 55},
];

const names = ['Sam', 'Tom', 'Joe', 'Kim', 'Pil'];
const occupations = ['Developer', 'Programmer', 'Tester', 'Designer'];

function render(){
    spanCount.innerHTML = freelancers.length;

    const average = freelancers.reduce((acc, item) => (acc + item.price), 0)/freelancers.length;
    spanAverageCount.innerHTML = average.toFixed(2);

    const html = freelancers.map((freelancer)=>{
        return `
            <li>${freelancer.name} is a freelance ${freelancer.occupation } who charges $${freelancer.price} per hour.</li>
        `
    }).join("");
    ul.innerHTML = html;
}

const interval = setInterval(()=>{
    // const nameIndex = Math.floor(Math.random()*names.length) ;
    const name = names[(Math.floor(Math.random() * names.length))]
    const occupation = occupations[(Math.floor(Math.random() * occupations.length))]
    const price = Math.floor((Math.random()+0.7)*10)*5

    const randomFreelancer = {
        name: name,
        occupation: occupation,
        price: price
    };
    freelancers.push(randomFreelancer);
    render();
    if(freelancers.length === 15) {
        clearInterval(interval);
    };
}, 1000)