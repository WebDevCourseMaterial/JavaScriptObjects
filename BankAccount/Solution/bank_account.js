
rh.objectbasics.BankAccount = function(name, balance, interestRate) {
  this.name = name;
  this.balance = balance;
  this.interestRate = interestRate || 0;
};

rh.objectbasics.BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
};

rh.objectbasics.BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
};

rh.objectbasics.BankAccount.prototype.accumulateInterest = function() {
  this.balance *= (1 + this.interestRate);
};

rh.objectbasics.BankAccount.prototype.toString = function() {
  return "Name: " + this.name + "   Balance: $" + this.balance.toFixed(2) + "   Interest Rate: " + this.interestRate * 100 +"%";
};
