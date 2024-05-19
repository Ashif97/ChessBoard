let board =document.getElementById('board');

for(let i=1;i<=8;i++){
    const Container2 = document.createElement('div');
    Container2.className = 'Container2';
    for(let j=1;j<=8;j++){
        const box = document.createElement('div');
        box.className = 'box';


        if(i % 2=== 0){
            if(j % 2 ===0){
                box.style.backgroundColor ='white'
            }
            else{
                box.style.backgroundColor ='black'
            }
        }
            else{
                if(j % 2 === 0){
                    box.style.backgroundColor ='black'
                } else{
                    box.style.backgroundColor ='white'
                }
            }
        
            Container2.append(box);
    }
    board.append(Container2)
}