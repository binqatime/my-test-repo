# CSS and xpath

Test 1
Open https://www.joejuice.com/
Tap on the See the menu button: [data-cy="pickup-button"]
Tap on the Search field: [data-cy="store-search"]
Fill in "Immervad 2-8, Aarhus C"
Select Magasin Aarhus Aarhus from the drop-down: #mui-10196-option-1
Verify the store name element: div h2[data-cy="store-name"]
Tap on the Go to store button: button[data-cy="store-modal-go-to-store-button"]

Test 2
Perform steps from Test 1 or open https://www.joejuice.com/store/ad93a331-7da3-4b6a-9226-25ccc00732f9
Tap on Sandwiches in the Menu: span[aria-label="Scroll to Sandwiches"]
Select the Steak sandwich: img[alt="THE STEAK picture"]
Verify the title: h3[data-cy='product-title']
Select Gluten free bread: div.MuiFormGroup-root>ul>div:nth-of-type(2)
Tap on Add to Basket: button[data-cy='add-to-cart-button']
Verify Order overview: h2[data-cy='basket-title'] and item: #basket3

Test 3 (xpath)
Perform steps from Test 1 or open https://www.joejuice.com/store/ad93a331-7da3-4b6a-9226-25ccc00732f9
Select Combo offer: //h3[text()='Acai Breakfast Combo Offer']
Verify the title: //h3[@data-cy='product-title']
Select coffee: //span[text()='Tap to select Coffee']
Tap on cappucin: //h5[text()='Cappuccino 12oz']
Tap on the Back button: //div[text()='Back']
Select Bowl: //span[text()='Tap to select Acai Bowl']
Confirm selection: //div[@data-cy='product-button']
Tap on the Back button: //div[text()='Back']
Add pineapple to your bowl: //span[text()='Pineapple']
Add to Basket: //button[@data-cy='add-to-cart-button']
