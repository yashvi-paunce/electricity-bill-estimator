function calculateBill() {
    const units = Number(document.getElementById("units").value);
    const consumerType = document.getElementById("consumerType").value;
    const rate = chooseRate(units);
    const baseAmount = calculateBase(units, rate);
    const surchargePercent = consumerType === "Commercial" ? 10 : 0;
    const surcharge = calculateSurcharge(baseAmount, surchargePercent);
    const fixedCharge = 50;
    const total = baseAmount + surcharge + fixedCharge;
    document.getElementById("result").textContent = "Rate: ₹" + rate + "/unit | Base: ₹" + baseAmount + " | Surcharge: ₹" + surcharge + " | Fixed: ₹" + fixedCharge + " | Total: ₹" + total;
    document.getElementById("breakdown").textContent = buildExamples();
}

function calculateSurcharge(amount, percentage) {
    return (amount * percentage) / 100;
}

function chooseRate(units) {
    if (units <= 100) {
        return 5;
    } else if (units <= 300) {
        return 7;
    } else {
        return 9;
    }
}

function calculateBase(units, rate) {
    return units * rate;
}

function buildExamples() {
    const sampleUnits = [100, 200, 300, 400, 500];
    let output = "Base Bill Examples:\n";
    for (let i = 0; i < sampleUnits.length; i++) {
        let u = sampleUnits[i];
        let r = chooseRate(u);
        let b = calculateBase(u, r);
        output += u + " units @ ₹" + r + "/unit = ₹" + b + "\n";
    }
    return output;
}