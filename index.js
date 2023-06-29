
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const hbs = require('handlebars');

// Summary Malwarebytes

const summaryMWB = (async function () {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/PDF_Malwarebytes/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/PDF_Malwarebytes/Sumary_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("report created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

// Buenas Practicas Malwarebytes ESP

const practicas_MWB_ESP = (async function() {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/PDF_Malwarebytes_Ejecutivo_ESP/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/PDF_Malwarebytes_Ejecutivo_ESP/Practicas_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("report created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

// Buenas Practicas Malwarebytes ENG

const practices_MWB_ENG = (async function() {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/PDF_Malwarebytes_Ejecutivo_ENG/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/PDF_Malwarebytes_Ejecutivo_ENG/Practices_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("report created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

// Summary Cloudflare

const summaryCloudflare = (async function() {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Cloudflare/PDF_Cloudflare/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Cloudflare/PDF_Cloudflare/Sumary_Cloudflare.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("report created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

module.exports = { 
    summaryMWB,
    practicas_MWB_ESP,
    practices_MWB_ENG,
    summaryCloudflare 
};


