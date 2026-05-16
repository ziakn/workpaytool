export const mvpPages = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/disclaimer",
  "/cookie-policy",
  "/salary-calculator",
  "/hourly-to-salary-calculator",
  "/salary-to-hourly-calculator",
  "/monthly-salary-calculator",
  "/weekly-pay-calculator",
  "/biweekly-pay-calculator",
  "/take-home-pay-calculator",
  "/gross-to-net-calculator",
  "/profit-margin-calculator",
  "/markup-calculator",
  "/discount-calculator",
  "/break-even-calculator",
  "/business-loan-calculator",
  "/freelance-hourly-rate-calculator",
  "/invoice-generator",
  "/receipt-generator",
  "/estimate-generator",
  "/purchase-order-generator",
  "/vat-calculator",
  "/sales-tax-calculator",
  "/gst-calculator",
  "/business-days-calculator",
  "/overtime-calculator",
];

export const toolPages = {
  "salary-calculator": {
    title: "Salary Calculator",
    path: "/salary-calculator",
    type: "salary",
    category: "Salary tools",
    description: "Calculate yearly, monthly, weekly, daily, and hourly salary.",
    intro:
      "Use this salary calculator to compare annual salary, monthly pay, weekly pay, daily pay, and hourly wage from one set of work assumptions.",
    explanation: [
      "Salary conversions depend on how many hours and days you usually work. A standard full-time schedule is often estimated as 40 hours per week and 52 weeks per year, but your actual schedule may be different.",
      "Enter your annual salary or hourly rate, then adjust hours, days, and weeks to match your role. The calculator updates each pay period so you can compare offers, budgets, and pay changes quickly.",
    ],
    faq: [
      ["How do I calculate monthly salary?", "Divide annual salary by 12, or multiply weekly pay by the average number of weeks in a month."],
      ["How do I calculate hourly pay from salary?", "Divide annual salary by annual work hours. Annual work hours are weekly hours multiplied by working weeks per year."],
      ["Does this include tax?", "No. This page converts gross pay before tax. Use the take home pay calculator for estimated deductions."],
    ],
  },
  "hourly-to-salary-calculator": {
    title: "Hourly to Salary Calculator",
    path: "/hourly-to-salary-calculator",
    type: "hourlySalary",
    category: "Salary tools",
    description: "Convert hourly wage into weekly, monthly, and yearly salary.",
    intro:
      "Convert an hourly wage into estimated weekly, monthly, and annual pay using your normal work schedule.",
    explanation: [
      "Hourly pay becomes salary by multiplying the hourly rate by hours worked per week and weeks worked per year.",
      "This is useful when comparing hourly jobs with salaried roles, checking freelance availability, or estimating income when your hours change.",
    ],
    faq: [
      ["What is the standard full-time assumption?", "A common estimate is 40 hours per week and 52 weeks per year."],
      ["Can I include unpaid time off?", "Yes. Reduce the working weeks per year to account for unpaid vacation or breaks."],
      ["Is the yearly result gross or net?", "It is gross pay before tax, deductions, and benefits."],
    ],
  },
  "salary-to-hourly-calculator": {
    title: "Salary to Hourly Calculator",
    path: "/salary-to-hourly-calculator",
    type: "salaryHourly",
    category: "Salary tools",
    description: "Convert annual salary into hourly wage.",
    intro:
      "Convert annual salary into an estimated hourly rate based on weekly hours and working weeks.",
    explanation: [
      "An annual salary can look different once it is broken into an hourly equivalent. Longer workweeks lower the hourly value of the same salary.",
      "Use this page to compare salaried offers, contract work, overtime expectations, and role changes.",
    ],
    faq: [
      ["What formula does this use?", "Hourly rate equals annual salary divided by annual work hours."],
      ["Should I use 52 weeks?", "Use 52 if you are paid year-round. Reduce it if you take unpaid leave."],
      ["Does it include bonuses?", "Only include bonuses if you want the hourly result to reflect total annual compensation."],
    ],
  },
  "monthly-salary-calculator": {
    title: "Monthly Salary Calculator",
    path: "/monthly-salary-calculator",
    type: "monthlySalary",
    category: "Salary tools",
    description: "Calculate monthly income from annual, weekly, daily, or hourly pay.",
    intro:
      "Estimate monthly income from annual salary, weekly pay, daily rate, or hourly pay.",
    explanation: [
      "Monthly pay is often used for rent, bills, and budget planning, even when income is quoted annually, weekly, or hourly.",
      "Choose the input that matches how you are paid and adjust the schedule fields to produce a realistic monthly estimate.",
    ],
    faq: [
      ["How is monthly pay calculated from annual salary?", "Annual salary is divided by 12."],
      ["Why do weekly and monthly estimates differ?", "Months are not exactly four weeks. This calculator uses annualized pay divided by 12."],
      ["Is this before deductions?", "Yes. It estimates gross monthly income before deductions."],
    ],
  },
  "weekly-pay-calculator": {
    title: "Weekly Pay Calculator",
    path: "/weekly-pay-calculator",
    type: "weeklyPay",
    category: "Salary tools",
    description: "Calculate weekly pay based on hourly rate, salary, or work hours.",
    intro:
      "Calculate weekly pay from an hourly rate or convert annual salary into a weekly amount.",
    explanation: [
      "Weekly pay is useful for short-term budgeting and for jobs where hours vary from week to week.",
      "Enter an hourly rate and weekly hours, or use annual salary to estimate a steady weekly equivalent.",
    ],
    faq: [
      ["How do I calculate weekly hourly pay?", "Multiply hourly rate by hours worked in the week."],
      ["How do I convert salary to weekly pay?", "Divide annual salary by paid weeks per year."],
      ["Does overtime count?", "Use the overtime calculator when overtime is paid at a different rate."],
    ],
  },
  "biweekly-pay-calculator": {
    title: "Biweekly Pay Calculator",
    path: "/biweekly-pay-calculator",
    type: "biweeklyPay",
    category: "Salary tools",
    description: "Calculate pay every two weeks from salary or hourly wage.",
    intro:
      "Estimate biweekly pay from annual salary or hourly work over a two-week pay period.",
    explanation: [
      "Biweekly payroll usually has 26 pay periods per year. That makes it different from semi-monthly payroll, which has 24 pay periods.",
      "Use this calculator to estimate gross pay for every two-week paycheck before tax and deductions.",
    ],
    faq: [
      ["How many biweekly pay periods are in a year?", "Most years have 26 biweekly pay periods."],
      ["Is biweekly the same as twice a month?", "No. Twice a month is semi-monthly and usually has 24 pay periods per year."],
      ["Can hourly workers use this?", "Yes. Enter hourly rate and total hours worked across two weeks."],
    ],
  },
  "take-home-pay-calculator": {
    title: "Take Home Pay Calculator",
    path: "/take-home-pay-calculator",
    type: "takeHome",
    category: "Salary tools",
    description: "Estimate net pay after deductions.",
    intro:
      "Estimate take-home pay after tax, benefits, retirement contributions, and other deductions.",
    explanation: [
      "Take-home pay is your estimated net pay after deductions. This calculator uses simple percentage and fixed deduction inputs so you can model different scenarios.",
      "For exact payroll calculations, confirm tax rates, benefits, and deductions with your employer, accountant, or local tax authority.",
    ],
    faq: [
      ["What is take-home pay?", "Take-home pay is the amount left after taxes and deductions are removed from gross pay."],
      ["Can this calculate exact tax?", "No. It is an estimator. Tax rules vary by country, region, filing status, and deductions."],
      ["What deductions should I include?", "Include estimated income tax, payroll tax, benefits, retirement contributions, and any fixed payroll deductions."],
    ],
  },
  "gross-to-net-calculator": {
    title: "Gross to Net Calculator",
    path: "/gross-to-net-calculator",
    type: "grossNet",
    category: "Salary tools",
    description: "Convert gross salary into estimated net salary.",
    intro:
      "Convert gross pay into estimated net pay using tax and deduction assumptions.",
    explanation: [
      "Gross pay is your pay before deductions. Net pay is what remains after taxes, benefits, and other deductions.",
      "Use this calculator to test deduction assumptions and estimate the practical value of a salary or pay raise.",
    ],
    faq: [
      ["What is gross pay?", "Gross pay is total pay before deductions."],
      ["What is net pay?", "Net pay is the amount remaining after deductions."],
      ["Why is this an estimate?", "Exact net pay depends on local tax rules, payroll settings, benefits, and personal circumstances."],
    ],
  },
  "profit-margin-calculator": {
    title: "Profit Margin Calculator",
    path: "/profit-margin-calculator",
    type: "profitMargin",
    category: "Business tools",
    description: "Calculate profit margin from cost and selling price.",
    intro:
      "Calculate profit, profit margin, and markup from cost and selling price.",
    explanation: [
      "Profit margin shows what percentage of revenue remains after the cost of goods or services.",
      "Use it to price products, compare offers, check supplier costs, and understand whether a sale is actually profitable.",
    ],
    faq: [
      ["What is profit margin?", "Profit margin is profit divided by selling price, shown as a percentage."],
      ["What is the difference between margin and markup?", "Margin compares profit to selling price. Markup compares profit to cost."],
      ["Can margin be negative?", "Yes. If cost is higher than selling price, the result is a loss."],
    ],
  },
  "markup-calculator": {
    title: "Markup Calculator",
    path: "/markup-calculator",
    type: "markup",
    category: "Business tools",
    description: "Calculate markup percentage and selling price.",
    intro:
      "Calculate selling price from cost and markup, or find the markup percentage already built into a price.",
    explanation: [
      "Markup is based on cost. A 50% markup means the selling price is cost plus half of the cost.",
      "This is helpful for product pricing, quote preparation, and checking whether a target price supports your margin goals.",
    ],
    faq: [
      ["How do I calculate markup?", "Markup percentage equals profit divided by cost, multiplied by 100."],
      ["Is markup the same as margin?", "No. Markup is based on cost, while margin is based on selling price."],
      ["How do I calculate selling price from markup?", "Selling price equals cost multiplied by one plus the markup percentage."],
    ],
  },
  "discount-calculator": {
    title: "Discount Calculator",
    path: "/discount-calculator",
    type: "discount",
    category: "Business tools",
    description: "Calculate final price after discount.",
    intro:
      "Calculate discount amount, final price, and savings from a percentage discount.",
    explanation: [
      "Discounts reduce selling price, but they also reduce revenue and margin. Knowing the final price helps you avoid accidental underpricing.",
      "Use this for retail pricing, client offers, promotions, and quick purchase comparisons.",
    ],
    faq: [
      ["How do I calculate a discount?", "Multiply original price by the discount percentage to get the discount amount."],
      ["How do I calculate final price?", "Subtract the discount amount from the original price."],
      ["Can I stack discounts?", "For stacked discounts, apply each discount to the new reduced price."],
    ],
  },
  "break-even-calculator": {
    title: "Break Even Calculator",
    path: "/break-even-calculator",
    type: "breakEven",
    category: "Business tools",
    description: "Calculate how many sales are needed to cover fixed and variable costs.",
    intro:
      "Calculate how many units you need to sell before revenue covers fixed and variable costs.",
    explanation: [
      "Break-even analysis helps you understand the minimum sales volume needed before a product, service, or project becomes profitable.",
      "The key number is contribution margin per unit: selling price minus variable cost per unit.",
    ],
    faq: [
      ["What is break-even point?", "It is the sales volume where total revenue equals total costs."],
      ["What are fixed costs?", "Fixed costs are costs that do not change directly with each unit sold, such as rent or software."],
      ["What are variable costs?", "Variable costs change with each unit sold, such as materials, payment fees, or direct labor."],
    ],
  },
  "business-loan-calculator": {
    title: "Business Loan Calculator",
    path: "/business-loan-calculator",
    type: "loan",
    category: "Business tools",
    description: "Estimate monthly loan payments, total interest, and total repayment.",
    intro:
      "Estimate monthly business loan payments, total interest, and total repayment.",
    explanation: [
      "Loan payments depend on principal, annual interest rate, and loan term. A longer term usually lowers the monthly payment but increases total interest.",
      "Use this estimate before comparing finance offers, planning cash flow, or deciding how much debt your business can support.",
    ],
    faq: [
      ["What does APR mean?", "APR is the annual percentage rate used to estimate yearly borrowing cost."],
      ["Does this include fees?", "No. Add fees separately or include them in the loan amount for a rough estimate."],
      ["Why does total interest change with term length?", "Longer terms keep the balance outstanding for longer, which can increase total interest."],
    ],
  },
  "freelance-hourly-rate-calculator": {
    title: "Freelance Hourly Rate Calculator",
    path: "/freelance-hourly-rate-calculator",
    type: "freelanceRate",
    category: "Business tools",
    description: "Calculate the hourly rate a freelancer should charge.",
    intro:
      "Estimate the hourly rate needed to reach your target freelance income after expenses and non-billable time.",
    explanation: [
      "Freelancers cannot bill every working hour. Admin, sales, learning, holidays, and unpaid time all reduce billable capacity.",
      "Use this calculator to set a rate that accounts for target income, expenses, taxes, and realistic billable hours.",
    ],
    faq: [
      ["What are billable hours?", "Billable hours are hours you can invoice to clients."],
      ["Should I include taxes?", "Yes. Add an estimated tax percentage so your rate supports after-tax income."],
      ["Why include expenses?", "Business expenses must be covered before your target personal income is reached."],
    ],
  },
  "invoice-generator": {
    title: "Invoice Generator",
    path: "/invoice-generator",
    type: "invoice",
    category: "Invoice tools",
    description: "Create a simple invoice and download or print it.",
    intro:
      "Create a simple printable invoice with client details, line items, tax, and totals.",
    explanation: [
      "A clear invoice helps clients understand what they are paying for, when payment is due, and how the total was calculated.",
      "Fill in the fields, review the preview, then use print or save as PDF from your browser.",
    ],
    faq: [
      ["Can I download the invoice?", "Use the print button and choose Save as PDF in your browser."],
      ["Does it store invoice data?", "This MVP generator works in your browser and does not save invoice records to a database."],
      ["Can I add tax?", "Yes. Enter a tax rate and it will be included in the total."],
    ],
  },
  "receipt-generator": {
    title: "Receipt Generator",
    path: "/receipt-generator",
    type: "receipt",
    category: "Invoice tools",
    description: "Create a simple receipt for payment records.",
    intro:
      "Create a simple receipt showing payer, payment details, items, and amount received.",
    explanation: [
      "Receipts document that payment has been received. They are useful for clients, customers, bookkeeping, and tax records.",
      "Enter payment details and line items, then print or save the receipt as a PDF.",
    ],
    faq: [
      ["Is a receipt the same as an invoice?", "No. An invoice requests payment. A receipt confirms payment was received."],
      ["Can I print the receipt?", "Yes. Use the print button and your browser print settings."],
      ["Should I include payment method?", "Yes. Including payment method makes records easier to reconcile."],
    ],
  },
  "estimate-generator": {
    title: "Estimate Generator",
    path: "/estimate-generator",
    type: "estimate",
    category: "Invoice tools",
    description: "Create a project estimate or quotation.",
    intro:
      "Create a project estimate or quotation with line items, tax, and a clear total.",
    explanation: [
      "An estimate helps clients understand expected project cost before work begins. It is usually not a payment request.",
      "Use the preview to check scope and pricing before sending the estimate to a client.",
    ],
    faq: [
      ["Is an estimate legally binding?", "It depends on your terms and local law. Many estimates are non-binding unless accepted as a contract."],
      ["Can I convert it to an invoice?", "This MVP creates the document preview. You can reuse the same line items in the invoice generator."],
      ["Should estimates include expiry dates?", "Yes. An expiry date helps protect pricing when costs or availability change."],
    ],
  },
  "purchase-order-generator": {
    title: "Purchase Order Generator",
    path: "/purchase-order-generator",
    type: "purchaseOrder",
    category: "Invoice tools",
    description: "Create a simple purchase order document.",
    intro:
      "Create a simple purchase order showing supplier, buyer, line items, and expected total.",
    explanation: [
      "A purchase order documents what a buyer intends to purchase from a supplier. It can help align quantities, prices, and delivery expectations.",
      "Use this generator for lightweight purchasing records before goods or services are delivered.",
    ],
    faq: [
      ["Is a purchase order an invoice?", "No. A purchase order is sent by the buyer to request goods or services. An invoice is sent by the seller to request payment."],
      ["Can I include tax?", "Yes. Add a tax rate and it will appear in the total."],
      ["Can I print it?", "Yes. Use the print button and save as PDF if needed."],
    ],
  },
  "vat-calculator": {
    title: "VAT Calculator",
    path: "/vat-calculator",
    type: "tax",
    category: "Tax tools",
    description: "Add or remove VAT from a price.",
    intro:
      "Add VAT to a net price or remove VAT from a gross price.",
    explanation: [
      "VAT is usually calculated as a percentage of the net amount. To remove VAT from a gross amount, divide by one plus the VAT rate.",
      "Use this for quotes, invoices, receipts, and quick price checks where VAT applies.",
    ],
    faq: [
      ["How do I add VAT?", "Multiply the net amount by the VAT rate, then add that VAT amount to the net price."],
      ["How do I remove VAT?", "Divide the gross amount by one plus the VAT rate."],
      ["Does this know my local VAT rate?", "No. Enter the rate that applies to your country, product, or service."],
    ],
  },
  "sales-tax-calculator": {
    title: "Sales Tax Calculator",
    path: "/sales-tax-calculator",
    type: "tax",
    category: "Tax tools",
    description: "Calculate sales tax and final price.",
    intro:
      "Calculate sales tax amount and final price from a pre-tax amount and tax rate.",
    explanation: [
      "Sales tax is commonly added at checkout based on location and product rules. Rates can vary by state, city, and category.",
      "Enter the pre-tax amount and rate to estimate the tax amount and final customer price.",
    ],
    faq: [
      ["How do I calculate sales tax?", "Multiply the pre-tax amount by the sales tax percentage."],
      ["Can sales tax rates vary?", "Yes. Sales tax can vary by jurisdiction and item type."],
      ["Is this tax advice?", "No. It is a simple calculator for estimating totals."],
    ],
  },
  "gst-calculator": {
    title: "GST Calculator",
    path: "/gst-calculator",
    type: "tax",
    category: "Tax tools",
    description: "Add or remove GST from an amount.",
    intro:
      "Add GST to an amount or remove GST from a GST-inclusive price.",
    explanation: [
      "GST works like a percentage tax added to many goods and services. The same calculator can add GST or reverse it from a total.",
      "Use the applicable GST rate for your country and transaction type.",
    ],
    faq: [
      ["How do I add GST?", "Multiply the amount by the GST rate and add it to the original amount."],
      ["How do I remove GST?", "Divide the GST-inclusive amount by one plus the GST rate."],
      ["Is GST the same in every country?", "No. Rates and rules vary by country."],
    ],
  },
  "business-days-calculator": {
    title: "Business Days Calculator",
    path: "/business-days-calculator",
    type: "businessDays",
    category: "Time tools",
    description: "Calculate business days between two dates.",
    intro:
      "Calculate business days between two dates, excluding weekends.",
    explanation: [
      "Business days usually exclude Saturdays and Sundays. Some countries and companies also exclude public holidays, which are not included in this MVP calculator.",
      "Use this for delivery timelines, notice periods, project schedules, and payment terms.",
    ],
    faq: [
      ["Are weekends excluded?", "Yes. Saturdays and Sundays are excluded."],
      ["Are public holidays excluded?", "No. This MVP version does not include country-specific holidays."],
      ["Does it include the start date?", "You can choose whether to include the start date in the count."],
    ],
  },
  "overtime-calculator": {
    title: "Overtime Calculator",
    path: "/overtime-calculator",
    type: "overtime",
    category: "Time tools",
    description: "Calculate overtime pay from hourly rate and overtime hours.",
    intro:
      "Calculate regular pay, overtime pay, and total pay from hourly rate and overtime hours.",
    explanation: [
      "Overtime pay is usually calculated with a multiplier such as 1.5x or 2x the regular hourly rate.",
      "Rules vary by country, state, contract, and employer, so use this as a planning estimate and verify your actual entitlement.",
    ],
    faq: [
      ["What is time and a half?", "Time and a half means overtime is paid at 1.5 times the regular hourly rate."],
      ["Can I use double time?", "Yes. Set the overtime multiplier to 2."],
      ["Does this determine legal overtime eligibility?", "No. It only calculates pay from the inputs you enter."],
    ],
  },
};

