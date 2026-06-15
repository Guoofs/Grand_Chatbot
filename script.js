let state = {};

const contributionsTable = {
  16: { 6: 5.33, 12: 10.66, 18: 15.99 },
  17: { 6: 5.33, 12: 10.66, 18: 15.99 },
  18: { 6: 5.33, 12: 10.66, 18: 15.99 },
  19: { 6: 5.33, 12: 10.66, 18: 15.99 },
  20: { 6: 5.33, 12: 10.66, 18: 15.99 },
  21: { 6: 5.33, 12: 10.66, 18: 15.99 },
  22: { 6: 5.33, 12: 10.66, 18: 15.99 },
  23: { 6: 5.33, 12: 10.66, 18: 15.99 },
  24: { 6: 5.33, 12: 10.66, 18: 15.99 },
  25: { 6: 5.33, 12: 10.66, 18: 15.99 },
  26: { 6: 5.33, 12: 10.66, 18: 15.99 },
  27: { 6: 5.33, 12: 10.66, 18: 15.99 },
  28: { 6: 5.33, 12: 10.66, 18: 15.99 },
  29: { 6: 5.33, 12: 10.66, 18: 15.99 },
  30: { 6: 5.33, 12: 10.66, 18: 15.99 },

  31: { 6: 5.72, 12: 11.44, 18: 17.16 },
  32: { 6: 5.72, 12: 11.44, 18: 17.16 },
  33: { 6: 5.72, 12: 11.44, 18: 17.16 },
  34: { 6: 5.72, 12: 11.44, 18: 17.16 },
  35: { 6: 5.72, 12: 11.44, 18: 17.16 },
  36: { 6: 5.72, 12: 11.44, 18: 17.16 },
  37: { 6: 5.72, 12: 11.44, 18: 17.16 },

  38: { 6: 6.11, 12: 12.22, 18: 18.33 },
  39: { 6: 6.11, 12: 12.22, 18: 18.33 },
  40: { 6: 6.11, 12: 12.22, 18: 18.33 },
  41: { 6: 6.11, 12: 12.22, 18: 18.33 },
  42: { 6: 6.11, 12: 12.22, 18: 18.33 },
  43: { 6: 6.11, 12: 12.22, 18: 18.33 },
  44: { 6: 6.11, 12: 12.22, 18: 18.33 },
  45: { 6: 6.11, 12: 12.22, 18: 18.33 },

  46: { 6: 6.37, 12: 12.74, 18: 19.11 },
  47: { 6: 6.37, 12: 12.74, 18: 19.11 },

  48: { 6: 6.76, 12: 13.52, 18: 20.28 },
  49: { 6: 7.02, 12: 14.04, 18: 21.06 },
  50: { 6: 7.41, 12: 14.82, 18: 22.23 },
  51: { 6: 7.67, 12: 15.34, 18: 23.01 },
  52: { 6: 8.06, 12: 16.12, 18: 24.18 },
  53: { 6: 8.32, 12: 16.64, 18: 24.96 },
  54: { 6: 8.58, 12: 17.16, 18: 25.74 },
  55: { 6: 8.97, 12: 17.94, 18: 26.91 }
};

function getContribution(age, shares) {
  if (!contributionsTable[age]) return null;
  return contributionsTable[age][shares] || null;
}

function showMessage(text) {
  document.getElementById("messages").innerHTML += `<p>${text}</p>`;
}

function showOptions(options) {
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.label;
    btn.onclick = opt.action;
    optionsDiv.appendChild(btn);
  });
}

function start() {clearScreen();
  document.getElementById("messages").innerHTML = "";
  showMessage("Welcome — how can we help?");
  showOptions([
    { label: "I'm interested in joining", action: askJoining },
    { label: "I'd like to know more about your products", action: askProducts },
    { label: "I'm a member or policyholder with a question", action: askMembers }
  ]);
}


function clearScreen() {
  document.getElementById("messages").innerHTML = "";
  document.getElementById("options").innerHTML = "";
}


