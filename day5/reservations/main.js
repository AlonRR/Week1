const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    reservationCheck: function(name){
        return this[name].claimed
        },
    reservationVerify: function(){
        let name = document.getElementById(`name`).value
        if(!this[name]){
            this.addme(name)
            alert(`${name}, You've been add to the list welcome`)
        }
        else if(this.reservationCheck(name)) {
            alert(`${name}, You've already clameid your reservashon.`)
        }
        else{
            this.addme(name)
            alert(`${name}, Thank you for reserving`)
        }
    },
    addme: function(name){
        this[name]={claimed: true}
    }
}
  