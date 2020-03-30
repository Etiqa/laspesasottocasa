const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const re_phone = /[0-9]{7,15}/g;
const re_address = /c.so|corso|via |viale|piazza|porta|p.zza|strada|str.|v.le/gi;
const re_merce = /informati|vini|sanitari|supermercato|cartoleria|pollame|sapon|libr|disinfettant|pittura|pastificio|elettr|pizz|animal|panetteria|ottica|edicola|fornaio|frutta|verdura|minimarket|macell|carni|enoteca|alimentari|detersivi|carta|igiene|vino|biscott|pane|telefonia|girarrosto|cioccolat|caff|pasticceria|gel|alcool|sanificante|torte|ristor|primi|secondi|birra|carne|salum|formaggi|caseificio|ferramenta|antipasti|hamburger|erboristeria|colazion|farinata|dentist|videogiochi|dolci/gi;
const re_consegna = /consegn|pagament|prenot|gratuit|gratis|ordini|zona/gi;
const re_orari = /consegn|pagament|prenot|gratuit|gratis|ordini|zona/gi;
const re_digital = /www|http|@|facebook|instagram/gi;

async function torino() {
	// const response = await axios.get('https://www.confesercenti-to.it/generale/iorestoacasa-riduci-al-minimo-i-tuoi-spostamenti-ai-tuoi-acquisti-ci-pensiamo-noi-consegne-a-domicilio-dal-tuo-negoziante-di-fiducia/');
	// const html = console.log(response.data)


	function parse_row(el,comune_dom) {
		let shop = {};
		const comune = $(comune_dom).text().substring(2);

		//Split by "–"
		let parts = $(el).text()
						   .replace(/[\n]/g,"")
						   .split("–").map((e)=>e.trim());

		//Show Name
		shop.name = $(el).find("strong").text().replace("–","").trim();
		parts = parts.map(e=>e.replace(shop.name,"")); //Remove the shop name 

		//Email & Eurl
		const email = $(el).text().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i); 
		shop.email = email? email[0] : null;
		shop.urls = $(el).find("a").map((i,a)=>$(a).attr("href")).toArray().filter(href=>!href.match(/mailto/));
		parts = parts.filter(row=>!row.match(re_digital))


		shop.phones = $(el).text().replace(/\s*/g,"").match(re_phone);
		
		shop.address = (parts.filter(row=>row.match(re_address))[0] || "").replace(shop.name,"").trim();						   
		shop.merce = parts.filter(row=>row.match(re_merce));
		shop.consegna = parts.filter(row=>row.match(re_consegna)).join("\n");


		//Visual check 
		parts = parts.filter(row=>row.toUpperCase()!=comune)

					 .filter(row=>!row.match(re_phone))
					 .filter(row=>!row.match(re_address))
					 .filter(row=>!row.match(re_merce))
					 .filter(row=>!row.match(re_consegna))
				         .filter(row=>row!=shop.name)

		//console.log(parts)
		return shop
	}


	const html = fs.readFileSync("in/torino.html",'utf8');
	const $ = cheerio.load(html);
	const comuni = $('h3').filter((i,el)=>$(el).text().charAt(0)==">");
	const all = $(comuni).map((i,comune)=>
		({"comune":$(comune).text().substring(2), 
		  "shops":$(comune).nextUntil("h3").filter("p").map((i,el)=>parse_row(el,comune)).toArray()})).toArray()

	fs.writeFileSync("out/torino.json",JSON.stringify(all), 'utf8');
	
	
}

torino();
