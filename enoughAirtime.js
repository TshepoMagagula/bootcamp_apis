export function enoughAirtime(Usage, AirTime){
    const ArrUsage = Usage.split(",");
    for(let i = 0; i <  ArrUsage.length; i++){
        let CustAction = ArrUsage[i].trim();
        if(CustAction === "call" && AirTime > 1.88){
            AirTime -= 1.88;
        }
        else if(CustAction === "sms" && AirTime > 0.75){
            AirTime -= 0.75;
        }
        else if(CustAction === "data" && AirTime > 12){
            AirTime -= 12;
        }
        else{
            AirTime = 0;
        }
      }
    return "R" + AirTime.toFixed(2);
}