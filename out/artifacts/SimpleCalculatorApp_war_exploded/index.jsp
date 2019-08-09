<%--
  Created by IntelliJ IDEA.
  User: bereketabraham
  Date: 2019-08-08
  Time: 01:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
    <link href="index.css" rel="stylesheet" type="text/css">
  </head>
  <body>
  <h3>Welcome To Simple Calculator</h3>
  <form method="post" action="calculate">
    <input type="number" name="operand1">+
    <input type="number" name="operand2">
    <br />
    <input type="number" name="operand3" value="">x
    <input type="number" name="operand4" value="">
    <br />
    <input type="submit" value="Submit">
  </form>
  </body>
</html>
