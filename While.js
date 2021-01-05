let num = 0;
let num2 = 20;
let num3 = 0;

while (num < 9) {
	num++;
	document.write(num + "<br>");
}

do {
	document.write(num2);
	num2--;
} while (num2 >= 1);

while (num3 < 1000) {
	document.write(num3 + "<br>");
	num3++;

	if (num3 == 10) {
		break;
	}
}
document.write("FIN");
