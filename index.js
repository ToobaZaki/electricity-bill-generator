function validateInput() {
        const name = document.getElementById('consumerName').value;
        const number = document.getElementById('consumerNumber').value;
        const type = document.getElementById('consumerType').value;
        const units = document.getElementById('unitsConsumed').value;
        const dueDate = document.getElementById('dueDate').value;

        const generateBtn = document.getElementById('generateBillBtn');

        if (name.length > 0 && number.length === 9 && type && units > 0 && dueDate) {
            generateBtn.disabled = false;
        } else {
            generateBtn.disabled = true;
        }
    }

    function validateDate() {
        const today = new Date();
        const minDate = today.toISOString().split("T")[0]; 
        const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split("T")[0]; 
        
        document.getElementById('dueDate').setAttribute('min', minDate);
        document.getElementById('dueDate').setAttribute('max', maxDate);

        validateInput();
    }


    function generateBill() {
        const name = document.getElementById('consumerName').value;
        const number = document.getElementById('consumerNumber').value;
        const type = document.getElementById('consumerType').value;
        const units = document.getElementById('unitsConsumed').value;
        const dueDate = document.getElementById('dueDate').value;

        let unitPrice;
        if (type === "domestic") {
            unitPrice = 23.76;
        } else if (type === "commercial") {
            unitPrice = 31.49;
        } else {
            unitPrice = 44.49;
        }

        const billAmount = (units * unitPrice).toFixed(2);
        const lateAmount = (parseFloat(billAmount) + 220).toFixed(2);

        const today = new Date();
        const billMonth = today.toLocaleString('default', { month: 'long' });
        const billDate = today.toISOString().split('T')[0];
        const dueDateObj = new Date(dueDate);

        
        document.getElementById('billName').innerText = name;
        document.getElementById('billNumber').innerText = number;
        document.getElementById('billType').innerText = document.querySelector(`#consumerType option[value=${type}]`).innerText;
        document.getElementById('billConsumption').innerText = `${units} units`;
        document.getElementById('billMonth').innerText = billMonth;
        document.getElementById('billDate').innerText = billDate;
        document.getElementById('billAmount').innerText = `Rs. ${billAmount}`;
        document.getElementById('billDueDate').innerText = dueDateObj.toISOString().split('T')[0];
        document.getElementById('billLateAmount').innerText = `Rs. ${lateAmount}`;

        document.getElementById('billTable').style.display = 'block';
        document.getElementById('printBillBtn').disabled = false;
    }

   
    function printBill() {
        const confirmed = confirm("Please confirm to Print this Bill?");
        if (confirmed) {
            alert("Bill Printing...");
        }
    }

  
    function discardBill() {
        document.getElementById('consumerName').value = '';
        document.getElementById('consumerNumber').value = '';
        document.getElementById('consumerType').value = '';
        document.getElementById('unitsConsumed').value = '';
        document.getElementById('dueDate').value = '';

        document.getElementById('generateBillBtn').disabled = true;
        document.getElementById('printBillBtn').disabled = true;

        document.getElementById('billTable').style.display = 'none';
    }

    
    validateDate();

