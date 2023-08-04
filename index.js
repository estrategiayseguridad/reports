const inquirer = require('inquirer');
const puppeteer = require('puppeteer');
const { PDFDocument, rgb } = require('pdf-lib');

// ESTRATEGIA Y SEGURIDAD

// Summary Malwarebytes ES

const summaryMWB_ES = async function () {
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
};

// Buenas Practicas Malwarebytes ESP

const practicas_MWB_ES_ESP = async function () {
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
};

// Buenas Practicas Malwarebytes ENG

const practices_MWB_ES_ENG = async function () {
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
};

// Summary Cloudflare

const summaryCloudflare_ES = async function () {
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
};

// TOTAL SEKURE

// Buenas Practicas Malwarebytes ENG TotalSekure

const practices_MWB_TS_ENG = async function () {
   
    try {

        // Codigo funcionando al 100
        // Impresion del archivo .pdf con css, imagenes, fondos y graficos

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Cargar el archivo HTML local
        //await page.goto('file://C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practices_TS_ENG/index.html', { waitUntil: 'networkidle0' });
        await page.goto('file://C:/Users/dixon/reports/Malwarebytes/Practices_TS_ENG/index.html', { waitUntil: 'networkidle0' });

        // Esperar a que la imagen se cargue completamente (ajusta el selector según tu HTML)
        await page.waitForSelector('img');

        // Generar un archivo PDF con la imagen visible
        await page.pdf({
            //path: 'C:/Users/ottom/OneDrive/Documentos/Practica/Reportes/Malwarebytes/Practices_TS_ENG/Practices_Malwarebytes.pdf',
            path: 'C:/Users/dixon/reports/Malwarebytes/Practices_TS_ENG/Practices_Malwarebytes.pdf',
            format: 'a4',
            printBackground: true,
        });

        console.log("Practices MWB TS ENG Created")

        await browser.close();


    } catch (e) {
        console.log(e)
    }
};

const summaryMWB_TS = async function () {
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
};

const menu = async function () {
    const options = [
        { name: 'Summary MWB ES', value: 1 },
        { name: 'Practicas MWB ES ESP', value: 2 },
        { name: 'Practices MWB ES ENG', value: 3 },
        { name: 'Summary Cloudflare ES', value: 4 },
        { name: 'Summary MWB TS', value: 5 },
        { name: 'Practices MWB TS ENG', value: 6 },
    ];

    const question = {
        type: 'list',
        name: 'option',
        message: 'Select an option:',
        choices: options,
    };

    const answer = await inquirer.prompt(question);
    const selectedOption = answer.option;

    switch (selectedOption) {
        case 1:
            await summaryMWB_ES();
            break;
        case 2:
            await practicas_MWB_ES_ESP();
            break;
        case 3:
            await practices_MWB_ES_ENG();
            break;
        case 4:
            await summaryCloudflare_ES();
            break;
        case 5:
            await summaryMWB_TS();
            break;
        case 6:
            await practices_MWB_TS_ENG();
            break;
        default:
            console.log('Invalid option');
    }
};

menu();
