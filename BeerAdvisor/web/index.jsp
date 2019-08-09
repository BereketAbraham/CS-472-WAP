<%--
  Created by IntelliJ IDEA.
  User: bereketabraham
  Date: 2019-08-09
  Time: 17:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
<h1 align="center">Beer Selection Page</h1>
<form method="POST" action="SelectBeer.do">
  <p>Select beer characteristics</p>
  Color:<select name="color" size="1">
  <option value="light"> light </option>
  <option value="amber"> amber </option>
  <option value="brown"> brown </option>
  <option value="dark"> dark </option>
</select>
  <br><br>
  <input type="SUBMIT">
</form>
</body>
</html>
