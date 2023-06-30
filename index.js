
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const hbs = require('handlebars');

// ESTRATEGIA Y SEGURIDAD

// Summary Malwarebytes ES

const summaryMWB_ES = (async function () {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Summary_ES/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Summary_ES/Sumary_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("Summary MWB ES Created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

// Buenas Practicas Malwarebytes ESP

const practicas_MWB_ES_ESP = (async function() {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practicas_ES_ESP/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practicas_ES_ESP/Practicas_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("Practices MWB ES ESP Created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

// Buenas Practicas Malwarebytes ENG

const practices_MWB_ES_ENG = (async function() {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practices_ES_ENG/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practices_ES_ENG/Practices_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("Practices MWB ES ENG Created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

// Summary Cloudflare

const summaryCloudflare_ES = (async function() {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Cloudflare/Summary_ES/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Cloudflare/Summary_ES/Sumary_Cloudflare.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("Summary Cloudflare ES Created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

// TOTAL SEKURE

// Buenas Practicas Malwarebytes ENG TotalSekure

const practices_MWB_TS_ENG = (async function() {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practices_TS_ENG/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practices_TS_ENG/Practices_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("Practices MWB TS ENG Created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

const summaryMWB_TS = (async function () {
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Summary_TS/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Summary_ts/Sumary_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("Summary MWB TS Created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
})()

module.exports = { 
    summaryMWB_ES,
    practicas_MWB_ES_ESP,
    practices_MWB_ES_ENG,
    summaryCloudflare_ES,
    summaryMWB_TS,
    practices_MWB_TS_ENG,
};


