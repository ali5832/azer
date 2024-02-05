confirm ("Salam Xoş Gəldiniz Samsung markalarını buyurub qeyd edə bilərsiz.")
let p = prompt("Smartfon markası qeyd edin")
let e, c, m, y, r, k, pr, b, s, q, n
let telefonlar = [
    { Ekran: 6.5, model: "Samsung Galaxy A15", color: "mavi", yaddas: "256 GB", ram: "8 GB", kamera: "13 MP", Prosessor: "Mediatek", bluetooth: 5.3, simkarti: "Nanosim", qiymet: 549.99 },
    { Ekran: 6.5, model: "Samsung Galaxy A24", color: "qara", yaddas: "128 GB", ram: "6 GB", kamera: "13 MP", Prosessor: "Mediatek", bluetooth: 5.3, simkarti: "Nanosim", qiymet: 479.99 },
    { Ekran: 6.4, model: "Samsung Galaxy A54", color: "boz", yaddas: "128 GB", ram: "6 GB", kamera: "32 MP", Prosessor: "Exynos", bluetooth: 5.2, simkarti: "Nanosim", qiymet: 749.99 },
    { Ekran: 6.4, model: "Samsung Galaxy A51", color: "qara", yaddas: "128 GB", ram: "8 GB", kamera: "10 MP", Prosessor: "Exynos", bluetooth: 5.3, simkarti: "Nanosim", qiymet: "1.279,99" },
    { Ekran: 6.1, model: "Samsung Galaxy S22", color: "ağ", yaddas: "128 GB", ram: "8 GB", kamera: "10 MP", Prosessor: "Exynos", bluetooth: "5.2", simkarti: "Nanosim", qiymet: "1.349,99" },
    { Ekran: 6.7, model: "Samsung Galaxy S20 +", color: "qırmızı", yaddas: "128 GB", ram: "8 GB", kamera: "10 MP", Prosessor: "Exynos", bluetooth: "5", simkarti: "Nanosim", qiymet: "1.749,99" },
    { Ekran: 6.1, model: "Samsung Galaxy M13", color: "ağ", yaddas: "256 GB", ram: "8 GB", kamera: "10 MP", Prosessor: "Qualcomm", bluetooth: "5.3", simkarti: "Nanosim", qiymet: "2.099,99" },
    { Ekran: 6.1, model: "Samsung Galaxy A12", color: "qrafit", yaddas: "128 GB", ram: "8 GB", kamera: "10 MP", Prosessor: "Exynos", bluetooth: "5.3", simkarti: "Nanosim", qiymet: "1.279,99" },
    { Ekran: 6.2, model: "Samsung Galaxy S24", color: "bənövşəyi", yaddas: "128 GB", ram: "8 GB", kamera: "12 MP", Prosessor: "Exynos", bluetooth: "5.3", simkarti: "Nanosim", qiymet: "1.949,99" },
    { Ekran: 6.7, model: "Samsung Galaxy A05 S", color: "gümüş", yaddas: "64 GB", ram: "4 GB", kamera: "13 MP", Prosessor: "Qualcomm", bluetooth: "5.1", simkarti: "Nanosim", qiymet: "349.99" },
    { Ekran: 6.5, model: "Samsung Galaxy S23 Ultra +", color: "bənövşəyi", yaddas: "512 GB", ram: "12 GB", kamera: "13 MP", Prosessor: "Exynos", bluetooth: "5.3", simkarti: "Nanosim", qiymet: "2.649,99" },
    { Ekran: 6.7, model: "Samsung Galaxy Z Flip +", color: "xamilyon", yaddas: "512 GB", ram: "8 GB", kamera: "10 MP", Prosessor: "Qualcomm", bluetooth: "5.3", simkarti: "Nanosim", qiymet: "2,299" },
    { Ekran: 6.6, model: "Samsung Galaxy M14 +", color: "mavi", yaddas: "64 GB", ram: "4 GB", kamera: "13 MP", Prosessor: "Exynos", bluetooth: "5.2", simkarti: "Nanosim", qiymet: "329,99" },
    { Ekran: 6.6, model: "Samsung Galaxy A34 +", color: "bənövşəyi", yaddas: "128 GB", ram: "6 GB", kamera: "13 MP", Prosessor: "Mediatek", bluetooth: "5.2", simkarti: "Nanosim", qiymet: "749,99" },
    { Ekran: 6.4, model: "Samsung Galaxy A50", color: "qara", yaddas: "256 GB", ram: "8 GB", kamera: "32 MP", Prosessor: "Exynos", bluetooth: "5.2", simkarti: "Nanosim", qiymet: "849,99" },
    { Ekran: 6.1, model: "Samsung Galaxy S23", color: "xamilyon", yaddas: "256 GB", ram: "8 GB", kamera: "12 MP", Prosessor: "Qualcomm", bluetooth: "5.3", simkarti: "Nanosim", qiymet: "1.779,99" },
    { Ekran: 6.1, model: "Samsung Galaxy S20", color: "ağ", yaddas: "128 GB", ram: "8 GB", kamera: "10 MP", Prosessor: "Exynos", bluetooth: "5.2", simkarti: "Nanosim", qiymet: "1.349,99" }

]