function askJoining() {clearScreen();
  showMessage(`If you are ready to join now you can do this by filling in our online application forms.<br><br>
  <a href= https://www.guoofs.com/our-products/membership-products-the-individual-account-system/ias-adult/ias-adult-application-form/" target="_blank">IAS Adult Application Form</a><br>
<a href= https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/helping-hand-savings-plan/" target="_blank">IAS Juvenile Application Form</a><br><br> Otherwise please select an option below to find out more.`);
  showOptions([
    { label: "How much does membership cost", action: askCost },
    { label: "What are the benefits of membership?", action: askBenefits },
    { label: "Which lodge should I join?", action: askLodge },
    { label: "I prefer not to apply online", action: notOnline },
    { label: "Return to start", action: start }
  ]);
}

function askCost() {
  showMessage("Membership costs change over time and depend on your age and the number of shares you take out. Contributions increase to a maximum of £38.22 p.a. by age 64 for a member holding the maximum 18 shares. <br><br>Would you like me to tell you your first annual premium? I will need your age and the number of shares you will be taking to provide this information "); 
  showOptions([
    { label: "Yes- I'll tell you my age", action: askConts },
    { label: "No- return to information on joining", action: askJoining },
    { label: "Return to start", action: start }
  ]);
}

function askConts() {
  showMessage("What is your age?");
  document.getElementById("options").innerHTML = `
    <input id="ageInput" type="number" />
    <button onclick="checkAge()">Continue</button>
  `;
}

function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);

  if (age > 55) {
    showMessage(`
I'm sorry, the maximum age for taking out an IAS is 55.<br><br>

Please consider if our <a href= https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/cash-builder" target="_blank">Cashbuilder product</a> may be suitable for you.<br><br>

Or contact our Head Office team on <strong>0161 872 3356</strong> to discuss other ways to join the Grand United Order of Oddfellows.
`);

    showOptions([
    { label: "Find information on Cashbuilder", action: askProducts },
    { label: "Return to information on joining", action: askJoining },
    { label: "Return to start", action: start }
  ]);

    return;
  }

  state.age = age;
  askShares();
}

function askShares() {
  showMessage("How many shares would you like?");

  showOptions([
    { label: "6 shares", action: () => showResult(6) },
    { label: "12 shares", action: () => showResult(12) },
    { label: "18 shares", action: () => showResult(18) }
  ]);
}

function showResult(shares) {
  const age = state.age;
  const contribution = getContribution(age, shares);

  if (contribution === null) {
    showMessage("Sorry, I couldn't find a contribution for that age and share combination.");
  } else {
    showMessage(
      `Your first annual contribution would be £${contribution.toFixed(2)}.<br><br>
      Remember, this increases with age. For our contributions table please see <a href= https://www.guoofs.com/_webedit/uploaded-files/All%20Files/Financial%20Products%20-%20Tables.pdf "target="_blank">here</a>`
    );}
     showOptions([{ label: "Return to start", action: start }]);
}

function askBenefits() {
  showMessage(`Joining the Grand United Order of Oddfellows not only gives you access to our tax-exempt Individual Account System but also allows you to be as involved as you want with your local lodge activities. Benefits of joining include
  <ul>
  <li>Tax free savings opportunties through the Individual Account System</li>
  <li>Sickness and death benefits including death benefits payable on the death of a spouse</li>
  <li>The chance to build life-long friendships with like- minded people</li>
  <li>The chance to get involved with local lodge activities</li>
  <li>The chance to get involved in the future of the Order by learning about lodge-level or Society leadership positions. You can find out more about our Board and their Oddfellow journeys here: <a href= "https://www.guoofs.com/about-us/meet-the-board/"target="_blank">Meet the Board</a>.</li>
We'd love you to get involved!`);
  showOptions([
    { label: "Find out about the financial benefits of joining", action: askProducts },
    { label: "See some of our past and upcoming events", action: seeSocial },
    { label: "Return to information on joining", action: askJoining },
    { label: "Return to start", action: start }
  ]);
}

function seeSocial() {
  
showMessage(`
Last year members took part in a wide range of events from canal walks to attending the Christmas pantomime. 
Delegates to our Annual Moveable Conference also enjoyed a fantastic weekend in York as we installed our new Grand Master.<br><br>

You can see some of our latest events and future plans at <a href= https://www.guoofs.com/calendar-events/" target="_blank">our events calendar</a>.
`);

  showOptions([
    { label: "Return to information on joining", action: askJoining },
    { label: "Return to start", action: start }]);
}

