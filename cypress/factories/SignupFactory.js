var faker = require('faker')
var document = require('gerador-validador-cpf')

const createCourier = () => {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    const courier =
    {
        "name": `${firstName} ${lastName}`,
        "document": document.generate(),
        "email": faker.internet.email(firstName),
        "whatsapp": "123456789",
        "address": {
            "postal_code": "04534011",
            "street": "Rua Joaquim Floriano",
            "number": "1000",
            "extra_information": "Ap 60",
            "neighborhood": "Itaim Bibi",
            "city_uf": "São Paulo/SP"
        },
        "delivery_method": "Moto",
        "cnh": "cnh-digital.jpg"
    }

    return courier
}

export default createCourier