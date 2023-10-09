import java.util.Scanner;

public class Day04CalculaMedia {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        
        
        System.out.println("Bem vindo a sua calculadora de média:");
        System.out.println("Por enquanto o nosso sistema so valida até 3 notas.");
        System.out.println("------------------------------------------------------");
        System.out.println("Pressione enter para iniciar.");
        scanner.nextLine();

        System.out.println("por favor, digite seu nome:");
        String nome = scanner.nextLine();

        System.out.println("Bem vindo " + nome + "!");
 
        System.out.println("");
        System.out.println("");
        System.out.println("Insira sua primeira nota: ");
        double nota_01 = scanner.nextDouble();
        System.out.println("Insira sua segunda nota: ");
        double nota_02 = scanner.nextDouble();
        System.out.println("Insira sua terceira nota: ");
        double nota_03 = scanner.nextDouble();
        

        double resultado = (nota_01 + nota_02 + nota_03) / 3;

        System.out.println("A sua média é: " + resultado);

        scanner.close();

    }
}