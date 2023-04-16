<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import ="java.io.IOException"%>

<%@ page import ="java.io.PrintWriter" %>
<%@ page import ="java.sql.*"%>
<%@ page import ="javax.servlet.ServletException"%>
<%@ page import ="javax.servlet.annotation.WebServlet"%>
<%@ page import ="javax.servlet.http.HttpServlet"%>
<%@ page import ="javax.servlet.http.HttpServletRequest"%>
<%@ page import ="javax.servlet.http.HttpServletResponse"%>
<%@ page import ="java.io.PrintWriter"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
  String url = "jdbc:mysql://localhost:3306/electhon";
  String username = "root";
  String password = "";
  Connection connection = null;
  String column12 = null;
  String column13 = null;
  try {
    // load the JDBC driver
    Class.forName("com.mysql.jdbc.Driver");

    // establish a connection to the database
    connection = DriverManager.getConnection(url, username, password);

    // use the connection to execute SQL queries
    Statement statement = connection.createStatement();
    ResultSet resultSet = statement.executeQuery("SELECT distinct(aadhar.name),aadhar.Aadhar_No,aadhar.Mobile_No,aadhar.address,aadhar.Father_Name,aadhar.Mother_Name,aadhar.Father_Aadhar_No,aadhar.Mother_Aadhar_No,aadhar.DOB,aadhar.gender,aadhar.Photo FROM aadhar, voter WHERE (DATE_ADD(STR_TO_DATE(aadhar.DOB, '%d-%m-%Y'), INTERVAL 18 YEAR) <= CURDATE()) AND aadhar.aadhar_no NOT IN (SELECT voter_aadhar_no FROM voter )  AND aadhar.aadhar_no NOT IN (SELECT Aadhar_No FROM elct_process);");

    while (resultSet.next()) {
      // do something with the results
      String column1 = resultSet.getString(1);
      String column2 = resultSet.getString(2);
      String column3=resultSet.getString(3);
      
      String column4 = resultSet.getString(4);
      String column5 = resultSet.getString(5);
      String column6=resultSet.getString(6);
      String column7=resultSet.getString(7);
      String column8=resultSet.getString(8);
      String column9=resultSet.getString(9);
      String column10=resultSet.getString(10);
      String column11=resultSet.getString(11);
      
      
      out.println(column1 );
      out.println("\t");
      out.println(column2 );
      out.println("\t");
      out.println(column3);
      out.println("\t");
      out.println(column4 );
      out.println("\t");
      out.println(column5);
      out.println("\t");
      out.println(column6);
      out.println("\t");
      out.println(column7);
      out.println("\t");
      out.println("<br>");
      out.println(column8);
      out.println("\t");
      out.println("<br>");
      out.println(column9);
      out.println("\t");
      out.println(column10);
      out.println("\t");
      out.println("<br>");
      
      String pan = "SELECT Pan_No from pan where Pan_Aadhar_No = ?";
      PreparedStatement pstmt_pan = connection.prepareStatement(pan);
      pstmt_pan.setString(1, column2);
      ResultSet rs_pan = pstmt_pan.executeQuery();
      
      String con = "SELECT Assembly_Constituency from voter where Voter_Aadhar_No = ?";
      PreparedStatement pstmt_con = connection.prepareStatement(con);
      pstmt_con.setString(1, column7);
      ResultSet rs_con = pstmt_con.executeQuery();
      

      
      String query = "SELECT Voter_ID from voter where Voter_Aadhar_No = ?";
      String query1 = "SELECT Voter_ID from voter where Voter_Aadhar_No = ?";
      
      PreparedStatement pstmt1 = connection.prepareStatement(query);
      pstmt1.setString(1, column7);
      ResultSet rs = pstmt1.executeQuery();
      
      pstmt1 = connection.prepareStatement(query1);
      pstmt1.setString(1, column8);
      ResultSet rs1 = pstmt1.executeQuery();
      
      if(rs_con.next()){
    	  column13 = rs_con.getString(1);}
	  else{
		  column13 = "NULL";
	  
      }
      
      if (rs.next() && rs1.next() && rs_pan.next()) {
          column7 = rs.getString(1);
          column8 = rs1.getString(1);
          column12 = rs_pan.getString(1);
          
      
          PreparedStatement pstmt = connection.prepareStatement("INSERT INTO elct_process(Name, Aadhar_No, Mobile_no,Address,Father_name,Mother_name,Father_VoteID,Mother_VoteID,DOB,gender,Photo,PAN_No,Assembly_Constituency) VALUES (?, ?,?, ?,?,?,?,?,?,?,?,?,?)");


    	    // Set the values for the placeholders
    	    pstmt.setString(1, column1);
    	    pstmt.setString(2, column2);
    	    pstmt.setString(3, column3);
    	    pstmt.setString(4, column4);
    	    pstmt.setString(5, column5);
    	    pstmt.setString(6, column6);
    	    pstmt.setString(7, column7);
    	    pstmt.setString(8, column8);
    	    pstmt.setString(9, column9);
    	    pstmt.setString(10, column10);
    	    pstmt.setString(11, column11);
    	    pstmt.setString(12, column12);
    	    pstmt.setString(13, column13);

    	    // Execute the statement
    	    pstmt.executeUpdate();
      rs.close();
      rs1.close();
     
      
    }
    
      else {
    	  if(rs_pan.next()){
    	  column12 = rs_pan.getString(1);}
    	  else{
    		  column12 = "NULL";
    	  }
    	  
    	  PreparedStatement pstmt = connection.prepareStatement("INSERT INTO elct_process(Name, Aadhar_No, Mobile_no,Address,Father_name,Mother_name,Father_VoteID,Mother_VoteID,DOB,gender,Photo,PAN_No,Assembly_Constituency) VALUES (?, ?,?, ?,?,?,?,?,?,?,?,?,?)");

      	    // Set the values for the placeholders
      	    pstmt.setString(1, column1);
      	    pstmt.setString(2, column2);
      	    pstmt.setString(3, column3);
      	    pstmt.setString(4, column4);
      	    pstmt.setString(5, column5);
      	    pstmt.setString(6, column6);
      	    pstmt.setString(7, column7);
      	    pstmt.setString(8, column8);
      	    pstmt.setString(9, column9);
      	  	pstmt.setString(10, column10);
      	  pstmt.setString(11, column11);
      	pstmt.setString(12, column12);
      	 pstmt.setString(13, column13);
      	    

      	    // Execute the statement
      	    pstmt.executeUpdate();
      	  
    	  
      }
      
      
  }}
  
 catch (Exception e) {
    // handle exceptions
    out.println(e);

  } finally {
    // close the connection
    try {
      if (connection != null) {
        connection.close();
      }
    } catch (SQLException e) {
      // handle exceptions
      e.printStackTrace();
      
    }
  }
%>
<%response.sendRedirect("Check_detail2.jsp"); %>
</body>
</html>