function askLodge() {
  showMessage(`
If you have a local lodge which you would prefer to join, you can select this lodge on the online application form:<br><br>

<a href= https://www.guoofs.com/our-products/membership-products-the-individual-account-system/ias-adult/ias-adult-application-form/" target="_blank">IAS Adult Application Form</a><br>
<a href= https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/helping-hand-savings-plan/" target="_blank">IAS Juvenile Application Form</a><br><br>

Alternatively, you can contact a lodge secretary directly via our <a href= https://www.guoofs.com/locations/" target="_blank">Locations page</a>.<br><br>

If you do not have a preference for a local lodge, you can join our Central Lodge based in Manchester. Please select this option when applying.
`);

  showOptions([
    { label: "Return to information on joining", action: askJoining },
    { label: "Return to start", action: start }]);
}

function notOnline() {
  showMessage(`If you prefer not to apply online you can always print the application form and return it by post or by hand to the secretary of your chosen lodge. Contact details for the lodges can be found here:<br><br> 
  <a href= https://www.guoofs.com/locations/" target="_blank">Locations page</a>.<br><br>`)
  showOptions([
    { label: "Return to information on joining", action: askJoining },
    { label: "Return to start", action: start }]);
}
  
function askProducts() {clearScreen();
  showMessage("Our products offer a great way to grow tax exempt savings for your future or that of your child. <br><br> Find out more about our products below.");
  showOptions([
    { label: "Tell me about the Individual Account System (IAS)", action: askIAS },
    { label: "Tell me about the Cashbuilder product", action: askCashbuilder },
    { label: "What is the difference between the Cashbuilder and the IAS", action: askDifference },
    { label: "I am interested in opening an account for my child or grandchild", action: askJuv },
    { label: "Return to start", action: start }
  ]);
}

function askIAS() {
  showMessage(`The Indivdual Accounts System is open for joining for all Members aged between 16 and 55. 
  <br><br>  Here's how it works: 
  <ul>
  <li>Members take up a number of shares (6,12 or 18)</li>
  <li>Contributions depend on age and number of shares. For a member with 6 shares, annunal contributions start at as little as £5.33p.a. for a 16 year old and increase with age to a maximum of £12.74 for a 64 year old. For members with 12 and 18 shares this scales accordingly. </li>
  <li>Contributions cover sickness cover in the event that you become ill and cannot work, and a death benefit payable to your beneficiary in the event of your death.</li>
   <li>Where a surplus arises on the sick and death funds, as determined by actuarial valuation, lodges can return this to their members by allocting a discretionary £ per share each year and paying interest on the balance on the IAS. The accumulated amount on your account is paid to you on your 65th birthday as a tax free lump sum. </li>
   <li>It is important to note that the amount allocated per share, and the interest payable will vary by lodge and is not guaranteed.</li>
</ul>

 Further details on the product can be found here:<br><br> 
  <a href= https://www.guoofs.com/our-products/membership-products-the-individual-account-system/" target="_blank">Adult Individual Account (IAS) page</a>.<br><br>`)
  showOptions([
    { label: "I am ready to apply", action: ApplyNow },
    { label: "Return to information on products", action: askProducts },
    { label: "Return to start", action: start }]);
}
  
