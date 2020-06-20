class Error{
    constructor(){
        this.errors = {};
        this.label = {};
    }
    addMessages(errors){
        for(let errorLabel in errors){
            if(!this.errors[errorLabel]){
               this.errors[errorLabel] = errors[errorLabel];
               this.label[errorLabel] = errorLabel;
            }else{
                console.warn(errorLabel + ' is already present. Choose new Error Label');
            }
        }
    }
    emit(errorLabel,...args){
        let errorMsg = this.errors[errorLabel];
        if(errorMsg){
            if(typeof errorMsg === 'function'){
                errorMsg = errorMsg.apply(null,args);
            }
            throw new Error(errorMsg);
        }
    }
}

module.exports = new Error