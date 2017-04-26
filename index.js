
	/*
	This function converts number of hours into an equivalent number of seconds. 
	
	@ param hours    The number of hours to convert into seconds.
	@ return result  A string output that prints the equivalent number of seconds. 
	*/
	function hoursToSeconds(hours)
	{
		//declartaion of constants
		const NUMBER_OF_SECONDS_IN_MINUTE = 60; 
		const NUMBER_OF_MINUTE_IN_HOUR = 60; 

		//declaration of variables 
		var numberOfSeconds; 
		var result;

		//If the number of hours is less than 0, set the result to the string Invalid time entry. 
		//Else convert the number of hours into an equivalent number of seconds. 
		if(hours < 0)
		{
			result = "Invalid time entry"; 
		}
		else
		{
			console.log(hours + " hours will be converted into an equivalent time in seconds."); 
			numberOfSeconds = hours * NUMBER_OF_MINUTE_IN_HOUR * NUMBER_OF_SECONDS_IN_MINUTE; 
			result = hours + " hours is equivalent to " + numberOfSeconds + " seconds."; 
		}

		return result; 
	}


module.exports = 
{
	hoursToSeconds: hoursToSeconds, 
}