import * as functions from 'firebase-functions';
import { dialogflow } from 'actions-on-google'

const app = dialogflow()

app.intent('Default Welcome Intent', conv => {
    conv.ask('Hi, how is it going?')
})

app.intent('Goodbye', conv => {
    conv.close('See you later!')
})

app.intent('Default Fallback Intent', conv => {
    conv.ask(`I didn't understand. Can you tell me something else?`)
})

exports.fulfillment = functions.https.onRequest(app);
