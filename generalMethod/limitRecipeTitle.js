export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title && title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        // return the result
        return ` ${newTitle.join(' ')}...`;
    }
    return title;
}


export const downloadFile = (src , size) =>{
    var arraySrc = src.split('/');
    var a = document.createElement('a');
    // a.style = 'display:none';
    var fileName = arraySrc[arraySrc.length - 1] ? arraySrc[arraySrc.length - 1] : src;
    a.href = src;
    a.download = src;
    // a.download = fileName;
    a.target = "_blank"
    document.body.appendChild(a);
    a.click();
    
}

export const scrollFunction = (size ,value , setValue) => {
    var y = window.scrollY;
    // if ( y >= 61) {
    if ( y >= size) {
        if(!value){
            setValue(true);
        }
    }else{
        // if(scrolling){
          // console.log('scrolling', scrolling);
          setValue(false);
        // }
    }
  } 