const defaultDisclaimer =
  "This calculator provides estimates for general informational purposes only. Actual salary, tax, payroll, invoice, or business results may vary depending on your location, employer, tax rules, deductions, contract terms, and other factors.";

const categoryPaths = {
  "Salary tools": "/salary-tools",
  "Business tools": "/business-tools",
  "Invoice tools": "/invoice-tools",
  "Tax tools": "/tax-tools",
  "Time tools": "/time-tools",
};

const relatedByCategory = {
  "Salary tools": [
    "salary-calculator",
    "hourly-to-salary-calculator",
    "salary-to-hourly-calculator",
    "monthly-salary-calculator",
    "weekly-pay-calculator",
    "biweekly-pay-calculator",
    "take-home-pay-calculator",
    "gross-to-net-calculator",
  ],
  "Business tools": [
    "profit-margin-calculator",
    "markup-calculator",
    "discount-calculator",
    "break-even-calculator",
    "business-loan-calculator",
    "freelance-hourly-rate-calculator",
  ],
  "Invoice tools": [
    "invoice-generator",
    "receipt-generator",
    "estimate-generator",
    "purchase-order-generator",
  ],
  "Tax tools": [
    "vat-calculator",
    "sales-tax-calculator",
    "gst-calculator",
  ],
  "Time tools": [
    "business-days-calculator",
    "overtime-calculator",
  ],
};

