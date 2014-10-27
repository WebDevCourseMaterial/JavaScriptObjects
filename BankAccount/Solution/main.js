/* Namespace */
var rh = rh || {};
rh.objectbasics = rh.objectbasics || {};

$(document).ready( function() {
	var bobAccount = new rh.objectbasics.BankAccount("Bob", 100);
	console.log(bobAccount.toString());
	bobAccount.deposit(50);
	console.log(bobAccount.toString());
	bobAccount.withdraw(10);
	console.log(bobAccount.toString());
	
	
	var daveAccount = new rh.objectbasics.BankAccount("Dave", 1000000);
	console.log(daveAccount.toString());
	daveAccount.deposit(50);
	console.log(daveAccount.toString());
	
	
	var mattAccount = new rh.objectbasics.BankAccount("Matt", 100, 0.05);
	console.log(mattAccount.toString());
	mattAccount.accumulateInterest();
	console.log(mattAccount.toString());
	mattAccount.accumulateInterest();
	console.log(mattAccount.toString());
	
	
	daveAccount.interestRate = 0.10;
	daveAccount.accumulateInterest();
	console.log(daveAccount.toString());
});