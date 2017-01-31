<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Rozwiąż równanie kwadratowe</title>
</head>
<body>

<h2>Wspołczynniki równania: ax^2 + bx + c = 0</h2>
<form:form method="post" action="solvequadraticequation.html">

    <table>
        <tr>
            <td><form:label path="a">Wspołczynnik a:</form:label></td>
            <td><form:input path="a" /></td>
        </tr>
        <tr>
            <td><form:label path="b">Wspołczynnik b:</form:label></td>
            <td><form:input path="b" /></td>
        </tr>
        <tr>
            <td><form:label path="c">Wspołczynnik c:</form:label></td>
            <td><form:input path="c" /></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="Rozwiąż równanie"/>
            </td>
        </tr>
    </table>

</form:form>
</body>
</html>