const formulasByType = {
  salary: [
    "Monthly salary = Annual salary / 12",
    "Weekly salary = Annual salary / Paid weeks per year",
    "Daily salary = Annual salary / Working days per year",
    "Hourly salary = Annual salary / Total working hours per year",
  ],
  hourlySalary: [
    "Weekly pay = Hourly wage x Hours per week",
    "Annual salary = Hourly wage x Hours per week x Paid weeks per year",
    "Monthly salary = Annual salary / 12",
  ],
  salaryHourly: [
    "Annual work hours = Hours per week x Paid weeks per year",
    "Hourly wage = Annual salary / Annual work hours",
  ],
  monthlySalary: [
    "Monthly salary = Annual salary / 12",
    "Annual salary from hourly pay = Hourly pay x Hours per week x Paid weeks per year",
    "Monthly salary from weekly pay = Weekly pay x Paid weeks per year / 12",
  ],
  weeklyPay: [
    "Weekly pay = Hourly rate x Hours worked per week",
    "Weekly salary = Annual salary / Paid weeks per year",
  ],
  biweeklyPay: [
    "Biweekly pay from salary = Annual salary / 26",
    "Biweekly hourly pay = Hourly wage x Hours worked over two weeks",
  ],
  takeHome: [
    "Total deductions = Gross pay x Deduction rate + Fixed deductions",
    "Take-home pay = Gross pay - Total deductions",
  ],
  grossNet: [
    "Estimated deductions = Gross pay x Deduction rate + Fixed deductions",
    "Net pay = Gross pay - Estimated deductions",
  ],
  profitMargin: [
    "Profit = Selling price - Cost",
    "Profit margin = Profit / Selling price x 100",
    "Markup = Profit / Cost x 100",
  ],
  markup: [
    "Markup = Profit / Cost x 100",
    "Selling price = Cost x (1 + Markup rate)",
  ],
  discount: [
    "Discount amount = Original price x Discount rate",
    "Final price = Original price - Discount amount",
  ],
  breakEven: [
    "Contribution margin per unit = Selling price - Variable cost per unit",
    "Break-even units = Fixed costs / Contribution margin per unit",
  ],
  loan: [
    "Monthly rate = Annual interest rate / 12",
    "Monthly payment = Principal x monthly rate / (1 - (1 + monthly rate)^-number of payments)",
    "Total interest = Total repayment - Principal",
  ],
  freelanceRate: [
    "Required revenue = (Target income + Expenses) / (1 - Tax rate)",
    "Hourly rate = Required revenue / Billable hours",
  ],
  invoice: [
    "Line total = Quantity x Unit price",
    "Subtotal = Sum of line totals",
    "Tax amount = Subtotal x Tax rate",
    "Invoice total = Subtotal + Tax amount",
  ],
  receipt: [
    "Line total = Quantity x Unit price",
    "Subtotal = Sum of line totals",
    "Tax amount = Subtotal x Tax rate",
    "Receipt total = Subtotal + Tax amount",
  ],
  estimate: [
    "Line total = Quantity x Unit price",
    "Subtotal = Sum of estimated line totals",
    "Tax amount = Subtotal x Tax rate",
    "Estimate total = Subtotal + Tax amount",
  ],
  purchaseOrder: [
    "Line total = Quantity x Unit price",
    "Subtotal = Sum of purchase order lines",
    "Tax amount = Subtotal x Tax rate",
    "Purchase order total = Subtotal + Tax amount",
  ],
  tax: [
    "Tax amount = Net amount x Tax rate",
    "Gross amount = Net amount + Tax amount",
    "Net amount from gross = Gross amount / (1 + Tax rate)",
  ],
  businessDays: [
    "Business days = Total days between dates - Weekend days",
    "Weekend days are Saturdays and Sundays in this calculator",
  ],
  overtime: [
    "Regular pay = Hourly rate x Regular hours",
    "Overtime pay = Hourly rate x Overtime multiplier x Overtime hours",
    "Total pay = Regular pay + Overtime pay",
  ],
};

