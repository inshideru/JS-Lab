const firstView = setJSONView('syntaxHighlight');
const jsonView = addJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' }, 'Manero');

topWell.innerHTML = moment().format('LLLL');

const pickUpOrderJSON = {
  'invoiceKey': '35170747960950089785550160001044411010742241',
  'cardCredit': {
    'id': 20162617,
    'orderId': 34148539,
    'administration': 'Visa',
    'number': '412177******7122'
  },
  'payment': {
    'id': 10,
    'description': 'Cartão de Crédito Visa'
  },
  'freight': '0.00',
  'amount': '659.80',
  'installmentPayment': 10,
  'installmentAmount': '65.98',
  'installmentOtherAmount': '65.98',
  'corporate': 0,
  'rate': false,
  'transfer': null,
  'orderConsumer': 5499500266477689,
  'id': 130225883,
  'mail': 'jonasleal.dsouza@gmail.com',
  'name': 'Jonas Leal De Souza',
  'customerFirstName': 'Jonas',
  'uuid': '83631e12-ebf8-45ab-813f-3a1b386b42c4',
  'orderMl': 34148539,
  'orderAt': '02/jul',
  'slip': 987172,
  'bitService': 1,
  'maxDate': '20/07',
  'store': {
    'meta': {
      'server': 'magazineluiza-stage.apigee.net',
      'limit': 1,
      'offset': 0,
      'recordCount': 1
    }
  },
  'products': [
    {
      'product': '0204498',
      'model': '00',
      'color': null,
      'voltage': '110 Volts',
      'amount': '02',
      'store': 947,
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'skuMarketPlace': null,
      'price': '289.90',
      'brand': 'ventisol',
      'scheduledDeliveryDate': null,
      'scheduledPeriod': null,
      'expectedDateMessage': 'Entrega prevista para Quarta-feira, 02 de Agosto',
      'expectedDate': '02/ago',
      'term': 2,
      'totalItem': '579.80',
      'financialServiceDescription': null,
      'id': '020449800',
      'productName': 'Ventilador de Teto 3 Pás 3 Velocidades',
      'name': 'Ventilador de Teto 3 Pás 3 Velocidades (020449800)'
    },
    {
      'product': '020449800',
      'model': '00',
      'color': null,
      'voltage': null,
      'amount': '02',
      'store': null,
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'skuMarketPlace': null,
      'price': '40.00',
      'brand': 'LUISASEG',
      'scheduledDeliveryDate': null,
      'scheduledPeriod': null,
      'expectedDateMessage': 'Entrega prevista para Segunda-feira, 31 de Julho',
      'expectedDate': '31/jul',
      'term': null,
      'totalItem': '80.00',
      'financialServiceDescription': 'TC',
      'id': '5',
      'productName': 'Troca Certa 12 meses',
      'name': 'Troca Certa 12 meses (5)'
    }
  ],
  'storePickupName': 'Jonas Leal de Souza',
  'hour': '04:52:29',
  'eventAt': 'Quarta-feira, 05 de Julho',
  'rg': '39998081874',
  'typeDocument': 'RG',
  'paymentId': '10',
  'record': {
    'id': 947,
    'tradingName': 'PB947',
    'type': {
      'id': 1,
      'description': 'Convencional'
    },
    'region': {
      'id': 13,
      'description': 'CAMPINAS'
    },
    'district': 'CENTRO',
    'street': 'GOVERNADOR PEDRO DE TOLEDO',
    'number': 973,
    'city': 'PIRACICABA',
    'state': 'SP',
    'zipCode': '13400070',
    'areaCode': 19,
    'phone': 34303000,
    'identification': 47960950065096,
    'inscription': 535282150115,
    'active': true,
    'latitude': -22.72887,
    'longitude': -47.64965,
    'primaryDistributionCenter': 300,
    'openingHours': {
      'saturday': {
        'opening': '09:00',
        'closing': '14:00'
      },
      'workingDays': {
        'opening': '09:00',
        'closing': '18:00'
      }
    }
  }
};

