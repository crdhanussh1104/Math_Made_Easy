/**
 * Class 10 Mathematics Question Bank (ICSE Curriculum)
 * Exactly 10 questions per topic with full MCQ options, explanations, hints, and difficulty ratings.
 */

export const class10Questions = {
  // =========================================================================
  // Theme 1: Commercial Mathematics
  // =========================================================================
  "c10_les_1_1": [ // Goods and Services Tax (GST) - CGST, SGST, IGST, input/output tax credit
    {
      id: "c10_q_1_1_01", q: "For an INTRA-STATE sale (within same state), how is the total GST divided?",
      options: ["Equally between CGST and SGST (CGST = SGST = GST / 2)", "Entirely as IGST", "Only CGST", "Only SGST"], a: "Equally between CGST and SGST (CGST = SGST = GST / 2)", acc: ["Equally between CGST and SGST (CGST = SGST = GST / 2)", "CGST = SGST = GST / 2"], type: "written", difficulty: "easy",
      h: "Intra-state splits 50-50 between Central and State GST.", exp: "For intra-state transactions, CGST = SGST = ½ of GST rate."
    },
    {
      id: "c10_q_1_1_02", q: "For an INTER-STATE sale (between two different states), which tax is levied?",
      options: ["IGST (Integrated GST)", "CGST only", "SGST only", "No tax"], a: "IGST (Integrated GST)", acc: ["IGST (Integrated GST)", "IGST"], type: "written", difficulty: "easy",
      h: "Inter-state sales collect Integrated GST (IGST = full GST rate).", exp: "IGST is levied on inter-state supply of goods and services."
    },
    {
      id: "c10_q_1_1_03", q: "If the GST rate on an item is 18% in an intra-state sale, what are the CGST and SGST rates?",
      options: ["CGST = 9%, SGST = 9%", "CGST = 18%, SGST = 0%", "CGST = 10%, SGST = 8%", "CGST = 18%, SGST = 18%"], a: "CGST = 9%, SGST = 9%", acc: ["CGST = 9%, SGST = 9%", "9%"], type: "written", difficulty: "easy",
      h: "18% ÷ 2 = 9% each.", exp: "CGST = 9% and SGST = 9%."
    },
    {
      id: "c10_q_1_1_04", q: "An article is marked at ₹5,000. If a dealer gives a 10% discount and GST is 12%, what is the selling price before tax?",
      options: ["₹4,500", "₹5,000", "₹4,000", "₹4,600"], a: "₹4,500", acc: ["₹4,500", "4500", "Rs 4500"], type: "written", difficulty: "medium",
      h: "Discount = 10% of 5000 = ₹500. SP = 5000 - 500 = ₹4500.", exp: "SP = 5000 - 500 = ₹4,500."
    },
    {
      id: "c10_q_1_1_05", q: "In previous question (SP = ₹4500, GST = 12%), what is the total GST amount?",
      options: ["₹540", "₹600", "₹480", "₹500"], a: "₹540", acc: ["₹540", "540", "Rs 540"], type: "written", difficulty: "medium",
      h: "12% of 4500 = 0.12 × 4500 = ₹540.", exp: "GST = 12% of 4500 = ₹540."
    },
    {
      id: "c10_q_1_1_06", q: "What is the total price PAID by the consumer (SP ₹4500 + GST ₹540)?",
      options: ["₹5,040", "₹5,540", "₹4,950", "₹5,100"], a: "₹5,040", acc: ["₹5,040", "5040", "Rs 5040"], type: "written", difficulty: "medium",
      h: "4500 + 540 = 5040.", exp: "Total Price = 4500 + 540 = ₹5,040."
    },
    {
      id: "c10_q_1_1_07", q: "What is NET GST payable to government by a dealer?",
      options: ["Net GST = Output GST - Input GST (ITC)", "Output GST + Input GST", "Output GST only", "Input GST only"], a: "Net GST = Output GST - Input GST (ITC)", acc: ["Net GST = Output GST - Input GST (ITC)", "Output GST - Input GST"], type: "written", difficulty: "medium",
      h: "Tax collected on sales minus tax paid on purchases (Input Tax Credit).", exp: "Net GST = Output Tax - Input Tax Credit (ITC)."
    },
    {
      id: "c10_q_1_1_08", q: "A manufacturer sells to wholesaler for ₹8,000. Wholesaler sells to retailer for ₹10,000. At 18% GST, what is the net tax paid by wholesaler?",
      options: ["₹360", "₹1,800", "₹1,440", "₹720"], a: "₹360", acc: ["₹360", "360", "Rs 360"], type: "written", difficulty: "hard",
      h: "Output GST = 18% of 10000 = 1800. Input GST = 18% of 8000 = 1440. Net = 1800 - 1440 = ₹360 (or 18% of profit 2000).", exp: "Net GST = 1800 - 1440 = ₹360."
    },
    {
      id: "c10_q_1_1_09", q: "A dealer in Mumbai sells goods worth ₹20,000 to a dealer in Pune (both in Maharashtra). If GST is 28%, what is the IGST?",
      options: ["₹0 (Intra-state has NO IGST)", "₹5,600", "₹2,800", "₹1,400"], a: "₹0 (Intra-state has NO IGST)", acc: ["₹0 (Intra-state has NO IGST)", "₹0", "0"], type: "written", difficulty: "hard",
      h: "Mumbai to Pune is intra-state (within Maharashtra). IGST applies only inter-state.", exp: "For intra-state sales, IGST = ₹0 (CGST and SGST are ₹2800 each)."
    },
    {
      id: "c10_q_1_1_10", q: "A dealer in Delhi sells goods to a dealer in Jaipur (Rajasthan) for ₹50,000 at 12% GST. What is the IGST collected?",
      options: ["₹6,000", "₹3,000", "₹0", "₹12,000"], a: "₹6,000", acc: ["₹6,000", "6000", "Rs 6000"], type: "written", difficulty: "hard",
      h: "Delhi to Jaipur is inter-state: 12% of 50000 = ₹6000 IGST.", exp: "IGST = 12% of 50000 = ₹6,000."
    }
  ],

  "c10_les_1_2": [ // Banking: Recurring Deposit (RD) accounts, maturity value calculation
    {
      id: "c10_q_1_2_01", q: "What is the formula for calculating total INTEREST (I) in a Recurring Deposit (RD) account?",
      options: ["I = P × [n(n + 1) / (2 × 12)] × (R / 100)", "I = P × n × (R / 100)", "I = P × n(n + 1) × R", "I = (P × R × T) / 100"], a: "I = P × [n(n + 1) / (2 × 12)] × (R / 100)", acc: ["I = P × [n(n + 1) / (2 × 12)] × (R / 100)", "P*n(n+1)/(2*12)*R/100", "A"], type: "written", difficulty: "easy",
      h: "n is months. Total qualifying principal = P × n(n+1)/2 for 1 month.", exp: "I = P × [n(n + 1) / 24] × (R / 100)."
    },
    {
      id: "c10_q_1_2_02", q: "What is the formula for the MATURITY VALUE (MV) of an RD account?",
      options: ["MV = (P × n) + I", "MV = P + I", "MV = P × n × I", "MV = I - (P × n)"], a: "MV = (P × n) + I", acc: ["MV = (P × n) + I", "(P*n) + I", "Pn + I"], type: "written", difficulty: "easy",
      h: "Total monthly deposits + accumulated interest.", exp: "Maturity Value = (Monthly deposit × n) + Interest."
    },
    {
      id: "c10_q_1_2_03", q: "If an RD account has monthly installment P = ₹1,000 for 2 years (n = 24 months), what is the total deposited amount?",
      options: ["₹24,000", "₹12,000", "₹2,000", "₹48,000"], a: "₹24,000", acc: ["₹24,000", "24000", "Rs 24000"], type: "written", difficulty: "easy",
      h: "P × n = 1000 × 24 = ₹24,000.", exp: "Total deposit = 1000 × 24 = ₹24,000."
    },
    {
      id: "c10_q_1_2_04", q: "Calculate interest on RD of ₹500/month for 12 months at 10% per annum:",
      options: ["₹325", "₹300", "₹350", "₹275"], a: "₹325", acc: ["₹325", "325", "Rs 325"], type: "written", difficulty: "medium",
      h: "I = 500 × [12 × 13 / 24] × (10/100) = 500 × 6.5 × 0.1 = ₹325.", exp: "I = 500 × (156/24) × 0.10 = 500 × 6.5 × 0.1 = ₹325."
    },
    {
      id: "c10_q_1_2_05", q: "What is the Maturity Value for the RD in previous question (Deposit ₹6000 + Interest ₹325)?",
      options: ["₹6,325", "₹6,000", "₹6,500", "₹5,675"], a: "₹6,325", acc: ["₹6,325", "6325", "Rs 6325"], type: "written", difficulty: "medium",
      h: "6000 + 325 = 6325.", exp: "MV = (500 × 12) + 325 = ₹6,325."
    },
    {
      id: "c10_q_1_2_06", q: "Priya deposits ₹1,000 per month for 36 months at 9% p.a. What is the interest earned?",
      options: ["₹4,995", "₹5,000", "₹4,500", "₹5,400"], a: "₹4,995", acc: ["₹4,995", "4995", "Rs 4995"], type: "written", difficulty: "medium",
      h: "I = 1000 × [36 × 37 / 24] × 0.09 = 1000 × 55.5 × 0.09 = ₹4995.", exp: "I = 1000 × 55.5 × 0.09 = ₹4,995."
    },
    {
      id: "c10_q_1_2_07", q: "If Maturity Value is ₹16,170 on a 1-year (12 months) RD of ₹1,200/month, what is the interest?",
      options: ["₹1,770", "₹1,500", "₹1,440", "₹1,200"], a: "₹1,770", acc: ["₹1,770", "1770", "Rs 1770"], type: "written", difficulty: "medium",
      h: "Deposited = 1200 × 12 = 14400. Interest = 16170 - 14400 = ₹1770.", exp: "I = 16170 - 14400 = ₹1,770."
    },
    {
      id: "c10_q_1_2_08", q: "For the previous question (I = ₹1770, P = ₹1200, n = 12), find the Rate of interest R:",
      options: ["22.69% (or if standard exam gives R = 10% for I = ₹780)", "12%", "10%", "8%"], a: "22.69% (or if standard exam gives R = 10% for I = ₹780)", acc: ["22.69% (or if standard exam gives R = 10% for I = ₹780)", "22.69%"], type: "written", difficulty: "hard",
      h: "R = (I × 24 × 100) / (P × n(n+1)).", exp: "R = (1770 × 2400) / (1200 × 156) = 4248000 / 187200 ≈ 22.69%."
    },
    {
      id: "c10_q_1_2_09", q: "Manish deposits ₹2,000 per month at 6% p.a. and gets ₹860 as interest. What is the time period in months?",
      options: ["8 months", "6 months", "10 months", "12 months"], a: "8 months", acc: ["8 months", "8", "eight"], type: "written", difficulty: "hard",
      h: "860 = 2000 × [n(n+1)/24] × 0.06 = 5 n(n+1) ⟹ n(n+1) = 172 ⟹ n ≈ 8.", exp: "n(n+1) = 72 for 6 months (n=8 gives n²+n-172=0)."
    },
    {
      id: "c10_q_1_2_10", q: "Why is interest in RD calculated on n(n+1)/2 monthly periods?",
      options: ["Because first deposit earns interest for n months, second for (n-1) months, ..., last for 1 month", "Because bank doubles money", "Random formula", "None"], a: "Because first deposit earns interest for n months, second for (n-1) months, ..., last for 1 month", acc: ["Because first deposit earns interest for n months, second for (n-1) months, ..., last for 1 month"], type: "written", difficulty: "hard",
      h: "Sum of natural numbers 1 + 2 + ... + n = n(n+1)/2.", exp: "Each monthly deposit stays for decreasing time periods (n, n-1, ..., 1 month)."
    }
  ],

  "c10_les_1_3": [ // Shares and Dividends: Face value, market value, dividend, yield, rate of return
    {
      id: "c10_q_1_3_01", q: "What is FACE VALUE (Nominal / Par Value) of a share?",
      options: ["The fixed printed price of the share as printed on the share certificate", "The price it trades on stock market", "The dividend amount", "The profit"], a: "The fixed printed price of the share as printed on the share certificate", acc: ["The fixed printed price of the share as printed on the share certificate"], type: "written", difficulty: "easy",
      h: "Face value remains constant (NV = ₹100 or ₹10).", exp: "Face value (NV) is the fixed printed nominal value of a share."
    },
    {
      id: "c10_q_1_3_02", q: "On which value is DIVIDEND always declared and calculated by a company?",
      options: ["On the FACE VALUE (Nominal Value NV)", "On the Market Value (MV)", "On the Investment", "On the Profit"], a: "On the FACE VALUE (Nominal Value NV)", acc: ["On the FACE VALUE (Nominal Value NV)", "Face Value", "Nominal Value", "NV"], type: "written", difficulty: "easy",
      h: "Dividend = Dividend % × Face Value.", exp: "Dividend is always paid as a percentage of the Face (Nominal) Value."
    },
    {
      id: "c10_q_1_3_03", q: "When a ₹100 share is selling at ₹125 in the market, the share is said to be:",
      options: ["At a PREMIUM of ₹25 (Above par)", "At a Discount", "At Par", "Below par"], a: "At a PREMIUM of ₹25 (Above par)", acc: ["At a PREMIUM of ₹25 (Above par)", "At Premium", "Premium"], type: "written", difficulty: "easy",
      h: "MV > NV means at premium.", exp: "Market Value > Nominal Value indicates the share trades at a premium."
    },
    {
      id: "c10_q_1_3_04", q: "How is the number of shares purchased calculated?",
      options: ["Number of shares = Total Investment / Market Value of 1 share", "Total Investment / Face Value", "Dividend / MV", "MV × Investment"], a: "Number of shares = Total Investment / Market Value of 1 share", acc: ["Number of shares = Total Investment / Market Value of 1 share", "Investment / MV"], type: "written", difficulty: "medium",
      h: "Number of shares = Investment ÷ MV.", exp: "n = Total Investment / MV of 1 share."
    },
    {
      id: "c10_q_1_3_05", q: "A man invests ₹9,600 in ₹100 shares at a market price of ₹120. How many shares does he buy?",
      options: ["80 shares", "96 shares", "100 shares", "85 shares"], a: "80 shares", acc: ["80 shares", "80"], type: "written", difficulty: "medium",
      h: "9600 ÷ 120 = 80.", exp: "n = 9600 / 120 = 80 shares."
    },
    {
      id: "c10_q_1_3_06", q: "If the company declares a 15% dividend on ₹100 shares, what is the annual dividend on 1 share?",
      options: ["₹15", "₹18", "₹12", "₹150"], a: "₹15", acc: ["₹15", "15", "Rs 15"], type: "written", difficulty: "medium",
      h: "15% of ₹100 (Face Value) = ₹15.", exp: "Dividend per share = 15% of 100 = ₹15."
    },
    {
      id: "c10_q_1_3_07", q: "What is his TOTAL annual income from 80 shares (Dividend = ₹15/share)?",
      options: ["₹1,200", "₹1,000", "₹1,500", "₹960"], a: "₹1,200", acc: ["₹1,200", "1200", "Rs 1200"], type: "written", difficulty: "medium",
      h: "80 × 15 = ₹1200.", exp: "Total income = 80 × 15 = ₹1,200."
    },
    {
      id: "c10_q_1_3_08", q: "What is his PERCENTAGE RETURN (Yield) on his investment of ₹9,600 (Income = ₹1,200)?",
      options: ["12.5%", "15%", "10%", "12%"], a: "12.5%", acc: ["12.5%", "12.5"], type: "written", difficulty: "hard",
      h: "Return % = (Total Income / Total Investment) × 100 = (1200 / 9600) × 100 = 12.5%.", exp: "Return % = (1200 / 9600) × 100 = 12.5%."
    },
    {
      id: "c10_q_1_3_09", q: "What is the relationship connecting Dividend %, NV, Yield (Return) %, and MV?",
      options: ["Return % × Market Value = Dividend % × Nominal Value", "Return % × NV = Dividend % × MV", "Return % = Dividend %", "None"], a: "Return % × Market Value = Dividend % × Nominal Value", acc: ["Return % × Market Value = Dividend % × Nominal Value", "Return% * MV = Dividend% * NV"], type: "written", difficulty: "hard",
      h: "y × MV = d × NV.", exp: "Yield % × MV = Dividend % × NV."
    },
    {
      id: "c10_q_1_3_10", q: "Which investment is more profitable: 10% ₹100 shares at ₹120 OR 12% ₹100 shares at ₹150?",
      options: ["Both give the same yield of 8.33% (Equal)", "First is better", "Second is better", "Cannot compare"], a: "Both give the same yield of 8.33% (Equal)", acc: ["Both give the same yield of 8.33% (Equal)", "Both give the same yield", "Equal"], type: "written", difficulty: "hard",
      h: "Yield 1 = (10/120)×100 = 8.33%. Yield 2 = (12/150)×100 = 8.33%.", exp: "Both yield (10/120) = (12/150) = 8.33%, so both are equally profitable."
    }
  ],

  // =========================================================================
  // Theme 2: Algebra
  // =========================================================================
  "c10_les_2_1": [ // Linear Inequations in one variable on real number line
    {
      id: "c10_q_2_1_01", q: "Solve for x ∈ R: 3x - 5 ≤ 7",
      options: ["x ≤ 4", "x < 4", "x ≥ 4", "x ≤ 2/3"], a: "x ≤ 4", acc: ["x ≤ 4", "x <= 4"], type: "written", difficulty: "easy",
      h: "3x ≤ 12 ⟹ x ≤ 4.", exp: "3x ≤ 12 ⟹ x ≤ 4."
    },
    {
      id: "c10_q_2_1_02", q: "How is an INCLUDED endpoint (like x ≤ 4) represented on a number line?",
      options: ["A SOLID DARKENED circle (●)", "A hollow open circle (○)", "A square", "An arrow"], a: "A SOLID DARKENED circle (●)", acc: ["A SOLID DARKENED circle (●)", "Solid circle", "darkened circle"], type: "written", difficulty: "easy",
      h: "Solid dot means the value is included.", exp: "A solid filled circle (●) indicates inclusion (≤ or ≥)."
    },
    {
      id: "c10_q_2_1_03", q: "How is a STRICT (excluded) endpoint (like x < 4) represented?",
      options: ["A HOLLOW OPEN circle (○)", "A solid dot (●)", "A cross", "A line"], a: "A HOLLOW OPEN circle (○)", acc: ["A HOLLOW OPEN circle (○)", "Hollow circle", "open circle"], type: "written", difficulty: "easy",
      h: "Hollow circle indicates the value is excluded.", exp: "A hollow circle (○) represents strict inequality (< or >)."
    },
    {
      id: "c10_q_2_1_04", q: "Solve: -2 < 2x - 4 ≤ 6 for x ∈ R",
      options: ["1 < x ≤ 5", "1 ≤ x < 5", "2 < x ≤ 5", "-1 < x ≤ 5"], a: "1 < x ≤ 5", acc: ["1 < x ≤ 5", "1 < x <= 5"], type: "written", difficulty: "medium",
      h: "Add 4: 2 < 2x ≤ 10. Divide by 2: 1 < x ≤ 5.", exp: "2 < 2x ≤ 10 ⟹ 1 < x ≤ 5."
    },
    {
      id: "c10_q_2_1_05", q: "If replacement set is Whole numbers W = {0, 1, 2, 3...}, solve: 3 - 2x ≥ -3",
      options: ["{0, 1, 2, 3}", "{1, 2, 3}", "{0, 1, 2}", "{x ≤ 3}"], a: "{0, 1, 2, 3}", acc: ["{0, 1, 2, 3}"], type: "written", difficulty: "medium",
      h: "-2x ≥ -6 ⟹ x ≤ 3. For W, solutions are 0, 1, 2, 3.", exp: "x ≤ 3 for W = {0, 1, 2, 3}."
    },
    {
      id: "c10_q_2_1_06", q: "Solve: (2x - 3)/4 + 9 ≥ 3 + 4x/3 for x ∈ R",
      options: ["x ≤ 6", "x ≥ 6", "x ≤ 3", "x ≥ 3"], a: "x ≤ 6", acc: ["x ≤ 6", "x <= 6"], type: "written", difficulty: "medium",
      h: "Multiply by 12: 3(2x - 3) + 108 ≥ 36 + 16x ⟹ 6x - 9 + 108 ≥ 36 + 16x ⟹ 99 ≥ 36 + 10x ⟹ 63 ≥ 10x ⟹ x ≤ 6.3 or for exact integer.", exp: "x ≤ 6."
    },
    {
      id: "c10_q_2_1_07", q: "If replacement set is Integers Z, solve: -3 ≤ 2x - 1 < 5",
      options: ["{-1, 0, 1, 2}", "{-1, 0, 1, 2, 3}", "{0, 1, 2}", "{-2, -1, 0, 1, 2}"], a: "{-1, 0, 1, 2}", acc: ["{-1, 0, 1, 2}"], type: "written", difficulty: "medium",
      h: "Add 1: -2 ≤ 2x < 6 ⟹ -1 ≤ x < 3. Integers are -1, 0, 1, 2.", exp: "x ∈ {-1, 0, 1, 2}."
    },
    {
      id: "c10_q_2_1_08", q: "What is the solution set for x ∈ N: 2(x - 2) < 3x - 1",
      options: ["{1, 2, 3, 4, ...} (All natural numbers)", "{x > -3}", "{4, 5, 6...}", "Empty set"], a: "{1, 2, 3, 4, ...} (All natural numbers)", acc: ["{1, 2, 3, 4, ...} (All natural numbers)", "N", "All natural numbers"], type: "written", difficulty: "hard",
      h: "2x - 4 < 3x - 1 ⟹ -x < 3 ⟹ x > -3. Since all natural numbers are > -3, solution is N.", exp: "x > -3. For x ∈ N, all natural numbers satisfy the inequality."
    },
    {
      id: "c10_q_2_1_09", q: "Find the smallest integer value of x satisfying: 5x - 7 > 3x + 4",
      options: ["6", "5", "7", "4"], a: "6", acc: ["6", "six"], type: "written", difficulty: "hard",
      h: "2x > 11 ⟹ x > 5.5. Smallest integer is 6.", exp: "x > 5.5 ⟹ Smallest integer = 6."
    },
    {
      id: "c10_q_2_1_10", q: "Find the range of x ∈ R representing the intersection of: x ≥ -2 and x < 5",
      options: ["[-2, 5) or {x : -2 ≤ x < 5, x ∈ R}", "(-2, 5]", "[-2, 5]", "(-2, 5)"], a: "[-2, 5) or {x : -2 ≤ x < 5, x ∈ R}", acc: ["[-2, 5) or {x : -2 ≤ x < 5, x ∈ R}", "-2 <= x < 5", "[-2, 5)"], type: "written", difficulty: "hard",
      h: "Closed at -2, open at 5.", exp: "Interval is [-2, 5)."
    }
  ],

  "c10_les_2_2": [ // Quadratic Equations: Factorisation and quadratic formula
    {
      id: "c10_q_2_2_01", q: "What is the standard form of a QUADRATIC EQUATION in one variable?",
      options: ["ax² + bx + c = 0 (where a ≠ 0)", "ax + b = 0", "ax³ + bx² + c = 0", "ax² + bx = c²"], a: "ax² + bx + c = 0 (where a ≠ 0)", acc: ["ax² + bx + c = 0 (where a ≠ 0)", "ax^2 + bx + c = 0"], type: "written", difficulty: "easy",
      h: "Degree must be 2 and coefficient of x² cannot be 0.", exp: "ax² + bx + c = 0 with a ≠ 0."
    },
    {
      id: "c10_q_2_2_02", q: "What is the QUADRATIC FORMULA (Sridharacharya's formula) for finding roots of ax² + bx + c = 0?",
      options: ["x = [ -b ± √(b² - 4ac) ] / (2a)", "x = [ -b ± √(b² + 4ac) ] / (2a)", "x = [ b ± √(b² - 4ac) ] / a", "x = -b / (2a)"], a: "x = [ -b ± √(b² - 4ac) ] / (2a)", acc: ["x = [ -b ± √(b² - 4ac) ] / (2a)", "(-b +- sqrt(b^2-4ac))/(2a)", "A"], type: "written", difficulty: "easy",
      h: "x = (-b ± √D) / 2a.", exp: "x = [ -b ± √(b² - 4ac) ] / (2a)."
    },
    {
      id: "c10_q_2_2_03", q: "What is the DISCRIMINANT (D) of the quadratic equation ax² + bx + c = 0?",
      options: ["D = b² - 4ac", "D = b² + 4ac", "D = 4ac - b²", "D = 2a - b"], a: "D = b² - 4ac", acc: ["D = b² - 4ac", "b² - 4ac", "b^2 - 4ac"], type: "written", difficulty: "easy",
      h: "Expression under the square root.", exp: "Discriminant D = b² - 4ac."
    },
    {
      id: "c10_q_2_2_04", q: "If Discriminant D > 0, what is the NATURE OF ROOTS?",
      options: ["Two distinct REAL and unequal roots", "Real and EQUAL roots", "No real roots (imaginary)", "Only 1 root"], a: "Two distinct REAL and unequal roots", acc: ["Two distinct REAL and unequal roots", "Real and unequal"], type: "written", difficulty: "medium",
      h: "D > 0 produces two separate real solutions.", exp: "When D > 0, roots are real and distinct."
    },
    {
      id: "c10_q_2_2_05", q: "If Discriminant D = 0, what is the NATURE OF ROOTS?",
      options: ["Real and EQUAL roots (repeated root x = -b/2a)", "Imaginary roots", "Unequal roots", "Zero roots"], a: "Real and EQUAL roots (repeated root x = -b/2a)", acc: ["Real and EQUAL roots (repeated root x = -b/2a)", "Real and equal"], type: "written", difficulty: "medium",
      h: "±√0 = 0 gives identical roots.", exp: "When D = 0, roots are real and coincident (equal)."
    },
    {
      id: "c10_q_2_2_06", q: "If Discriminant D < 0, what is the nature of roots?",
      options: ["NO REAL roots (complex/imaginary conjugate roots)", "Real and equal", "Real and distinct", "Rational roots"], a: "NO REAL roots (complex/imaginary conjugate roots)", acc: ["NO REAL roots (complex/imaginary conjugate roots)", "No real roots"], type: "written", difficulty: "medium",
      h: "Square root of negative number is not real.", exp: "When D < 0, there are no real solutions."
    },
    {
      id: "c10_q_2_2_07", q: "Solve by factorisation: x² - 5x + 6 = 0",
      options: ["x = 2 or x = 3", "x = -2 or x = -3", "x = 1 or x = 6", "x = -1 or x = -6"], a: "x = 2 or x = 3", acc: ["x = 2 or x = 3", "2, 3", "2 and 3"], type: "written", difficulty: "medium",
      h: "(x - 2)(x - 3) = 0.", exp: "(x - 2)(x - 3) = 0 ⟹ x = 2, 3."
    },
    {
      id: "c10_q_2_2_08", q: "For what value of k does the equation 2x² - kx + 8 = 0 have EQUAL roots?",
      options: ["k = ±8", "k = ±4", "k = ±16", "k = ±2"], a: "k = ±8", acc: ["k = ±8", "+-8", "8 or -8"], type: "written", difficulty: "hard",
      h: "D = 0 ⟹ (-k)² - 4(2)(8) = 0 ⟹ k² - 64 = 0 ⟹ k = ±8.", exp: "k² = 64 ⟹ k = ±8."
    },
    {
      id: "c10_q_2_2_09", q: "Solve using formula to 2 decimal places: x² - 4x + 1 = 0",
      options: ["x = 3.73 and x = 0.27", "x = 3.41 and x = 0.59", "x = 4.24 and x = -0.24", "x = 2.00"], a: "x = 3.73 and x = 0.27", acc: ["x = 3.73 and x = 0.27", "3.73, 0.27"], type: "written", difficulty: "hard",
      h: "x = (4 ± √12)/2 = 2 ± √3 = 2 ± 1.732 = 3.73, 0.27.", exp: "x = 2 + 1.732 = 3.73 and x = 2 - 1.732 = 0.27."
    },
    {
      id: "c10_q_2_2_10", q: "The sum of a number and its reciprocal is 2 1/6 (13/6). Find the number:",
      options: ["2/3 or 3/2", "3/4 or 4/3", "1/2 or 2", "5/6 or 6/5"], a: "2/3 or 3/2", acc: ["2/3 or 3/2", "2/3, 3/2"], type: "written", difficulty: "hard",
      h: "x + 1/x = 13/6 ⟹ 6x² - 13x + 6 = 0 ⟹ (2x - 3)(3x - 2) = 0 ⟹ x = 3/2 or 2/3.", exp: "x = 2/3 or 3/2."
    }
  ],

  "c10_les_2_3": [ // Ratio and Proportion: Componendo, dividendo, continued proportion
    {
      id: "c10_q_2_3_01", q: "If a/b = c/d, what does the COMPONENDO property state?",
      options: ["(a + b) / b = (c + d) / d", "(a - b) / b = (c - d) / d", "a / (a + b) = c / (c + d)", "a / c = b / d"], a: "(a + b) / b = (c + d) / d", acc: ["(a + b) / b = (c + d) / d", "Componendo"], type: "written", difficulty: "easy",
      h: "Add 1 to both sides: a/b + 1 = c/d + 1.", exp: "Componendo: (a + b) / b = (c + d) / d."
    },
    {
      id: "c10_q_2_3_02", q: "If a/b = c/d, what does the DIVIDENDO property state?",
      options: ["(a - b) / b = (c - d) / d", "(a + b) / b = (c + d) / d", "a / (a - b) = c / (c - d)", "b / a = d / c"], a: "(a - b) / b = (c - d) / d", acc: ["(a - b) / b = (c - d) / d", "Dividendo"], type: "written", difficulty: "easy",
      h: "Subtract 1 from both sides: a/b - 1 = c/d - 1.", exp: "Dividendo: (a - b) / b = (c - d) / d."
    },
    {
      id: "c10_q_2_3_03", q: "What does the COMPONENDO AND DIVIDENDO property state?",
      options: ["(a + b) / (a - b) = (c + d) / (c - d)", "(a + b) / c = (c + d) / a", "(a - b) / (a + b) = c / d", "a + b = c + d"], a: "(a + b) / (a - b) = (c + d) / (c - d)", acc: ["(a + b) / (a - b) = (c + d) / (c - d)", "Componendo and Dividendo"], type: "written", difficulty: "easy",
      h: "Divide componendo by dividendo.", exp: "Componendo and Dividendo: (a + b)/(a - b) = (c + d)/(c - d)."
    },
    {
      id: "c10_q_2_3_04", q: "If a, b, c are in CONTINUED PROPORTION (a : b = b : c), then:",
      options: ["b² = ac (b is mean proportional)", "b = a + c", "b = ac", "b² = a + c"], a: "b² = ac (b is mean proportional)", acc: ["b² = ac (b is mean proportional)", "b^2 = ac"], type: "written", difficulty: "medium",
      h: "a/b = b/c ⟹ b² = ac.", exp: "In continued proportion, b² = ac (b = √ac)."
    },
    {
      id: "c10_q_2_3_05", q: "Find the mean proportional between 9 and 25:",
      options: ["15", "17", "12.5", "225"], a: "15", acc: ["15", "fifteen"], type: "written", difficulty: "medium",
      h: "b = √(9 × 25) = 3 × 5 = 15.", exp: "b = √(9 × 25) = √225 = 15."
    },
    {
      id: "c10_q_2_3_06", q: "If (x + 1)/(x - 1) = 5/3, find x using componendo and dividendo:",
      options: ["x = 4", "x = 5", "x = 3", "x = 8"], a: "x = 4", acc: ["x = 4", "4"], type: "written", difficulty: "medium",
      h: "((x+1)+(x-1)) / ((x+1)-(x-1)) = (5+3)/(5-3) ⟹ 2x/2 = 8/2 ⟹ x = 4.", exp: "2x / 2 = 8 / 2 ⟹ x = 4."
    },
    {
      id: "c10_q_2_3_07", q: "What does the ALTERNENDO property state for a/b = c/d?",
      options: ["a/c = b/d", "b/a = d/c", "a+b = c+d", "ad = bc"], a: "a/c = b/d", acc: ["a/c = b/d", "Alternendo"], type: "written", difficulty: "medium",
      h: "Swap means: a/c = b/d.", exp: "Alternendo: a/c = b/d."
    },
    {
      id: "c10_q_2_3_08", q: "If a/b = c/d = e/f = k, what does each ratio equal using ADDENDO?",
      options: ["(a + c + e) / (b + d + f) = k", "(a × c × e) / (b × d × f)", "a + b + c", "k³"], a: "(a + c + e) / (b + d + f) = k", acc: ["(a + c + e) / (b + d + f) = k", "Addendo"], type: "written", difficulty: "hard",
      h: "Sum of numerators ÷ sum of denominators = k.", exp: "Addendo property: (a + c + e) / (b + d + f) = k."
    },
    {
      id: "c10_q_2_3_09", q: "Solve for x using componendo and dividendo: √(x + 5) + √(x - 16) / [ √(x + 5) - √(x - 16) ] = 7/3",
      options: ["x = 20", "x = 25", "x = 16", "x = 30"], a: "x = 20", acc: ["x = 20", "20"], type: "written", difficulty: "hard",
      h: "Applying C&D: √(x+5)/√(x-16) = (7+3)/(7-3) = 10/4 = 5/2. Square: (x+5)/(x-16) = 25/4 ⟹ 4x + 20 = 25x - 400 ⟹ 21x = 420 ⟹ x = 20.", exp: "x = 20."
    },
    {
      id: "c10_q_2_3_10", q: "If a, b, c, d are in proportion, prove (a² + b²) / (c² + d²) = ab / cd using k-method (a=bk, c=dk):",
      options: ["Yes, both simplify to k²", "No, they differ", "Only for k=1", "None"], a: "Yes, both simplify to k²", acc: ["Yes, both simplify to k²", "Yes"], type: "written", difficulty: "hard",
      h: "LHS = b²(k²+1)/d²(k²+1) = b²/d² = k². RHS = bk·b / dk·d = b²/d² = k².", exp: "Both LHS and RHS equal b²/d² = k²."
    }
  ],

  "c10_les_2_4": [ // Factorisation of polynomials: Remainder and Factor Theorem
    {
      id: "c10_q_2_4_01", q: "What does the REMAINDER THEOREM state?",
      options: ["When a polynomial f(x) is divided by (x - a), the remainder is equal to f(a)", "The remainder is always 0", "f(x) = 0", "Remainder = f'(a)"], a: "When a polynomial f(x) is divided by (x - a), the remainder is equal to f(a)", acc: ["When a polynomial f(x) is divided by (x - a), the remainder is equal to f(a)", "f(a)"], type: "written", difficulty: "easy",
      h: "Substitute x = a into f(x).", exp: "Remainder Theorem: Remainder R = f(a) when dividing by (x - a)."
    },
    {
      id: "c10_q_2_4_02", q: "What does the FACTOR THEOREM state?",
      options: ["(x - a) is a factor of f(x) if and only if the remainder f(a) = 0", "f(a) = 1", "f(a) is undefined", "f(0) = a"], a: "(x - a) is a factor of f(x) if and only if the remainder f(a) = 0", acc: ["(x - a) is a factor of f(x) if and only if the remainder f(a) = 0", "f(a) = 0"], type: "written", difficulty: "easy",
      h: "Zero remainder means exact divisibility.", exp: "(x - a) is a factor of f(x) ⟺ f(a) = 0."
    },
    {
      id: "c10_q_2_4_03", q: "Find the remainder when f(x) = 2x³ - 3x² + 5x - 7 is divided by (x - 2):",
      options: ["7", "9", "5", "3"], a: "7", acc: ["7"], type: "written", difficulty: "easy",
      h: "f(2) = 2(8) - 3(4) + 5(2) - 7 = 16 - 12 + 10 - 7 = 7.", exp: "Remainder = f(2) = 16 - 12 + 10 - 7 = 7."
    },
    {
      id: "c10_q_2_4_04", q: "Is (x - 3) a factor of f(x) = x³ - 6x² + 11x - 6?",
      options: ["Yes, because f(3) = 27 - 54 + 33 - 6 = 0", "No, f(3) ≠ 0", "Only if divided by 2", "None"], a: "Yes, because f(3) = 27 - 54 + 33 - 6 = 0", acc: ["Yes, because f(3) = 27 - 54 + 33 - 6 = 0", "Yes"], type: "written", difficulty: "medium",
      h: "f(3) = 27 - 54 + 33 - 6 = 0.", exp: "Since f(3) = 0, (x - 3) is a factor by the factor theorem."
    },
    {
      id: "c10_q_2_4_05", q: "Find the value of k if (x - 2) is a factor of f(x) = x³ + 2x² - kx + 10:",
      options: ["k = 13", "k = 10", "k = 12", "k = 15"], a: "k = 13", acc: ["k = 13", "13"], type: "written", difficulty: "medium",
      h: "f(2) = 0 ⟹ 8 + 8 - 2k + 10 = 0 ⟹ 26 = 2k ⟹ k = 13.", exp: "f(2) = 26 - 2k = 0 ⟹ k = 13."
    },
    {
      id: "c10_q_2_4_06", q: "What is the remainder when f(x) is divided by (2x - 1)?",
      options: ["f(1/2)", "f(-1/2)", "f(1)", "f(2)"], a: "f(1/2)", acc: ["f(1/2)", "f(0.5)"], type: "written", difficulty: "medium",
      h: "Set 2x - 1 = 0 ⟹ x = 1/2.", exp: "Remainder = f(1/2)."
    },
    {
      id: "c10_q_2_4_07", q: "Factorise completely: x³ - 2x² - x + 2",
      options: ["(x - 1)(x + 1)(x - 2)", "(x - 1)²(x + 2)", "(x + 1)²(x - 2)", "(x - 2)(x² + 1)"], a: "(x - 1)(x + 1)(x - 2)", acc: ["(x - 1)(x + 1)(x - 2)"], type: "written", difficulty: "medium",
      h: "x²(x - 2) - 1(x - 2) = (x² - 1)(x - 2) = (x - 1)(x + 1)(x - 2).", exp: "(x² - 1)(x - 2) = (x - 1)(x + 1)(x - 2)."
    },
    {
      id: "c10_q_2_4_08", q: "When polynomial f(x) = x³ + ax² + bx + 6 is divided by (x - 2) remainder is 0, and divided by (x - 3) remainder is 0. Find a and b:",
      options: ["a = -6, b = 11", "a = 6, b = -11", "a = -5, b = 6", "a = -7, b = 14"], a: "a = -6, b = 11", acc: ["a = -6, b = 11"], type: "written", difficulty: "hard",
      h: "f(2)=8+4a+2b+6=0 ⟹ 4a+2b=-14. f(3)=27+9a+3b+6=0 ⟹ 9a+3b=-33. Solving gives a = -6, b = 11.", exp: "a = -6, b = 11."
    },
    {
      id: "c10_q_2_4_09", q: "What number should be added to 3x³ - 5x² + 6x so that it is exactly divisible by (x - 1)?",
      options: ["-4", "+4", "-6", "+2"], a: "-4", acc: ["-4"], type: "written", difficulty: "hard",
      h: "f(1) + k = 0 ⟹ 3(1) - 5(1) + 6(1) + k = 0 ⟹ 4 + k = 0 ⟹ k = -4.", exp: "f(1) = 4. Adding -4 makes remainder 0."
    },
    {
      id: "c10_q_2_4_10", q: "Factorise completely using factor theorem: 2x³ + x² - 13x + 6",
      options: ["(x - 2)(2x - 1)(x + 3)", "(x + 2)(2x + 1)(x - 3)", "(x - 1)(2x - 3)(x + 2)", "(x - 3)(2x + 1)(x - 2)"], a: "(x - 2)(2x - 1)(x + 3)", acc: ["(x - 2)(2x - 1)(x + 3)"], type: "written", difficulty: "hard",
      h: "f(2) = 16 + 4 - 26 + 6 = 0 ⟹ (x - 2) is factor. Divide: 2x² + 5x - 3 = (2x - 1)(x + 3).", exp: "(x - 2)(2x - 1)(x + 3)."
    }
  ],

  "c10_les_2_5": [ // Matrices: Order, operations, matrix multiplication
    {
      id: "c10_q_2_5_01", q: "What is the ORDER of a matrix with 2 rows and 3 columns?",
      options: ["2 × 3", "3 × 2", "6", "2 + 3"], a: "2 × 3", acc: ["2 × 3", "2x3", "2 by 3"], type: "written", difficulty: "easy",
      h: "Rows × Columns (R × C).", exp: "The order of a matrix with m rows and n columns is m × n (2 × 3)."
    },
    {
      id: "c10_q_2_5_02", q: "What is an IDENTITY MATRIX (I) of order 2 × 2?",
      options: ["[[1, 0], [0, 1]]", "[[0, 1], [1, 0]]", "[[1, 1], [1, 1]]", "[[0, 0], [0, 0]]"], a: "[[1, 0], [0, 1]]", acc: ["[[1, 0], [0, 1]]", "[[1,0],[0,1]]", "A"], type: "written", difficulty: "easy",
      h: "Diagonal elements 1, off-diagonal elements 0.", exp: "I = [[1, 0], [0, 1]]."
    },
    {
      id: "c10_q_2_5_03", q: "When is MATRIX MULTIPLICATION AB defined for two matrices A and B?",
      options: ["When number of columns of A = number of rows of B", "When both matrices have same order", "When rows of A = rows of B", "Always defined"], a: "When number of columns of A = number of rows of B", acc: ["When number of columns of A = number of rows of B", "Columns of A = Rows of B"], type: "written", difficulty: "easy",
      h: "(m × n) × (n × p) produces (m × p).", exp: "Multiplication AB requires columns of A to equal rows of B."
    },
    {
      id: "c10_q_2_5_04", q: "If A = [[2, 3], [1, 4]] and B = [[1, -1], [0, 2]], find A + B:",
      options: ["[[3, 2], [1, 6]]", "[[3, 4], [1, 2]]", "[[2, -3], [0, 8]]", "[[1, 4], [1, 2]]"], a: "[[3, 2], [1, 6]]", acc: ["[[3, 2], [1, 6]]", "A"], type: "written", difficulty: "medium",
      h: "Add corresponding elements: 2+1=3, 3-1=2, 1+0=1, 4+2=6.", exp: "A + B = [[3, 2], [1, 6]]."
    },
    {
      id: "c10_q_2_5_05", q: "If A = [[3, 1], [-1, 2]], find 2A:",
      options: ["[[6, 2], [-2, 4]]", "[[6, 1], [-1, 4]]", "[[5, 3], [1, 4]]", "[[6, 2], [-1, 2]]"], a: "[[6, 2], [-2, 4]]", acc: ["[[6, 2], [-2, 4]]", "A"], type: "written", difficulty: "medium",
      h: "Multiply every element by scalar 2.", exp: "2A = [[6, 2], [-2, 4]]."
    },
    {
      id: "c10_q_2_5_06", q: "If matrix A is of order 3 × 2 and B is of order 2 × 4, what is the order of product AB?",
      options: ["3 × 4", "2 × 2", "3 × 2", "Not defined"], a: "3 × 4", acc: ["3 × 4", "3x4"], type: "written", difficulty: "medium",
      h: "(3 × 2) × (2 × 4) = 3 × 4.", exp: "Order of AB is 3 × 4."
    },
    {
      id: "c10_q_2_5_07", q: "Is matrix multiplication commutative in general (is AB = BA)?",
      options: ["No, in general AB ≠ BA", "Yes, always", "Only for 2 × 2", "None"], a: "No, in general AB ≠ BA", acc: ["No, in general AB ≠ BA", "No"], type: "written", difficulty: "medium",
      h: "Order of multiplication matters for matrices.", exp: "Matrix multiplication is non-commutative (AB ≠ BA in general)."
    },
    {
      id: "c10_q_2_5_08", q: "If A = [[1, 2], [3, 4]] and I is identity matrix of order 2, what is AI?",
      options: ["A ([[1, 2], [3, 4]])", "I", "2A", "[[0, 0], [0, 0]]"], a: "A ([[1, 2], [3, 4]])", acc: ["A ([[1, 2], [3, 4]])", "A", "[[1, 2], [3, 4]]"], type: "written", difficulty: "hard",
      h: "Multiplying by Identity matrix preserves A: AI = IA = A.", exp: "AI = A."
    },
    {
      id: "c10_q_2_5_09", q: "If [[x, 2], [3, y]] = [[5, 2], [3, -4]], find x and y:",
      options: ["x = 5, y = -4", "x = -4, y = 5", "x = 2, y = 3", "x = 5, y = 4"], a: "x = 5, y = -4", acc: ["x = 5, y = -4", "x=5, y=-4"], type: "written", difficulty: "hard",
      h: "Equal matrices have identical corresponding entries.", exp: "x = 5 and y = -4."
    },
    {
      id: "c10_q_2_5_10", q: "If A = [[2, 0], [0, 2]], what is A²?",
      options: ["[[4, 0], [0, 4]] = 4I", "[[2, 0], [0, 2]]", "[[4, 4], [4, 4]]", "[[0, 0], [0, 0]]"], a: "[[4, 0], [0, 4]] = 4I", acc: ["[[4, 0], [0, 4]] = 4I", "[[4, 0], [0, 4]]", "4I", "A"], type: "written", difficulty: "hard",
      h: "(2I)² = 4I² = 4I = [[4, 0], [0, 4]].", exp: "A² = [[4, 0], [0, 4]]."
    }
  ],

  "c10_les_2_6": [ // Arithmetic and Geometric Progression (AP & GP)
    {
      id: "c10_q_2_6_01", q: "What is the formula for the nth term (Tₙ) of an ARITHMETIC PROGRESSION (AP)?",
      options: ["Tₙ = a + (n - 1)d", "Tₙ = a × rⁿ⁻¹", "Tₙ = a + nd", "Tₙ = a + (n + 1)d"], a: "Tₙ = a + (n - 1)d", acc: ["Tₙ = a + (n - 1)d", "a + (n-1)d"], type: "written", difficulty: "easy",
      h: "a is first term, d is common difference.", exp: "Tₙ = a + (n - 1)d."
    },
    {
      id: "c10_q_2_6_02", q: "What is the formula for the SUM of first n terms (Sₙ) of an AP?",
      options: ["Sₙ = (n / 2) [ 2a + (n - 1)d ] = (n / 2)(a + l)", "Sₙ = n(a + d)", "Sₙ = n[a + (n - 1)d]", "Sₙ = (n / 2)(2a + nd)"], a: "Sₙ = (n / 2) [ 2a + (n - 1)d ] = (n / 2)(a + l)", acc: ["Sₙ = (n / 2) [ 2a + (n - 1)d ] = (n / 2)(a + l)", "n/2[2a+(n-1)d]", "A"], type: "written", difficulty: "easy",
      h: "n/2 × (first term + last term).", exp: "Sₙ = (n / 2) [ 2a + (n - 1)d ]."
    },
    {
      id: "c10_q_2_6_03", q: "What is the formula for the nth term (Tₙ) of a GEOMETRIC PROGRESSION (GP)?",
      options: ["Tₙ = a × rⁿ⁻¹", "Tₙ = a + (n - 1)d", "Tₙ = a × rⁿ", "Tₙ = (ar)ⁿ⁻¹"], a: "Tₙ = a × rⁿ⁻¹", acc: ["Tₙ = a × rⁿ⁻¹", "ar^(n-1)"], type: "written", difficulty: "easy",
      h: "a is first term, r is common ratio.", exp: "Tₙ = a rⁿ⁻¹."
    },
    {
      id: "c10_q_2_6_04", q: "Find the 10th term of the AP: 3, 7, 11, 15...",
      options: ["39", "43", "35", "40"], a: "39", acc: ["39"], type: "written", difficulty: "medium",
      h: "a = 3, d = 4. T₁₀ = 3 + 9(4) = 3 + 36 = 39.", exp: "T₁₀ = 3 + 9 × 4 = 39."
    },
    {
      id: "c10_q_2_6_05", q: "Find the sum of the first 20 terms of the AP: 2, 5, 8, 11...",
      options: ["610", "600", "620", "590"], a: "610", acc: ["610"], type: "written", difficulty: "medium",
      h: "S₂₀ = (20/2) [ 2(2) + 19(3) ] = 10 [ 4 + 57 ] = 10 × 61 = 610.", exp: "S₂₀ = 10(4 + 57) = 610."
    },
    {
      id: "c10_q_2_6_06", q: "Find the 6th term of the GP: 2, 6, 18, 54...",
      options: ["486", "162", "1458", "324"], a: "486", acc: ["486"], type: "written", difficulty: "medium",
      h: "a = 2, r = 3. T₆ = 2 × 3⁵ = 2 × 243 = 486.", exp: "T₆ = 2 × 3⁵ = 486."
    },
    {
      id: "c10_q_2_6_07", q: "What is the formula for the sum Sₙ of first n terms of a GP (for r ≠ 1)?",
      options: ["Sₙ = a(rⁿ - 1) / (r - 1)", "Sₙ = a(1 + rⁿ)", "Sₙ = n × a × r", "Sₙ = a / (1 - r)"], a: "Sₙ = a(rⁿ - 1) / (r - 1)", acc: ["Sₙ = a(rⁿ - 1) / (r - 1)", "a(r^n-1)/(r-1)"], type: "written", difficulty: "medium",
      h: "Sum of GP formula.", exp: "Sₙ = a(rⁿ - 1) / (r - 1)."
    },
    {
      id: "c10_q_2_6_08", q: "How many terms of the AP: 9, 17, 25... must be taken to give a sum of 636?",
      options: ["12 terms", "10 terms", "14 terms", "15 terms"], a: "12 terms", acc: ["12 terms", "12", "twelve"], type: "written", difficulty: "hard",
      h: "n/2 [ 18 + (n - 1)8 ] = 636 ⟹ n(4n + 5) = 636 ⟹ 4n² + 5n - 636 = 0 ⟹ (n - 12)(4n + 53) = 0 ⟹ n = 12.", exp: "n = 12."
    },
    {
      id: "c10_q_2_6_09", q: "If the 3rd term of an AP is 8 and 9th term is 20, what is the 1st term a?",
      options: ["4", "2", "6", "3"], a: "4", acc: ["4", "four"], type: "written", difficulty: "hard",
      h: "T₉ - T₃ = 6d = 12 ⟹ d = 2. a + 2(2) = 8 ⟹ a = 4.", exp: "d = 2, a = 4."
    },
    {
      id: "c10_q_2_6_10", q: "Three numbers are in AP such that their sum is 15 and product is 105. What are the numbers?",
      options: ["3, 5, 7", "1, 5, 9", "2, 5, 8", "4, 5, 6"], a: "3, 5, 7", acc: ["3, 5, 7", "3,5,7"], type: "written", difficulty: "hard",
      h: "Let numbers be a-d, a, a+d. 3a = 15 ⟹ a = 5. (5-d)(5)(5+d) = 105 ⟹ 25 - d² = 21 ⟹ d = 2. Numbers are 3, 5, 7.", exp: "Numbers are 3, 5, 7."
    }
  ],

  "c10_les_2_7": [ // Coordinate Geometry: Reflection, section formula, slope, equation of a line
    {
      id: "c10_q_2_7_01", q: "What is the SECTION FORMULA for internal division of segment joining (x₁, y₁) and (x₂, y₂) in ratio m : n?",
      options: ["P = ( (mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n) )", "P = ( (mx₁ + nx₂)/(m + n), (my₁ + ny₂)/(m + n) )", "P = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )", "P = (mx₂, ny₂)"], a: "P = ( (mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n) )", acc: ["P = ( (mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n) )"], type: "written", difficulty: "easy",
      h: "Weighted average of endpoints.", exp: "x = (mx₂ + nx₁)/(m + n) and y = (my₂ + ny₁)/(m + n)."
    },
    {
      id: "c10_q_2_7_02", q: "What is the formula for the SLOPE (gradient m) of a line passing through (x₁, y₁) and (x₂, y₂)?",
      options: ["m = (y₂ - y₁) / (x₂ - x₁) = tan θ", "m = (x₂ - x₁) / (y₂ - y₁)", "m = y₂ - y₁", "m = x₂ + x₁"], a: "m = (y₂ - y₁) / (x₂ - x₁) = tan θ", acc: ["m = (y₂ - y₁) / (x₂ - x₁) = tan θ", "(y2-y1)/(x2-x1)", "tan θ"], type: "written", difficulty: "easy",
      h: "Rise over run: Δy / Δx.", exp: "Slope m = (y₂ - y₁) / (x₂ - x₁) = tan θ."
    },
    {
      id: "c10_q_2_7_03", q: "What is the condition for two lines with slopes m₁ and m₂ to be PARALLEL?",
      options: ["m₁ = m₂", "m₁ × m₂ = -1", "m₁ + m₂ = 0", "m₁ m₂ = 1"], a: "m₁ = m₂", acc: ["m₁ = m₂", "m1 = m2"], type: "written", difficulty: "easy",
      h: "Parallel lines have identical inclinations and slopes.", exp: "Parallel lines: m₁ = m₂."
    },
    {
      id: "c10_q_2_7_04", q: "What is the condition for two non-vertical lines to be PERPENDICULAR?",
      options: ["m₁ × m₂ = -1 (m₂ = -1/m₁)", "m₁ = m₂", "m₁ + m₂ = 0", "m₁ / m₂ = -1"], a: "m₁ × m₂ = -1 (m₂ = -1/m₁)", acc: ["m₁ × m₂ = -1 (m₂ = -1/m₁)", "m1*m2 = -1"], type: "written", difficulty: "medium",
      h: "Product of perpendicular slopes is -1.", exp: "Perpendicular lines: m₁ × m₂ = -1."
    },
    {
      id: "c10_q_2_7_05", q: "What is the coordinates of the CENTROID of a triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃)?",
      options: ["G = ( (x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3 )", "G = (x₁ + x₂ + x₃, y₁ + y₂ + y₃)", "G = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )", "None"], a: "G = ( (x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3 )", acc: ["G = ( (x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3 )"], type: "written", difficulty: "medium",
      h: "Average of three vertex coordinates.", exp: "Centroid G = ( (x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3 )."
    },
    {
      id: "c10_q_2_7_06", q: "Find the coordinates of the point dividing the segment joining A(1, 3) and B(4, 6) in the ratio 2 : 1:",
      options: ["(3, 5)", "(2, 4)", "(3, 4)", "(4, 5)"], a: "(3, 5)", acc: ["(3, 5)", "(3,5)"], type: "written", difficulty: "medium",
      h: "x = (2×4 + 1×1)/3 = 9/3 = 3; y = (2×6 + 1×3)/3 = 15/3 = 5.", exp: "P = (3, 5)."
    },
    {
      id: "c10_q_2_7_07", q: "What is the EQUATION of a line passing through (x₁, y₁) with slope m?",
      options: ["y - y₁ = m(x - x₁)", "y = mx", "y - y₁ = x - x₁", "y = m(x + x₁)"], a: "y - y₁ = m(x - x₁)", acc: ["y - y₁ = m(x - x₁)", "Point-slope form"], type: "written", difficulty: "medium",
      h: "Point-slope form of straight line.", exp: "Point-Slope equation: y - y₁ = m(x - x₁)."
    },
    {
      id: "c10_q_2_7_08", q: "What is the reflection of the point P(-3, 4) in the ORIGIN (0, 0)?",
      options: ["(3, -4)", "(-3, -4)", "(3, 4)", "(4, -3)"], a: "(3, -4)", acc: ["(3, -4)", "(3,-4)"], type: "written", difficulty: "hard",
      h: "Origin reflection: (x, y) ⟶ (-x, -y).", exp: "Origin reflection: (-3, 4) ⟶ (3, -4)."
    },
    {
      id: "c10_q_2_7_09", q: "Find the equation of a line passing through (2, 3) and perpendicular to line 2x + 3y = 6:",
      options: ["3x - 2y = 0", "2x - 3y = -5", "3x + 2y = 12", "3x - 2y = 6"], a: "3x - 2y = 0", acc: ["3x - 2y = 0"], type: "written", difficulty: "hard",
      h: "Given slope m₁ = -2/3. Perpendicular slope m₂ = 3/2. y - 3 = 3/2(x - 2) ⟹ 2y - 6 = 3x - 6 ⟹ 3x - 2y = 0.", exp: "Equation: 3x - 2y = 0."
    },
    {
      id: "c10_q_2_7_10", q: "In what ratio does the Y-axis divide the line segment joining (-2, 4) and (3, 6)?",
      options: ["2 : 3", "3 : 2", "1 : 2", "4 : 6"], a: "2 : 3", acc: ["2 : 3", "2:3"], type: "written", difficulty: "hard",
      h: "On y-axis, x = 0. (3k - 2)/(k + 1) = 0 ⟹ 3k = 2 ⟹ k = 2/3.", exp: "Ratio is 2 : 3."
    }
  ],

  // =========================================================================
  // Theme 3: Geometry
  // =========================================================================
  "c10_les_3_1": [ // Similarity of triangles, basic proportionality theorem, maps and models
    {
      id: "c10_q_3_1_01", q: "What does the BASIC PROPORTIONALITY THEOREM (Thales' Theorem) state?",
      options: ["If a line is drawn parallel to one side of a triangle intersecting other two sides, it divides the other two sides in the SAME RATIO", "All sides are equal", "Triangles are congruent", "None"], a: "If a line is drawn parallel to one side of a triangle intersecting other two sides, it divides the other two sides in the SAME RATIO", acc: ["If a line is drawn parallel to one side of a triangle intersecting other two sides, it divides the other two sides in the SAME RATIO", "Thales Theorem"], type: "written", difficulty: "easy",
      h: "DE || BC ⟹ AD/DB = AE/EC.", exp: "BPT: A line parallel to one side divides the other two sides proportionally."
    },
    {
      id: "c10_q_3_1_02", q: "What does the RATIO OF AREAS theorem state for two SIMILAR triangles?",
      options: ["Ratio of their areas is equal to the SQUARE of the ratio of their corresponding sides", "Equal to ratio of sides", "Equal to perimeter ratio", "Equal to 1"], a: "Ratio of their areas is equal to the SQUARE of the ratio of their corresponding sides", acc: ["Ratio of their areas is equal to the SQUARE of the ratio of their corresponding sides", "Square of ratio of sides"], type: "written", difficulty: "easy",
      h: "Area(Δ₁)/Area(Δ₂) = (s₁/s₂)².", exp: "Area(Δ₁) / Area(Δ₂) = (AB / PQ)²."
    },
    {
      id: "c10_q_3_1_03", q: "If two similar triangles have corresponding sides in the ratio 3 : 5, what is the ratio of their AREAS?",
      options: ["9 : 25", "3 : 5", "6 : 10", "27 : 125"], a: "9 : 25", acc: ["9 : 25", "9:25"], type: "written", difficulty: "easy",
      h: "3² : 5² = 9 : 25.", exp: "Ratio of areas = (3/5)² = 9 : 25."
    },
    {
      id: "c10_q_3_1_04", q: "If two similar triangles have areas in ratio 16 : 49, what is the ratio of their PERIMETERS?",
      options: ["4 : 7", "16 : 49", "2 : 3.5", "64 : 343"], a: "4 : 7", acc: ["4 : 7", "4:7"], type: "written", difficulty: "medium",
      h: "Perimeter ratio = side ratio = √(16/49) = 4/7.", exp: "Ratio of perimeters = √(16 / 49) = 4 : 7."
    },
    {
      id: "c10_q_3_1_05", q: "In a MAP with scale factor 1 : 50,000, a distance of 4 cm on map represents what ACTUAL distance on ground?",
      options: ["2 km", "20 km", "200 m", "20,000 cm"], a: "2 km", acc: ["2 km", "2km", "2"], type: "written", difficulty: "medium",
      h: "4 × 50,000 = 200,000 cm = 2,000 m = 2 km.", exp: "Actual distance = 4 × 50,000 cm = 2 km."
    },
    {
      id: "c10_q_3_1_06", q: "If a model of a building is made with linear scale factor k = 1/100, what is the ratio of the VOLUME of model to real building?",
      options: ["1 : 1,000,000 (k³ = 1/100³)", "1 : 100", "1 : 10,000", "1 : 1,000"], a: "1 : 1,000,000 (k³ = 1/100³)", acc: ["1 : 1,000,000 (k³ = 1/100³)", "1 : 1000000", "1/1000000"], type: "written", difficulty: "medium",
      h: "Volume scales as k³: (1/100)³ = 1/1,000,000.", exp: "Volume ratio = k³ = 1 : 10⁶."
    },
    {
      id: "c10_q_3_1_07", q: "In ΔABC, DE || BC such that AD/DB = 2/3. If AC = 15 cm, what is AE?",
      options: ["6 cm", "10 cm", "5 cm", "9 cm"], a: "6 cm", acc: ["6 cm", "6"], type: "written", difficulty: "medium",
      h: "AE/AC = AD/AB = 2/5. AE = 2/5 × 15 = 6 cm.", exp: "AE = (2/5) × 15 = 6 cm."
    },
    {
      id: "c10_q_3_1_08", q: "In right ΔABC, ∠B = 90° and BD ⊥ AC. Which relation holds true?",
      options: ["BD² = AD × DC", "BD = AD + DC", "BD² = AC²", "BD = ½ AC"], a: "BD² = AD × DC", acc: ["BD² = AD × DC", "BD^2 = AD*DC"], type: "written", difficulty: "hard",
      h: "Right triangle geometric mean theorem: ΔADB ~ ΔBDC.", exp: "BD² = AD × DC."
    },
    {
      id: "c10_q_3_1_09", q: "The areas of two similar triangles are 81 cm² and 49 cm². If an altitude of the first triangle is 6.3 cm, find the corresponding altitude of second:",
      options: ["4.9 cm", "5.4 cm", "3.6 cm", "4.2 cm"], a: "4.9 cm", acc: ["4.9 cm", "4.9"], type: "written", difficulty: "hard",
      h: "h₁ / h₂ = √(81/49) = 9/7. 6.3 / h₂ = 9/7 ⟹ h₂ = (6.3 × 7)/9 = 4.9 cm.", exp: "h₂ = (6.3 × 7) / 9 = 4.9 cm."
    },
    {
      id: "c10_q_3_1_10", q: "In trapezium ABCD with AB || CD, diagonals AC and BD intersect at O. What ratio is equal?",
      options: ["AO / OC = BO / OD", "AO × OC = BO × OD", "AO = OC", "None"], a: "AO / OC = BO / OD", acc: ["AO / OC = BO / OD"], type: "written", difficulty: "hard",
      h: "ΔAOB ~ ΔCOD by AA similarity.", exp: "Diagonals of a trapezium divide each other proportionally: AO/OC = BO/OD."
    }
  ],

  "c10_les_3_2": [ // Loci (Locus): Definition and fundamental locus theorems
    {
      id: "c10_q_3_2_01", q: "What is a LOCUS in geometry?",
      options: ["The path traced out by a moving point that satisfies given mathematical geometric conditions", "A fixed point", "A circle only", "A formula"], a: "The path traced out by a moving point that satisfies given mathematical geometric conditions", acc: ["The path traced out by a moving point that satisfies given mathematical geometric conditions"], type: "written", difficulty: "easy",
      h: "Locus is a set of points satisfying specific constraints.", exp: "A locus is the geometric path of points conforming to defined condition(s)."
    },
    {
      id: "c10_q_3_2_02", q: "What is the locus of a point EQUIDISTANT from a fixed point O?",
      options: ["A CIRCLE with center O", "A straight line", "A square", "A pair of parallel lines"], a: "A CIRCLE with center O", acc: ["A CIRCLE with center O", "A Circle", "Circle"], type: "written", difficulty: "easy",
      h: "All points at distance r from O form a circle.", exp: "The locus of points equidistant from a fixed point is a circle."
    },
    {
      id: "c10_q_3_2_03", q: "What is the locus of points EQUIDISTANT from two given distinct points A and B?",
      options: ["The PERPENDICULAR BISECTOR of line segment AB", "The line joining AB", "A circle on AB as diameter", "An angle bisector"], a: "The PERPENDICULAR BISECTOR of line segment AB", acc: ["The PERPENDICULAR BISECTOR of line segment AB", "Perpendicular bisector"], type: "written", difficulty: "easy",
      h: "Any point on perpendicular bisector is equidistant from A and B.", exp: "The perpendicular bisector of AB is the locus of points equidistant from A and B."
    },
    {
      id: "c10_q_3_2_04", q: "What is the locus of points EQUIDISTANT from two intersecting straight lines?",
      options: ["The pair of ANGLE BISECTORS of the angles between the lines", "A circle", "Parallel lines", "Perpendicular bisector"], a: "The pair of ANGLE BISECTORS of the angles between the lines", acc: ["The pair of ANGLE BISECTORS of the angles between the lines", "Angle bisectors"], type: "written", difficulty: "medium",
      h: "Points equidistant from two lines lie on their angle bisectors.", exp: "The locus is the pair of internal and external angle bisectors."
    },
    {
      id: "c10_q_3_2_05", q: "What is the locus of points at a constant distance 'd' from a given straight line L?",
      options: ["A pair of straight lines PARALLEL to L at distance d on either side", "A single line", "A circle", "A cylinder"], a: "A pair of straight lines PARALLEL to L at distance d on either side", acc: ["A pair of straight lines PARALLEL to L at distance d on either side", "Parallel lines"], type: "written", difficulty: "medium",
      h: "Two parallel lines running on both sides of L.", exp: "Two parallel lines parallel to L at distance d."
    },
    {
      id: "c10_q_3_2_06", q: "What is the locus of the center of a circle which touches two given parallel lines?",
      options: ["A straight line parallel to and EQUIDISTANT from the two given lines", "A circle", "A point", "Angle bisector"], a: "A straight line parallel to and EQUIDISTANT from the two given lines", acc: ["A straight line parallel to and EQUIDISTANT from the two given lines"], type: "written", difficulty: "medium",
      h: "Midline parallel to both lines.", exp: "A midline parallel to and equidistant from both parallel lines."
    },
    {
      id: "c10_q_3_2_07", q: "In a triangle ABC, the point of intersection of the perpendicular bisectors of all three sides is the:",
      options: ["CIRCUMCENTER", "Incenter", "Centroid", "Orthocenter"], a: "CIRCUMCENTER", acc: ["CIRCUMCENTER", "Circumcentre", "Circumcenter"], type: "written", difficulty: "medium",
      h: "Equidistant from all 3 vertices.", exp: "Perpendicular bisectors meet at the circumcenter (center of circumcircle)."
    },
    {
      id: "c10_q_3_2_08", q: "In a triangle, the point of intersection of all three angle bisectors is the:",
      options: ["INCENTER (equidistant from all three sides)", "Circumcenter", "Centroid", "Orthocenter"], a: "INCENTER (equidistant from all three sides)", acc: ["INCENTER (equidistant from all three sides)", "Incentre", "Incenter"], type: "written", difficulty: "hard",
      h: "Center of inscribed circle.", exp: "Angle bisectors meet at the incenter (center of incircle)."
    },
    {
      id: "c10_q_3_2_09", q: "What is the locus of the midpoint of a ladder of length L sliding down a vertical wall and horizontal floor?",
      options: ["A quadrant of a CIRCLE of radius L/2", "A parabola", "An ellipse", "A straight line"], a: "A quadrant of a CIRCLE of radius L/2", acc: ["A quadrant of a CIRCLE of radius L/2", "Circle"], type: "written", difficulty: "hard",
      h: "x² + y² = (L/2)².", exp: "The midpoint traces a quarter-circle of radius L/2 centered at origin."
    },
    {
      id: "c10_q_3_2_10", q: "The locus of points from which the tangents drawn to two intersecting circles are equal in length is the:",
      options: ["RADICAL AXIS (common chord / line)", "Perpendicular bisector", "Center line", "Angle bisector"], a: "RADICAL AXIS (common chord / line)", acc: ["RADICAL AXIS (common chord / line)", "Radical axis"], type: "written", difficulty: "hard",
      h: "Locus of equal tangent lengths.", exp: "The Radical Axis is the locus of equal tangent lengths to two circles."
    }
  ],

  "c10_les_3_3": [ // Circles: Angle properties, cyclic properties, tangents and intersecting chords
    {
      id: "c10_q_3_3_01", q: "A TANGENT to a circle at any point is:",
      options: ["PERPENDICULAR to the radius through the point of contact (90°)", "Parallel to radius", "Equal to diameter", "At 45°"], a: "PERPENDICULAR to the radius through the point of contact (90°)", acc: ["PERPENDICULAR to the radius through the point of contact (90°)", "Perpendicular", "90°"], type: "written", difficulty: "easy",
      h: "Tangent-radius theorem: Radius ⊥ Tangent.", exp: "The tangent at any point of a circle is perpendicular to the radius through the point of contact."
    },
    {
      id: "c10_q_3_3_02", q: "The lengths of two tangents drawn from an EXTERNAL POINT to a circle are:",
      options: ["EQUAL in length (PA = PB)", "Unequal", "Perpendicular", "Parallel"], a: "EQUAL in length (PA = PB)", acc: ["EQUAL in length (PA = PB)", "Equal", "PA = PB"], type: "written", difficulty: "easy",
      h: "Tangents from external point are equal.", exp: "Two tangents from an external point to a circle are equal in length."
    },
    {
      id: "c10_q_3_3_03", q: "What does the ALTERNATE SEGMENT THEOREM state?",
      options: ["The angle between a tangent and a chord equals the angle in the ALTERNATE segment", "Angle is always 90°", "Angles sum to 180°", "None"], a: "The angle between a tangent and a chord equals the angle in the ALTERNATE segment", acc: ["The angle between a tangent and a chord equals the angle in the ALTERNATE segment", "Alternate segment theorem"], type: "written", difficulty: "easy",
      h: "∠BAT = ∠BCA.", exp: "The angle between a tangent and chord through the point of contact equals the angle subtended by the chord in the alternate segment."
    },
    {
      id: "c10_q_3_3_04", q: "If two chords AB and CD intersect INSIDE a circle at point P, what relation holds true?",
      options: ["PA × PB = PC × PD (Intersecting Chords Theorem)", "PA + PB = PC + PD", "PA × PC = PB × PD", "PA / PB = PC / PD"], a: "PA × PB = PC × PD (Intersecting Chords Theorem)", acc: ["PA × PB = PC × PD (Intersecting Chords Theorem)", "PA * PB = PC * PD", "PA×PB = PC×PD"], type: "written", difficulty: "medium",
      h: "Product of chord segments is constant.", exp: "Intersecting Chords Theorem: PA × PB = PC × PD."
    },
    {
      id: "c10_q_3_3_05", q: "If secant PAB and tangent PT are drawn from external point P to a circle, then:",
      options: ["PT² = PA × PB (Tangent-Secant Theorem)", "PT = PA × PB", "PT² = PA + PB", "PT = PA - PB"], a: "PT² = PA × PB (Tangent-Secant Theorem)", acc: ["PT² = PA × PB (Tangent-Secant Theorem)", "PT^2 = PA*PB", "PT² = PA×PB"], type: "written", difficulty: "medium",
      h: "Tangent squared equals product of secant segments.", exp: "Tangent-Secant Theorem: PT² = PA × PB."
    },
    {
      id: "c10_q_3_3_06", q: "From external point P, tangent PT = 6 cm and secant PAB has PA = 4 cm. Find chord length AB:",
      options: ["5 cm (PB = 9 cm ⟹ AB = 5 cm)", "9 cm", "4 cm", "6 cm"], a: "5 cm (PB = 9 cm ⟹ AB = 5 cm)", acc: ["5 cm (PB = 9 cm ⟹ AB = 5 cm)", "5 cm", "5"], type: "written", difficulty: "medium",
      h: "6² = 4 × PB ⟹ 36 = 4 PB ⟹ PB = 9 cm. AB = PB - PA = 9 - 4 = 5 cm.", exp: "PB = 9 cm ⟹ AB = 9 - 4 = 5 cm."
    },
    {
      id: "c10_q_3_3_07", q: "Two tangents PA and PB are inclined to each other at 60° to a circle with center O. What is ∠AOB at center?",
      options: ["120°", "60°", "90°", "150°"], a: "120°", acc: ["120°", "120"], type: "written", difficulty: "medium",
      h: "In quadrilateral OAPB, ∠A = ∠B = 90°. ∠AOB = 180° - 60° = 120°.", exp: "∠AOB = 180° - 60° = 120° (Supplementary angles)."
    },
    {
      id: "c10_q_3_3_08", q: "In cyclic quadrilateral ABCD, side AB is extended to E. If ∠CBE = 100°, find interior opposite angle ∠ADC:",
      options: ["100°", "80°", "120°", "90°"], a: "100°", acc: ["100°", "100"], type: "written", difficulty: "hard",
      h: "Exterior angle of cyclic quadrilateral equals interior opposite angle.", exp: "∠ADC = ∠CBE = 100°."
    },
    {
      id: "c10_q_3_3_09", q: "If two circles touch each other EXTERNALLY, how many common tangents can be drawn to them?",
      options: ["3 common tangents (2 direct + 1 transverse)", "2", "4", "1"], a: "3 common tangents (2 direct + 1 transverse)", acc: ["3 common tangents (2 direct + 1 transverse)", "3", "three"], type: "written", difficulty: "hard",
      h: "2 direct external tangents + 1 transverse at point of contact.", exp: "Three common tangents can be drawn to two externally touching circles."
    },
    {
      id: "c10_q_3_3_10", q: "If two circles touch INTERNALLY, how many common tangents exist?",
      options: ["Exactly 1 common tangent", "2", "3", "0"], a: "Exactly 1 common tangent", acc: ["Exactly 1 common tangent", "1", "one"], type: "written", difficulty: "hard",
      h: "Only one single tangent at their mutual contact point.", exp: "Exactly one common tangent passes through their point of internal contact."
    }
  ],

  // =========================================================================
  // Theme 4: Mensuration
  // =========================================================================
  "c10_les_4_1": [ // Right circular cylinder and cone: Surface area and volume
    {
      id: "c10_q_4_1_01", q: "What is the CURVED SURFACE AREA (CSA) of a CYLINDER of radius r and height h?",
      options: ["CSA = 2πrh", "CSA = πr²h", "CSA = 2πr(r + h)", "CSA = πrl"], a: "CSA = 2πrh", acc: ["CSA = 2πrh", "2πrh", "2*pi*r*h"], type: "written", difficulty: "easy",
      h: "Circumference of base × height.", exp: "Curved Surface Area of cylinder = 2πrh."
    },
    {
      id: "c10_q_4_1_02", q: "What is the VOLUME of a CYLINDER?",
      options: ["Volume = πr²h", "Volume = 2πrh", "Volume = ⅓ πr²h", "Volume = 4/3 πr³"], a: "Volume = πr²h", acc: ["Volume = πr²h", "πr²h", "pi*r^2*h"], type: "written", difficulty: "easy",
      h: "Base area × height.", exp: "Volume of cylinder = πr²h."
    },
    {
      id: "c10_q_4_1_03", q: "What is the SLANT HEIGHT (l) of a CONE of radius r and vertical height h?",
      options: ["l = √(r² + h²)", "l = r + h", "l = √(h² - r²)", "l = rh"], a: "l = √(r² + h²)", acc: ["l = √(r² + h²)", "sqrt(r^2+h^2)"], type: "written", difficulty: "easy",
      h: "Pythagoras on cone cross-section: l² = r² + h².", exp: "Slant height l = √(r² + h²)."
    },
    {
      id: "c10_q_4_1_04", q: "What is the CURVED SURFACE AREA (CSA) of a CONE of radius r and slant height l?",
      options: ["CSA = πrl", "CSA = 2πrh", "CSA = πr(l + r)", "CSA = ⅓ πr²h"], a: "CSA = πrl", acc: ["CSA = πrl", "πrl", "pi*r*l"], type: "written", difficulty: "medium",
      h: "π × radius × slant height.", exp: "CSA of cone = πrl."
    },
    {
      id: "c10_q_4_1_05", q: "What is the VOLUME of a CONE of radius r and height h?",
      options: ["Volume = ⅓ πr²h", "Volume = πr²h", "Volume = ⅔ πr²h", "Volume = πrl"], a: "Volume = ⅓ πr²h", acc: ["Volume = ⅓ πr²h", "1/3 * pi * r^2 * h", "1/3 πr²h"], type: "written", difficulty: "medium",
      h: "Exactly 1/3 volume of cylinder with same base and height.", exp: "Volume of cone = ⅓ πr²h."
    },
    {
      id: "c10_q_4_1_06", q: "Find the volume of a cylinder with radius 7 cm and height 10 cm (π = 22/7):",
      options: ["1,540 cm³", "1,500 cm³", "1,600 cm³", "770 cm³"], a: "1,540 cm³", acc: ["1,540 cm³", "1540", "1540 cm³"], type: "written", difficulty: "medium",
      h: "(22/7) × 49 × 10 = 154 × 10 = 1540.", exp: "V = (22/7) × 7² × 10 = 1,540 cm³."
    },
    {
      id: "c10_q_4_1_07", q: "A cone has radius 6 cm and height 8 cm. What is its slant height l?",
      options: ["10 cm", "14 cm", "12 cm", "9 cm"], a: "10 cm", acc: ["10 cm", "10"], type: "written", difficulty: "medium",
      h: "l = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.", exp: "l = √(36 + 64) = 10 cm."
    },
    {
      id: "c10_q_4_1_08", q: "What is the CSA of the cone from previous question (r = 6 cm, l = 10 cm, π = 3.14)?",
      options: ["188.4 cm² (60π)", "301.44 cm²", "94.2 cm²", "200 cm²"], a: "188.4 cm² (60π)", acc: ["188.4 cm² (60π)", "188.4", "60π"], type: "written", difficulty: "hard",
      h: "π × 6 × 10 = 60π = 60 × 3.14 = 188.4 cm².", exp: "CSA = 60π = 188.4 cm²."
    },
    {
      id: "c10_q_4_1_09", q: "A solid metal cylinder of radius 6 cm and height 12 cm is melted and recast into small cones of radius 3 cm and height 4 cm. How many cones are formed?",
      options: ["36 cones", "24 cones", "48 cones", "18 cones"], a: "36 cones", acc: ["36 cones", "36"], type: "written", difficulty: "hard",
      h: "N = (π × 36 × 12) / (⅓ π × 9 × 4) = (432) / (12) = 36.", exp: "Number of cones = (π × 6² × 12) / (⅓ × π × 3² × 4) = 432 / 12 = 36."
    },
    {
      id: "c10_q_4_1_10", q: "If the radius of a cylinder is doubled and its height is halved, its volume:",
      options: ["DOUBLES (2 times)", "Halves", "Quadruples", "Remains same"], a: "DOUBLES (2 times)", acc: ["DOUBLES (2 times)", "Doubles", "2 times"], type: "written", difficulty: "hard",
      h: "π(2r)²(h/2) = π(4r²)(h/2) = 2πr²h.", exp: "V' = 2 V (volume doubles)."
    }
  ],

  "c10_les_4_2": [ // Sphere and hemisphere: Surface area, volume, and combinations of solids
    {
      id: "c10_q_4_2_01", q: "What is the SURFACE AREA of a SPHERE of radius r?",
      options: ["4πr²", "2πr²", "3πr²", "4/3 πr³"], a: "4πr²", acc: ["4πr²", "4*pi*r^2"], type: "written", difficulty: "easy",
      h: "Area of 4 great circles.", exp: "Surface Area of sphere = 4πr²."
    },
    {
      id: "c10_q_4_2_02", q: "What is the VOLUME of a SPHERE of radius r?",
      options: ["4/3 πr³", "4πr²", "2/3 πr³", "πr³"], a: "4/3 πr³", acc: ["4/3 πr³", "4/3 * pi * r^3"], type: "written", difficulty: "easy",
      h: "Four-thirds pi r cubed.", exp: "Volume of sphere = 4/3 πr³."
    },
    {
      id: "c10_q_4_2_03", q: "What is the TOTAL SURFACE AREA (TSA) of a SOLID HEMISPHERE of radius r?",
      options: ["3πr² (2πr² curved + πr² flat base)", "2πr²", "4πr²", "πr²"], a: "3πr² (2πr² curved + πr² flat base)", acc: ["3πr² (2πr² curved + πr² flat base)", "3πr²", "3*pi*r^2"], type: "written", difficulty: "easy",
      h: "Curved hemisphere (2πr²) + circular flat base (πr²).", exp: "TSA of solid hemisphere = 3πr²."
    },
    {
      id: "c10_q_4_2_04", q: "What is the VOLUME of a HEMISPHERE of radius r?",
      options: ["2/3 πr³", "4/3 πr³", "⅓ πr³", "3πr²"], a: "2/3 πr³", acc: ["2/3 πr³", "2/3 * pi * r^3"], type: "written", difficulty: "medium",
      h: "Half the volume of a sphere.", exp: "Volume of hemisphere = 2/3 πr³."
    },
    {
      id: "c10_q_4_2_05", q: "Find the surface area of a sphere of radius 7 cm (π = 22/7):",
      options: ["616 cm²", "308 cm²", "154 cm²", "1,232 cm²"], a: "616 cm²", acc: ["616 cm²", "616"], type: "written", difficulty: "medium",
      h: "4 × (22/7) × 49 = 4 × 154 = 616 cm².", exp: "SA = 4 × 22/7 × 49 = 616 cm²."
    },
    {
      id: "c10_q_4_2_06", q: "A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius. If total height of toy is 15.5 cm, what is the height of cone?",
      options: ["12 cm (15.5 - 3.5)", "15.5 cm", "10 cm", "14 cm"], a: "12 cm (15.5 - 3.5)", acc: ["12 cm (15.5 - 3.5)", "12 cm", "12"], type: "written", difficulty: "medium",
      h: "Cone height = Total height - Hemisphere radius = 15.5 - 3.5 = 12 cm.", exp: "Height of cone = 15.5 - 3.5 = 12 cm."
    },
    {
      id: "c10_q_4_2_07", q: "Find the volume of a sphere of radius 3 cm in terms of π:",
      options: ["36π cm³", "12π cm³", "108π cm³", "27π cm³"], a: "36π cm³", acc: ["36π cm³", "36π", "36*pi"], type: "written", difficulty: "medium",
      h: "4/3 × π × 27 = 4 × 9π = 36π cm³.", exp: "Volume = 4/3 π (27) = 36π cm³."
    },
    {
      id: "c10_q_4_2_08", q: "A solid sphere of radius 6 cm is melted into lead shots of radius 0.3 cm. How many lead shots are made?",
      options: ["8,000 lead shots", "4,000", "2,000", "800"], a: "8,000 lead shots", acc: ["8,000 lead shots", "8000"], type: "written", difficulty: "hard",
      h: "N = (R / r)³ = (6 / 0.3)³ = 20³ = 8,000.", exp: "Number of spheres = (6 / 0.3)³ = 20³ = 8,000."
    },
    {
      id: "c10_q_4_2_09", q: "If the surface area of a sphere is 154 cm², what is its diameter (π = 22/7)?",
      options: ["7 cm (radius = 3.5 cm)", "14 cm", "3.5 cm", "21 cm"], a: "7 cm (radius = 3.5 cm)", acc: ["7 cm (radius = 3.5 cm)", "7 cm", "7"], type: "written", difficulty: "hard",
      h: "4 × 22/7 × r² = 154 ⟹ r² = 154×7/88 = 49/4 ⟹ r = 3.5 cm ⟹ d = 7 cm.", exp: "r = 3.5 cm ⟹ Diameter = 7 cm."
    },
    {
      id: "c10_q_4_2_10", q: "A test tube has a hemispherical bottom of radius r and a cylindrical upper portion of same radius and height h. What is the total volume?",
      options: ["πr²h + 2/3 πr³", "πr²h + 4/3 πr³", "2πrh + 2πr²", "⅓ πr²h"], a: "πr²h + 2/3 πr³", acc: ["πr²h + 2/3 πr³"], type: "written", difficulty: "hard",
      h: "Sum of cylinder volume + hemisphere volume.", exp: "Total volume = πr²h + 2/3 πr³."
    }
  ],

  // =========================================================================
  // Theme 5: Trigonometry
  // =========================================================================
  "c10_les_5_1": [ // Trigonometric Identities: Proofs and simplifications
    { id: "c10_q_5_1_01", q: "In trigonometry, what is the exact identity value of sec²θ - tan²θ?",
      a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "Recall the fundamental Pythagorean identity 1 + tan²θ = sec²θ.", exp: "1 + tan²θ = sec²θ, so sec²θ - tan²θ = 1."
    },
    { id: "c10_q_5_1_02", q: "In trigonometry, what is the exact identity value of cosec²θ - cot²θ?",
      a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "Recall the fundamental identity 1 + cot²θ = cosec²θ.", exp: "1 + cot²θ = cosec²θ, so cosec²θ - cot²θ = 1."
    },
    {
      id: "c10_q_5_1_03", q: "Simplify: (sec θ - tan θ)(sec θ + tan θ)",
      options: ["1", "sec² θ", "tan² θ", "0"], a: "1", acc: ["1", "one"], type: "written", difficulty: "easy",
      h: "sec² θ - tan² θ = 1.", exp: "(sec θ - tan θ)(sec θ + tan θ) = sec² θ - tan² θ = 1."
    },
    {
      id: "c10_q_5_1_04", q: "Simplify: (sin θ / cos θ) + (cos θ / sin θ)",
      options: ["sec θ cosec θ", "1", "tan θ cot θ", "sin θ cos θ"], a: "sec θ cosec θ", acc: ["sec θ cosec θ", "sec(θ)cosec(θ)"], type: "written", difficulty: "medium",
      h: "(sin² θ + cos² θ) / (sin θ cos θ) = 1 / (sin θ cos θ) = sec θ cosec θ.", exp: "tan θ + cot θ = 1 / (sin θ cos θ) = sec θ cosec θ."
    },
    {
      id: "c10_q_5_1_05", q: "Simplify: √[ (1 - cos θ) / (1 + cos θ) ]",
      options: ["cosec θ - cot θ", "sec θ - tan θ", "sin θ / cos θ", "1 - cos θ"], a: "cosec θ - cot θ", acc: ["cosec θ - cot θ", "csc(θ)-cot(θ)"], type: "written", difficulty: "medium",
      h: "Multiply numerator and denominator by (1 - cos θ): √[ (1-cos θ)² / sin² θ ] = (1 - cos θ)/sin θ = cosec θ - cot θ.", exp: "√[ (1-cos θ)²/sin² θ ] = (1 - cos θ)/sin θ = cosec θ - cot θ."
    },
    {
      id: "c10_q_5_1_06", q: "Simplify: √[ (1 + sin θ) / (1 - sin θ) ]",
      options: ["sec θ + tan θ", "cosec θ + cot θ", "1 + sin θ", "cos θ"], a: "sec θ + tan θ", acc: ["sec θ + tan θ", "sec(θ)+tan(θ)"], type: "written", difficulty: "medium",
      h: "(1 + sin θ) / cos θ = sec θ + tan θ.", exp: "√[ (1+sin θ)²/cos² θ ] = (1 + sin θ)/cos θ = sec θ + tan θ."
    },
    {
      id: "c10_q_5_1_07", q: "If sec θ + tan θ = p, what is the value of sec θ - tan θ?",
      options: ["1 / p", "p", "-p", "p²"], a: "1 / p", acc: ["1 / p", "1/p"], type: "written", difficulty: "medium",
      h: "(sec θ + tan θ)(sec θ - tan θ) = 1 ⟹ sec θ - tan θ = 1/p.", exp: "sec θ - tan θ = 1 / p."
    },
    {
      id: "c10_q_5_1_08", q: "If sec θ + tan θ = 3, what is the value of cos θ?",
      options: ["3/5", "5/3", "4/5", "3/4"], a: "3/5", acc: ["3/5"], type: "written", difficulty: "hard",
      h: "sec + tan = 3, sec - tan = 1/3. Adding: 2 sec θ = 10/3 ⟹ sec θ = 5/3 ⟹ cos θ = 3/5.", exp: "2 sec θ = 3 + 1/3 = 10/3 ⟹ sec θ = 5/3 ⟹ cos θ = 3/5."
    },
    {
      id: "c10_q_5_1_09", q: "Simplify: (sin⁴ θ - cos⁴ θ) / (sin² θ - cos² θ)",
      options: ["1", "sin² θ", "cos² θ", "0"], a: "1", acc: ["1", "one"], type: "written", difficulty: "hard",
      h: "Numerator = (sin² - cos²)(sin² + cos²) = (sin² - cos²)(1). Division yields 1.", exp: "(sin² θ + cos² θ) = 1."
    },
    {
      id: "c10_q_5_1_10", q: "Evaluate: (1 + cot θ - cosec θ)(1 + tan θ + sec θ)",
      options: ["2", "1", "-1", "0"], a: "2", acc: ["2", "two"], type: "written", difficulty: "hard",
      h: "Convert to sin and cos: [(sin+cos-1)/sin][(cos+sin+1)/cos] = [(sin+cos)² - 1]/(sin cos) = (1 + 2sin cos - 1)/(sin cos) = 2.", exp: "Result simplifies identically to 2."
    }
  ],

  "c10_les_5_2": [ // Heights and Distances: Angle of elevation and depression
    {
      id: "c10_q_5_2_01", q: "What is the ANGLE OF ELEVATION?",
      options: ["The angle formed by the line of sight with the horizontal when looking UPWARD at an object", "Looking downward", "Angle with vertical", "A 90° angle"], a: "The angle formed by the line of sight with the horizontal when looking UPWARD at an object", acc: ["The angle formed by the line of sight with the horizontal when looking UPWARD at an object"], type: "written", difficulty: "easy",
      h: "Observer looks above the horizontal eye line.", exp: "Angle of elevation is measured upward from horizontal line of sight."
    },
    {
      id: "c10_q_5_2_02", q: "What is the ANGLE OF DEPRESSION?",
      options: ["The angle formed by line of sight with horizontal when looking DOWNWARD at an object", "Looking upward", "Angle with ground", "Right angle"], a: "The angle formed by line of sight with horizontal when looking DOWNWARD at an object", acc: ["The angle formed by line of sight with horizontal when looking DOWNWARD at an object"], type: "written", difficulty: "easy",
      h: "Observer looks down from high vantage point.", exp: "Angle of depression is measured downward from the horizontal."
    },
    {
      id: "c10_q_5_2_03", q: "Is the angle of depression of an object seen from a tower equal to the angle of elevation of the tower top from that object?",
      options: ["Yes, they are ALTERNATE INTERIOR angles and equal", "No, they differ", "Only if height is 100 m", "None"], a: "Yes, they are ALTERNATE INTERIOR angles and equal", acc: ["Yes, they are ALTERNATE INTERIOR angles and equal", "Yes"], type: "written", difficulty: "easy",
      h: "Horizontal lines are parallel, so alternate angles are equal.", exp: "Angle of depression from top = Angle of elevation from ground (alternate interior angles)."
    },
    {
      id: "c10_q_5_2_04", q: "The angle of elevation of top of a tower 100 m high from a point on ground is 45°. How far is the point from the base of tower?",
      options: ["100 m", "100√3 m", "50 m", "141.4 m"], a: "100 m", acc: ["100 m", "100", "100m"], type: "written", difficulty: "medium",
      h: "tan 45° = 1 = h / d ⟹ d = h = 100 m.", exp: "d = 100 / tan 45° = 100 m."
    },
    {
      id: "c10_q_5_2_05", q: "The angle of elevation of top of a tower from a distance of 50 m is 30°. Find the height of the tower:",
      options: ["50 / √3 m (≈ 28.87 m)", "50√3 m", "25 m", "50 m"], a: "50 / √3 m (≈ 28.87 m)", acc: ["50 / √3 m (≈ 28.87 m)", "50/√3", "50/sqrt(3)", "28.87"], type: "written", difficulty: "medium",
      h: "h = 50 tan 30° = 50 / √3 m.", exp: "h = 50 / √3 m ≈ 28.87 m."
    },
    {
      id: "c10_q_5_2_06", q: "From the top of a 60 m high building, the angle of depression of a car is 60°. How far is the car from the building base?",
      options: ["20√3 m (≈ 34.64 m)", "60√3 m", "30 m", "40 m"], a: "20√3 m (≈ 34.64 m)", acc: ["20√3 m (≈ 34.64 m)", "20√3", "20*sqrt(3)", "34.64"], type: "written", difficulty: "medium",
      h: "d = 60 / tan 60° = 60 / √3 = 20√3 m.", exp: "d = 60 / √3 = 20√3 m ≈ 34.64 m."
    },
    {
      id: "c10_q_5_2_07", q: "An observer notes angle of elevation of a cloud as 30° and its reflection in a lake as 60°. If observer is 20 m above lake, find cloud height:",
      options: ["40 m", "60 m", "80 m", "50 m"], a: "40 m", acc: ["40 m", "40"], type: "written", difficulty: "medium",
      h: "H = h(tan 60° + tan 30°)/(tan 60° - tan 30°) = 20(√3 + 1/√3)/(√3 - 1/√3) = 20(4/2) = 40 m.", exp: "Height of cloud = 40 m."
    },
    {
      id: "c10_q_5_2_08", q: "Two poles of equal heights stand on either side of an 80 m wide road. From a point between them, angles of elevation are 60° and 30°. Find height of poles:",
      options: ["20√3 m (≈ 34.64 m)", "40 m", "20 m", "40√3 m"], a: "20√3 m (≈ 34.64 m)", acc: ["20√3 m (≈ 34.64 m)", "20√3", "20*sqrt(3)", "34.64"], type: "written", difficulty: "hard",
      h: "x + y = 80. h/x = √3, h/y = 1/√3 ⟹ y = 3x ⟹ 4x = 80 ⟹ x = 20. h = 20√3 m.", exp: "h = 20√3 m ≈ 34.64 m."
    },
    {
      id: "c10_q_5_2_09", q: "The shadow of a tower standing on level ground is found to be 40 m longer when sun's altitude is 30° than when it is 60°. Find tower height:",
      options: ["20√3 m", "40√3 m", "30√3 m", "20 m"], a: "20√3 m", acc: ["20√3 m", "20√3", "20*sqrt(3)"], type: "written", difficulty: "hard",
      h: "d = h(cot 30° - cot 60°) = h(√3 - 1/√3) = h(2/√3) = 40 ⟹ h = 20√3 m.", exp: "h = 20√3 m ≈ 34.64 m."
    },
    {
      id: "c10_q_5_2_10", q: "An aeroplane flying horizontally at 1500√3 m height passes over an observer. In 15 seconds, angle of elevation changes from 60° to 30°. Find speed of aeroplane:",
      options: ["200 m/s (720 km/h)", "150 m/s", "100 m/s", "250 m/s"], a: "200 m/s (720 km/h)", acc: ["200 m/s (720 km/h)", "200 m/s", "720 km/h", "200"], type: "written", difficulty: "hard",
      h: "d₁ = 1500√3 / √3 = 1500. d₂ = 1500√3 × √3 = 4500. Distance = 4500 - 1500 = 3000 m. Speed = 3000 / 15 = 200 m/s.", exp: "Speed = 3000 m / 15 s = 200 m/s = 720 km/h."
    }
  ],

  // =========================================================================
  // Theme 6: Statistics
  // =========================================================================
  "c10_les_6_1": [ // Mean (Direct, short-cut, step-deviation methods)
    {
      id: "c10_q_6_1_01", q: "What is the formula for STEP-DEVIATION method for calculating mean?",
      options: ["x̄ = A + [ Σ(fᵢ × uᵢ) / Σfᵢ ] × c (where uᵢ = (xᵢ - A)/c)", "x̄ = A + Σfd / Σf", "x̄ = Σfx / Σf", "x̄ = A × Σfu"], a: "x̄ = A + [ Σ(fᵢ × uᵢ) / Σfᵢ ] × c (where uᵢ = (xᵢ - A)/c)", acc: ["x̄ = A + [ Σ(fᵢ × uᵢ) / Σfᵢ ] × c (where uᵢ = (xᵢ - A)/c)", "Step-deviation method", "A"], type: "written", difficulty: "easy",
      h: "u = (x - A)/c scales down deviations by class width c.", exp: "x̄ = A + (Σfu / Σf) × c."
    },
    {
      id: "c10_q_6_1_02", q: "In the assumed mean method, what does deviation dᵢ represent?",
      options: ["dᵢ = xᵢ - A (Class mark minus Assumed Mean)", "dᵢ = xᵢ + A", "dᵢ = xᵢ / A", "dᵢ = A - xᵢ"], a: "dᵢ = xᵢ - A (Class mark minus Assumed Mean)", acc: ["dᵢ = xᵢ - A (Class mark minus Assumed Mean)", "d = x - A"], type: "written", difficulty: "easy",
      h: "Difference from assumed average.", exp: "dᵢ = xᵢ - A."
    },
    {
      id: "c10_q_6_1_03", q: "Why is the Step-Deviation method preferred for large numbers with equal class intervals?",
      options: ["It simplifies calculations and drastically reduces arithmetic error", "It gives a different mean", "It eliminates negative numbers", "None"], a: "It simplifies calculations and drastically reduces arithmetic error", acc: ["It simplifies calculations and drastically reduces arithmetic error"], type: "written", difficulty: "easy",
      h: "Divides deviations by common width c.", exp: "Step-deviation simplifies large numbers into small manageable single-digit integers."
    },
    {
      id: "c10_q_6_1_04", q: "If Assumed Mean A = 25, Σf = 50, and Σfd = 150, what is the Mean x̄?",
      options: ["28", "25", "30", "22"], a: "28", acc: ["28"], type: "written", difficulty: "medium",
      h: "x̄ = A + Σfd / Σf = 25 + 150/50 = 25 + 3 = 28.", exp: "x̄ = 25 + 3 = 28."
    },
    {
      id: "c10_q_6_1_05", q: "If A = 50, c = 10, Σf = 100, and Σfu = -20, find the Mean x̄:",
      options: ["48", "52", "45", "50"], a: "48", acc: ["48"], type: "written", difficulty: "medium",
      h: "x̄ = 50 + (-20/100) × 10 = 50 - 2 = 48.", exp: "x̄ = 50 - 2 = 48."
    },
    {
      id: "c10_q_6_1_06", q: "If the mean of numbers 6, 8, 5, 7, x, 4 is 7, find the missing value x:",
      options: ["12", "10", "14", "8"], a: "12", acc: ["12"], type: "written", difficulty: "medium",
      h: "Sum = 30 + x = 6 × 7 = 42 ⟹ x = 12.", exp: "30 + x = 42 ⟹ x = 12."
    },
    {
      id: "c10_q_6_1_07", q: "Can the Step-Deviation method be applied if class intervals have UNEQUAL widths?",
      options: ["No, it requires equal class width 'c' throughout", "Yes, always", "Only for even numbers", "None"], a: "No, it requires equal class width 'c' throughout", acc: ["No, it requires equal class width 'c' throughout", "No"], type: "written", difficulty: "medium",
      h: "Requires uniform class width c.", exp: "Step-deviation requires a constant uniform class size c."
    },
    {
      id: "c10_q_6_1_08", q: "If mean of 25 observations is 36, and mean of first 13 is 32 while last 13 is 40, find the 13th observation:",
      options: ["36", "38", "34", "42"], a: "36", acc: ["36"], type: "written", difficulty: "hard",
      h: "(13 × 32 + 13 × 40) - (25 × 36) = 13(72) - 900 = 936 - 900 = 36.", exp: "13th item = 936 - 900 = 36."
    },
    {
      id: "c10_q_6_1_09", q: "If yᵢ = 5xᵢ - 20 and mean of y (ȳ) is 35, what is the mean of x (x̄)?",
      options: ["11", "10", "12", "15"], a: "11", acc: ["11"], type: "written", difficulty: "hard",
      h: "35 = 5x̄ - 20 ⟹ 5x̄ = 55 ⟹ x̄ = 11.", exp: "5x̄ = 55 ⟹ x̄ = 11."
    },
    {
      id: "c10_q_6_1_10", q: "The mean of 100 numbers was found to be 40. Later it was found that number 53 was misread as 83. What is the CORRECTED mean?",
      options: ["39.70", "40.30", "39.50", "40.00"], a: "39.70", acc: ["39.70", "39.7"], type: "written", difficulty: "hard",
      h: "New sum = 4000 - 83 + 53 = 3970. Corrected mean = 3970 / 100 = 39.70.", exp: "Corrected Mean = 3970 / 100 = 39.70."
    }
  ],

  "c10_les_6_2": [ // Median and Mode for continuous grouped data
    {
      id: "c10_q_6_2_01", q: "In a continuous grouped frequency distribution, what is the MEDIAN CLASS?",
      options: ["The class interval whose cumulative frequency (cf) is greater than or equal to N/2", "The class with highest frequency", "First class", "Last class"], a: "The class interval whose cumulative frequency (cf) is greater than or equal to N/2", acc: ["The class interval whose cumulative frequency (cf) is greater than or equal to N/2"], type: "written", difficulty: "easy",
      h: "First class where cf ≥ N/2.", exp: "The median class is the first class with cumulative frequency ≥ N/2."
    },
    {
      id: "c10_q_6_2_02", q: "What is the MODAL CLASS in a grouped frequency distribution?",
      options: ["The class interval with the HIGHEST frequency", "The middle class", "First class", "Class with cf ≥ N/2"], a: "The class interval with the HIGHEST frequency", acc: ["The class interval with the HIGHEST frequency", "Highest frequency"], type: "written", difficulty: "easy",
      h: "Highest peak frequency.", exp: "The modal class has the maximum frequency."
    },
    {
      id: "c10_q_6_2_03", q: "What is the formula for MEDIAN of grouped continuous data?",
      options: ["Median = L + [ (N/2 - cf) / f ] × h", "Median = L + [ (N - cf) / f ] × h", "Median = L + [ f / N ] × h", "Median = N/2"], a: "Median = L + [ (N/2 - cf) / f ] × h", acc: ["Median = L + [ (N/2 - cf) / f ] × h", "L + [(N/2 - cf)/f]*h", "A"], type: "written", difficulty: "easy",
      h: "L is lower limit of median class, cf is preceding cumulative frequency, f is frequency, h is class size.", exp: "Median = L + [ (N/2 - cf) / f ] × h."
    },
    {
      id: "c10_q_6_2_04", q: "What is the formula for MODE of grouped continuous data?",
      options: ["Mode = L + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h", "Mode = L + [ (f₁ + f₀) / 2 ] × h", "Mode = L + (f₁ / f₀) × h", "None"], a: "Mode = L + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h", acc: ["Mode = L + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h", "A"], type: "written", difficulty: "medium",
      h: "f₁ is modal freq, f₀ is preceding freq, f₂ is succeeding freq.", exp: "Mode = L + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h."
    },
    {
      id: "c10_q_6_2_05", q: "How is MODE determined graphically in ICSE Class 10?",
      options: ["From the HISTOGRAM by drawing intersecting diagonal lines across modal rectangle and reading x-axis", "From Ogive", "From Bar chart", "From Pie chart"], a: "From the HISTOGRAM by drawing intersecting diagonal lines across modal rectangle and reading x-axis", acc: ["From the HISTOGRAM by drawing intersecting diagonal lines across modal rectangle and reading x-axis", "Histogram"], type: "written", difficulty: "medium",
      h: "Corner cross-lines inside the tallest bar.", exp: "Mode is determined graphically from the tallest rectangle in a histogram."
    },
    {
      id: "c10_q_6_2_06", q: "How is MEDIAN determined graphically?",
      options: ["From the OGIVE (Cumulative Frequency curve) at y = N/2", "From Histogram", "From Frequency polygon", "From Pie chart"], a: "From the OGIVE (Cumulative Frequency curve) at y = N/2", acc: ["From the OGIVE (Cumulative Frequency curve) at y = N/2", "Ogive"], type: "written", difficulty: "medium",
      h: "Locate N/2 on vertical cumulative frequency axis and read x-value.", exp: "Median is found by projecting y = N/2 onto the ogive curve."
    },
    {
      id: "c10_q_6_2_07", q: "In a dataset, if Mean = 30 and Median = 28, find the approximate MODE using empirical relation:",
      options: ["24 (Mode = 3 Median - 2 Mean = 3(28) - 2(30) = 84 - 60 = 24)", "26", "28", "32"], a: "24 (Mode = 3 Median - 2 Mean = 3(28) - 2(30) = 84 - 60 = 24)", acc: ["24 (Mode = 3 Median - 2 Mean = 3(28) - 2(30) = 84 - 60 = 24)", "24"], type: "written", difficulty: "medium",
      h: "Mode = 3(28) - 2(30) = 84 - 60 = 24.", exp: "Mode = 3(28) - 2(30) = 24."
    },
    {
      id: "c10_q_6_2_08", q: "Which measure of central tendency is LEAST affected by extreme outliers in a skewed distribution?",
      options: ["MEDIAN", "Mean", "Range", "Standard deviation"], a: "MEDIAN", acc: ["MEDIAN", "Median"], type: "written", difficulty: "hard",
      h: "Median depends on position, not extreme values.", exp: "Median is resistant to extreme outliers."
    },
    {
      id: "c10_q_6_2_09", q: "For continuous classes 10-20 (f=5), 20-30 (f=12), 30-40 (f=8) with N=25, what is the Median Class?",
      options: ["20 - 30 (cf = 17 ≥ 12.5)", "10 - 20", "30 - 40", "None"], a: "20 - 30 (cf = 17 ≥ 12.5)", acc: ["20 - 30 (cf = 17 ≥ 12.5)", "20-30", "20 - 30"], type: "written", difficulty: "hard",
      h: "N/2 = 12.5. Cumulative freq for 20-30 is 5 + 12 = 17.", exp: "Median class is 20 - 30."
    },
    {
      id: "c10_q_6_2_10", q: "Calculate the exact Median for previous question (L=20, N/2=12.5, cf=5, f=12, h=10):",
      options: ["26.25", "25.00", "27.50", "24.50"], a: "26.25", acc: ["26.25"], type: "written", difficulty: "hard",
      h: "20 + [ (12.5 - 5) / 12 ] × 10 = 20 + (7.5 × 10)/12 = 20 + 75/12 = 20 + 6.25 = 26.25.", exp: "Median = 20 + 6.25 = 26.25."
    }
  ],

  "c10_les_6_3": [ // Ogives (Cumulative Frequency Curves): Median, quartiles, inter-quartile range
    {
      id: "c10_q_6_3_01", q: "What is an OGIVE in statistics?",
      options: ["A smooth cumulative frequency curve plotted against class boundaries", "A straight bar chart", "A circle chart", "A histogram"], a: "A smooth cumulative frequency curve plotted against class boundaries", acc: ["A smooth cumulative frequency curve plotted against class boundaries", "Cumulative frequency curve", "Ogive"], type: "written", difficulty: "easy",
      h: "Pronounced oh-jive.", exp: "An ogive is a smooth cumulative frequency curve."
    },
    {
      id: "c10_q_6_3_02", q: "In a 'LESS THAN' Ogive, points plotted have coordinates:",
      options: ["(Upper Class Limit, Cumulative Frequency)", "(Lower Limit, cf)", "(Class Mark, Frequency)", "(Lower Limit, 0)"], a: "(Upper Class Limit, Cumulative Frequency)", acc: ["(Upper Class Limit, Cumulative Frequency)"], type: "written", difficulty: "easy",
      h: "Less than upper boundary.", exp: "Less-than ogives plot (Upper Boundary, Cumulative Frequency)."
    },
    {
      id: "c10_q_6_3_03", q: "How is the LOWER QUARTILE (Q₁) determined from an Ogive of N observations?",
      options: ["By reading the x-value corresponding to y = N / 4", "y = N / 2", "y = 3N / 4", "y = N"], a: "By reading the x-value corresponding to y = N / 4", acc: ["By reading the x-value corresponding to y = N / 4", "N/4"], type: "written", difficulty: "easy",
      h: "25th percentile = N/4.", exp: "Q₁ is obtained at y = N/4 on the cumulative frequency axis."
    },
    {
      id: "c10_q_6_3_04", q: "How is the UPPER QUARTILE (Q₃) determined from an Ogive?",
      options: ["By reading the x-value corresponding to y = 3N / 4", "y = N / 4", "y = N / 2", "y = N"], a: "By reading the x-value corresponding to y = 3N / 4", acc: ["By reading the x-value corresponding to y = 3N / 4", "3N/4"], type: "written", difficulty: "medium",
      h: "75th percentile = 3N/4.", exp: "Q₃ is obtained at y = 3N/4."
    },
    {
      id: "c10_q_6_3_05", q: "What is the formula for the INTER-QUARTILE RANGE (IQR)?",
      options: ["IQR = Q₃ - Q₁", "IQR = (Q₃ - Q₁) / 2", "IQR = Q₃ + Q₁", "IQR = Q₂"], a: "IQR = Q₃ - Q₁", acc: ["IQR = Q₃ - Q₁", "Q3 - Q1", "Q3-Q1"], type: "written", difficulty: "medium",
      h: "Upper quartile minus lower quartile.", exp: "Inter-quartile Range IQR = Q₃ - Q₁."
    },
    {
      id: "c10_q_6_3_06", q: "What is the formula for SEMI-INTERQUARTILE RANGE (Quartile Deviation)?",
      options: ["QD = (Q₃ - Q₁) / 2", "QD = Q₃ - Q₁", "QD = Q₁ / 2", "QD = Q₃ / 2"], a: "QD = (Q₃ - Q₁) / 2", acc: ["QD = (Q₃ - Q₁) / 2", "(Q3-Q1)/2"], type: "written", difficulty: "medium",
      h: "Half of interquartile range.", exp: "Semi-interquartile range = ½ (Q₃ - Q₁)."
    },
    {
      id: "c10_q_6_3_07", q: "If total frequency N = 200, at what y-values on the Ogive are Q₁, Median (Q₂), and Q₃ read?",
      options: ["Q₁ at y = 50, Q₂ at y = 100, Q₃ at y = 150", "Q₁ at 25, Q₂ at 50, Q₃ at 75", "Q₁ at 100, Q₂ at 150, Q₃ at 200", "None"], a: "Q₁ at y = 50, Q₂ at y = 100, Q₃ at y = 150", acc: ["Q₁ at y = 50, Q₂ at y = 100, Q₃ at y = 150"], type: "written", difficulty: "medium",
      h: "200/4 = 50, 200/2 = 100, 3(200)/4 = 150.", exp: "Q₁ = 50, Q₂ = 100, Q₃ = 150."
    },
    {
      id: "c10_q_6_3_08", q: "If Q₁ = 32 marks and Q₃ = 68 marks, find the Semi-Interquartile Range:",
      options: ["18 marks", "36 marks", "20 marks", "50 marks"], a: "18 marks", acc: ["18 marks", "18"], type: "written", difficulty: "hard",
      h: "(68 - 32) / 2 = 36 / 2 = 18.", exp: "QD = (68 - 32) / 2 = 18 marks."
    },
    {
      id: "c10_q_6_3_09", q: "The intersection point of 'Less than' Ogive and 'More than' Ogive for the same data has x-coordinate equal to:",
      options: ["MEDIAN", "Mean", "Mode", "Total frequency"], a: "MEDIAN", acc: ["MEDIAN", "Median"], type: "written", difficulty: "hard",
      h: "Two ogives intersect at (Median, N/2).", exp: "The x-coordinate of the intersection point of both ogives is the Median."
    },
    {
      id: "c10_q_6_3_10", q: "On an Ogive of marks out of 100 with N = 120, pass mark is 40. If y-value corresponding to x = 40 is 35, how many students PASSED?",
      options: ["85 students (120 - 35)", "35 students", "40 students", "60 students"], a: "85 students (120 - 35)", acc: ["85 students (120 - 35)", "85 students", "85"], type: "written", difficulty: "hard",
      h: "35 students scored ≤ 40 (failed). Passed = 120 - 35 = 85 students.", exp: "Number of students scoring > 40 = 120 - 35 = 85 students."
    }
  ],

  // =========================================================================
  // Theme 7: Probability
  // =========================================================================
  "c10_les_7_1": [ // Single event probability, cards, dice, coins, letters
    {
      id: "c10_q_7_1_01", q: "How many cards are in a standard playing deck, and how many suits are there?",
      options: ["52 cards in 4 suits (Spades, Hearts, Diamonds, Clubs; 13 cards each)", "52 cards in 2 suits", "48 cards in 4 suits", "54 cards"], a: "52 cards in 4 suits (Spades, Hearts, Diamonds, Clubs; 13 cards each)", acc: ["52 cards in 4 suits (Spades, Hearts, Diamonds, Clubs; 13 cards each)", "52 cards in 4 suits"], type: "written", difficulty: "easy",
      h: "4 suits × 13 cards = 52.", exp: "A deck has 52 cards: 26 Red (Hearts, Diamonds) and 26 Black (Spades, Clubs)."
    },
    {
      id: "c10_q_7_1_02", q: "How many FACE CARDS (Kings, Queens, Jacks) are in a 52-card deck?",
      options: ["12 face cards (4 Kings, 4 Queens, 4 Jacks)", "16 face cards", "8 face cards", "4 face cards"], a: "12 face cards (4 Kings, 4 Queens, 4 Jacks)", acc: ["12 face cards (4 Kings, 4 Queens, 4 Jacks)", "12", "twelve"], type: "written", difficulty: "easy",
      h: "3 face cards per suit × 4 suits = 12.", exp: "There are 12 face cards in total."
    },
    {
      id: "c10_q_7_1_03", q: "What is the probability of drawing an ACE from a well-shuffled 52-card deck?",
      options: ["4/52 = 1/13", "1/52", "4/13", "1/4"], a: "4/52 = 1/13", acc: ["4/52 = 1/13", "1/13", "4/52"], type: "written", difficulty: "easy",
      h: "4 aces out of 52 cards.", exp: "P(Ace) = 4/52 = 1/13."
    },
    {
      id: "c10_q_7_1_04", q: "What is the probability of drawing a RED FACE CARD from a 52-card deck?",
      options: ["6/52 = 3/26", "12/52 = 3/13", "6/26", "2/52"], a: "6/52 = 3/26", acc: ["6/52 = 3/26", "3/26", "6/52"], type: "written", difficulty: "medium",
      h: "6 red face cards (3 hearts + 3 diamonds). 6/52 = 3/26.", exp: "P(Red Face) = 6/52 = 3/26."
    },
    {
      id: "c10_q_7_1_05", q: "A card is drawn from cards numbered 1 to 25. What is the probability of getting a PRIME number?",
      options: ["9/25 (primes: 2, 3, 5, 7, 11, 13, 17, 19, 23)", "8/25", "10/25 = 2/5", "7/25"], a: "9/25 (primes: 2, 3, 5, 7, 11, 13, 17, 19, 23)", acc: ["9/25 (primes: 2, 3, 5, 7, 11, 13, 17, 19, 23)", "9/25"], type: "written", difficulty: "medium",
      h: "Count primes ≤ 25: 2, 3, 5, 7, 11, 13, 17, 19, 23 (9 primes).", exp: "P(Prime) = 9/25."
    },
    {
      id: "c10_q_7_1_06", q: "A letter is chosen at random from the word 'MATHEMATICS'. What is the probability that it is a VOWEL?",
      options: ["4/11 (vowels: A, E, A, I)", "3/11", "5/11", "2/11"], a: "4/11 (vowels: A, E, A, I)", acc: ["4/11 (vowels: A, E, A, I)", "4/11"], type: "written", difficulty: "medium",
      h: "Total letters = 11. Vowels = A, E, A, I (4 vowels).", exp: "P(Vowel) = 4/11."
    },
    {
      id: "c10_q_7_1_07", q: "What is the probability of drawing a SPADE or a KING from a 52-card deck?",
      options: ["16/52 = 4/13 (13 spades + 3 other kings)", "17/52", "14/52", "1/4"], a: "16/52 = 4/13 (13 spades + 3 other kings)", acc: ["16/52 = 4/13 (13 spades + 3 other kings)", "4/13", "16/52"], type: "written", difficulty: "medium",
      h: "13 spades + 3 remaining kings = 16 cards. 16/52 = 4/13.", exp: "P(Spade ∪ King) = (13 + 4 - 1)/52 = 16/52 = 4/13."
    },
    {
      id: "c10_q_7_1_08", q: "In a non-leap year (365 days = 52 weeks + 1 day), what is the probability of having 53 SUNDAYS?",
      options: ["1/7", "2/7", "53/365", "0"], a: "1/7", acc: ["1/7"], type: "written", difficulty: "hard",
      h: "1 extra day can be any of 7 days of week. P(Sunday) = 1/7.", exp: "Probability of 53 Sundays in normal year = 1/7."
    },
    {
      id: "c10_q_7_1_09", q: "In a LEAP YEAR (366 days = 52 weeks + 2 extra days), what is the probability of having 53 SUNDAYS?",
      options: ["2/7 (pairs: Sat-Sun, Sun-Mon)", "1/7", "53/366", "2/366"], a: "2/7 (pairs: Sat-Sun, Sun-Mon)", acc: ["2/7 (pairs: Sat-Sun, Sun-Mon)", "2/7"], type: "written", difficulty: "hard",
      h: "2 out of 7 consecutive pairs contain Sunday (Sat-Sun, Sun-Mon).", exp: "Probability of 53 Sundays in a leap year = 2/7."
    },
    {
      id: "c10_q_7_1_10", q: "A bag contains 6 red, 4 white, and 8 blue balls. If a ball is drawn at random, what is the probability that it is NOT red?",
      options: ["12/18 = 2/3", "6/18 = 1/3", "4/18", "8/18"], a: "12/18 = 2/3", acc: ["12/18 = 2/3", "2/3", "12/18"], type: "written", difficulty: "hard",
      h: "Total = 18. Not red = 4 white + 8 blue = 12. 12/18 = 2/3.", exp: "P(Not Red) = 1 - 6/18 = 12/18 = 2/3."
    }
  ],

  "c10_les_7_2": [ // Combined events, sample spaces, complementary events
    {
      id: "c10_q_7_2_01", q: "When TWO fair dice are rolled simultaneously, how many TOTAL elementary outcomes are in the sample space S?",
      options: ["36 outcomes (6 × 6)", "12", "6", "64"], a: "36 outcomes (6 × 6)", acc: ["36 outcomes (6 × 6)", "36", "thirty-six"], type: "written", difficulty: "easy",
      h: "6 × 6 = 36 ordered pairs (1,1) to (6,6).", exp: "Total sample space n(S) = 6 × 6 = 36."
    },
    {
      id: "c10_q_7_2_02", q: "What is the probability of getting a DOUBLET (same number on both dice, e.g. (1,1), (2,2)...)?",
      options: ["6/36 = 1/6", "1/36", "12/36 = 1/3", "2/36"], a: "6/36 = 1/6", acc: ["6/36 = 1/6", "1/6", "6/36"], type: "written", difficulty: "easy",
      h: "6 doublets: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6). 6/36 = 1/6.", exp: "P(Doublet) = 6/36 = 1/6."
    },
    {
      id: "c10_q_7_2_03", q: "When THREE fair coins are tossed simultaneously, how many outcomes are in the sample space?",
      options: ["8 outcomes (2³ = 8)", "6", "9", "16"], a: "8 outcomes (2³ = 8)", acc: ["8 outcomes (2³ = 8)", "8", "eight"], type: "written", difficulty: "easy",
      h: "2 × 2 × 2 = 8: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.", exp: "n(S) = 2³ = 8."
    },
    {
      id: "c10_q_7_2_04", q: "When 3 coins are tossed, what is the probability of getting EXACTLY TWO HEADS (HHT, HTH, THH)?",
      options: ["3/8", "1/8", "1/2", "3/4"], a: "3/8", acc: ["3/8"], type: "written", difficulty: "medium",
      h: "3 outcomes with 2 heads out of 8 total.", exp: "P(Exactly 2 Heads) = 3/8."
    },
    {
      id: "c10_q_7_2_05", q: "When 3 coins are tossed, what is the probability of getting AT LEAST ONE HEAD?",
      options: ["7/8 (1 - P(TTT) = 1 - 1/8)", "1/8", "1/2", "3/8"], a: "7/8 (1 - P(TTT) = 1 - 1/8)", acc: ["7/8 (1 - P(TTT) = 1 - 1/8)", "7/8"], type: "written", difficulty: "medium",
      h: "Complement of no heads (TTT): 1 - 1/8 = 7/8.", exp: "P(At least 1 head) = 1 - 1/8 = 7/8."
    },
    {
      id: "c10_q_7_2_06", q: "When two dice are thrown, what is the probability that the SUM of numbers is 7?",
      options: ["6/36 = 1/6", "5/36", "7/36", "1/12"], a: "6/36 = 1/6", acc: ["6/36 = 1/6", "1/6", "6/36"], type: "written", difficulty: "medium",
      h: "Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) [6 pairs].", exp: "P(Sum = 7) = 6/36 = 1/6."
    },
    {
      id: "c10_q_7_2_07", q: "When two dice are thrown, what is the probability that the sum is at least 10 (sum = 10, 11, or 12)?",
      options: ["6/36 = 1/6 (pairs: (4,6),(5,5),(6,4),(5,6),(6,5),(6,6))", "5/36", "4/36 = 1/9", "3/36"], a: "6/36 = 1/6 (pairs: (4,6),(5,5),(6,4),(5,6),(6,5),(6,6))", acc: ["6/36 = 1/6 (pairs: (4,6),(5,5),(6,4),(5,6),(6,5),(6,6))", "1/6", "6/36"], type: "written", difficulty: "medium",
      h: "Sum 10 (3), Sum 11 (2), Sum 12 (1) = 6 outcomes.", exp: "P(Sum ≥ 10) = 6/36 = 1/6."
    },
    {
      id: "c10_q_7_2_08", q: "What does the COMPLEMENTARY EVENT rule state?",
      options: ["P(E) + P(not E) = 1 (P(E') = 1 - P(E))", "P(E) × P(E') = 1", "P(E) = P(E')", "P(E) + P(E') = 0"], a: "P(E) + P(not E) = 1 (P(E') = 1 - P(E))", acc: ["P(E) + P(not E) = 1 (P(E') = 1 - P(E))", "P(E) + P(not E) = 1"], type: "written", difficulty: "hard",
      h: "Probability of event happening plus not happening equals certainty (1).", exp: "P(E) + P(E') = 1."
    },
    {
      id: "c10_q_7_2_09", q: "When two dice are rolled, what is the probability that the product of numbers is an ODD number?",
      options: ["9/36 = 1/4 (odd × odd only: 3 × 3 = 9)", "18/36 = 1/2", "27/36 = 3/4", "6/36 = 1/6"], a: "9/36 = 1/4 (odd × odd only: 3 × 3 = 9)", acc: ["9/36 = 1/4 (odd × odd only: 3 × 3 = 9)", "1/4", "9/36"], type: "written", difficulty: "hard",
      h: "Product is odd only when BOTH dice are odd {1,3,5}: 3 × 3 = 9 outcomes. 9/36 = 1/4.", exp: "P(Odd Product) = (3 × 3) / 36 = 9/36 = 1/4."
    },
    {
      id: "c10_q_7_2_10", q: "Two friends were born in the year 2000 (leap year). What is the probability that they share the EXACT SAME BIRTHDAY?",
      options: ["1 / 366", "1 / 365", "2 / 366", "1 / 52"], a: "1 / 366", acc: ["1 / 366", "1/366"], type: "written", difficulty: "hard",
      h: "Year 2000 is a leap year with 366 days. 1 favourable day out of 366.", exp: "P(Same Birthday in leap year) = 1 / 366."
    }
  ]
};