const examplesByType = {
  salary:
    "If your annual salary is $60,000, monthly salary is $60,000 / 12 = $5,000, weekly salary is $60,000 / 52 = $1,153.85, and hourly pay at 40 hours per week is $60,000 / 2,080 = $28.85.",
  hourlySalary:
    "If you earn $25 per hour and work 40 hours per week for 52 weeks, weekly pay is $1,000 and annual salary is $25 x 40 x 52 = $52,000.",
  salaryHourly:
    "If your annual salary is $60,000 and you work 40 hours per week for 52 weeks, annual hours are 2,080 and hourly pay is $60,000 / 2,080 = $28.85.",
  monthlySalary:
    "If your annual salary is $72,000, monthly salary is $72,000 / 12 = $6,000. If you earn $1,200 weekly for 52 weeks, monthly income is $1,200 x 52 / 12 = $5,200.",
  weeklyPay:
    "If your hourly rate is $30 and you work 38 hours, weekly pay is $30 x 38 = $1,140.",
  biweeklyPay:
    "If your annual salary is $65,000, biweekly pay is $65,000 / 26 = $2,500 before taxes and deductions.",
  takeHome:
    "If gross annual pay is $60,000 and estimated deductions are 25%, annual take-home pay is $60,000 - $15,000 = $45,000.",
  grossNet:
    "If gross pay is $5,000 per month and estimated deductions are 24%, net pay is $5,000 - $1,200 = $3,800.",
  profitMargin:
    "If a product costs $60 and sells for $100, profit is $40 and profit margin is $40 / $100 x 100 = 40%.",
  markup:
    "If cost is $80 and markup is 25%, selling price is $80 x 1.25 = $100.",
  discount:
    "If the original price is $200 and the discount is 15%, the discount amount is $30 and the final price is $170.",
  breakEven:
    "If fixed costs are $5,000, selling price is $100, and variable cost is $60, contribution is $40 and break-even volume is 125 units.",
  loan:
    "For a $50,000 loan at 9% annual interest over 5 years, the calculator estimates monthly payments, total repayment, and total interest using the amortization formula.",
  freelanceRate:
    "If you want $80,000 income, expect $12,000 expenses, set aside 25% for tax, and can bill 1,200 hours, required revenue is $122,666.67 and the hourly rate is about $102.22.",
  invoice:
    "If an invoice has 1 item at $500 and 5% tax, subtotal is $500, tax is $25, and invoice total is $525.",
  receipt:
    "If a receipt records 2 items at $40 each with 5% tax, subtotal is $80, tax is $4, and total paid is $84.",
  estimate:
    "If an estimate includes 10 hours at $75 with 5% tax, subtotal is $750, tax is $37.50, and estimated total is $787.50.",
  purchaseOrder:
    "If a purchase order includes 5 units at $120 with 5% tax, subtotal is $600, tax is $30, and purchase order total is $630.",
  tax:
    "If the net amount is $100 and the tax rate is 20%, tax is $20 and the gross total is $120. To remove 20% tax from $120, net amount is $120 / 1.2 = $100.",
  businessDays:
    "From May 1 to May 31, 2026, the calculator counts weekdays and excludes Saturdays and Sundays to estimate business days.",
  overtime:
    "If your hourly rate is $25, you work 40 regular hours and 5 overtime hours at 1.5x, regular pay is $1,000, overtime pay is $187.50, and total pay is $1,187.50.",
};