const newOrderJSON = {
  'id': 33984144,
  'customer': {
    'id': 17809917,
    'name': 'Mauro Marques',
    'nickname': 'Mauro Marques',
    'mail': 'maur_mar2@hotmail.com',
    'cpfCnpj': '13027845870',
    'uuid': 'c4fc71e8-ae65-42db-8df1-ab21ca293c3e'
  },
  'payment': {
    'id': 10,
    'description': 'Cartão de Crédito Visa'
  },
  'orderCustomer': '5479500265068915',
  'createdAt': '2017-06-25 10:29:29',
  'freight': '0.00',
  'amount': '499.90',
  'term': 2,
  'expectedDate': '27/06/2017',
  'products': [
    {
      'id': 39945882,
      'orderId': 33984144,
      'product': '2171274',
      'model': '00',
      'description': 'Batedeira Planetária Oster Perform',
      'brand': 'oster',
      'amount': '499.90',
      'quantity': '01',
      'term': 2,
      'store': 532,
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza'
    }
  ],
  'slipProducts': [
    {
      'product': '217127400',
      'image': '217127400.jpg',
      'name': 'Batedeira Planetária Oster Perform',
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'skuMarketPlace': null,
      'quantity': '01',
      'totalItem': '499.90',
      'scheduledDeliveryDate': null,
      'scheduledPeriod': null,
      'expectedDateMessage': null
    }
  ],
  'deliveryAddress': {
    'id': 32510463,
    'orderId': 33984144,
    'address': 'MARLENE DIETRICH',
    'district': 'JARDIM GUANHEMBU',
    'city': 'SAO PAULO',
    'state': 'SP',
    'zipCode': '04814555 ',
    'number': '50',
    'complement': 'Casa',
    'name': 'Mauro Marques'
  },
  'cardCredit': {
    'id': 20095296,
    'orderId': 33984144,
    'administration': 'Visa',
    'number': '441524******1524'
  },
  'installmentPayment': 5,
  'installmentAmount': '99.98',
  'installmentOtherAmount': '99.98',
  'corporate': 0,
  'rate': false,
  'invoiceKey': '35170647960950089785550160000346001084915363',
  'deliveryAt': 'Terça-feira, 27 de Junho',
  'emailTemplateRef': ''
};

