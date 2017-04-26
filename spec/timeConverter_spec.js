var tc = require("../index");

describe("A program that converts time", () => {

	it("Can convert a number of hours into equivalentt time in seconds", () => { 

		expect(tc.hoursToSeconds(24))
			.toBe("24 hours is equivalent to 86400 seconds."); 
		expect(tc.hoursToSeconds(-1))
			.toBe("Invalid time entry");
		expect(tc.hoursToSeconds(0))
			.toBe("0 hours is equivalent to 0 seconds.");
		expect(tc.hoursToSeconds(8))
			.toBe("8 hours is equivalent to 28800 seconds."); 
		expect(tc.hoursToSeconds(35.5))	
			.toBe("35.5 hours is equivalent to 127800 seconds.");
	});

}); 