const useCasesByType = {
  salary: ["Convert annual salary to monthly pay", "Estimate weekly or daily income", "Compare job offers", "Understand hourly value from salary", "Plan a personal budget"],
  hourlySalary: ["Compare hourly and salaried roles", "Estimate annual income from hourly work", "Model part-time schedules", "Plan income with unpaid time off", "Check a raise or new hourly rate"],
  salaryHourly: ["Compare salary with contract rates", "Understand the hourly value of a job offer", "Evaluate long workweeks", "Estimate overtime expectations", "Plan freelance pricing"],
  monthlySalary: ["Plan monthly budgets", "Compare pay quoted in different periods", "Estimate rent affordability", "Convert weekly income to monthly income", "Review job offer numbers"],
  weeklyPay: ["Budget week by week", "Estimate pay for variable hours", "Check hourly earnings", "Compare weekly shifts", "Plan short-term income"],
  biweeklyPay: ["Understand biweekly paychecks", "Compare salary offers", "Plan bills around payday", "Estimate gross paycheck amounts", "Check hourly pay over two weeks"],
  takeHome: ["Estimate net income", "Model tax and deduction scenarios", "Compare job offers", "Plan monthly spending", "Understand payroll deductions"],
  grossNet: ["Convert gross pay to net pay", "Estimate deduction impact", "Compare salary packages", "Plan budgets after deductions", "Model benefit contributions"],
  profitMargin: ["Price products", "Check profitability", "Compare supplier costs", "Review sales offers", "Set margin targets"],
  markup: ["Set selling prices", "Calculate markup percentage", "Prepare quotes", "Review product pricing", "Compare cost changes"],
  discount: ["Calculate sale prices", "Plan promotions", "Compare offers", "Check customer savings", "Protect profit margins"],
  breakEven: ["Plan a new product", "Estimate required sales", "Review fixed costs", "Set revenue targets", "Decide whether a project is viable"],
  loan: ["Estimate business loan payments", "Compare finance options", "Plan monthly cash flow", "Estimate total interest", "Check affordability"],
  freelanceRate: ["Set freelance rates", "Account for non-billable time", "Cover expenses and taxes", "Compare project pricing", "Plan annual revenue"],
  invoice: ["Create client invoices", "Calculate invoice totals", "Add tax to line items", "Print or save a PDF", "Send a simple payment request"],
  receipt: ["Record payments received", "Create customer receipts", "Track paid items", "Print payment records", "Support bookkeeping"],
  estimate: ["Prepare project quotes", "Share expected costs", "Scope client work", "Add estimated tax", "Print or save a quote"],
  purchaseOrder: ["Create purchase requests", "Document supplier orders", "Estimate order totals", "Track quantities and prices", "Print purchasing records"],
  tax: ["Add tax to a price", "Remove tax from a total", "Prepare invoice totals", "Check checkout amounts", "Compare tax-inclusive and tax-exclusive prices"],
  businessDays: ["Calculate project timelines", "Check payment terms", "Estimate delivery windows", "Plan notice periods", "Count working days"],
  overtime: ["Estimate overtime pay", "Compare overtime multipliers", "Check weekly earnings", "Plan extra shifts", "Review payroll estimates"],
};

