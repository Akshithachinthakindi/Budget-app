const balance = document.getElementById("balance");
const inflow = document.getElementById("income");
const outflow = document.grtElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

//Get transactions from local storage
const localStorageTransaction = JSON.parse(
    localStorage.getItem("transactions")
);
 let transactions = 
    localStorage.getItem("transactions") !== null ?
    localStorageTransactions : [];

//Add transaction
function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim () === "" || amount.value.trim() === "")
    {
        document.getElementById("error_msg").innerHTML = "<span> Error: Please enter description and amount!</span>";
        setTimeout(
            ()=> (document.getElementById("error_msg").innerHTML = ""),
            5000
        );
    } else {
        const transaction={
            id: generatedID(),
            text: text.value,
            amount: +amount.value,
        };

        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

        updateLocalStorage();

        text.value = "";
        amount.value ="";
    }
}

//Generate random ID
