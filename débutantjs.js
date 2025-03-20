
let html=document.getElementById('html')
let css=document.getElementById('css')
let js=document.getElementById('js')
let react=document.getElementById('react')



js.classList.add('orange')
css.onmouseenter=function(){
    css.classList.add('orange')
    js.classList.remove('orange')
    html.classList.remove('orange')
    react.classList.remove('orange')
}
html.onmouseenter=function(){
    html.classList.add('orange')
    css.classList.remove('orange')
    js.classList.remove('orange')
    react.classList.remove('orange')
}   
react.onmouseenter=function(){
    react.classList.add('orange')
    css.classList.remove('orange')
    html.classList.remove('orange')
    js.classList.remove('orange')

}   
css.onmouseleave=function(){
    css.classList.remove('orange')
    js.classList.add('orange')
    html.classList.remove('orange')
    react.classList.remove('orange')
}
html.onmouseleave=function(){
    react.classList.remove('orange')
    js.classList.add('orange')
    css.classList.remove('orange')
    html.classList.remove('orange')
}
react.onmouseleave=function(){
    html.classList.remove('orange')
    js.classList.add('orange')
    css.classList.remove('orange')
    react.classList.remove('orange')
}
// let niveau=document.getElementById('niveau')
// niveau.onchange=function(){
//     let valeur=niveau.value
//     window.location.href=valeur
// }

let container_1 = document.getElementById('conatainer');
// let container_2 = document.getElementById('conatiner_2');
// let container_3 = document.getElementById('container_3');
// let niveau = document.getElementById('niveau');

// niveau.onchange = function() {
// let valeur = niveau.value;
// if (valeur === 'Débutant') {
//     window.location.href='index.html'
// } else if (valeur === 'intermediat') {
//     container_1.innerHTML = '';
//     container_2.classList.remove('disactiver');
//     container_3.innerHTML='';
// } else if (valeur === 'professional') {
//     container_1.innerHTML = '';
//     container_2.innerHTML = '';
//     container_3.classList.remove('disactiver');

// } else {
//     window.location.href = valeur;
// }
// } 

let reponsvrai = 0;
let reponsfaux=0;
let conteur=0;

let re= document.querySelectorAll('.r')

re.forEach(function(button) {
    button.onclick = function() {

        if (this.classList.contains('correct')) {    
            button.style.backgroundColor='green'
            
            conteur++;
            reponsvrai++;
        } else if(this.classList.contains('false')) {
            button.style.backgroundColor='red'
            
            reponsfaux++;
            conteur++
            

        }
        // re.forEach(function(btn) {
        //     btn.disabled = true;
        // });


        let parent = this.parentElement; //pour recupier le parent des element fils
        let buttons = parent.querySelectorAll('.r');
        buttons.forEach(function(btn) {
            btn.disabled = true;
            });
            // Scroll to the next question and center it in the viewport
            let nextQuestion = parent.parentElement.nextElementSibling;
            if (nextQuestion) {
                nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }


        console.log('Nombre de réponses correctes: ' + reponsvrai + '/8' ) ;
        console.log('Nombre de réponses false: ' + reponsfaux + '/8' ) ;
        console.log(conteur);
        fin();
    };
});





function fin() {
    if (conteur == 8) {
        let result = document.createElement('button');
        result.id = 'result';  
        container_1.innerHTML = '' 
        result.innerHTML = ` VOUS AVEZ  (${reponsvrai}) REPONS VRAI`;  
        container_1.appendChild(result);  

        //button pour recomoncer
        let rede=document.createElement('button');
        rede.id='recmoncer';
        rede.innerHTML='redemarer'
        
        rede.onclick=function(){
            location.reload();
        }
        container_1.appendChild(rede)
    }
}

//nav bar des nivos 
let nav_nivo=document.getElementById('nav_nivo');


//function pour l'apparatre de nav bar nivo

let n=document.getElementById('logo');

n.onclick = function() {
    if (n.src.includes('menu-deroulant.png')) {
        nav_nivo.classList.remove('disactiver');
        nav_nivo.style.transition = 'all 2s ease-in-out';
        n.src = 'foto/effacer.png';
    } else {
        nav_nivo.classList.add('disactiver');
        nav_nivo.style.transition = 'all 2s ease in out';
        n.src = 'foto/menu-deroulant.png';
    }
}