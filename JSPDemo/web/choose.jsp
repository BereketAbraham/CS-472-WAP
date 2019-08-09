<%--
  Created by IntelliJ IDEA.
  User: bereketabraham
  Date: 2019-08-09
  Time: 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head><title>Choose</title></head>
<body>
<form method='post' action='ChooseServlet'><p>Is JSP cool?</p>
    <input type='radio' value='1' name='radioJSPCool' checked><span>Yes</span><br/>
    <input type='radio' value='0' name='radioJSPCool'><span>No</span><br/>
    <input type='submit' name='btnSubmit' value='Submit'/>
    <p>Is JSF way cool?</p>
    <input type='radio' value='1' name='JSFwayCool'><span>Yes</span><br/>
    <input type='radio' value='0' name='JSFwayCool'><span>No</span><br/>
    <input type='submit' name='btnSubmit' value='Submit'/>
    <p>Is the moon made of cheese?</p>
    <input type='radio' value='1' name='moonCheese'><span>Yes</span><br/>
    <input type='radio' value='0' name='moonCheese'><span>No</span><br/>
    <input type='submit' name='btnSubmit' value='Submit'/></form>
</body>
</html>
