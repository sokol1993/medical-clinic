package pl.dmcs.ksokolowski.domain;

/**
 * Created by sokol on 2017-01-13.
 */
public class QuadraticEquation {
    private int a;
    private int b;
    private int c;
    private double x0;
    private double x1;
    private double delta;

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public int getB() {
        return b;
    }

    public void setB(int b) {
        this.b = b;
    }

    public int getC() {
        return c;
    }

    public void setC(int c) {
        this.c = c;
    }

    public double getX0() {
        return x0;
    }

    public void setX0(double x0) {
        this.x0 = x0;
    }

    public double getX1() {
        return x1;
    }

    public void setX1(double x1) {
        this.x1 = x1;
    }

    public double getDelta() {
        return delta;
    }

    public void setDelta(double delta) {
        this.delta = delta;
    }

    public void solveDelta() {
        if(this.a != 0){
            this.delta = (b*b) - (4*a*c);
        }
        else {
            this.delta = Double.NaN;
        }
    }

    public void solveX0(){
        this.x0 = ((-this.b) + (Math.sqrt(this.delta)))/(2*a);
    }

    public void solveX1(){
        this.x1 = ((-this.b) - (Math.sqrt(this.delta)))/(2*a);
    }

    public void solveEquation(){
        solveDelta();
        if(this.delta > 0){
            solveX0();
            solveX1();
        }
        else if(this.delta == 0){
            solveX0();
            this.x1 = Double.NaN;
        }
        else{
            this.x0 = Double.NaN;
            this.x1 = Double.NaN;
        }
    }
}
