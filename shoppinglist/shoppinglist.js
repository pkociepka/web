function addProduct() {
    var productName = $("#product-name").val();
    if (productName != "") {
        $("#product-name").val("");
        $("#shopping-list").append(createShoppingListElement(productName));
    }
}

function createShoppingListElement(productName) {
    var shoppingListItem = $("<li></li>")
        .addClass("list-group-item shopping-item");
    var name = getNameElement(productName);
    shoppingListItem.append(name);
    var quantity = getQuantityBadge();
    var plus = getPlusButton(quantity);
    var minus = getMinusButton(quantity);
    var removeButton = getRemoveButton(shoppingListItem);
    var controls = $("<div></div>")
        .addClass("col product-controls")
        .append([minus, quantity, plus, removeButton]);
    shoppingListItem.append(controls);
    return shoppingListItem;

}

function getNameElement(productName) {
    return $("<div></div>")
    .addClass("col product-name")
    .text(productName);
}

function getQuantityBadge() {
    return $("<span></span>")
        .addClass("badge badge-pill badge-primary")
        .text("1");
}

function getPlusButton(quantity) {
    return $("<span></span>")
        .addClass("badge badge-pill badge-secondary product-button")
        .text("+")
        .on("click", function () {
            var qty = parseInt(quantity.text()) + 1;
            quantity.text(qty.toString());
        });
}

function getMinusButton(quantity) {
    return $("<span></span>")
        .addClass("badge badge-pill badge-secondary product-button")
        .text("-")
        .on("click", function () {
            var qty = Math.max(parseInt(quantity.text()) - 1, 0);
            quantity.text(qty.toString());
        });
}

function getRemoveButton(listItem) {
    return $("<span></span>")
        .addClass("badge badge-pill badge-danger cui-trash product-button")
        .text(" ")
        .on("click", function () {
            listItem.remove();
        });
}