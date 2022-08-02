export default class Calculadora {
	static validar (num1, num2) {
		const a = +num1
		const b = +num2

		if (isNaN(a) || isNaN(b)) return [null, null]
		return [a, b]
	}

	static somar (num1, num2) {
		const [a, b] = Calculadora.validar(num1, num2)
		if (!a || !b) return { success: false, erro: "Não é possível somar valores não numéricos" }

		return { success: true, resultado: a + b }
	}

	static subtrair (num1, num2) {
		const [a, b] = Calculadora.validar(num1, num2)
		if (!a || !b) return { success: false, erro: "Não é possível subtrair valores não numéricos" }

		return { success: true, resultado: a - b }
	}

	static multiplicar (num1, num2) {
		const [a, b] = Calculadora.validar(num1, num2)
		if (!a || !b) return { success: false, erro: "Não é possível multiplicar valores não numéricos" }

		return { success: true, resultado: a * b }
	}

	static dividir (num1, num2) {
		const [a, b] = Calculadora.validar(num1, num2)

		if (!a || !b) return { success: false, erro: "Não é possível dividir valores não numéricos" }
		if (b == 0) return { success: false, erro: "Não é possível dividir por 0" }

		return { success: true, resultado: a / b }
	}

}