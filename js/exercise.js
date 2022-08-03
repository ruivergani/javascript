let family = {
    incomes: [2000, 3000, 1000], 
    expenses: [1000, 400, 500]
};

function sum(array){
    let total = 0;
    for(value of array){
        total += value
    }
    return total;
}
function calculateBalance(){
    const incomesBalance = sum(family.incomes);
    const expensesBalance = sum(family.expenses);

    let totalValue = incomesBalance - expensesBalance;
    if(totalValue >= 0){
        console.log("Voce tem salvo positivo");
    }
    else{
        console.log("Voce tem saldo negativo");
    }
}
calculateBalance();

// convert Degree from either Celsius or Fahrenheit
function convertDegree(degree){ // comes like 50F
    const celsiusExists = degree.toUpperCase().includes('C');
    const fareinheitExists = degree.toUpperCase().includes('F');
    
    // fluxo de erro
    if(!celsiusExists && !fareinheitExists){
        console.log('This is not a valid.');
    }
    else{
        let updatedDegree = Number(degree.toUpperCase().replace("F", "")); // get the value from degree

        // fluxo ideal F -> C
        let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
        let degreeSign = 'C';

        // fluxo alternativo C -> F
        if (celsiusExists){
            updatedDegree = Number(degree.toUpperCase().replace("C", "")); // get the value from degree
            // start the calculation
            formula = (celsius) => celsius * 9/5 + 32 
            degreeSign = 'F';
        }

        return formula(updatedDegree) + degreeSign;
    }
}
convertDegree("50F");

//