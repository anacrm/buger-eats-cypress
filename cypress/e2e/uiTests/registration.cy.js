/// <reference types="cypress" />
import SignupPage from "../../pages/SignupPage"
import createCourier from "../../factories/SignupFactory"


//suite
describe('Registration', () => {
    const signup = new SignupPage()

    it('User should be a courier', () => {

        var courier = createCourier()

        signup.go()
        signup.fillForm(courier)
        signup.submit()
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signup.modalContentShouldBe(expectedMessage)

    })
    it('User should not register with invalid document', () => {

        var courier = createCourier()
        courier.document = '00000014141AA'

        signup.go()
        signup.fillForm(courier)
        signup.submit()
        signup.alertMessageShoulBe("Oops! CPF inválido")


    })
    it('User should not register with invalid email', () => {

        var courier = createCourier()
        courier.email = 'ana.gmail.com'

        signup.go()
        signup.fillForm(courier)
        signup.submit()
        signup.alertMessageShoulBe("Oops! Email com formato inválido.")
    })

    describe('Required fields', () => {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'document', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postal_code', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'driver_license', output: 'Adicione uma foto da sua CNH' },
        ]

        beforeEach(() => {
            signup.go()
            signup.submit()
        })

        messages.forEach((message) => {
            it(`${message.field} is required`, () => {
                signup.alertMessageShoulBe(message.output)
            })
        })
    })
})