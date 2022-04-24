// const TypeWriter =function(txtElement, words, wait= 3000){
//     this.txtElement= txtElement;
//     this.words=words;
//     this.txt= '';
//     this.wordIndex= 0;
//     this.wait=parseInt(wait,10);
//     this.type();
//     this.isDeleting=false;

// }
// //type method
// TypeWriter.prototype.type =function()
// {   //index of word
//     const current= this.wordIndex % this.words.length;
//     //get full txt of current word print first word
//     const fullTxt= this.words[current];
//     //check if deleting
//     if(this.isDeleting){
//         //rmv char
//         this.txt= fullTxt.substring(0,this.txt.length -1);
//     }
//     else{
//         //add char
//         this.txt= fullTxt.substring(0,this.txt.length +1);
//     }
    
//     this.txtElement.innerHTML = `<span class="txt3">${this.txt}</span>`;
//    // initial type speed
//    let typeSpeed= 700;
//    if(this.isDeleting){
//        typeSpeed/=2;
//    }

//    //if word is complete
//    if(!this.isDeleting && this.txt===fullTxt){
//        typeSpeed =this.wait;//pause at end
//        this.isDeleting =true;
//    }
//    else if(this.isDeleting && this.txt===''){
//         this.isDeleting=false;
//         this.wordIndex++;//move to next word
//         typeSpeed=500; 
        
//    }
   
//     setTimeout(()=> this.type(),typeSpeed);
// }





class TypeWriter{
    constructor(txtElement,words,wait =3000){
        this.txtElement= txtElement;
        this.words=words;
        this.txt= '';
        this.wordIndex= 0;
        this.wait=parseInt(wait,10);
        this.type();
        this.isDeleting=false;   
    }
    type(){
        const current= this.wordIndex % this.words.length;
        //get full txt of current word print first word
        const fullTxt= this.words[current];
        //check if deleting
        if(this.isDeleting){
            //rmv char
            this.txt= fullTxt.substring(0,this.txt.length -1);
        }
        else{
            //add char
            this.txt= fullTxt.substring(0,this.txt.length +1);
        }
        
        this.txtElement.innerHTML = `<span class="txt3">${this.txt}</span>`;
       // initial type speed
       let typeSpeed= 700;
       if(this.isDeleting){
           typeSpeed/=2;
       }
    
       //if word is complete
       if(!this.isDeleting && this.txt===fullTxt){
           typeSpeed =this.wait;//pause at end
           this.isDeleting =true;
       }
       else if(this.isDeleting && this.txt===''){
            this.isDeleting=false;
            this.wordIndex++;//move to next word
            typeSpeed=500; 
            
       }
       
        setTimeout(()=> this.type(),500);
    }
}



//start on DOM load
document.addEventListener('DOMContentLoaded',init);
function init(){
    const txtElement=document.querySelector('.txt-type');
    const words= JSON.parse(txtElement.getAttribute('data-words'));
    const wait =txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement,words,wait);
}
