
// let actualPrice = +prompt("enter your amount number");
// let vat = +prompt("enter vat");
// let discount = +prompt("enter discount");
// let amount =(actualPrice = 0, vat = 10)=>{
//     const vatprice = (actualPrice * vat)/100;
//     const vatwithPrice = actualPrice+vatprice;
//     const allVatPrice = [vatprice, vatwithPrice,];
//     return allVatPrice
       
// };
// let withDiscount = (priceWithVat = 0,discount = 0)=>{
//     const discountPrice = (priceWithVat * discount)/100;
//     const discountDevaided = priceWithVat - discountPrice;
//     const allDiscountPrice = [discountPrice,discountDevaided];   
//     return allDiscountPrice
// };

// let holdAmount = (actualPrice, vat, vatAmount, withVatAmount, discount, discountAmount, totalAmount)=>{
    
//     console.log(
//         `         ----------------------------------------------------------------
//                                 Cash Memo                                
//         =================================================================
//         Actual Price                                ${Math.round(actualPrice)} 
//         Vat                                               ${vat}%        
//         Vat Amount                                     ${Math.round(vatAmount)}
//         =================================================================
//         Price After Vat                          ${Math.round(withVatAmount)}
//         -----------------------------------------------------------------
//         Discount                                          ${discount}%   
//         Discount Amount                           ${Math.round(discountAmount)}
//         ===================================================================
//         Total                                    ${Math.round(totalAmount)}`
//     );
// }



// const totalVat = amount(actualPrice, vat);
// const totalDiscount = withDiscount(totalVat[1], discount);
// holdAmount(actualPrice,vat,totalVat[0], totalVat[1], discount,totalDiscount[0], totalDiscount[1]);




let actualPrice = +prompt('Enter your amount');
let vat = +prompt('Enter vat');
let discount = +prompt('Enter discount');

let recet = (actualPrice = 0, vat = 10)=>{
    const vatAmount = (actualPrice * vat)/100;
    const withVatPrice = actualPrice +vatAmount;
    const allVatPrice =[withVatPrice, vatAmount];
    return allVatPrice
       
};

let makeDiscount =(priceWithVAt, discount)=>{
    const discountAmount = (priceWithVAt * discount)/100;
    const discountTotal = priceWithVAt - discountAmount;
    const allDiscountPrice = [discountAmount, discountTotal];
    return allDiscountPrice
    
};
let holdAmount = (actualPrice, vat, vatAmount, vatwithPrice, discount, discountWithPrice, discountAmount,)=>{
 document.getElementById('cashMemo').innerHTML= `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cash Memo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="cash-memo">
        <header class="memo-header">
            <h1>Cash Memo</h1>
        </header>
        <div class="memo-content">
            <div class="row">
                <span>Actual Price:</span>
                <span>${actualPrice}</span>
            </div>
            <div class="row">
                <span>VAT:</span>
                <span>${vat}%</span>
            </div>
            <div class="row">
                <span>VAT Amount:</span>
                <span>${vatAmount}</span>
            </div>
            <hr>
            <div class="row">
                <span>Price After VAT:</span>
                <span>${vatwithPrice}</span>
            </div>
            <hr>
            <div class="row">
                <span>Discount:</span>
                <span>${discount}%</span>
            </div>
            <div class="row">
                <span>Discount Amount:</span>
                <span>${discountWithPrice}</span>
            </div>
            <hr>
            <div class="row total">
                <span>Total:</span>
                <span>${discountAmount}</span>
            </div>
        </div>
    </div>
</body>
</html>
`
    
}

const totalVat = recet(actualPrice,vat);
const totalDiscount = makeDiscount(totalVat[0],discount);
holdAmount(actualPrice,vat,totalVat[1],totalVat[0],discount,totalDiscount[1],totalDiscount[0],totalDiscount[1])


