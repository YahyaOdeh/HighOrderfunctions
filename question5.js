const leagueTables = [
    { team : "inter", points:30, goals:62},
    { team : "milan", points:30, goals:67},
    { team : "rome", points:26, goals:77},
    { team : "Atalanta", points:20, goals:87},
    { team : "juve", points:28, goals:65},
   ] 
   
 const SortedTeams = leagueTables.sort((T1,T2) => {
     
    if(T1.points<T2.points){

        return 1;    } 
    
    else if(T1.points===T2.points){

        if(T1.goals<T2.goals){

        return 1; } 
        
        else return -1 ;
    
                 }

    else return -1; })


    console.log(SortedTeams)


   // Use high order functions to sort the array based on who gets more points and if they equal in points it will check how score more goals 
   // Output
  //  { team : milan, points:30, goals:67},
   // { team : inter, points:30, goals:64},
   // { team : juve, points:28, goals:65},
   // { team : rome, points:26, goals:77},
  //  { team : Atalanta, points:20, goals:87},
  // ] 