const invoiceJSON = {
  'id': 32736329,
  'customer': {
    'id': 17319942,
    'name': 'Cristiano Pereira Abade',
    'nickname': 'Cristiano Pereira',
    'mail': 'hostinhomello10@gmail.com',
    'cpfCnpj': '04116114537',
    'uuid': '4cc60f30-268d-461d-a972-afdeeb2f397e'
  },
  'payment': {
    'id': 10,
    'description': 'Cartão de Crédito Visa'
  },
  'orderCustomer': '5315500256268252',
  'createdAt': '2017-04-26 09:06:54',
  'freight': '27.30',
  'amount': '495.00',
  'term': 5,
  'expectedDate': '04/05/2017',
  'expectedDateWeek': 'Quinta-feira, 04 de Maio',
  'products': [
    {
      'id': 38868722,
      'orderId': 32736329,
      'product': '0230011',
      'model': '00',
      'description': 'Kit 3 em 1 Britânia com Liquidificador Batedeira',
      'brand': 'britânia',
      'amount': '199.90',
      'quantity': '02',
      'term': 5,
      'store': 204,
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'totalItem': '399.80',
      'expectedDate': 'Sexta-feira, 11 de Agosto',
      'expectedDateMessage': 'Entrega prevista para Sexta-feira, 11 de Agosto'
    },
    {
      'id': 38868721,
      'orderId': 32736329,
      'product': '0887491',
      'model': '00',
      'description': 'Sanduicheira/Mini Grill Cadence Easy Meal Color',
      'brand': 'cadence',
      'amount': '59.90',
      'quantity': '01',
      'term': 5,
      'store': 204,
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'totalItem': '59.90',
      'expectedDate': 'Sexta-feira, 11 de Agosto',
      'expectedDateMessage': 'Entrega prevista para Sexta-feira, 11 de Agosto'
    },
    {
      'id': 38868720,
      'orderId': 32736329,
      'product': '493074',
      'model': '00',
      'description': 'Troca Certa',
      'brand': 'LUISASEG',
      'amount': '8.00',
      'quantity': '01',
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'totalItem': '8.00',
      'expectedDate': 'Sexta-feira, 04 de Agosto',
      'financialServiceDescription': 'TC',
      'expectedDateMessage': 'Entrega prevista para Sexta-feira, 04 de Agosto'
    }
  ],
  'contracts': [
    {
      'orderId': 32736329,
      'productId': 23001100,
      'slipId': 176495,
      'erpOrderId': 369492504,
      'invoiceAddress': {
        'branchId': 630,
        'invoiceId': 509172,
        'invoiceDate': '27/04/2017',
        'customerName': 'CRISTIANO PEREIRA ABADE',
        'invoiceType': ' ',
        'erpId': 369492504,
        'address': 'CARLOS PIVA, 493 CASA',
        'neighborhood': 'JD TRES MARIAS',
        'zipcode': 8331,
        'zipcodeComplement': 180,
        'zipcodeComplete': '8331-180',
        'city': 'SAO PAULO',
        'state': 'SP',
        'phoneAreaCode': 11,
        'phoneNumber': 20158406,
        'cgcd': '4116114537'
      },
      'invoices': [
        {
          'branchId': 630,
          'invoiceId': 509172,
          'invoiceDate': '27/04/2017',
          'customerName': 'CRISTIANO PEREIRA ABADE',
          'invoiceType': ' ',
          'erpId': 369492504,
          'address': 'CARLOS PIVA, 493 CASA',
          'neighborhood': 'JD TRES MARIAS',
          'zipcode': 8331,
          'zipcodeComplement': 180,
          'zipcodeComplete': '8331-180',
          'city': 'SAO PAULO',
          'state': 'SP',
          'phoneAreaCode': 11,
          'phoneNumber': 20158406,
          'cgcd': '4116114537'
        }
      ]
    },
    {
      'orderId': 32736329,
      'productId': 88749100,
      'slipId': 176495,
      'erpOrderId': 369492504,
      'invoiceAddress': {
        'branchId': 630,
        'invoiceId': 509172,
        'invoiceDate': '27/04/2017',
        'customerName': 'CRISTIANO PEREIRA ABADE',
        'invoiceType': ' ',
        'erpId': 369492504,
        'address': 'CARLOS PIVA, 493 CASA',
        'neighborhood': 'JD TRES MARIAS',
        'zipcode': 8331,
        'zipcodeComplement': 180,
        'zipcodeComplete': '8331-180',
        'city': 'SAO PAULO',
        'state': 'SP',
        'phoneAreaCode': 11,
        'phoneNumber': 20158406,
        'cgcd': '4116114537'
      },
      'invoices': [
        {
          'branchId': 630,
          'invoiceId': 509172,
          'invoiceDate': '27/04/2017',
          'customerName': 'CRISTIANO PEREIRA ABADE',
          'invoiceType': ' ',
          'erpId': 369492504,
          'address': 'CARLOS PIVA, 493 CASA',
          'neighborhood': 'JD TRES MARIAS',
          'zipcode': 8331,
          'zipcodeComplement': 180,
          'zipcodeComplete': '8331-180',
          'city': 'SAO PAULO',
          'state': 'SP',
          'phoneAreaCode': 11,
          'phoneNumber': 20158406,
          'cgcd': '4116114537'
        }
      ]
    }
  ],
  'slipProducts': [
    {
      'product': '088749100',
      'image': '088749100.jpg',
      'name': 'Sanduicheira/Mini Grill Cadence Easy Meal Color',
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'skuMarketPlace': null,
      'quantity': '01',
      'totalItem': '63.42',
      'scheduledDeliveryDate': null,
      'scheduledPeriod': null,
      'expectedDateMessage': null
    },
    {
      'product': '023001100',
      'image': '023001100.jpg',
      'name': 'Kit 3 em 1 Britânia com Liquidificador Batedeira',
      'idSeller': 'magazineluiza',
      'nameSeller': 'Magazine Luiza',
      'skuMarketPlace': null,
      'quantity': '02',
      'totalItem': '423.12',
      'scheduledDeliveryDate': null,
      'scheduledPeriod': null,
      'expectedDateMessage': null
    }
  ],
  'deliveryAddress': {
    'id': 31584028,
    'orderId': 32736329,
    'address': 'CARLOS PIVA',
    'district': 'Jardim três Marias',
    'city': 'SAO PAULO',
    'state': 'SP',
    'zipCode': '08331180 ',
    'number': '493',
    'complement': 'Casa',
    'name': 'Cristiano Pereira Abade'
  },
  'cardCredit': {
    'id': 19591936,
    'orderId': 32736329,
    'administration': 'Visa',
    'number': '****6597'
  },
  'installmentPayment': 6,
  'installmentAmount': '82.50',
  'installmentOtherAmount': '82.50',
  'corporate': 0,
  'rate': false,
  'tax': 'sem Juros',
  'datePaymentBillet': 'Sexta-feira, 28 de Abril',
  'emailTemplateRef': '86-8806'
};

const finalOrderJSON = deepmerge.all([newOrderJSON, invoiceJSON, pickUpOrderJSON]);

jsonView(newOrderJSON, 'newOrderJSON');
jsonView(invoiceJSON, 'invoiceJSON');
jsonView(pickUpOrderJSON, 'pickUpOrderJSON');
jsonView(finalOrderJSON, 'finalOrderJSON');
debugView(deepmerge.all, 'deepmerge.all');

console.log(newOrderJSON.toString());