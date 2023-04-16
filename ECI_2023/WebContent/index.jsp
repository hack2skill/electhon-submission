<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>Election Commission of India</title>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
	<style>
		body {
			font-family: 'Montserrat', sans-serif;
			background-color: #f4f4f4;
			color: #333;
			margin: 0;
			padding: 0;
		}
		header {
			background-color: #fff;
			padding: 20px;
			box-shadow: 0 2px 5px rgba(0,0,0,.1);
		}
		header img {
			height: 50px;
			vertical-align: middle;
		}
		header h1 {
			display: inline-block;
			margin: 0;
			font-size: 28px;
			font-weight: 700;
			vertical-align: middle;
			margin-left: 10px;
		}
		form {
			background-color: #fff;
			padding: 20px;
			box-shadow: 0 2px 5px rgba(0,0,0,.1);
			margin: 20px auto;
			max-width: 600px;
			border-radius: 5px;
		}
		form label {
			display: block;
			margin-bottom: 5px;
			font-size: 16px;
			font-weight: 700;
		}
		form input[type="text"], form input[type="number"] {
			padding: 10px;
			margin-bottom: 10px;
			border-radius: 5px;
			border: 1px solid #ccc;
			width: 100%;
			box-sizing: border-box;
			font-size: 16px;
		}
		form input[type="submit"] {
			padding: 10px 20px;
			background-color: #4CAF50;
			color: white;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-size: 16px;
		}
	</style>
</head>
<body>
	<header>
		<img src="Logo.jpg" alt="Election Commission of India Logo">
		<h1>Election Commission of India</h1>
	</header>	
	
	<form action="fetch.jsp">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" required>

		<label for="aadhar">Aadhar No:</label>
		<input type="number" id="aadhar" name="aadhar" required>

		<label for="pan">PAN No:</label>
		<input type="text" id="pan" name="pan" required>

		<label for="father_vid">Parent's Voter ID:</label>
		<input type="text" id="father_vid" name="father_vid" required>

		

		<input type="submit" value="Submit">
	</form>
	
	
	<%
	String message = request.getParameter("message");
	if (message != null && message.equals("Invalid")) {
	    out.println("<script>alert('Invalid Credentials !');</script>");
	}
	if (message != null && message.equals("Invalid1")) {
	    out.println("<script>alert('Verified Sucessfully!');</script>");
	}
	%>

	
</body>
</html>