import java.util.*;
public class main4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int Celsius = input.nextInt();
        int Fahrenheit = (Celsius * 9/5) + 32;
        System.out.println(Fahrenheit);
    }
}