function ApplyNow() {
  showMessage(`If you are ready to join now you can do this by filling in our online application forms.<br><br>
  <a href= https://www.guoofs.com/our-products/membership-products-the-individual-account-system/ias-adult/ias-adult-application-form/" target="_blank">IAS Adult Application Form</a><br>
<a href= https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/helping-hand-savings-plan/" target="_blank">IAS Juvenile Application Form</a><br><br>
<a href= https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/cash-builder/cash-builder-plan-application/" target="_blank">Cashbuilder Application Form</a><br>
<a href= https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/helping-hand-savings-plan/helping-hand-savings-plan-application/" target="_blank">Helping Hands Application Form</a><br><br> `);
  showOptions([
    { label: "Return to start", action: start }
  ]);
}
  
  function askCashbuilder() {
  showMessage(`he Cashbuilder account is a long-term savings product designed to help you build up a guaranteed lump sum over a fixed term, without requiring you to join the Order.<br><br>

Here's how it works:

<ul>
  <li>The plan runs for a fixed term of 10 years or more</li>
  <li>You make fixed monthly, quarterly or annual contributions throughout the term</li>
  <li>At the end of the term, you receive a tax-free guaranteed payout (the sum assured) based on your contributions and your age when you entered into the policy</li>
  <li>The plan is subject to 3-yearly actuarial assessment. Depending on the Society's performance, the actuary may also recommend a bonus, as a % of sum assured, to be paid at the end of the term although this is not guaranteed.</li>
  <li>Cashbuilder can be a suitable option if you are unable to join the IAS or prefer a simpler savings approach</li>
</ul>

Further details on the product can be found here:<br><br>

<a href="https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/cash-builder" target="_blank">Cashbuilder product page</a>.<br><br>
`);

  showOptions([
    { label: "I am ready to apply", action: ApplyNow },
    { label: "Return to information on products", action: askProducts },
    { label: "Return to start", action: start }
  ]);
}

    function askDifference() {
  showMessage(`
I cannot advise you on which product is most suitable for you. However, to help you compare the products, here are the key product features:<br><br>

<table style="width:100%; border-collapse:collapse; font-size:14px;">
  <tr>
    <th style="text-align:left; border-bottom:1px solid #ccc; padding:6px;">Feature</th>
    <th style="text-align:left; border-bottom:1px solid #ccc; padding:6px;">IAS (Individual Account System)</th>
    <th style="text-align:left; border-bottom:1px solid #ccc; padding:6px;">Cashbuilder</th>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Eligibility</strong></td>
    <td style="padding:6px;">Members aged 16–55 at entry</td>
    <td style="padding:6px;">Available to members and non-members aged 16 and above</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Type of product</strong></td>
    <td style="padding:6px;">Membership-based benefit and savings arrangement</td>
    <td style="padding:6px;">Long-term fixed-term savings plan</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Contributions</strong></td>
    <td style="padding:6px;">Based on age and number of shares (6, 12 or 18)</td>
    <td style="padding:6px;">Fixed regular contributions agreed at outset</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Term</strong></td>
    <td style="padding:6px;">Runs until age 65</td>
    <td style="padding:6px;">Fixed term (typically 10+ years)</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Benefits during term</strong></td>
    <td style="padding:6px;">Sickness benefit and death benefit included</td>
    <td style="padding:6px;">On death, the amount paid to beneficiaries is the premiums paid + 3%</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Returns</strong></td>
    <td style="padding:6px;">Discretionary allocations and interest (not guaranteed)</td>
    <td style="padding:6px;">Fixed outcome based on agreed contributions and term plus discretionary bonuses</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Outcome</strong></td>
    <td style="padding:6px;">Tax-free lump sum payable at age 65</td>
    <td style="padding:6px;">Tax-free lump sum payable at end of the term</td>
  </tr>
</table>

<br>

Further information on each product can be found below if you would like to explore in more detail.
`);

  showOptions([
    { label: "Tell me about IAS", action: askIAS },
    { label: "Tell me about Cashbuilder", action: askCashbuilder },
    { label: "I am ready to apply", action: ApplyNow },
    { label: "Return to information on products", action: askProducts },
    { label: "Return to start", action: start }
  ]);
}

      function askJuv() {
  showMessage(`Opening a Juvenile IAS or taking out a Helping Hands policy is a fantastic way to save for your youngster's future.<br><br>
In the UK, parents or guardians with parental responsibility can open and manage bank or savings accounts on behalf of children under 16 without the child's consent.<br><br>
If someone who is not a legal parent or guardian (like a grandparent or aunt) wants to open an account for a child, they must have permission from the child's parent or legal guardian.<br><br>
If you have parental responsibility, or parental permission, please find out more below.`)
  showOptions([
    { label: "Tell me about the Juvenile IAS", action: askJuvIAS },
    { label: "Tell me about Helping hands", action: askHelpingHands },
    { label: "What is the difference between the Helping Hands and the Juvnile IAS", action: askJuvDifference },
    { label: "Return to information on products", action: askProducts },
    { label: "Return to start", action: start }]);
 } 

function askJuvIAS() {
  showMessage(`The Juvenile Indivdual Accounts System plan gives children under the age of 16 a simple way to build long term member benefits through small regular contributionsis. 
  <br><br>  Here's how it works: 
  <ul>
  <li>Contributions depend the child's age. At 32.5p per year up to the age of 6 and 65p per year up to the age of 16, the contributions are very small and affordable</li>
   <li>As with the adult IAS, where actuarial valuation allows, juvenile members are allocated a discretionary amount each year along with interest interest accrued on their account. </li>
   <li>The accumulated amount on the account is paid to the child as a tax free lump sum on their 16th birthday, making it a perfect birthday present. 
   <li>It is important to note that the amount allocated each year, and the interest payable will vary by lodge and is not guaranteed.</li>
</ul>

 Further details on the product can be found here:<br><br> 
  <a href= https://www.guoofs.com/our-products/membership-products-the-individual-account-system/ias-juvenile/ target="_blank">Juvenile Individual Account (IAS) page</a>.<br><br>`)
  showOptions([
    { label: "I am ready to apply", action: ApplyNow },
    { label: "Return to information on products", action: askProducts },
    { label: "Return to start", action: start }]);
}

