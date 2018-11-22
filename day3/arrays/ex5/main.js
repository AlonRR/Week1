const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
 
  const name = prompt('Please enter the name for your reservation').toLowerCase()
  if (!reservations[name]){
      console.log(`no reservashion`)
      reservations[name] = {claimed: true}
  }
  else if(!reservations[name].claimed){
      alert(`Welcome`)
  }
  else{
      console.log(`nonono, you claimed alredy!!`)
  }