<%@ page import="java.sql.*" %>
<%@ page import="javax.naming.*, javax.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <head>
    <title>Database Entries</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
        }
        header {
            display: flex;
            align-items: center;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #555;
            margin: 0;
        }
        .img {
            height: 50px;
            margin-right: 10px;
        }
        .a img {
            height: 50px;
            margin-right: 10px;
        }
        .b img{
        height: 190px;
        float: right;
        }
        
        .c img{
        	height : 500px;
        	width : 30%;
        }
        
        form input[type="submit"] {
			padding: 15px 25px;
			background-color: #4CAF50;
			color: white;
			border: none;
			border-radius: 15px;
			cursor: pointer;
			font-size: 16px;
		}
		
		.k {
			font-size : 20px;
			padding-left : 50px;
		}
        
    </style>
</head>

<body>
<div class = "a">
	<header>
		<img src="img.jpg" alt="Election Commission of India Logo">
		<h1>Election Commission of India</h1>
	</header>	
</div>

	<div class="b">
		<img src="V_1.jpg" alt="Election Commission of India Logo" style="width: 100%;">
	</div>
	<div>
	<div class="c">
		<img src="V_2.jpg" alt="Election Commission of India Logo" style="float: right;">
	</div>
	<div class = 'k'>
		<form action = "Check_detail.jsp">
			<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			Note: To view the 18+ individuals who are not registered to VoterID, click here.
			<br><br><br>
			<input type="submit" value="Validate">
		</form>
	</div>
	
</div>
</body>
