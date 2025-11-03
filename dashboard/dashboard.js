
    let stdName ;
    let studentBirthYear ;
    let studentCity ;
    let studentAge ;
    let dashboard = {}
    function saveProfile() 
    {
      let name = document.getElementById("name").value.trim();
      let year = parseInt(document.getElementById("birthYear").value);
      let city = document.getElementById("city").value.trim();

      if (name === "" || isNaN(year) || city === "")
       {
        document.getElementById("profile").innerText = " All fields are required!";
      } 
      else 
      {
        stdName = name;
        studentBirthYear = year;
        studentCity = city;
        document.getElementById("profile").innerText = " Profile saved successfully!";
      }
      dashboard = {stdName,studentBirthYear,studentCity}
    }

    

    function checkAge() {
      if (studentBirthYear === 0) {
        document.getElementById("age").innerText = " Please enter profile first!";
      }
       else {
        let currentYear = new Date().getFullYear();
        studentAge = currentYear - studentBirthYear;

        if (studentAge >= 18) {
          document.getElementById("age").innerText = " Eligible--18+";
        } else {
          document.getElementById("age").innerText = " Not Eligible--Under 18";
        }
      }
    }

    function Greeting() {
      let hour = new Date().getHours();
      let greeting;

      if (hour < 12) {
        greeting = "Good Morning";
      } else if (hour < 18) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening";
      }
        document.getElementById("greet").innerText = greeting;
      
    }

    function calculate(op) {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);

      if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("calc").innerText = " Please enter valid numbers!";
        return;
      }

      let result;
      switch (op) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n1 / n2;break;
        default:
          result = "Invalid operation";
      }
      document.getElementById("calc").innerText = result;
    }

    function showQuote() {
      const quotes = [
        "tomorrow is a new day with new posssibilities",
        "You can do it!",
        "fortune always favours the brave",
        "don't be stagnant,be ready to flow",
        "there's always an alternative"
      ];
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerText = randomQuote;
    }

    function showjson()
    {
        let dash = {
          studentname : dashboard.stdName,
          birthyear : dashboard.studentBirthYear,
          city : dashboard.studentCity
        };
        let json = JSON.stringify(dash,null,2);
        console.log(json);
        document.getElementById("json").innerText = json;
    }
