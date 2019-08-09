<%--
  Created by IntelliJ IDEA.
  User: bereketabraham
  Date: 2019-08-07
  Time: 14:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page isELIgnored="false" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <%! int x = 5; %>
  <% int y = 5;%>
  <%x++;%>
  <%y++;%>
  <h1>Hi , x  equals : ${x}</h1>
  <h1>Hi , y  equals : <%=y%></h1>


<%--  <a href=hello>Start the simplest servlet app</a>--%>
<%--  <a href="calculate">GO</a>--%>
  </body>
</html>
