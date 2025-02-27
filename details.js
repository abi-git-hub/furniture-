//let iconCart = document.querySelector('icon-cart');
  //          let closeBtn = document.querySelector('.cartTab .close');
    //        let body = document.querySelector('body');
//
  //          iconCart.addEventListener('click', () => {
    //            body.classList.toggle('activeTabCart');
      //      })
        //    closeBtn.addEventListener('click', () => {
          //      body.classList.toggle('activeTabCart');
            //})


            //function openPopup(){
            //    windows.alert("Hiiiii....");
            //}



            function upadateCaseNumber(product, price, isIncreasing){
              const caseInput = document.getElementById(product + '-number');
              let caseNumber = caseInput.value;
                      if(isIncreasing){
                          caseNumber = parseInt(caseNumber) + 1;
                      }
                      
              else if(caseNumber > 0){
                     caseNumber = parseInt(caseNumber) - 1;
                   }
                  
                  caseInput.value = caseNumber;
              // total value 
              const caseTotal = document.getElementById(product + '-total');
              caseTotal.innerText = caseNumber * price;
              calculateTotal();
              }
          
          
              function getInputvalue(product){
                  const productInput = document.getElementById(product + '-number');
                  const productNumber = parseInt(productInput.value);
                  return productNumber;
              }
              function calculateTotal(){
                  const phoneTotal = getInputvalue('phone') * 6000;
                  const caseTotal = getInputvalue('case') * 9000;
                  const case1Total = getInputvalue('case1') * 8000;
                  const case2Total = getInputvalue('case2') * 2000;
                  const case3Total = getInputvalue('case3') * 7000;
                  const case4Total = getInputvalue('case4') * 9000;
                  const case5Total = getInputvalue('case5') * 5000;
                  const case6Total = getInputvalue('case6') * 8500;
                  const subTotal = phoneTotal + caseTotal + case1Total + case2Total + case3Total + case4Total + case5Total + case6Total;
                  const deliveryFee = subTotal / 10;
                  const totalPrice = subTotal + deliveryFee;
          
                   
                  document.getElementById('sub-total').innerText = subTotal;
                  document.getElementById('deliveryFee-amount').innerText = deliveryFee;
                  document.getElementById('total-price').innerText = totalPrice;
          
              }
          
          
          
          
          
          document.getElementById('case-plus').addEventListener('click',function(){
                  // const caseInput = document.getElementById('case-number');
                  // const caseNumber = caseInput.value;
                  // caseInput.value = parseInt(caseNumber) + 1;
             upadateCaseNumber('case', 9000 ,true);
          });
          
          document.getElementById('case-minus').addEventListener('click',function(){
              // const caseInput = document.getElementById('case-number');
          //     const caseNumber = caseInput.value;
          //    if(caseInput.value > 1){
          //         caseInput.value = parseInt(caseNumber) - 1;
          //    }
          upadateCaseNumber('case', 9000, false);
          });
          
          // chair price..................................................................................................... 
          document.getElementById('phone-plus').addEventListener('click',function(){
              upadateCaseNumber('phone',6000, true);
          });
          
          
          document.getElementById('phone-minus').addEventListener('click',function(){
              upadateCaseNumber('phone',6000 , false);
          });

          //KKKKKKKKKKKKKKK
          document.getElementById('case1-plus').addEventListener('click',function(){
            upadateCaseNumber('case1',8000, true);
        });
        
        
        document.getElementById('case1-minus').addEventListener('click',function(){
            upadateCaseNumber('case1',8000 , false);
        });

        //llllllllllllll
        document.getElementById('case2-plus').addEventListener('click',function(){
          upadateCaseNumber('case2',2000, true);
      });
      
      
      document.getElementById('case2-minus').addEventListener('click',function(){
          upadateCaseNumber('case2',2000 , false);
      });
      //hhhhhhhhhhhhhhhh
      document.getElementById('case3-plus').addEventListener('click',function(){
        upadateCaseNumber('case3',7000, true);
    });
    
    
    document.getElementById('case3-minus').addEventListener('click',function(){
        upadateCaseNumber('case3',7000 , false);
    });

    //dddddddddddd
    document.getElementById('case4-plus').addEventListener('click',function(){
      upadateCaseNumber('case4',9000, true);
  });
  
  
  document.getElementById('case4-minus').addEventListener('click',function(){
      upadateCaseNumber('case4',9000 , false);
  });

  //sssssssssssss
  document.getElementById('case5-plus').addEventListener('click',function(){
    upadateCaseNumber('case5',5000, true);
});


document.getElementById('case5-minus').addEventListener('click',function(){
    upadateCaseNumber('case5',5000 , false);
});

//wwwwwwwwwwww
document.getElementById('case6-plus').addEventListener('click',function(){
  upadateCaseNumber('case6',8500, true);
});


document.getElementById('case6-minus').addEventListener('click',function(){
  upadateCaseNumber('case6',8500 , false);
});