function askHelpingHands() {
  showMessage(`The Helping Hands Saving Plan is a 10 savings product designed to help your child build up a guaranteed lump sum over a fixed term, without requiring you to join the Order.<br><br>

Here's how it works:

<ul>
  <li>The plan runs for a fixed term of 10 years</li>
  <li>You make fixed monthly, quarterly or annual contributions throughout the term</li>
  <li>At the end of the term, your child receives a tax-free guaranteed payout (the sum assured). The sum assured is £100 per £1 of monthly premium paid.</li>
  <li>The plan is subject to 3-yearly actuarial assessment. Depending on the Society's performance, the actuary may also recommend a bonus, as a % of sum assured, to be paid at the end of the term although this is not guaranteed.</li>
  <li>Helping Hands can be a suitable option if you are unable to join the Juvenile IAS or prefer a simpler savings approach</li>
</ul>

Further details on the product can be found here:<br><br>

<a href=https://www.guoofs.com/our-products/non-membership-products-cashbuilder-helping-hands/helping-hand-savings-plan/>Helping Hands product page</a>.<br><br>
`);

  showOptions([
    { label: "I am ready to apply", action: ApplyNow },
    { label: "Return to information on products", action: askProducts },
    { label: "Return to start", action: start }
  ]);
}
  
function askJuvDifference() {
  showMessage(`
I cannot advise you on which product is most suitable for you. However, to help you compare the products, here are the key product features:<br><br>

<table style="width:100%; border-collapse:collapse; font-size:14px;">
  <tr>
    <th style="text-align:left; border-bottom:1px solid #ccc; padding:6px;">Feature</th>
    <th style="text-align:left; border-bottom:1px solid #ccc; padding:6px;">Juvenile IAS (Individual Account System)</th>
    <th style="text-align:left; border-bottom:1px solid #ccc; padding:6px;">Helping Hands</th>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Eligibility</strong></td>
    <td style="padding:6px;">Members aged up to 16 at entry</td>
    <td style="padding:6px;">Available to members and non-members aged up to 16</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Type of product</strong></td>
    <td style="padding:6px;">Membership-based benefit and savings arrangement</td>
    <td style="padding:6px;">Long-term fixed-term savings plan</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Contributions</strong></td>
    <td style="padding:6px;">32.5p p.a up to age 6 then 65p p.a. up to age 16</td>
    <td style="padding:6px;">Fixed regular contributions agreed at outset</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Term</strong></td>
    <td style="padding:6px;">Runs until age 16</td>
    <td style="padding:6px;">Fixed term of 10 years</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Benefits during term</strong></td>
    <td style="padding:6px;">Variable death benefit based on age plus the value of the account</td>
    <td style="padding:6px;">Death benefit payable based on the age of the child</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Returns</strong></td>
    <td style="padding:6px;">Discretionary allocations and interest (not guaranteed)</td>
    <td style="padding:6px;">Fixed outcome (sum assured) plus discretionary bonuses</td>
  </tr>

  <tr>
    <td style="padding:6px;"><strong>Outcome</strong></td>
    <td style="padding:6px;">Tax-free lump sum payable at age 16</td>
    <td style="padding:6px;">Tax-free lump sum payable at end of the term</td>
  </tr>
</table>

<br>

Further information on each product can be found below if you would like to explore in more detail.
`);

  showOptions([
    { label: "Tell me about Juvenile IAS", action: askJuvIAS },
    { label: "Tell me about Helping Hands", action: askHelpingHands },
    { label: "I am ready to apply", action: ApplyNow },
    { label: "Return to information on products", action: askProducts },
    { label: "Return to start", action: start }
  ]);
}

    
function askMembers() {
  showMessage("We’ll help you find the right lodge...");
  showOptions([{ label: "Return to start", action: start }]);
}

start();