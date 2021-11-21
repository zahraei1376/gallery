export const getApiRequest = async(url , user,formData,form  , method) => {
    var data = [] , isLoaded = false , error =null , reload = false;

    let header = {} , option= {};

    if(method === "GET"){
        if(!form){
            header = {
                'Content-Type': 'application/json',
                'Authorization': user
            }
            
        }else{
            header = {
                'Authorization': user
            }
        }

        option = {
            headers: header,
            method : method,
        }
    }else{
        if(!form){
            header = {
                'Content-Type': 'application/json',
                'Authorization': user
            }

            option = {
                headers: header,
                method : method,
                body : JSON.stringify(formData),
            }
            
        }else{
            header = {
                'Authorization': user
            }

            option = {
                headers: header,
                method : method,
                body : formData ,
            }
        }
    }

    await fetch(url, option)
    .then((res)=>{ 
        return res.json();   
    })
    .then(response => {
        if(response.seccess){
            isLoaded = true;
            data = response.data;
            // setIsLoaded(true);
            // setData(response.data);
        }else{
            if(response.reload){
                error =response.message;
                // setError(response.message);
                // setReload(true);
            }else{
                // setError(response.message);
                error =response.message;
            }
        }
    })
    .catch(error => {
        error =error.message;
    });

  
    return { error, isLoaded, data ,reload};
};

export const setApiRequest = async(url ,formData,form , user) => {

    var data = [] , isLoaded = false , error =null , reload = false;

    let header = {};

    if(!form){
        header = {
            'Content-Type': 'application/json',
            'Authorization': user
        }
        
    }else{
        header = {
            'Authorization': user
        }
    }


    await fetch(url, {
        headers: header,
        method:"POST",
        body:form ? formData : JSON.stringify(formData)
    })
    .then((res)=>{ 
        return res.json();   
    })
    .then(response => {
        if(response.seccess){
            isLoaded = true;
            data = response.data;
            // setIsLoaded(true);
            // setData(response.data);
        }else{
            if(response.reload){
                error = response.message;
                // setError(response.message);
                // setReload(true);
            }else{
                // setError(response.message);
                error =response.message;
            }
        }
    })
    .catch(error => {
        setError(error.message);
    });

  
    return { error, isLoaded, data ,reload};
};


export const fetcher = (url ,user ,formData,form  , method) => {

    var data = [] , isLoaded = false , error =null , reload = false;

    let header = {};

    if(!form){
        header = {
            'Content-Type': 'application/json',
            'Authorization': user
        }
        
    }else{
        header = {
            'Authorization': user
        }
    }


    fetch(url, {
        headers : header,
        method : method,
        body : form ? formData : JSON.stringify(formData)
    })
    .then((res)=>{ 
        return res.json();   
    })
    .then(response => {
        if(response.seccess){
            isLoaded = true;
            data = response;
        }else{
            if(response.reload){
                error = response.message;
            }else{
                error =response.message;
            }
        }
    })
    .catch(error => {
        setError(error.message);
    });

    return { error, isLoaded, data ,reload};
};