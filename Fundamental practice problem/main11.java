import java.util.*;
public class main11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int kilometers = sc.nextInt();
        double miles = kilometers * 0.621371;   
        System.out.printf("Distance in miles: %.2f%n", miles);
    }
}