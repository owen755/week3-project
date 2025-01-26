function calculateAkanName() {
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
  
    // Validate input: Ensure both date and gender are selected
    if (!birthday || !gender) {
      alert("Please enter both your birthday and gender.");
      return;
    }
  
    const date = new Date(birthday);
    const day = date.getDate(); // Day of the month (DD)
    const month = date.getMonth() + 1; // Month (MM), JavaScript months are 0-indexed
    const year = date.getFullYear(); // Year (YYYY)
    const century = Math.floor(year / 100); // Century digits (CC)
    const yearDigits = year % 100; // Year digits (YY)
  
    // Validate the day and month
    if (day <= 0 || day > 31) {
      alert("Invalid day. Please enter a valid day.");
      return;
    }
  
    if (month <= 0 || month > 12) {
      alert("Invalid month. Please enter a valid month.");
      return;
    }
    if (year <= 1890 || year > 2025) {
      alert("Invalid year. Please enter a valid year.");
      return;
    }
  
    // Formula for calculating the day of the week
    const dayOfWeek = Math.floor(((century / 4) - (2 * century) - 1 + ((5 * yearDigits) / 4) + ((26 * (month + 1)) / 10) + day) % 7);
  
    // Akan names for male and female
    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    };
  
    // Correct the dayOfWeek to map correctly with Akan name arrays (0 = Sunday, 6 = Saturday)
    const correctedDay = (dayOfWeek + 7) % 7; // Ensure the day is in the correct range (0-6)
  
    // Determine Akan name based on gender and the calculated day of the week
    const akanName = gender === "male" ? akanNames.male[correctedDay] : akanNames.female[correctedDay];
  
    // Display the Akan name
    document.getElementById('result').innerText = `Your Akan name is ${akanName}`;
  }
  
     