async function partitionLomuto(ele, l, r){
    let i = l - 1;
    
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        
        ele[j].style.background = 'yellow';
        
        await waitforme(delay);
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
    
            i++;
            swap(ele[i], ele[j]);
            
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            
            await waitforme(delay);
        }
        else{
            
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    
    await waitforme(delay);
    swap(ele[i], ele[r]); 
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';
    
    await waitforme(delay);
    
    
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'rgb(234, 150, 72)';
    }
    return i;
}
async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}
const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});