for (let i = 0; i < telefonlar.length; i++) {
    if (p.toUpperCase() === telefonlar[i].model.toUpperCase()) {
        e = telefonlar[i].Ekran;
        m = telefonlar[i].model;
        c = telefonlar[i].color;
        y = telefonlar[i].yaddas;
        r = telefonlar[i].ram;
        k = telefonlar[i].kamera;
        pr = telefonlar[i].Prosessor;
        b = telefonlar[i].bluetooth
        s = telefonlar[i].simkarti
        q = telefonlar[i].qiymet
    }
}


if (p === "") {
    alert("Zəhmət olmasa Smartfon markası qeyd edin boş qoyula bilməz")
}else if (p === m) {
    alert("Ekran: " + e + ", Model: " + m + ", Rəng: " + c + ", Yaddaş: " + y + ", Ram: " + r + ", Kamera: " + k + ", Prosessor: " + pr
        + ", Bluetooth: " + b + ", Simkart növü: " + s + ", Qiyməti: " + q)
} else {
    alert("Daxil etdiyiniz model bazada yoxdur.")
}


/*let p = prompt("Qeyd edin");
let e = 0, c = 0, m = 0, y = 0, r = 0, k = 0, pr = 0, b = 0, s = 0, q = 0;

let telefonlar = [
    // Your phone data here
];

for (let i = 0; i < telefonlar.length; i++) {
    if (p.trim().toLocaleUpperCase() === telefonlar[i].model.trim().toLocaleUpperCase()) {
        e = telefonlar[i].Ekran, m = telefonlar[i].model, c = telefonlar[i].color, y = telefonlar[i].yaddas,
        r = telefonlar[i].ram, k = telefonlar[i].kamera, pr = telefonlar[i].Prosessor, b = telefonlar[i].bluetooth,
        s = telefonlar[i].simkarti, q = parseFloat(telefonlar[i].qiymet.replace(',', ''));
        break; // Exit the loop once the model is found
    }
}

if (p === "") {
    alert("Zəhmət olmasa Smartfon markası qeyd edin");
} else if (p.trim().toLocaleUpperCase() === m.trim().toLocaleUpperCase()) {
    alert("Ekran: " + e + ", Model: " + m + ", Rəng: " + c + ", Yaddaş: " + y + ", Ram: " + r + ", Kamera: " + k +
        ", Prosessor: " + pr + ", Bluetooth: " + b + ", Simkart növü: " + s + ", Qiyməti: " + q);
} else {
    alert("Yanlış smartfon modeli");
}*/

