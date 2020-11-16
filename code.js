$(document).ready(function () {
    $("#Step1").click(stepOne);
    $("#Step2").click(stepTwo);
    $("#Step3").click(stepThree);

    $("#DeliveryInfo").hide();
    $("#OrderInfo").hide();

    function stepOne(){
        $("#PizzaDetails").show();
        $("#DeliveryInfo").hide();
        $("#OrderInfo").hide();
    }

    function stepTwo(){
        $("#DeliveryInfo").show();
        $("#PizzaDetails").hide();
        $("#OrderInfo").hide();
    }

    //Step 3 automatically brings the data from the
    // other steps forward and displays everything
    // as soon as the button is clicked
    function stepThree(){

        //Variables are established at the beginning with the value of 0 to ensure that
        //if the customer goes back, they will be able to change their order.
        //The program will auto recalculate.
        var Name = $("#name").val();
        var Address = $("#Address").val();
        var Phone = $("#Phone").val();
        var numMeats = 0;
        var numVeg = 0;
        var subTotal = 0;
        var Total = 0;
        var meats = "Meats: ";
        var Veg = "Vegetables: ";
        $("#OrderInfo").show();
        $("#PizzaDetails").hide();
        $("#DeliveryInfo").hide();

        //Meats

        if($("#Bacon:checked").length == 1){
            meats = meats + "Bacon, ";
            numMeats++;
        }
        if($("#Sausage:checked").length == 1){
            meats = meats + "Sausage, ";
            numMeats++;
        }
        if($("#Ham:checked").length == 1){
            meats = meats + "Ham.";

            numMeats++;
        }


        $("#OIMeats").text(meats);

        //Veggies

        if($("#broccoli:checked").length == 1){
            Veg = Veg + "Broccoli, ";
            numVeg++;
        }
        if($("#mushroom:checked").length == 1){
            Veg = Veg + "Mushrooms, ";
            numVeg++;
        }
        if($("#olives:checked").length == 1){
            Veg = Veg + "Olives.";
            numVeg++;
        }

        $("#OIVeggies").text(Veg);


        //Determine Size
        if($("#small:checked").length == 1){
            subTotal = parseFloat(7 + (numMeats * 1.50) + (numVeg * 1));
            $("#OISize").text("Size: Small");
        }
        else if($("#medium:checked").length == 1){
            subTotal = parseFloat(9 + (numMeats * 1.50) + (numVeg * 1));
            $("#OISize").text("Size: Medium");
        }
        else if($("#large:checked").length == 1){
            subTotal = parseFloat(12 + (numMeats * 1.50) + (numVeg * 1));
            $("#OISize").text("Size: Large");
        }


        //Determine Crust
        if($("#thin:checked").length == 1){
            $("#OICrust").text("Crust: Thin");
        }
        else if($("#pan:checked").length == 1){
            $("#OICrust").text("Crust: Pan");
        }
        else if($("#gluten:checked").length == 1){
            $("#OICrust").text("Crust: Gluten Free");
        }

        //Output Customer data and calculated totals
        $("#CIName").text("Name: " + Name);
        $("#CIAddress").text("Address: " + Address);
        $("#CIPhone").text("Phone: " + Phone);

        $("#BISubotal").text("Subtotal: $" + subTotal.toFixed(2));
        $("#BITotal").text("Total Due: $" + (subTotal + (subTotal * 0.051) + 2).toFixed(2));




    }



})