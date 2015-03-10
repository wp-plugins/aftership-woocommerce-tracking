function get_couriers() {
    var data = [
	    {
		    "slug": "17postservice",
		    "name": "17 Post Service",
		    "phone": "+852 2620 0289",
		    "other_name": "17PostService",
		    "web_url": "http://17postservice.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "2go",
		    "name": "2GO",
		    "phone": "+63 2 77-99-222",
		    "other_name": "Negros Navigation",
		    "web_url": "http://supplychain.2go.com.ph/",
		    "required_fields": []
	    },
	    {
		    "slug": "4px",
		    "name": "4PX",
		    "phone": "+86 755-33936349",
		    "other_name": "递四方",
		    "web_url": "http://express.4px.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "4squaregroup",
		    "name": "4Square Group",
		    "phone": "+44 0845 519 6854",
		    "other_name": "4 Square",
		    "web_url": "http://www.4squaregroup.co.uk/",
		    "required_fields": []
	    },
	    {
		    "slug": "800bestex",
		    "name": "Best Express",
		    "phone": "+86 4009565656",
		    "other_name": "百世汇通",
		    "web_url": "http://www.800bestex.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "abf",
		    "name": "ABF Freight",
		    "phone": "+1 (800) 610-5544",
		    "other_name": "Arkansas Best Corporation",
		    "web_url": "http://www.abfs.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "acscourier",
		    "name": "ACS Courier",
		    "phone": "+30 210 81 90 000",
		    "other_name": "Αναζήτηση Καταστημάτων",
		    "web_url": "https://www.acscourier.net/",
		    "required_fields": []
	    },
	    {
		    "slug": "aeroflash",
		    "name": "Mexico AeroFlash",
		    "phone": "+52 55 5445 2100",
		    "other_name": "AeroFlash",
		    "web_url": "http://www.aeroflash.com.mx/",
		    "required_fields": []
	    },
	    {
		    "slug": "air21",
		    "name": "AIR21",
		    "phone": "+63 (02) 854-2100",
		    "other_name": "AIR 21 PH",
		    "web_url": "http://www.air21.com.ph",
		    "required_fields": []
	    },
	    {
		    "slug": "an-post",
		    "name": "An Post",
		    "phone": "+353 1850 57 58 59",
		    "other_name": "Ireland Post",
		    "web_url": "http://www.anpost.ie/AnPost/",
		    "required_fields": []
	    },
	    {
		    "slug": "apc",
		    "name": "APC Postal Logistics",
		    "phone": "+1 (888) 413-7300",
		    "other_name": "APC-PLI",
		    "web_url": "http://www.apc-pli.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "aramex",
		    "name": "Aramex",
		    "phone": "+1 (718) 5538740",
		    "other_name": "ارامكس",
		    "web_url": "http://www.aramex.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "arrowxl",
		    "name": "Arrow XL",
		    "phone": "+44 0800 015 1509",
		    "other_name": "Yodel XL",
		    "web_url": "http://www.arrowxl.co.uk/",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "asendia-usa",
		    "name": "Asendia USA",
		    "phone": "+1 610 461 3661",
		    "other_name": "Brokers Worldwide",
		    "web_url": "http://www.brokersworldwide.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "asm",
		    "name": "ASM",
		    "phone": "+34 902 11 33 00",
		    "other_name": "Asm-Red",
		    "web_url": "http://www.asmred.com/en/",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "aupost-china",
		    "name": "AuPost China",
		    "phone": "+86 4007005618",
		    "other_name": "澳邮宝",
		    "web_url": "http://www.aupost.org/",
		    "required_fields": []
	    },
	    {
		    "slug": "australia-post",
		    "name": "Australia Post",
		    "phone": "+61 3 8847 9980",
		    "other_name": "AusPost",
		    "web_url": "http://auspost.com.au/",
		    "required_fields": []
	    },
	    {
		    "slug": "austrian-post",
		    "name": "Austrian Post (Express)",
		    "phone": "+43 810 010 100",
		    "other_name": "Österreichische Post AG",
		    "web_url": "http://www.post.at",
		    "required_fields": []
	    },
	    {
		    "slug": "austrian-post-registered",
		    "name": "Austrian Post (Registered)",
		    "phone": "+43 810 010 100",
		    "other_name": "Österreichische Post AG",
		    "web_url": "http://www.post.at",
		    "required_fields": []
	    },
	    {
		    "slug": "belpost",
		    "name": "Belpost",
		    "phone": "+375 17 293 59 10",
		    "other_name": "Belposhta, Белпочта",
		    "web_url": "http://www.belpost.by",
		    "required_fields": []
	    },
	    {
		    "slug": "bgpost",
		    "name": "Bulgarian Posts",
		    "phone": "+3592/949 3280",
		    "other_name": "Български пощи",
		    "web_url": "http://www.bgpost.bg/",
		    "required_fields": []
	    },
	    {
		    "slug": "bluedart",
		    "name": "Bluedart",
		    "phone": "+91 18602331234",
		    "other_name": "Blue Dart Express",
		    "web_url": "http://www.bluedart.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "boxc",
		    "name": "BOXC",
		    "phone": "+1 424 278-4286",
		    "other_name": "BOXC快遞",
		    "web_url": "http://boxc.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "bpost",
		    "name": "Belgium Post",
		    "phone": "+32 2 276 22 74",
		    "other_name": "bpost, Belgian Post",
		    "web_url": "http://www.bpost.be/",
		    "required_fields": []
	    },
	    {
		    "slug": "bpost-international",
		    "name": "bpost international",
		    "phone": "+32 (0)2 278 50 90",
		    "other_name": "Belgium Post International, Minipak DDU",
		    "web_url": "http://www.bpostinternational.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "brazil-correios",
		    "name": "Brazil Correios",
		    "phone": "+55 61 3003 0100",
		    "other_name": "Brazilian Post",
		    "web_url": "http://correios.com.br/",
		    "required_fields": []
	    },
	    {
		    "slug": "brt-it",
		    "name": "BRT Bartolini",
		    "phone": "+39 011 397 411 1",
		    "other_name": "BRT Corriere Espresso, DPD Italy",
		    "web_url": "http://www.brt.it/",
		    "required_fields": []
	    },
	    {
		    "slug": "cambodia-post",
		    "name": "Cambodia Post",
		    "phone": "+855 23 723 51",
		    "other_name": "Cambodia Post",
		    "web_url": "http://www.ems.com.kh/",
		    "required_fields": []
	    },
	    {
		    "slug": "canada-post",
		    "name": "Canada Post",
		    "phone": "+1 866 607 6301",
		    "other_name": "Postes Canada",
		    "web_url": "https://www.canadapost.ca/",
		    "required_fields": []
	    },
	    {
		    "slug": "canpar",
		    "name": "Canpar Courier",
		    "phone": "+1 800-387-9335",
		    "other_name": "TransForce",
		    "web_url": "http://www.canpar.ca/en/home.jsp",
		    "required_fields": []
	    },
	    {
		    "slug": "ceska-posta",
		    "name": "Česká Pošta",
		    "phone": "+420 840 111 244",
		    "other_name": "Czech Post",
		    "web_url": "http://www.ceskaposta.cz/",
		    "required_fields": []
	    },
	    {
		    "slug": "china-ems",
		    "name": "China EMS",
		    "phone": "+86 20 11183",
		    "other_name": "中国邮政速递物流",
		    "web_url": "http://www.11183.com.cn/english.html",
		    "required_fields": []
	    },
	    {
		    "slug": "china-post",
		    "name": "China Post",
		    "phone": "+86 20 11185",
		    "other_name": "中国邮政, ePacket, e-Packet",
		    "web_url": "http://www.chinapost.com.cn/",
		    "required_fields": []
	    },
	    {
		    "slug": "chronopost-france",
		    "name": "Chronopost France",
		    "phone": "+33 (0) 969 391 391",
		    "other_name": "La Poste EMS",
		    "web_url": "http://www.chronopost.fr/",
		    "required_fields": []
	    },
	    {
		    "slug": "chronopost-portugal",
		    "name": "Chronopost Portugal",
		    "phone": "+351 707 20 28 28",
		    "other_name": "Chronopost pt",
		    "web_url": "http://chronopost.pt/",
		    "required_fields": []
	    },
	    {
		    "slug": "city-link",
		    "name": "City Link",
		    "phone": "+44 8444 930 914",
		    "other_name": "City Link UK",
		    "web_url": "http://www.city-link.co.uk/",
		    "required_fields": []
	    },
	    {
		    "slug": "city-link-international",
		    "name": "City Link International",
		    "phone": "+44 (0) 8444 930 930",
		    "other_name": "citylink.norsknet.com",
		    "web_url": "http://citylink.norsknet.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "citylinkexpress",
		    "name": "City-Link Express",
		    "phone": "+60 603-5565 8399",
		    "other_name": "Citylink Malaysia",
		    "web_url": "http://www.citylinkexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "cj-gls",
		    "name": "CJ GLS",
		    "phone": "+63-567-1320",
		    "other_name": "CJ Korea Express, 씨제이지엘에스주식회사",
		    "web_url": "http://www.cjgls.com/eng/",
		    "required_fields": []
	    },
	    {
		    "slug": "cnexps",
		    "name": "CNE Express",
		    "phone": "+86 400 021 5600",
		    "other_name": "国际快递",
		    "web_url": "http://www.cnexps.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "colis-prive",
		    "name": "Colis Privé",
		    "phone": "+33 0826 82 83 84",
		    "other_name": "ColisPrivé",
		    "web_url": "https://www.colisprive.com/moncolis/",
		    "required_fields": []
	    },
	    {
		    "slug": "colissimo",
		    "name": "Colissimo",
		    "phone": "+33 3631",
		    "other_name": "Colissimo fr",
		    "web_url": "http://www.colissimo.fr",
		    "required_fields": []
	    },
	    {
		    "slug": "collectplus",
		    "name": "Collect+",
		    "phone": "+44 01923 601616",
		    "other_name": "Collect Plus UK",
		    "web_url": "https://www.collectplus.co.uk/",
		    "required_fields": []
	    },
	    {
		    "slug": "correo-argentino",
		    "name": "Correo Argentino",
		    "phone": "+54 11 4891-9191",
		    "other_name": "Argentina Post",
		    "web_url": "http://www.correoargentino.com.ar",
		    "required_fields": []
	    },
	    {
		    "slug": "correos-chile",
		    "name": "Correos Chile",
		    "phone": "+562 600 950 2020",
		    "other_name": "Chile Post",
		    "web_url": "http://www.correos.cl",
		    "required_fields": []
	    },
	    {
		    "slug": "correos-de-mexico",
		    "name": "Correos de Mexico",
		    "phone": "+52 01 800 701 7000",
		    "other_name": "Mexico Post",
		    "web_url": "http://www.sepomex.gob.mx/Paginas/Home.aspx",
		    "required_fields": []
	    },
	    {
		    "slug": "courier-plus",
		    "name": "Courier Plus",
		    "phone": "+234-18102031",
		    "other_name": "Courier Plus",
		    "web_url": "http://www.courierplus-ng.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "courierit",
		    "name": "Courier IT",
		    "phone": "+27 21 555 6777",
		    "other_name": "Courierit",
		    "web_url": "http://www.courierit.co.za/",
		    "required_fields": []
	    },
	    {
		    "slug": "courierpost",
		    "name": "CourierPost",
		    "phone": "+64 0800 268 743",
		    "other_name": "Express Couriers",
		    "web_url": "http://www.courierpost.co.nz/",
		    "required_fields": []
	    },
	    {
		    "slug": "couriers-please",
		    "name": "Couriers Please",
		    "phone": "+61 1300 361 000",
		    "other_name": "CouriersPlease",
		    "web_url": "http://www.couriersplease.com.au/",
		    "required_fields": []
	    },
	    {
		    "slug": "cyprus-post",
		    "name": "Cyprus Post",
		    "phone": "+357 22805802",
		    "other_name": "ΚΥΠΡΙΑΚΑ ΤΑΧΥΔΡΟΜΕΙΑ",
		    "web_url": "http://www.mcw.gov.cy/mcw/postal/dps.nsf/index_en/index_en",
		    "required_fields": []
	    },
	    {
		    "slug": "danmark-post",
		    "name": "Post Danmark",
		    "phone": "+45 80 20 70 30",
		    "other_name": "Danske Post",
		    "web_url": "http://www.postdanmark.dk/",
		    "required_fields": []
	    },
	    {
		    "slug": "dbschenker-se",
		    "name": "DB Schenker Sweden",
		    "phone": "+46 31 337 04 00",
		    "other_name": "Deutsche Bahn",
		    "web_url": "http://www.logistics.dbschenker.se/",
		    "required_fields": []
	    },
	    {
		    "slug": "delhivery",
		    "name": "Delhivery",
		    "phone": "+91 (124) 6719500",
		    "other_name": "Gharpay",
		    "web_url": "http://www.delhivery.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "deltec-courier",
		    "name": "Deltec Courier",
		    "phone": "+44 (0) 20 8569 6767",
		    "other_name": "Deltec Interntional Courier",
		    "web_url": "https://www.deltec-courier.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "deutsch-post",
		    "name": "Deutsche Post Mail",
		    "phone": "+49 (0) 180 2 000221",
		    "other_name": "dpdhl",
		    "web_url": "http://www.deutschepost.de/",
		    "required_fields": [
			    "tracking_ship_date"
		    ]
	    },
	    {
		    "slug": "dhl",
		    "name": "DHL Express",
		    "phone": "+1 800 225 5345",
		    "other_name": "DHL International",
		    "web_url": "http://www.dhl.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-benelux",
		    "name": "DHL Benelux",
		    "phone": "+31 26-324 6700",
		    "other_name": "DHL TrackNet Benelux",
		    "web_url": "http://www.dhl.nl/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-deliverit",
		    "name": "DHL 2-Mann-Handling",
		    "phone": "+49 228 28609898",
		    "other_name": "DHL Deliver IT",
		    "web_url": "https://www.dhl-deliverit.com/web/guest/webavisierung",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "dhl-es",
		    "name": "DHL Spain Domestic",
		    "phone": "+34 902 09 05 41",
		    "other_name": "DHL España",
		    "web_url": "http://www.dhl.es/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-germany",
		    "name": "Deutsche Post DHL",
		    "phone": "+49 228 28609898",
		    "other_name": "DHL Germany",
		    "web_url": "http://www.dhl.de/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-global-mail",
		    "name": "DHL eCommerce",
		    "phone": "+1 317 554 5191",
		    "other_name": "DHL Global Mail",
		    "web_url": "http://webtrack.dhlglobalmail.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-global-mail-asia",
		    "name": "DHL Global Mail Asia",
		    "phone": "+65 6883 0771",
		    "other_name": "DGM Asia",
		    "web_url": "http://www.dhlglobalmail.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-nl",
		    "name": "DHL Netherlands",
		    "phone": "+31 26-324 6700",
		    "other_name": "DHL Nederlands",
		    "web_url": "http://www.dhl.nl/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-pieceid",
		    "name": "DHL Express (Piece ID)",
		    "phone": null,
		    "other_name": "DHL International",
		    "web_url": "http://www.dhl.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhl-poland",
		    "name": "DHL Poland Domestic",
		    "phone": "+48 42 6 345 345",
		    "other_name": "DHL Polska",
		    "web_url": "http://www.dhl.com.pl/",
		    "required_fields": []
	    },
	    {
		    "slug": "dhlparcel-nl",
		    "name": "DHL Parcel NL",
		    "phone": "+31 0900 - 222 21 20",
		    "other_name": "Selektvracht, dhlparcel.nl",
		    "web_url": "https://www.dhlparcel.nl/",
		    "required_fields": []
	    },
	    {
		    "slug": "directlink",
		    "name": "Direct Link",
		    "phone": "+852 28504183",
		    "other_name": "Direct Link",
		    "web_url": "http://www.directlink.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "dotzot",
		    "name": "Dotzot",
		    "phone": "+91 33004444",
		    "other_name": "Dotzot",
		    "web_url": "http://dotzot.in/",
		    "required_fields": []
	    },
	    {
		    "slug": "dpd",
		    "name": "DPD",
		    "phone": "+31 20 480 2900",
		    "other_name": "Dynamic Parcel Distribution",
		    "web_url": "http://www.dpd.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "dpd-de",
		    "name": "DPD Germany",
		    "phone": "+49 01806 373 200",
		    "other_name": "DPD Germany",
		    "web_url": "https://www.dpd.com/de_privatkunden/",
		    "required_fields": []
	    },
	    {
		    "slug": "dpd-ireland",
		    "name": "DPD Ireland",
		    "phone": "+353 (0)90 64 20500",
		    "other_name": "DPD ie",
		    "web_url": "http://www.dpd.ie/",
		    "required_fields": []
	    },
	    {
		    "slug": "dpd-poland",
		    "name": "DPD Poland",
		    "phone": "+48 801 400 373",
		    "other_name": "Dynamic Parcel Distribution Poland",
		    "web_url": "http://www.dpd.com.pl/",
		    "required_fields": []
	    },
	    {
		    "slug": "dpd-uk",
		    "name": "DPD UK",
		    "phone": "+44 845 9 300 350",
		    "other_name": "Dynamic Parcel Distribution UK",
		    "web_url": "http://www.dpd.co.uk/",
		    "required_fields": []
	    },
	    {
		    "slug": "dpe-za",
		    "name": "DPE South Africa",
		    "phone": "+27 (011) 573 3000",
		    "other_name": "DPE Worldwide Express",
		    "web_url": "http://www.dpe.co.za/",
		    "required_fields": []
	    },
	    {
		    "slug": "dtdc",
		    "name": "DTDC India",
		    "phone": "+91 33004444",
		    "other_name": "DTDC Courier & Cargo",
		    "web_url": "http://dtdc.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "dynamic-logistics",
		    "name": "Dynamic Logistics",
		    "phone": "+66 02-688-6688",
		    "other_name": "Dynamic Logistics Thailand",
		    "web_url": "http://www.dynamic-logistics.com/",
		    "required_fields": [
			    "tracking_account_number"
		    ]
	    },
	    {
		    "slug": "ec-firstclass",
		    "name": "EC-Firstclass",
		    "phone": "+86 4006 988 223",
		    "other_name": "ChuKou1, CK1",
		    "web_url": "http://www.ec-firstclass.org/",
		    "required_fields": []
	    },
	    {
		    "slug": "ecom-express",
		    "name": "Ecom Express",
		    "phone": "+91 011-30212000",
		    "other_name": "EcomExpress",
		    "web_url": "http://www.ecomexpress.in/",
		    "required_fields": []
	    },
	    {
		    "slug": "elta-courier",
		    "name": "ELTA Hellenic Post",
		    "phone": "+30 801 11 83000",
		    "other_name": "Greece Post, Ελληνικά Ταχυδρομεία, ELTA Courier, Ταχυμεταφορές ΕΛΤΑ",
		    "web_url": "http://www.elta-courier.gr/",
		    "required_fields": []
	    },
	    {
		    "slug": "emirates-post",
		    "name": "Emirates Post",
		    "phone": "+971 600 599999",
		    "other_name": "مجموعة بريد الإمارات, UAE Post",
		    "web_url": "http://www.epg.gov.ae/",
		    "required_fields": []
	    },
	    {
		    "slug": "empsexpress",
		    "name": "EMPS Express",
		    "phone": "+86 (755) 36620359",
		    "other_name": "Shenzhen Express Mail & Parcel Service Freight Forwarding Co.,",
		    "web_url": "http://www.empsexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "envialia",
		    "name": "Envialia",
		    "phone": "+34 902400909",
		    "other_name": "Envialia Spain",
		    "web_url": "http://www.envialia.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "equick-cn",
		    "name": "Equick China",
		    "phone": "+1 400 706 6078",
		    "other_name": "北京网易速达",
		    "web_url": "http://www.equick.cn/",
		    "required_fields": []
	    },
	    {
		    "slug": "estafeta",
		    "name": "Estafeta",
		    "phone": "+52 1-800-378-2338",
		    "other_name": "Estafeta Mexicana",
		    "web_url": "http://www.estafeta.com/default.aspx",
		    "required_fields": []
	    },
	    {
		    "slug": "estes",
		    "name": "Estes",
		    "phone": "+1-886-378-3748",
		    "other_name": "Estes Express Lines",
		    "web_url": "http://www.estes-express.com",
		    "required_fields": []
	    },
	    {
		    "slug": "exapaq",
		    "name": "Exapaq",
		    "phone": "+33 (0)1 55 35 02 80 ",
		    "other_name": "DPD France",
		    "web_url": "http://www.exapaq.com/accueil.php",
		    "required_fields": []
	    },
	    {
		    "slug": "fastway-au",
		    "name": "Fastway Australia",
		    "phone": "+61 (0) 2 9737 8288",
		    "other_name": "Fastway Couriers",
		    "web_url": "http://www.fastway.com.au/",
		    "required_fields": []
	    },
	    {
		    "slug": "fastway-ireland",
		    "name": "Fastway Ireland",
		    "phone": "+353 1 4242 900",
		    "other_name": "Fastway Couriers",
		    "web_url": "http://www.fastway.ie/",
		    "required_fields": []
	    },
	    {
		    "slug": "fastway-za",
		    "name": "Fastway South Africa",
		    "phone": "+27 0861 222 882",
		    "other_name": "Fastway Couriers",
		    "web_url": "http://www.fastway.co.za/",
		    "required_fields": []
	    },
	    {
		    "slug": "fedex",
		    "name": "FedEx",
		    "phone": "+1 800 247 4747",
		    "other_name": "Federal Express",
		    "web_url": "http://www.fedex.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "fedex-uk",
		    "name": "FedEx UK",
		    "phone": "+ 44 2476 706 660",
		    "other_name": "FedEx United Kingdom",
		    "web_url": "http://www.fedex.com/ukservices",
		    "required_fields": []
	    },
	    {
		    "slug": "first-flight",
		    "name": "First Flight Couriers",
		    "phone": "+91 022-39576666",
		    "other_name": "FirstFlight India",
		    "web_url": "http://www.firstflight.net/",
		    "required_fields": []
	    },
	    {
		    "slug": "first-logistics",
		    "name": "First Logistics",
		    "phone": "+62 021 - 73880707",
		    "other_name": "PT Synergy First Logistics",
		    "web_url": "http://www.jne.co.id/",
		    "required_fields": []
	    },
	    {
		    "slug": "flytexpress",
		    "name": "Flyt Express",
		    "phone": "+1 400-888-4003",
		    "other_name": "飞特物流",
		    "web_url": "http://www.flytexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "gati-kwe",
		    "name": "Gati-KWE",
		    "phone": "+91 1800-180-4284",
		    "other_name": "Gati-Kintetsu Express",
		    "web_url": "http://www.gatikwe.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "gdex",
		    "name": "GDEX",
		    "phone": "+60 03-77872222",
		    "other_name": "GD Express",
		    "web_url": "http://www.gdexpress.com",
		    "required_fields": []
	    },
	    {
		    "slug": "geodis-calberson-fr",
		    "name": "Geodis Calberson France",
		    "phone": "+33 (0)1 70 15 16 17",
		    "other_name": "Geodiscalberson",
		    "web_url": "http://www.espacedestinataire.mobi/client/42228/mobile/index.html",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "ghn",
		    "name": "Giao hàng nhanh",
		    "phone": "+84 19006491",
		    "other_name": "Giaohangnhanh.vn, GHN",
		    "web_url": "http://giaohangnhanh.vn/",
		    "required_fields": []
	    },
	    {
		    "slug": "gls",
		    "name": "GLS",
		    "phone": "+44 247 621 3455",
		    "other_name": "General Logistics Systems",
		    "web_url": "https://gls-group.eu/EU/en/home",
		    "required_fields": []
	    },
	    {
		    "slug": "gls-italy",
		    "name": "GLS Italy",
		    "phone": "+39 199 151188",
		    "other_name": "GLS Corriere Espresso",
		    "web_url": "http://www.gls-italy.com/index_noreg.asp",
		    "required_fields": []
	    },
	    {
		    "slug": "gls-netherlands",
		    "name": "GLS Netherlands",
		    "phone": "+31 0900-1116660",
		    "other_name": "GLS NL",
		    "web_url": "http://www.gls-netherlands.com/",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "gojavas",
		    "name": "GoJaVAS",
		    "phone": "+91 0124-4405730",
		    "other_name": "JaVAS",
		    "web_url": "http://gojavas.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "greyhound",
		    "name": "Greyhound",
		    "phone": "+1 800-739-5020",
		    "other_name": "Greyhound Package Express",
		    "web_url": "http://www.shipgreyhound.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "hermes",
		    "name": "Hermesworld",
		    "phone": "+44 844 543 7000",
		    "other_name": "Hermes-europe UK",
		    "web_url": "https://www.myhermes.co.uk",
		    "required_fields": []
	    },
	    {
		    "slug": "hermes-de",
		    "name": "Hermes Germany",
		    "phone": "+49 1806-311211",
		    "other_name": "myhermes.de, Hermes Logistik Gruppe Deutschland",
		    "web_url": "https://www.myhermes.de/wps/portal/paket/Home/privatkunden/home",
		    "required_fields": []
	    },
	    {
		    "slug": "hong-kong-post",
		    "name": "Hong Kong Post",
		    "phone": "+852 2921 2222",
		    "other_name": "香港郵政",
		    "web_url": "http://hongkongpost.com",
		    "required_fields": []
	    },
	    {
		    "slug": "hrvatska-posta",
		    "name": "Hrvatska Pošta",
		    "phone": "+385 0800 303 304",
		    "other_name": "Croatia Post",
		    "web_url": "http://www.posta.hr/",
		    "required_fields": []
	    },
	    {
		    "slug": "i-parcel",
		    "name": "i-parcel",
		    "phone": "+44 (0) 1342 315 455",
		    "other_name": "iparcel",
		    "web_url": "https://www.i-parcel.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "india-post",
		    "name": "India Post Domestic",
		    "phone": "+91 1800 11 2011",
		    "other_name": "भारतीय डाक",
		    "web_url": "http://www.indiapost.gov.in/",
		    "required_fields": []
	    },
	    {
		    "slug": "india-post-int",
		    "name": "India Post International",
		    "phone": "+91 1800 11 2011",
		    "other_name": "भारतीय डाक, Speed Post & eMO, EMS, IPS Web",
		    "web_url": "http://www.indiapost.gov.in/",
		    "required_fields": []
	    },
	    {
		    "slug": "interlink-express",
		    "name": "Interlink Express",
		    "phone": "+44 8702 200 300",
		    "other_name": "Interlink UK",
		    "web_url": "http://www.interlinkexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "international-seur",
		    "name": "International Seur",
		    "phone": "+34 902101010",
		    "other_name": "SEUR Internacional",
		    "web_url": "http://www.seur.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "israel-post",
		    "name": "Israel Post",
		    "phone": "+972 2 629 0691",
		    "other_name": "חברת דואר ישראל",
		    "web_url": "http://www.israelpost.co.il",
		    "required_fields": []
	    },
	    {
		    "slug": "israel-post-domestic",
		    "name": "Israel Post Domestic",
		    "phone": "+972 2 629 0691",
		    "other_name": "חברת דואר ישראל מקומית",
		    "web_url": "http://www.israelpost.co.il/",
		    "required_fields": []
	    },
	    {
		    "slug": "italy-sda",
		    "name": "Italy SDA",
		    "phone": "+39 199 113366",
		    "other_name": "SDA Express Courier",
		    "web_url": "http://www.sda.it/",
		    "required_fields": []
	    },
	    {
		    "slug": "jam-express",
		    "name": "Jam Express",
		    "phone": "+63 239 7502",
		    "other_name": "JAM Global Express",
		    "web_url": "http://www.myjamexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "japan-post",
		    "name": "Japan Post",
		    "phone": "+81 0570-046111",
		    "other_name": "日本郵便",
		    "web_url": "http://www.post.japanpost.jp/top.html",
		    "required_fields": []
	    },
	    {
		    "slug": "jcex",
		    "name": "JCEX",
		    "phone": "+86 571-86436777",
		    "other_name": "JiaCheng, 杭州佳成",
		    "web_url": "http://www.jcex.com",
		    "required_fields": []
	    },
	    {
		    "slug": "jne",
		    "name": "JNE",
		    "phone": "+62 021-29278888",
		    "other_name": "Express Across Nation, Tiki Jalur Nugraha Ekakurir",
		    "web_url": "http://www.jne.co.id/",
		    "required_fields": []
	    },
	    {
		    "slug": "kerry-logistics",
		    "name": "Kerry Express Thailand",
		    "phone": "+66 02 3384777",
		    "other_name": "嘉里物流, Kerry Logistics",
		    "web_url": "http://www.kerrylogistics.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "kn",
		    "name": "Kuehne + Nagel",
		    "phone": "+41-44-7869511",
		    "other_name": "KN",
		    "web_url": "http://www.kn-portal.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "korea-post",
		    "name": "Korea Post",
		    "phone": "+82 2 2195 1114",
		    "other_name": "우정사업본부",
		    "web_url": "http://www.koreapost.go.kr",
		    "required_fields": []
	    },
	    {
		    "slug": "la-poste-colissimo",
		    "name": "La Poste",
		    "phone": "+33 3631",
		    "other_name": "Coliposte",
		    "web_url": "http://www.csuivi.courrier.laposte.fr",
		    "required_fields": []
	    },
	    {
		    "slug": "lasership",
		    "name": "LaserShip",
		    "phone": "+1 (800) 527-3764",
		    "other_name": "LaserShip",
		    "web_url": "http://www.lasership.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "lbcexpress",
		    "name": "LBC Express",
		    "phone": "+63 800-10-8585999",
		    "other_name": "LBC Express",
		    "web_url": "http://www.lbcexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "lietuvos-pastas",
		    "name": "Lietuvos paštas",
		    "phone": "+370 8 700 55 400",
		    "other_name": "Lithuania Post, LP Express",
		    "web_url": "http://www.post.lt/",
		    "required_fields": []
	    },
	    {
		    "slug": "magyar-posta",
		    "name": "Magyar Posta",
		    "phone": "+36 6 4046 4646",
		    "other_name": "Hungarian Post",
		    "web_url": "http://www.posta.hu",
		    "required_fields": []
	    },
	    {
		    "slug": "malaysia-post",
		    "name": "Malaysia Post EMS / Poslaju",
		    "phone": "+603 27279100",
		    "other_name": "Pos Ekspres, Pos Malaysia Express",
		    "web_url": "http://www.pos.com.my",
		    "required_fields": []
	    },
	    {
		    "slug": "malaysia-post-posdaftar",
		    "name": "Malaysia Post - Registered",
		    "phone": "+603 27279100",
		    "other_name": "PosDaftar",
		    "web_url": "http://www.pos.com.my",
		    "required_fields": []
	    },
	    {
		    "slug": "mexico-redpack",
		    "name": "Mexico Redpack",
		    "phone": "+52 1800-013-3333",
		    "other_name": "TNT Mexico",
		    "web_url": "http://www.redpack.com.mx/",
		    "required_fields": []
	    },
	    {
		    "slug": "mexico-senda-express",
		    "name": "Mexico Senda Express",
		    "phone": "+52 1800 833 93 00",
		    "other_name": "Mexico Senda Express",
		    "web_url": "http://www.sendaexpress.com.mx/",
		    "required_fields": []
	    },
	    {
		    "slug": "mrw-spain",
		    "name": "MRW",
		    "phone": "+34 902 300 403",
		    "other_name": "MRW Spain",
		    "web_url": "http://www.mrw.es/",
		    "required_fields": []
	    },
	    {
		    "slug": "myhermes-uk",
		    "name": "myHermes UK",
		    "phone": "+44 844 543 7411",
		    "other_name": "",
		    "web_url": "https://www.myhermes.co.uk/",
		    "required_fields": []
	    },
	    {
		    "slug": "mypostonline",
		    "name": "Mypostonline",
		    "phone": "+60 07-6625692",
		    "other_name": "MYBOXPOST",
		    "web_url": "http://qsm.mypostonline.com.cn/index.php",
		    "required_fields": []
	    },
	    {
		    "slug": "nacex-spain",
		    "name": "NACEX Spain",
		    "phone": "+34 900 100 000",
		    "other_name": "NACEX Logista",
		    "web_url": "http://nacex.es/",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "new-zealand-post",
		    "name": "New Zealand Post",
		    "phone": "+64 9 367 9710",
		    "other_name": "NZ Post",
		    "web_url": "http://www.nzpost.co.nz/",
		    "required_fields": []
	    },
	    {
		    "slug": "nipost",
		    "name": "NiPost",
		    "phone": "+234 09-3149531",
		    "other_name": "Nigerian Postal Service",
		    "web_url": "http://www.emsng.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "nova-poshta",
		    "name": "Nova Poshta",
		    "phone": "+380 50-4-500-609",
		    "other_name": "Новая Почта",
		    "web_url": "http://novaposhta.ua/",
		    "required_fields": []
	    },
	    {
		    "slug": "oca-ar",
		    "name": "OCA Argentina",
		    "phone": "+54 800-999-7700",
		    "other_name": "OCA e-Pak",
		    "web_url": "http://www.oca.com.ar/",
		    "required_fields": []
	    },
	    {
		    "slug": "ontrac",
		    "name": "OnTrac",
		    "phone": "+1 800 334 5000",
		    "other_name": "OnTrac Shipping",
		    "web_url": "https://www.ontrac.com",
		    "required_fields": []
	    },
	    {
		    "slug": "opek",
		    "name": "FedEx Poland Domestic",
		    "phone": "+48 22 732 79 99",
		    "other_name": "OPEK",
		    "web_url": "http://www.fedex.com/pl/",
		    "required_fields": []
	    },
	    {
		    "slug": "packlink",
		    "name": "Packlink",
		    "phone": "",
		    "other_name": "Packlink Spain",
		    "web_url": "http://www.packlink.es/",
		    "required_fields": []
	    },
	    {
		    "slug": "pandulogistics",
		    "name": "Pandu Logistics",
		    "phone": "+62 (021) 461 6007",
		    "other_name": "",
		    "web_url": "http://pandulogistics.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "panther",
		    "name": "Panther",
		    "phone": "+60 07-6625692",
		    "other_name": "Panther Group UK",
		    "web_url": "http://www.pantherpremium.com/Tracking.aspx",
		    "required_fields": [
			    "tracking_account_number"
		    ]
	    },
	    {
		    "slug": "parcel-force",
		    "name": "Parcel Force",
		    "phone": "+44 844 800 44 66",
		    "other_name": "Parcelforce UK",
		    "web_url": "http://www.parcelforce.com",
		    "required_fields": []
	    },
	    {
		    "slug": "poczta-polska",
		    "name": "Poczta Polska",
		    "phone": "+48 43-842-06-00",
		    "other_name": "Poland Post",
		    "web_url": "http://www.poczta-polska.pl/",
		    "required_fields": []
	    },
	    {
		    "slug": "portugal-ctt",
		    "name": "Portugal CTT",
		    "phone": "+351 707 26 26 26",
		    "other_name": "Correios de Portugal",
		    "web_url": "http://www.ctt.pt/",
		    "required_fields": []
	    },
	    {
		    "slug": "portugal-seur",
		    "name": "Portugal Seur",
		    "phone": "+351 707 50 10 10",
		    "other_name": "SEUR",
		    "web_url": "http://www.seur.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "pos-indonesia",
		    "name": "Pos Indonesia Domestic",
		    "phone": "+62 21 161",
		    "other_name": "Indonesian Post Domestic",
		    "web_url": "http://www.posindonesia.co.id",
		    "required_fields": []
	    },
	    {
		    "slug": "pos-indonesia-int",
		    "name": "Pos Indonesia Int'l",
		    "phone": "+62 21 161",
		    "other_name": "Indonesian Post International EMS",
		    "web_url": "http://www.posindonesia.co.id",
		    "required_fields": []
	    },
	    {
		    "slug": "post56",
		    "name": "Post56",
		    "phone": "+86 400-9966-156",
		    "other_name": "捷邮快递",
		    "web_url": "http://www.post56.cn/",
		    "required_fields": []
	    },
	    {
		    "slug": "posta-romana",
		    "name": "Poșta Română",
		    "phone": "+40 021 9393 111",
		    "other_name": "Romania Post",
		    "web_url": "http://www.posta-romana.ro/",
		    "required_fields": []
	    },
	    {
		    "slug": "poste-italiane",
		    "name": "Poste Italiane",
		    "phone": "+39 803 160",
		    "other_name": "Italian Post",
		    "web_url": "http://www.poste.it/",
		    "required_fields": []
	    },
	    {
		    "slug": "poste-italiane-paccocelere",
		    "name": "Poste Italiane Paccocelere",
		    "phone": "+39 803 160",
		    "other_name": "Italian Post EMS / Express",
		    "web_url": "http://www.poste.it/",
		    "required_fields": []
	    },
	    {
		    "slug": "posten-norge",
		    "name": "Posten Norge / Bring",
		    "phone": "+47 21316260",
		    "other_name": "Norway Post, Norska Posten",
		    "web_url": "http://www.posten.no/en/",
		    "required_fields": []
	    },
	    {
		    "slug": "posti",
		    "name": "Itella Posti",
		    "phone": "+358 200 71000",
		    "other_name": "Finland Post",
		    "web_url": "http://www.posti.fi/",
		    "required_fields": []
	    },
	    {
		    "slug": "postnl",
		    "name": "PostNL Domestic",
		    "phone": "+31 (0)900 0990",
		    "other_name": "PostNL Pakketten, TNT Post Netherlands",
		    "web_url": "http://www.postnl.nl/voorthuis/",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "postnl-3s",
		    "name": "PostNL International 3S",
		    "phone": "+31 (0)900 0990",
		    "other_name": "TNT Post parcel service United Kingdom",
		    "web_url": "http://www.postnl.nl/voorthuis/",
		    "required_fields": [
			    "tracking_destination_country",
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "postnl-international",
		    "name": "PostNL International",
		    "phone": "+31 (0)900 0990",
		    "other_name": "Netherlands Post, Spring Global Mail",
		    "web_url": "http://www.postnl.nl/voorthuis/",
		    "required_fields": []
	    },
	    {
		    "slug": "postnord",
		    "name": "PostNord Logistics",
		    "phone": "+46 771 33 33 10",
		    "other_name": "Posten Norden",
		    "web_url": "http://www.postnordlogistics.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "ppbyb",
		    "name": "PayPal Package",
		    "phone": "+86 20 11185",
		    "other_name": "贝邮宝",
		    "web_url": "http://www.ppbyb.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "professional-couriers",
		    "name": "Professional Couriers",
		    "phone": "+91 0124-4405730",
		    "other_name": "TPC India",
		    "web_url": "http://www.tpcindia.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "ptt-posta",
		    "name": "PTT Posta",
		    "phone": "+90 444 1 788",
		    "other_name": "Turkish Post",
		    "web_url": "http://www.ptt.gov.tr/",
		    "required_fields": []
	    },
	    {
		    "slug": "purolator",
		    "name": "Purolator",
		    "phone": "+1-888-744-7123",
		    "other_name": "Purolator Freight",
		    "web_url": "http://www.purolator.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "qxpress",
		    "name": "Qxpress",
		    "phone": "+86 755-8829 7707",
		    "other_name": "Qxpress Qoo10",
		    "web_url": "http://www.qxpress.asia/",
		    "required_fields": []
	    },
	    {
		    "slug": "raf",
		    "name": "RAF Philippines",
		    "phone": "+632 820-2920 to 25",
		    "other_name": "RAF Int'l. Forwarding",
		    "web_url": "http://www.raf.ph/",
		    "required_fields": []
	    },
	    {
		    "slug": "ramgroup-za",
		    "name": "RAM",
		    "phone": "+27 0861 726 726",
		    "other_name": "RAM Group",
		    "web_url": "http://www.ram.co.za/",
		    "required_fields": []
	    },
	    {
		    "slug": "red-express",
		    "name": "Red Express",
		    "phone": "+91 1800-123-2400",
		    "other_name": "Red Express",
		    "web_url": "https://www.getsetred.net",
		    "required_fields": []
	    },
	    {
		    "slug": "red-express-wb",
		    "name": "Red Express Waybill",
		    "phone": "+91 1800-123-2400",
		    "other_name": "Red Express WayBill",
		    "web_url": "https://www.getsetred.net",
		    "required_fields": []
	    },
	    {
		    "slug": "redur-es",
		    "name": "Redur Spain",
		    "phone": "+34 93 263 16 16",
		    "other_name": "Eurodis",
		    "web_url": "http://www.redur.es/",
		    "required_fields": []
	    },
	    {
		    "slug": "rl-carriers",
		    "name": "RL Carriers",
		    "phone": "+1 800-543-5589",
		    "other_name": "R+L Carriers",
		    "web_url": "http://www.rlcarriers.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "royal-mail",
		    "name": "Royal Mail",
		    "phone": "+44 1752387112",
		    "other_name": "Royal Mail United Kingdom",
		    "web_url": "http://www.royalmail.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "rpx",
		    "name": "RPX Indonesia",
		    "phone": "+62 0-800-1-888-900",
		    "other_name": "Repex Perdana International",
		    "web_url": "http://www.rpxholding.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "rpxonline",
		    "name": "RPX Online",
		    "phone": "+852 2620 0289",
		    "other_name": "Cathay Pacific",
		    "web_url": "http://www.rpxonline.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "russian-post",
		    "name": "Russian Post",
		    "phone": "+7 (495) 956-20-67",
		    "other_name": "Почта России, EMS Post RU",
		    "web_url": "http://www.russianpost.ru/",
		    "required_fields": []
	    },
	    {
		    "slug": "safexpress",
		    "name": "Safexpress",
		    "phone": "+91 1800 113 113",
		    "other_name": "Safexpress",
		    "web_url": "http://www.safexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "sagawa",
		    "name": "Sagawa",
		    "phone": "+81 0120-18-9595",
		    "other_name": "佐川急便",
		    "web_url": "http://www.sagawa-exp.co.jp/",
		    "required_fields": []
	    },
	    {
		    "slug": "sapo",
		    "name": "South African Post Office",
		    "phone": "+27 0860 111 502",
		    "other_name": "South African Post Office",
		    "web_url": "http://www.postoffice.co.za/",
		    "required_fields": []
	    },
	    {
		    "slug": "saudi-post",
		    "name": "Saudi Post",
		    "phone": "+966 9200 05700",
		    "other_name": "البريد السعودي",
		    "web_url": "http://www.sp.com.sa/",
		    "required_fields": []
	    },
	    {
		    "slug": "sf-express",
		    "name": "S.F. Express",
		    "phone": "+852 273 00 273 / +86 4008-111-111",
		    "other_name": "順豊快遞",
		    "web_url": "http://www.sf-express.com",
		    "required_fields": []
	    },
	    {
		    "slug": "sic-teliway",
		    "name": "Teliway SIC Express",
		    "phone": "+33 (0) 1 39 37 40 08",
		    "other_name": "Prevote",
		    "web_url": "http://sic.teliway.com/appli/vsic/tracking/suivi.php?code=sic&clef=",
		    "required_fields": [
			    "tracking_account_number",
			    "tracking_key"
		    ]
	    },
	    {
		    "slug": "singapore-post",
		    "name": "Singapore Post",
		    "phone": "+65 6841 2000",
		    "other_name": "SingPost",
		    "web_url": "http://www.singpost.com",
		    "required_fields": []
	    },
	    {
		    "slug": "singapore-speedpost",
		    "name": "Singapore Speedpost",
		    "phone": "+65 6222 5777",
		    "other_name": "Singapore EMS",
		    "web_url": "http://www.speedpost.com.sg/",
		    "required_fields": []
	    },
	    {
		    "slug": "siodemka",
		    "name": "Siodemka",
		    "phone": "+48 22 777 77 77 ext. 3",
		    "other_name": "Siodemka Kurier",
		    "web_url": "http://www.siodemka.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "skynet",
		    "name": "SkyNet Malaysia",
		    "phone": "+60 3- 56239090",
		    "other_name": "SkyNet MY",
		    "web_url": "http://www.skynet.com.my/",
		    "required_fields": []
	    },
	    {
		    "slug": "skynetworldwide",
		    "name": "SkyNet Worldwide Express",
		    "phone": "+44 (0) 20 8538 1988",
		    "other_name": "Skynetwwe",
		    "web_url": "http://www.skynetwwe.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "skynetworldwide-uk",
		    "name": "Skynet Worldwide Express UK",
		    "phone": "+44 (0) 20 8538 1988",
		    "other_name": "Skynet UK",
		    "web_url": "https://www.skynetworldwide.com",
		    "required_fields": []
	    },
	    {
		    "slug": "spain-correos-es",
		    "name": "Correos de España",
		    "phone": "+34 902197197",
		    "other_name": "Spain Post, ChronoExpress",
		    "web_url": "http://www.correos.es",
		    "required_fields": []
	    },
	    {
		    "slug": "spanish-seur",
		    "name": "Spanish Seur",
		    "phone": "+34 902101010",
		    "other_name": "SEUR",
		    "web_url": "http://www.seur.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "specialisedfreight-za",
		    "name": "Specialised Freight",
		    "phone": "+27 21 528 1000",
		    "other_name": "SFS",
		    "web_url": "http://www.specialisedfreight.co.za/",
		    "required_fields": []
	    },
	    {
		    "slug": "speedexcourier",
		    "name": "Speedex Courier",
		    "phone": "+965 1881881",
		    "other_name": "Speedex Courier",
		    "web_url": "http://www.speedexcourier.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "srekorea",
		    "name": "SRE Korea",
		    "phone": "+82 02 2661 0055",
		    "other_name": "SRE 배송서비스",
		    "web_url": "http://www.srekorea.co.kr/",
		    "required_fields": []
	    },
	    {
		    "slug": "star-track",
		    "name": "StarTrack",
		    "phone": "+61 13 2345",
		    "other_name": "Star Track",
		    "web_url": "http://startrack.com.au/",
		    "required_fields": []
	    },
	    {
		    "slug": "star-track-express",
		    "name": "Star Track Express",
		    "phone": "+61 13 2345",
		    "other_name": "AaE Australian air Express",
		    "web_url": "http://www.star-track.com.au/",
		    "required_fields": []
	    },
	    {
		    "slug": "sto",
		    "name": "STO Express",
		    "phone": "+86 95543",
		    "other_name": "申通快递, Shentong Express",
		    "web_url": "http://www.sto.cn/",
		    "required_fields": []
	    },
	    {
		    "slug": "sweden-posten",
		    "name": "Sweden Posten",
		    "phone": "+46 8 23 22 20",
		    "other_name": "Sweden Post",
		    "web_url": "http://www.posten.se/",
		    "required_fields": []
	    },
	    {
		    "slug": "swiss-post",
		    "name": "Swiss Post",
		    "phone": "+41 848 888 888",
		    "other_name": "La Poste Suisse, Die Schweizerische Post, Die Post",
		    "web_url": "https://www.post.ch/",
		    "required_fields": []
	    },
	    {
		    "slug": "szdpex",
		    "name": "DPEX China",
		    "phone": "+86 755-8829 7707",
		    "other_name": "DPEX（深圳）国际物流, Toll China",
		    "web_url": "http://www.szdpex.com.cn/",
		    "required_fields": []
	    },
	    {
		    "slug": "taiwan-post",
		    "name": "Taiwan Post",
		    "phone": "+886 (02)2703-7527",
		    "other_name": "Chunghwa Post, 台灣中華郵政",
		    "web_url": "http://www.post.gov.tw/",
		    "required_fields": []
	    },
	    {
		    "slug": "taqbin-hk",
		    "name": "TAQBIN Hong Kong",
		    "phone": "+852 2829 2222",
		    "other_name": "Yamat, 雅瑪多運輸- 宅急便",
		    "web_url": "http://hk.ta-q-bin.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "taqbin-jp",
		    "name": "Yamato Japan",
		    "phone": "+81 0120-17-9625",
		    "other_name": "ヤマト運輸, TAQBIN",
		    "web_url": "http://www.kuronekoyamato.co.jp/en/",
		    "required_fields": []
	    },
	    {
		    "slug": "taqbin-my",
		    "name": "TAQBIN Malaysia",
		    "phone": "+60 1800-8-827246",
		    "other_name": "TAQBIN Malaysia",
		    "web_url": "http://my.ta-q-bin.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "taqbin-sg",
		    "name": "TAQBIN Singapore",
		    "phone": "+65 1800 225 5888",
		    "other_name": "Yamato Singapore",
		    "web_url": "http://sg.ta-q-bin.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "taxydromiki",
		    "name": "Geniki Taxydromiki",
		    "phone": "+30 210 485110",
		    "other_name": "ΓΕΝΙΚΗ ΤΑΧΥΔΡΟΜΙΚΗ",
		    "web_url": "http://www.taxydromiki.gr/",
		    "required_fields": []
	    },
	    {
		    "slug": "tgx",
		    "name": "TGX",
		    "phone": "+852 3513 0888",
		    "other_name": "Top Gun Express, 精英速運",
		    "web_url": "http://www.tgxpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "thailand-post",
		    "name": "Thailand Thai Post",
		    "phone": "+66 (0) 2831 3131",
		    "other_name": "ไปรษณีย์ไทย",
		    "web_url": "http://www.thailandpost.co.th/home.php",
		    "required_fields": []
	    },
	    {
		    "slug": "tiki",
		    "name": "Tiki",
		    "phone": "+62 500 125",
		    "other_name": "Citra Van Titipan Kilat",
		    "web_url": "http://www.tiki-online.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "tnt",
		    "name": "TNT",
		    "phone": "+1 800 558 5555",
		    "other_name": "TNT Express",
		    "web_url": "http://www.tnt.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "tnt-au",
		    "name": "TNT Australia",
		    "phone": "+61 13 11 50",
		    "other_name": "TNT AU",
		    "web_url": "http://www.tntexpress.com.au/",
		    "required_fields": []
	    },
	    {
		    "slug": "tnt-click",
		    "name": "TNT-Click Italy",
		    "phone": "+39 199 803 868",
		    "other_name": "TNT Italy",
		    "web_url": "https://www.tnt-click.it/",
		    "required_fields": []
	    },
	    {
		    "slug": "tnt-fr",
		    "name": "TNT France",
		    "phone": "+33 4 72 80 77 77",
		    "other_name": "TNT Express FR",
		    "web_url": "http://www.tnt.fr/",
		    "required_fields": []
	    },
	    {
		    "slug": "tnt-it",
		    "name": "TNT Italy",
		    "phone": "+39 199 803 868",
		    "other_name": "TNT Express IT",
		    "web_url": "http://www.tnt.it/",
		    "required_fields": []
	    },
	    {
		    "slug": "tnt-uk",
		    "name": "TNT UK",
		    "phone": "+44 0800 100 600",
		    "other_name": "TNT United Kingdom",
		    "web_url": "http://www.tnt.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "tntpost-it",
		    "name": "Nexive (TNT Post Italy)",
		    "phone": "+39 02 50720011",
		    "other_name": "Postnl TNT",
		    "web_url": "http://www.tntpost.it/",
		    "required_fields": []
	    },
	    {
		    "slug": "toll-global-express",
		    "name": "Toll Global Express",
		    "phone": "+61 13 15 31 /  +852 8106 3232",
		    "other_name": "DPEX",
		    "web_url": "http://www.dpex.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "toll-ipec",
		    "name": "Toll IPEC",
		    "phone": "+61 1300 865 547",
		    "other_name": "Toll Express",
		    "web_url": "http://www.tollgroup.com/tollipec",
		    "required_fields": []
	    },
	    {
		    "slug": "toll-priority",
		    "name": "Toll Priority",
		    "phone": "+61 13 15 31",
		    "other_name": "Toll Group, Toll Priority",
		    "web_url": "https://www.tollpriority.com.au/portal/page/portal/TOLL_PRIORITY/Home",
		    "required_fields": []
	    },
	    {
		    "slug": "trakpak",
		    "name": "TrakPak",
		    "phone": "+27 21 528 1000",
		    "other_name": "bpost international P2P Mailing Trak Pak",
		    "web_url": "http://www.trackmytrakpak.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "transmission-nl",
		    "name": "TransMission",
		    "phone": "+31 (0)79 3438250",
		    "other_name": "mijnzending",
		    "web_url": "http://www.trans-mission.nl/",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "uk-mail",
		    "name": "UK Mail",
		    "phone": "+44 8451 554 455",
		    "other_name": "Business Post Group",
		    "web_url": "https://www.ukmail.com",
		    "required_fields": []
	    },
	    {
		    "slug": "ukrposhta",
		    "name": "UkrPoshta",
		    "phone": "+380 (0) 800-500-440",
		    "other_name": "Укрпошта",
		    "web_url": "http://www.ukrposhta.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "ups",
		    "name": "UPS",
		    "phone": "+1 800 742 5877",
		    "other_name": "United Parcel Service",
		    "web_url": "http://www.ups.com",
		    "required_fields": []
	    },
	    {
		    "slug": "ups-freight",
		    "name": "UPS Freight",
		    "phone": "+1 800-333-7400",
		    "other_name": "UPS LTL and Truckload",
		    "web_url": "http://ltl.upsfreight.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "ups-mi",
		    "name": "UPS Mail Innovations",
		    "phone": "+1 800-500-2224",
		    "other_name": "UPS MI",
		    "web_url": "http://www.upsmailinnovations.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "usps",
		    "name": "USPS",
		    "phone": "+1 800-275-8777",
		    "other_name": "United States Postal Service",
		    "web_url": "https://www.usps.com",
		    "required_fields": []
	    },
	    {
		    "slug": "viettelpost",
		    "name": "ViettelPost",
		    "phone": "+84-4 6266 2200",
		    "other_name": "Bưu chính Viettel",
		    "web_url": "http://www.viettelpost.com.vn/",
		    "required_fields": []
	    },
	    {
		    "slug": "vnpost",
		    "name": "Vietnam Post",
		    "phone": "+84 1900 54 54 81",
		    "other_name": "VNPost",
		    "web_url": "http://www.vnpost.vn/",
		    "required_fields": []
	    },
	    {
		    "slug": "vnpost-ems",
		    "name": "Vietnam Post EMS",
		    "phone": "+84 1900 54 54 81",
		    "other_name": "VNPost EMS",
		    "web_url": "http://www.vnpost.vn/",
		    "required_fields": []
	    },
	    {
		    "slug": "wahana",
		    "name": "Wahana",
		    "phone": "+62 2171355152",
		    "other_name": "Wahana Indonesia",
		    "web_url": "http://www.wahana.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "wedo",
		    "name": "WeDo Logistics",
		    "phone": "+86 (0779)2050300",
		    "other_name": "運德物流",
		    "web_url": "http://www.wedoexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "wishpost",
		    "name": "WishPost",
		    "phone": "",
		    "other_name": "Wish",
		    "web_url": "https://www.wish.com",
		    "required_fields": []
	    },
	    {
		    "slug": "xdp-uk",
		    "name": "XDP Express",
		    "phone": "+44 0843 1782222",
		    "other_name": "XDP UK",
		    "web_url": "http://www.xdp.co.uk/",
		    "required_fields": [
			    "tracking_postal_code"
		    ]
	    },
	    {
		    "slug": "xend",
		    "name": "Xend",
		    "phone": "+63 2 806 9363",
		    "other_name": "Xend Business Solutions",
		    "web_url": "http://xendexpress.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "xpressbees",
		    "name": "XpressBees",
		    "phone": "+91 020 46608 105",
		    "other_name": "XpressBees logistics",
		    "web_url": "http://www.xpressbees.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "yanwen",
		    "name": "Yanwen",
		    "phone": "+86 10-64621881/64669779",
		    "other_name": "燕文物流",
		    "web_url": "http://www.yw56.com.cn/",
		    "required_fields": []
	    },
	    {
		    "slug": "yodel",
		    "name": "Yodel Domestic",
		    "phone": "+44 0844 453 7443",
		    "other_name": "Home Delivery Network Limited (HDNL)",
		    "web_url": "http://www.yodel.co.uk/",
		    "required_fields": []
	    },
	    {
		    "slug": "yodel-international",
		    "name": "Yodel International",
		    "phone": "+91 011-30212000",
		    "other_name": "Home Delivery Network, HDNL",
		    "web_url": "http://www.yodel.co.uk/",
		    "required_fields": []
	    },
	    {
		    "slug": "yrc",
		    "name": "YRC",
		    "phone": "+1 800-468-5739",
		    "other_name": "YRC Freight",
		    "web_url": "http://www.yrc.com/",
		    "required_fields": []
	    },
	    {
		    "slug": "yundaex",
		    "name": "Yunda Express",
		    "phone": "+86 400-821-6789",
		    "other_name": "韵达快递",
		    "web_url": "http://www.yundaex.com/",
		    "required_fields": []
	    }
    ];
    return data;
}

