let userdata=[];
let userObj = {};
let duplicate_id_checker=[];
function getFormData()
{
    var name;
    name=document.getElementById('full_name').value;
    var role;
    role=document.getElementById('role_name').value;
    var eid;
    eid=document.getElementById('e_id').value;
    var date;
    date=document.getElementById('date_of_joining').value;
    if(date == "")
    {
        var today=new Date();
        var dd=String(today.getDate()).padStart(2,'0');
        var mm=String(today.getMonth()+1).padStart(2,'0');
        var yyyy=today.getFullYear();

        today= mm + '/' + dd + '/' +yyyy;
      
        date=today;

    }
    console.log(name);
    console.log(role);
    console.log(eid);
    console.log(date);
   
    
// Logic for not storing duplicate id into the database 
if(!duplicate_id_checker.includes(eid))
{        
    userObj.name=name;
    userObj.role=role;
    userObj.eid=eid;
    userObj.date=date;
    userdata.push(userObj);
    duplicate_id_checker.push(eid);
    alert("data are stored,please check local storage of your browser");
}
else
alert('You cannot insert duplicate id');
console.log(duplicate_id_checker);

let userStr = JSON.stringify(userObj); 
localStorage.setItem(userObj.eid, userStr);
let value = localStorage.getItem(userObj.name);
console.log("retreived value");
    console.log(userObj);
    console.log(userdata);
       

  return false;
}
function search_id()
{
    var id_search=document.getElementById('e_id').value;
    console.log(id_search);
    var ans=(localStorage.getItem(id_search));
    var obj=JSON.parse(ans);
    alert("value is displayed,check your console");
    console.log("Employee name="+obj.name);
    console.log("Employee role="+obj.role);
    console.log("Employee id="+obj.eid);
    console.log("joining date="+obj.date);
    
    return false;
}
function calculate_salary()
{
    var basic=0;
    var allowances=0;
    var bonus=0;
    var flag=0;
    var tax_payable=0;
    var taxable_income=0;
    var monthly_salary=0;
    var yearly_salary=0;
    var s_id=document.getElementById('e_id').value;
    var ans=(localStorage.getItem(s_id));
    var obj=JSON.parse(ans);
    var year=document.getElementById('a_year').value;



    


    
    if(obj.role =="Junior Software Developer" ){
    basic=20000;
    bonus=0.1*basic;
    allowances=0.05*basic;}
    else if(obj.role =="Senior Software Developer" ){
    basic=30000;
    bonus=0.2*basic;
    allowances=0.1*basic;}
    else if(obj.role =="Junior Quality Analyst" ){
    basic=20000;
    bonus=0.3*basic;
    allowances=0.05*basic;}
    else if(obj.role =="Senior Quality Analyst" ){
    basic=30000;
    bonus=0.4*basic;
    allowances=0.1*basic;}
    else if(obj.role =="Business Analyst" ){
    basic=35000;
    bonus=0.5*basic;
    allowances=0.07*basic;}
    else if(obj.role =="Team Lead" ){
    basic=50000;
    bonus=0.6*basic;
    allowances=1.5*basic;}
    else if(obj.role =="Manager" ){
   
    basic=100000;
    bonus=0.8*basic;
    allowances=0.2*basic;}
    else{
    
    allowances=0.1*basic;
    bonus=0.05*basic;
flag=1;}
monthly_salary = () =>  {
    return allowances+basic;
}
var gross_salary = (monthly_salary,bonus) => {
    return monthly_salary+bonus; }
    yearly_salary=gross_salary(monthly_salary(),bonus)*12;
    console.log("yearly salary="+yearly_salary);
    calculate_tax(year);

   function calculate_tax(year)
   {
       if(year>=2016 && year<2017)
       {
           if(yearly_salary<=250000)
           {
               tax_payable=0;
           }
           else if(yearly_salary>250000 && yearly_salary<500000)
           {
            tax_payable=0.01*yearly_salary;
           }
           else if(yearly_salary>=500000 && yearly_salary<=1000000)
           {
            tax_payable=0.2*yearly_salary;
           }
           else 
           {
            tax_payable=0.3*yearly_salary;
           }
           if(tax_payable>=150000)
            tax_payable=150000
            taxable_income=yearly_salary-tax_payable;
         }
         else if(year>=2017 && year<2018)
         {
             if(yearly_salary<=250000)
             {
                 tax_payable=0;
             }
             else if(yearly_salary>250000 && yearly_salary<500000)
             {
              tax_payable=0.05*yearly_salary;
             }
             else if(yearly_salary>=500000 && yearly_salary<=1000000)
             {
              tax_payable=0.2*yearly_salary;
             }
             else 
             {
              tax_payable=0.3*yearly_salary;
             }
             if(tax_payable>=150000)
              tax_payable=150000
              taxable_income=yearly_salary-tax_payable;
           }
           else if(year>=2018 && year<2019)
           {
               if(yearly_salary<=250000)
               {
                   tax_payable=0;
               }
               else if(yearly_salary>250000 && yearly_salary<500000)
               {
                tax_payable=0.05*yearly_salary;
               }
               else if(yearly_salary>=500000 && yearly_salary<=1000000)
               {
                tax_payable=0.2*yearly_salary;
               }
               else 
               {
                tax_payable=0.3*yearly_salary;
               }
               if(tax_payable>=150000)
                tax_payable=150000
                taxable_income=yearly_salary-tax_payable;
             }
             else if(year>=2019 && year<2020)
             {
                 if(yearly_salary<=250000)
                 {
                     tax_payable=0;
                 }
                 else if(yearly_salary>250000 && yearly_salary<500000)
                 {
                  tax_payable=0.05*yearly_salary;
                 }
                 else if(yearly_salary>=500000 && yearly_salary<=1000000)
                 {
                  tax_payable=0.2*yearly_salary;
                 }
                 else 
                 {
                  tax_payable=0.3*yearly_salary;
                 }
                 if(tax_payable>=150000)
                  tax_payable=150000
                  taxable_income=yearly_salary-tax_payable;
               }
               else
               alert("enter year in range");
   }

   

    
   

    class Employee {
        constructor() {

            this.id = 0;
            this.name = '';
            this.roleName = '';
            this.joiningDate = '';
            this.basic = 0.0;
            this.allowances = 0.0;
            this.bonus = 0.0;
            this.grossAnnualSalary = 0.0;
            this.taxableIncome = 0.0;
            this.taxPayable = 0.0;
            this.annualNetSalary = 0.0;

            this.getEmployeeId = function () {
                return this.id;
            };
            this.setEMployeeId = function (_eid) {
                this.id = _eid;
            };
            this.setEmployeeName = function (_name) {
                this.name = _name;
            };
            this.getEmployeeName = function () {
                return this.name;
            };
            this.setJoiningDate = function (_joiningDate) {
                this.joiningDate = _joiningDate;
            };
            this.getJoiningDate = function () {
                return this.joiningDate;
            };
            this.setRoleName = function (_roleName) {
                this.roleName = _roleName;
            };
            this.getRoleName = function () {
                return this.roleName;
            };
            this.setBasic = function (_basic) {
                this.basic = _basic;
            };
            this.getBasic = function () {
                return this.basic;
            };
            this.setAllowance = function (_allowance) {
                this.allowances = _allowance;
            };
            this.getAllowance = function () {
                return this.allowances;
            };
            this.setBonus = function (_bonus) {
                this.bonus = _bonus;
            };
            this.getBonus = function () {
                return this.bonus;
            };
            this.setGrossAnnualSalary = function (_grossAnnualSalary) {
                this.grossAnnualSalary = _grossAnnualSalary;
            };
            this.getGrossAnnualSalary = function () {
                return this.grossAnnualSalary;
            };
            this.setTaxableIncome = function (_taxableIncome) {
                this.taxableIncome = _taxableIncome;
            };
            this.getTaxableIncome = function () {
                return this.taxableIncome;
            };
            this.settaxPayable = function (_taxPayable) {
                this.taxPayable = _taxPayable;
            };
            this.gettaxPayable = function () {
                return this.taxPayable;
            };
            this.setAnnualNetSalary = function (_annualNetSalary) {
                this.annualNetSalary = _annualNetSalary;
            };
            this.getAnnualNetSalary = function () {
                return this.annualNetSalary;
            };
            this.display = function () {
                console.log('allowance='+this.getAllowance());
                console.log('basic='+this.getBasic());
                console.log('id='+this.getEmployeeId());
                console.log('name='+this.getEmployeeName());
                console.log('gross annual salary = '+this.getGrossAnnualSalary());
                console.log('joining date='+this.getJoiningDate());
                console.log('role name='+this.getRoleName());
                console.log('bonus='+this.getBonus());
                console.log('Tax payable='+this.gettaxPayable());
                console.log('taxable income'+this.getTaxableIncome());

            };
        }
        
        
    }
    monthly_salary();
    var e = new Employee();
    e.setEmployeeName(obj.name);
    e.setEMployeeId(obj.eid);
    e.setRoleName(obj.role);
    e.setBasic(basic);
    e.setJoiningDate(obj.date);
    e.setAllowance(allowances);
    e.setBonus(bonus);
    e.setGrossAnnualSalary(gross_salary(monthly_salary(),bonus)*12);
    e.settaxPayable(tax_payable);
    e.setTaxableIncome(taxable_income);
    e.display();
    


    return false;
}