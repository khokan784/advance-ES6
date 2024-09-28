class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}
const tapon = new Teacher('new teacher', 'biology');
console.log(tapon)