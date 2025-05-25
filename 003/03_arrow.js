const user ={
    username: "utkarsh",
    price:"199",
    
    welcomeMessage: function(){
        console.log(`${this.username},welcome to roomzy`);
        console.log(this);
    }

}


user.welcomeMessage()
user.username ="samir"
user.welcomeMessage()

console.log(this);

