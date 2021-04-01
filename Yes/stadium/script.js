const uspParent = $(".pdp__usps");

uspParent.find("span:eq(0)").html("Leverans 2-3 dagar");
uspParent.find("span:eq(1)").html("Fri retur");
uspParent.find("span:eq(2)").html("Bäst i stan");

uspParent.clone().insertAfter("div.pdp__usps:last");
uspParent.find("span:eq(0)").html("Usp1");
uspParent.find("span:eq(1)").html("Usp2");
uspParent.find("span:eq(2)").html("Usp3");
