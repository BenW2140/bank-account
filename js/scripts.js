function BankAccount(name, deposit) {
  this.name = name,
  this.balance = deposit
}

BankAccount.prototype.deposit = function(deposit, balance) {
  return balance += deposit;
}

BankAccount.prototype.withdrawl = function(withdrawal, balance) {
  return balance -= withdrawal;
}

const showBalance = function(bankAccount) {
  $("#balance").text(bankAccount.balance);
  $("#balance").show();
}

$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    let deposit = parseInt($("input#initial-deposit").val());
    let bankAccount = new BankAccount(name, deposit);
    showBalance(bankAccount);
  });
});