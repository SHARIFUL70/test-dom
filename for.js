function cubeNumber(number) {
    if(typeof number !== 'number' ){
        return 'It is not a number'
    }
    else{
      const numberCube = number ** 3;
      return numberCube;
    }
}


function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
              return 'It is not a string';
            }
    
           return string1.includes(string2);
    
    }
   
    function sortMaker(arr) {
  
        let lergest = arr [0];
        let small = arr [0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < -1){
                return 'invalid number';
               }
           else if(arr[i] > lergest){
            lergest = arr[i];
          }
          else if(arr[i] < small){
            small = arr[i];
          }
         }
        return [lergest,small];
      }

     

      function findAddress(obj) {
       
        let street = obj.street   || "_";
        let house = obj.house     || "_";
        let society = obj.society || "_";
      
        const fulladrres = street+","+ house +"," + society;
        
        return fulladrres;
      
      }

     
      function canPay(changeArray, totalDue) {
        if(changeArray.length === 0){
          return 'it is empty array';
        }
           let sum = 0;
           
         for(let item of changeArray){
              sum += item;
          }
  
          if(sum >= totalDue){
            return true;
          }
          else if(sum < totalDue){
            return false;
          }
       
  }