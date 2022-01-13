function count(){
var inin = document.getElementById('txti')
var endn = document.getElementById('txte')
var seqn = document.getElementById('txts')
var res = document.getElementById('res')

if (inin.value.length == 0 || endn.value.length == 0 || seqn.value.length == 0){
   res.innerHTML = 'Input numbers!'
}
else{
    res.innerHTML = `Counting: <br>`
    var i = Number(inin.value)
    var e = Number(endn.value)
    var s = Number(seqn.value)
    if(s <= 0){
        res.innerHTML = `Invalid sequence number`

    }

    if(i < e){
    //count accending 
        for(var c = i; c <= e; c += s){
            res.innerHTML += `${c} ` 
           
        }
    }
    else{
        //count deccending 
        for(var c = i; c >= e; c -= s){
            res.innerHTML += `${c} `
        }
    }
    res.innerHTML += `We counted ${i} to ${e}`
}
}