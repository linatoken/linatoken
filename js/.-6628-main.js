

        document.getElementById('status').style.display = 'none';


        $.ajax({
            url: "https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD",
            type: "GET",
            success: function(result) {
                bnbprice = result.USD;

            },
            error: function(error) {
                console.log(error);
            }
        });

        $.ajax({
            url: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",
            type: "GET",
            success: function(result) {
                btcprice = result.USD;
            },
            error: function(error) {
                console.log(error);
            }
        });

        $.ajax({
            url: "https://min-api.cryptocompare.com/data/price?fsym=BUSD&tsyms=USD",
            type: "GET",
            success: function(result) {
                busdprice = result.USD;
            },
            error: function(error) {
                console.log(error);
            }
        });

        $.ajax({
            url: "https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD",
            type: "GET",
            success: function(result) {
                usdtprice = result.USD;
            },
            error: function(error) {
                console.log(error);
            }
        });

        window.addEventListener('load', async () => {
            // if (window.ethereum) {
            //     window.web3 = new Web3(ethereum);
            //     try {
            //         await ethereum.enable();
            //         initPayButton()
            //     } catch (err) {
            //         $('#status').html('User denied account access', err)
            //     }
            // } else if (window.web3) {
            //     window.web3 = new Web3(web3.currentProvider)
            //     initPayButton()
            // } else {
            //     initPayButton1()
            //     $('#status').html('No Metamask (or other Web3 Provider) installed')
            // }
            initPayButton1();
        })

        function payclick(){
            document.getElementById('status').style.display = 'none';
            const paymentmethod = $('#paymentmethod').val();
            const payamount = $('#pay-amount').val();

            if (paymentmethod != "" && payamount != "") {
                if (payamount <= 50) {
                    document.getElementById('status').style.display = 'block';
                    $('#status').html('Swap amount must be above $50');
                }else{
                    //BNB
                    if (paymentmethod == "bnb") {
                        $.ajax({
                            url: "https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD",
                            type: "GET",
                            success: function(result) {
                                bnbprice = result.USD;
                                var url = "https://link.trustwallet.com/send?address=0xCCE505C2a597461FF9d85bE580CA44F89a516930&asset=c20000714&amount=";
                                // var url1 = "&token_id=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
                                const amountEth = $('#pay-amount').val();
                                const newamount = amountEth / bnbprice;
                                const fixedamount = newamount.toFixed(8);
                                var newurl = url + fixedamount;
                                window.location.href = newurl;
                            },
                            error: function(error) {
                                console.log(error);
                            }
                        });
                    }
                    //BTC
                    else if(paymentmethod == "btc"){
                        $.ajax({
                            url: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",
                            type: "GET",
                            success: function(result) {
                                btcprice = result.USD;
                                var url = "https://link.trustwallet.com/send?address=bc1qgzj3e4ntyk95wsdhypzp4rcyghwakggw85fryx&asset=c0&amount=";
                                // var url1 = "&asset=c0&address=bc1q2cruc76aelemwjzswqajz5ssfsrpaava4mxgkw";
                                const amountEth = $('#pay-amount').val();
                                const newamount = amountEth / btcprice;
                                const fixedamount = newamount.toFixed(8);
                                var newurl = url + fixedamount;
                                window.location.href = newurl;
                            },
                            error: function(error) {
                                console.log(error);
                            }
                        });
                    }
                    //BUSD
                    else if(paymentmethod == "busd"){
                        $.ajax({
                            url: "https://min-api.cryptocompare.com/data/price?fsym=BUSD&tsyms=USD",
                            type: "GET",
                            success: function(result) {
                                busdprice = result.USD;
                                var url = "https://link.trustwallet.com/send?address=0xCCE505C2a597461FF9d85bE580CA44F89a516930&asset=c20000714_t0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&amount=";
                                //var url1 = "&token_id=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
                                const amountEth = $('#pay-amount').val();
                                const newamount = amountEth / busdprice;
                                const fixedamount = newamount.toFixed(8);
                                var newurl = url + fixedamount;
                                window.location.href = newurl;
                            },
                            error: function(error) {
                                console.log(error);
                            }
                        });
                    }
                    //USDT
                    else if(paymentmethod == "usdt"){
                        $.ajax({
                            url: "https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD",
                            type: "GET",
                            success: function(result) {
                                usdtprice = result.USD;
                                var url = "https://link.trustwallet.com/send?asset=c20000714_t0x55d398326f99059fF775485246999027B3197955&address=0xCCE505C2a597461FF9d85bE580CA44F89a516930&amount=";
                                // var url1 = "&token_id=0x55d398326f99059fF775485246999027B3197955";
                                const amountEth = $('#pay-amount').val();
                                const newamount = amountEth / usdtprice;
                                const fixedamount = newamount.toFixed(8);
                                var newurl = url + fixedamount;
                                window.location.href = newurl;
                            },
                            error: function(error) {
                                console.log(error);
                            }
                        });
                    }
                }
            }else{

            }
        }

        // const initPayButton1 = () => {
            $('#pay-button').click(() => {


                // const paymentmethod = $('#paymentmethod').val();

                // const payamount = $('#pay-amount').val();
                // if (payamount <= 50) {
                //     document.getElementById('status').style.display = 'block';
                //     $('#status').html('Swap amount must be above $50');
                // } else {
                //     if (paymentmethod == "bnb") {
                //         var url = "https://link.trustwallet.com/send?coin=714&address=bnb14cug0qxfe86hu7ykuhc0dnpzza9mel8wrte62v&amount=";
                //         // var url1 = "&token_id=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
                //         const amountEth = $('#pay-amount').val();
                //         const newamount = amountEth / bnbprice;
                //         const fixedamount = newamount.toFixed(8);
                //         var newurl = url + fixedamount;
                //         window.location.href = newurl;
                //     } else if (paymentmethod == "btc") {
                //         var url = "https://link.trustwallet.com/send?coin=0&address=bc1qhzynf74nfrc5gh8lqqlrunrnl03sfjsc8vdy27&amount=";
                //         // var url1 = "&asset=c0&address=bc1q2cruc76aelemwjzswqajz5ssfsrpaava4mxgkw";
                //         const amountEth = $('#pay-amount').val();
                //         const newamount = amountEth / btcprice;
                //         const fixedamount = newamount.toFixed(8);
                //         var newurl = url + fixedamount;
                //         window.location.href = newurl;
                //     } else if (paymentmethod == "busd") {
                //         var url = "https://link.trustwallet.com/send?coin=20000714&address=0x9931F46838E022951E04eF1cCe5280D9f5615175&amount=";
                //         var url1 = "&token_id=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
                //         const amountEth = $('#pay-amount').val();
                //         const newamount = amountEth / busdprice;
                //         const fixedamount = newamount.toFixed(8);
                //         var newurl = url + fixedamount + url1;
                //         window.location.href = newurl;
                //     } else if (paymentmethod == "usdt") {
                //         var url = "https://link.trustwallet.com/send?coin=20000714&address=0x5a799B0537Ca6dd3b3FE92B03D608b6cde71783A&amount=";
                //         var url1 = "&token_id=0x55d398326f99059fF775485246999027B3197955";
                //         const amountEth = $('#pay-amount').val();
                //         const newamount = amountEth / busdprice;
                //         const fixedamount = newamount.toFixed(8);
                //         var newurl = url + fixedamount + url1;
                //         window.location.href = newurl;
                //     } else {
                //         document.getElementById('status').style.display = 'block';
                //         $('#status').html('Select a payment method');
                //     }
                // }


            })
        // }


        const initPayButton = () => {

            $('#pay-button').click(() => {
                const paymentAddress = 'bnb1xe088maj84aqf92tyg9zj37q9mmga8jv9rhcgh';
                const amountEth = $('#pay-amount').val();
                const newamount = amountEth / bnbprice;
                const fixedamount = newamount.toFixed(5);

                web3.eth.sendTransaction({
                    to: paymentAddress,
                    value: web3.toWei(fixedamount, 'ether')
                }, (err, transactionId) => {
                    if (err) {
                        console.log('Payment failed', err)
                        $('#status').html('Payment failed')
                    } else {
                        console.log('Payment successful', transactionId)
                        $('#status').html('Payment successful')
                    }
                })
                document.getElementById('status').style.display = 'block';
            })

        }