function normalizeFaq(faq) {
  return faq.map(([question, answer]) => ({ question, answer }));
}

function buildFaqs(page) {
  const existing = normalizeFaq(page.faq || []);
  const defaults = [
    {
      question: `What is a ${page.title.toLowerCase()}?`,
      answer: `A ${page.title.toLowerCase()} helps you estimate ${page.description.toLowerCase()}`,
    },
    {
      question: `Is this ${page.title.toLowerCase()} free?`,
      answer: "Yes. It is free to use and does not require signup.",
    },
    {
      question: "Are the results exact?",
      answer: "No. Results are estimates based on the values you enter and may differ from actual payroll, tax, invoice, or business outcomes.",
    },
    {
      question: "Can I use this on mobile?",
      answer: "Yes. The calculator is designed to work on desktop, tablet, and mobile screens.",
    },
  ];
  const merged = [...existing, ...defaults];
  return merged
    .filter((item, index, array) => array.findIndex((match) => match.question === item.question) === index)
    .slice(0, 7);
}

Object.entries(toolPages).forEach(([slug, page]) => {
  const category = page.category;
  const relatedSlugs = (relatedByCategory[category] || [])
    .filter((item) => item !== slug)
    .slice(0, 7);

  page.slug = slug;
  page.h1 = page.title;
  page.metaTitle =
    page.metaTitle || `${page.title} - ${page.description.replace(/\.$/, "")}`;
  page.metaDescription =
    page.metaDescription || `Use this free ${page.title.toLowerCase()} to ${page.description.toLowerCase()}`;
  page.canonical = page.path;
  page.ogTitle = page.metaTitle;
  page.ogDescription = page.metaDescription;
  page.categoryPath = categoryPaths[category];
  page.description = page.intro;
  page.howItWorksTitle = `How the ${page.title} Works`;
  page.howItWorks = page.explanation.join(" ");
  page.formulaTitle = `${page.title} Formula`;
  page.formula = page.formula || formulasByType[page.type] || [];
  page.exampleTitle = `Example ${page.title.replace("Generator", "Calculation")}`;
  page.example = page.example || examplesByType[page.type];
  page.useCasesTitle = `When to Use This ${page.title}`;
  page.useCases = page.useCases || useCasesByType[page.type] || [];
  page.relatedTools = page.relatedTools || relatedSlugs;
  page.faqs = buildFaqs(page);
  page.disclaimer = page.disclaimer || defaultDisclaimer;
});

export function getToolPage(slug) {
  return toolPages[slug];
}
