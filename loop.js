//1. store "username" on local storage (yes that should work)
//2. BAN system adopted from scratch (YES)

//1: 10,X,2 | 10: 10,10,X | 11: 10,X,1,2
function stack(init,num){
    prefix = []
    suffix = []
    jnum = num
    while (num % 10 == 0){
        prefix.concat(10)
        num /= 10
    }
}
function num_to_ban(num){
    gay = []
    inum = num
    while (inum>=1){
        gay.concat(Math.floor(inum));
        inum**=(inum % 1) //what the fuck is this???
    }
}