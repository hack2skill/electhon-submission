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
<%@ page import ="java.util.*"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
Connection c = null;
try{
	String varName = (String)session.getAttribute("a");
response.setContentType("text/html");
Class.forName("com.mysql.jdbc.Driver");
c=DriverManager.getConnection("jdbc:mysql://localhost:3306/electhon","root","");
Statement st =c.createStatement();
PreparedStatement ps=c.prepareStatement("SELECT * FROM elct_process WHERE Aadhar_No = ? ");
ps.setString(1,varName);
ResultSet rs=ps.executeQuery();



// Loop through the result set
while (rs.next()) {
    // Get the values from the result set
    String name = rs.getString(1);
    String aadharNo = rs.getString(2);
    String fatherVoteID = rs.getString(3);
    String motherVoteID = rs.getString(4);
    String panNo = rs.getString(5);
    String address = rs.getString(6);
    String constituency = rs.getString(7);
    String gender = rs.getString(8);
    String dob = rs.getString(9);
    String fatherName = rs.getString(10);
    String motherName = rs.getString(11);
    String Photo = rs.getString(12);
    String mobileno = rs.getString(13);

    String sql = "INSERT INTO voter(Voter_ID, Name, Gender, DOB, Address, Mobile_No, Father_Name, Father_Voter_ID, Mother_Name, Mother_Voter_ID, Voter_Aadhar_No) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    PreparedStatement stmt = c.prepareStatement(sql);
    String vid = null; // Define vid outside the loop
    while (true) {
        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder sb = new StringBuilder();
        Random rand = new Random();
        for (int i = 0; i < 3; i++) {
            int index = rand.nextInt(alphabet.length());
            char randomChar = alphabet.charAt(index);
            sb.append(randomChar);
        }
        Set<Integer> usedNumbers = new HashSet<>();
        while (sb.length() < 10) {
            int randomNumber = rand.nextInt(10);
            if (!usedNumbers.contains(randomNumber)) {
                usedNumbers.add(randomNumber);
                sb.append(randomNumber);
            }
        }
        vid = sb.toString(); // Assign a value to vid

        PreparedStatement pstmt = c.prepareStatement("SELECT voter_id FROM voter WHERE voter_ID = ?");
        pstmt.setString(1, vid);

        // Execute the query and get the result set
        ResultSet rs1 = pstmt.executeQuery();

        // Check if the vid value is present in the voter_id table's voterid attribute
        if (rs1.next()) {
            continue;
        } else {

            stmt.setString(1, vid);
            stmt.setString(2, name);
            stmt.setString(11, aadharNo);
            stmt.setString(8, fatherVoteID);
            stmt.setString(10, motherVoteID);
            stmt.setString(6, mobileno);
            stmt.setString(5, address);
            stmt.setString(3, gender);
            stmt.setString(4, dob);
            stmt.setString(7, fatherName);
            stmt.setString(9, motherName);
            out.println(aadharNo);
            out.println(name);
            stmt.executeUpdate();
            break;
        }
    }
    out.println(vid); // vid is now defined and visible outside the loop
}

String sql = "Delete from elct_process where Aadhar_No = '"+varName+"'";
PreparedStatement stmt = c.prepareStatement(sql);
stmt.executeUpdate();
}

catch(Exception E) {
	System.out.println(E);
}


response.sendRedirect("index.jsp?message=Invalid1");
%>
</body>
</html>