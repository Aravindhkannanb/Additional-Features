import React from "react";
import GooglePayButton from '@google-pay/button-react';
const Pay=()=>{
    return(
        <div>
            <GooglePayButton
            environment="TEST"
            paymentRequest={
                {apiversion:2,
                apiVersionMinor:0,
            allowPaymentMethods:[{
                type:'CARD',
                parameter:{
                    allowedAuthMethods:['PAN_ONLY','CRYTOGRAM_3DS'],
                    allowedCardNetworks:["MASTERCARD",'VISA']
                },
                tokenizationSpecification:{
                    type:'PAYMENT_GATEWAY',
                    parameters:{
                        gateway:"example",
                        gatewayMerchantId:"exampleGatewayMerchantId"
                    }
                }
            }],
            merchantInfo:{
                merchantId:'12345678901234567890',
                merchantName:'Demo Merchant'
            },
            transactionInfo:{
                totalPriceStatus:"FINAL",
                totalPriceLable:"Total",
                totalPrice:"100.0",
                currencyCode:"USD",
                countryCode:"US"
            },
            
        }
            }
            onLoadPaymentData={paymentRequest=>{console.log(paymentRequest)}}
            onPaymentAuthorized={paymentData=>{
                console.log(paymentData);
                return {transactionState:"SUCCESS"}
            }}
            existingPaymentMethodRequired='false'
        
            buttonColor="Black"
            buttonType="buy"
            
            ></GooglePayButton>
        </div>
    )
}
export default Pay;