package pl.dmcs.ksokolowski.domain;

import junit.framework.TestSuite;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import static org.mockito.Mockito.mock;
import static org.junit.Assert.*;

/**
 * Created by sokol on 2017-01-14.
 */

public class QuadraticEquationTest {

    QuadraticEquation equation;

    @Before
    public void prepareEnvironment(){
        equation = new QuadraticEquation();
    }

    @Test
    public void test1(){
        equation.setA(-2);
        equation.setB(3);
        equation.setC(-1);
        equation.solveDelta();
        equation.solveEquation();
        Assert.assertTrue("Delta > 0", equation.getDelta() > 0);
        Assert.assertEquals("Delta = 1", 1, equation.getDelta(), 0.01);
        Assert.assertEquals("x0 = 1/2", 0.5, equation.getX0(), 0.01);
        Assert.assertEquals("x1 = 1", 1, equation.getX1(), 0.01);

    }

    @Test
    public void test2(){
        equation.setA(1);
        equation.setB(2);
        equation.setC(4);
        equation.solveDelta();
        equation.solveEquation();
        Assert.assertTrue("Delta < 0", equation.getDelta() < 0);
        Assert.assertEquals("Delta = -12", -12, equation.getDelta(), 0.01);
        Assert.assertEquals("x0 = NaN", Double.NaN, equation.getX0(), 0.01);
        Assert.assertEquals("x1 = NaN", Double.NaN, equation.getX1(), 0.01);
    }

    @Test
    public void test3(){
        equation.setA(4);
        equation.setB(4);
        equation.setC(1);
        equation.solveDelta();
        equation.solveEquation();
        Assert.assertTrue("Delta = 0", equation.getDelta() == 0);
        Assert.assertEquals("Delta = 0", 0, equation.getDelta(), 0.01);
        Assert.assertEquals("x0 = -1/2", -0.5, equation.getX0(), 0.01);
        Assert.assertEquals("x1 = NaN", Double.NaN, equation.getX1(), 0.01);
    }

    @Test
    public void test4(){
        equation.setA(0);
        equation.setB(4);
        equation.setC(1);
        equation.solveDelta();
        equation.solveEquation();
        Assert.assertEquals("Delta = NaN", Double.NaN, equation.getDelta(), 0.01);
        Assert.assertEquals("x0 = NaN", Double.NaN, equation.getX0(), 0.01);
        Assert.assertEquals("x1 = NaN", Double.NaN, equation.getX1(), 0.01);
    }
}
