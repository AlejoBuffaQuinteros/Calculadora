document.querySelector('#calcular').addEventListener('click', function () {
      const n1 = parseInt(document.querySelector('.n1').value);
      const n2 = parseInt(document.querySelector('.n2').value);
      let metros;
      metros = n1/1000;
      r = metros * n2 ;
      Resultado =(r + ' metros  ');
      // alert(Resultado)
      document.querySelector('#resul').innerHTML= Resultado

   });



