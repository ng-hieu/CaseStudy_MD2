export class MapAccount{
    map = new Map();
    constructor() {
    }
    addAccount(username:string, password: string){
        return this.map.set(username, password);
    }
    checkSignUp(username: string):boolean{
        let check:boolean = false;
        this.map.forEach((value, key) => {
            if(username === key){
                return check = true;
            }
        })
        return check;
    }
    checkLogin(username: string, password: string):boolean{
        let check:boolean = false;
        this.map.forEach((value, key) => {
            if(username === key && password === value){
                return check = true;
            }
        })
        return check;
    }
}