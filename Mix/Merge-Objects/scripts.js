const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });

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

const finalOrderJSON = deepmerge(pickUpOrderJSON, newOrderJSON);

firstView(finalOrderJSON);
debugView(deepmerge);