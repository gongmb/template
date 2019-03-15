//立即购买
function BuyNow(productCode, pcount) {
    $.ajax({
        type: "POST",
        url: "../purchase/InitCart",
        cache: "false",
        data: { pCode: productCode, pcount: pcount, NoCache: Math.random() },
        success: function (result) {
            eval("result =" + result);
            if (result.BuyStatus != undefined) {
                return false;
            }
            else {
                window.location.href = "../purchase/ShopCart@backurl=" + escape(document.URL);
            }
        }
    });
}

//单个商品相加
function PlusProduct(productCode) {
    var $this = $("#text_" + productCode);
    $this.val(parseInt($this.val()) + 1);
    UpdateItem($this, productCode);
}
//单个商品相减
function CutProduct(productCode) {
    var $this = $("#text_" + productCode);
    if ($this.val() == 1) {
        return false;
    }
    $this.val(parseInt($this.val()) - 1);
    UpdateItem($this, productCode);
}

//更新购物数量
function UpdateItem($this, productCode) {
    if (!isnum("" + $this.val() + "") || $this.val() < 1) {
        alert("购买数量必须是大于0的正整数！");
        $this.focus();
        return false;
    }
    if (parseInt($this.val() > 999)) {
        alert("购买的产品数量不正确！");
        $("#text_" + productCode).focus();
        return false;
    }
    $.ajax({
        type: "POST",
        url: "../purchase/UpdateItem",
        data: { pCode: productCode, pcount: $this.val(), NoCache: Math.random() },
        success: function (result) {
            if (result != "") {
                eval("result =" + result);
                $("#subtotal_" + productCode).html(result.Subtotal);
                UpdateShoppingCartInfo(result)
            }
        }
    });
}

function DelProduct(productCode) {
    if (confirm("确定要删除此商品吗?")) {
        $.ajax({
            type: "POST",
            url: "../purchase/DelItem",
            data: { pCode: productCode },
            success: function (result) {
                eval("result =" + result);
                $("#tr_" + productCode).remove();
                UpdateShoppingCartInfo(result);
            }
        });
    }
}

//修改购买数量
function EditQuantity(val) {
    switch (val) {
        case "+":
            $("#QuantityText").val(parseInt($("#QuantityText").val()) + 1);
            break;
        case "-":
            if ($("#QuantityText").val() == 1) return false;
            $("#QuantityText").val(parseInt($("#QuantityText").val()) - 1);
            break;
    }
}
function UpdateShoppingCartInfo(result) {
    $("#TotalNum").html(result.TotalNum);//
    $("#TotalMarket").html("¥" + result.TotalMarketPrice);
    $("#ToPreferentialPric").html("¥" + result.ToPreferentialPric);
    $("#TotalSum").html("¥" + result.TotalSum);
}

//文本框修改数量
function ProdUpdateText($this) {
    if (!isnum($this.value) || $this.value == "" || $this.value < 1) {
        $this.focus();
        $this.value = 1;
        alert("购买数量必须是大于0的正整数！")
        return false;
    }
}