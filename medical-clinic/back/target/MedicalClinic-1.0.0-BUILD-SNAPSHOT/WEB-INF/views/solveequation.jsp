<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Rozwiązanie równania kwadratowego</title>
</head>
<body>

<h2>Równanie: ${equation.a}x^2 + ${equation.b}x + ${equation.c}</h2>
    <table>
        <tr>
            <td><label path="x0">x0:</label></td>
            <td>${equation.x0}</td>
        </tr>
        <tr>
            <td><label path="x1">x1:</label></td>
            <td>${equation.x1}</td>
        </tr>
    </table>

<br>
<a href="/quadraticequation.html">Wróć</a>

</body>
</html>
