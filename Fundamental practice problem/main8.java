import java.util.*;
public class main8 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int principal = input.nextInt();
        int rate = input.nextInt();
        int time = input.nextInt();
        double simpleInterest = (principal * rate * time) / 100.0;
        System.out.printf("Simple Interest: %.2f%n", simpleInterest);
    }
}