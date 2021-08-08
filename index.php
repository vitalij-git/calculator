<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>

<?php 

if(isset($_GET["action"])){
        if(isset($_GET["arithmetic"]) && !empty($_GET["arithmetic"])){
            $arithmetic = $_GET["arithmetic"];
            $arithmetic = $result;
        }
        else{
            $result ="laukelis tuscias";
        }
    }


    ?>
    <div class="calculator" >
     
            <form action="index.php" method="get">
                <input type="text"  disabled="true"  name="arithmetic" value="<?php echo (isset($result))?$result:'';?>" class="results" id="calculator-result" >
                <div class="inputs">
                    <input type="button" value="%" >
                    <input type="button" value="pow" >
                    <input type="button" value="CE" class="clear">
                    <input type="button" value="C" class="all-clear">
                </div> 
                <div class="inputs">
                    <input  type="button" value="7" class="button7">
                    <input type="button" value="8" class="button8">
                    <input type="button" value="9" class="button9">
                    <input type="button" value="+" class="sum">
                </div>
                <div class="inputs">
                    <input type="button" value="4" class="button4">
                    <input type="button" value="5" class="button5">
                    <input type="button" value="6" class="button6">
                    <input type="button" value="-" class="substract">
                </div>
                <div class="inputs">
                    <input type="button" value="1" class="button1">
                    <input type="button" value="2" class="button2">
                    <input type="button" value="3" class="button3">
                    <input type="button" value="/" class="division">
                </div>
                <div class="inputs">
                    <input type="button" value="0" class="button0">
                    <input type="button" value="." class="point">
                    <button type="submit" name="action" class="submit-button">=</button>
                    <input type="button" value="*" class="multiply">
                </div>
            </form>
    </div>


</body>
    <script src="script.js"></script>
</html>