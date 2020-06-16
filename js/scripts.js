function BankAccount(name, balance) {
  this.name = name,
  this.balance = balance
}

BankAccount.prototype.deposit = function(deposit, balance) {
  return balance += deposit;
}

BankAccount.prototype.withdrawl = function(withdrawal, balance) {
  return balance -= withdrawal;
}

$(document).ready(function() {
  
});