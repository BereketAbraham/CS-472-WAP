<%--
  Created by IntelliJ IDEA.
  User: bereketabraham
  Date: 2019-08-09
  Time: 17:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Iterator" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<html>
<body>
<h1 align=”center”>Beer Recommendations JSP</h1> <p>

    <c:forEach items="${styles}" var="style" >
    Try <c:out value="${style}" ></c:out> <br>
    </c:forEach>
</body>

</html>
