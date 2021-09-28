
function arquivo_JSON(){



    var frmJ = {
              nome: "",
              nickname: "",			
              birth_date: "",
              cpf: "",
              team_id: "",		
              sport: []  
  
            }
            
  
  
  
  var nome = document.getElementById("nome").value;
  frmJ.nome =  nome;
  
  var apelido = document.getElementById("nickname").value;
  frmJ.nickname = apelido;
  
  var cpf = document.getElementById("cpf").value;
  frmJ.cpf = cpf;
  
  /*
  var dia= document.getElementById("dia").value;
  var mes= document.getElementById("mes").value;
  var ano= document.getElementById("ano").value;
  
  frmJ.birth_date = dia+"/"+mes+"/"+ano;
 */ 
  
      if( document.getElementById("spo1").checked )	
           frmJ.sport.push(document.getElementById("spo1").value);
      if( document.getElementById("spo2").checked )	
          frmJ.sport.push(2);
      if( document.getElementById("spo3").checked )	
          frmJ.sport.push(3);
      if( document.getElementById("spo4").checked )	
          frmJ.sport.push(4);
      if( document.getElementById("spo5").checked )	
          frmJ.sport.push(5);
      if( document.getElementById("spo6").checked )	
          frmJ.sport.push(6);
      if( document.getElementById("spo7").checked )		
          frmJ.sport.push(7);
      
      frmJ.team_id = document.getElementById("team_id").value;
      
      
          var json = JSON.stringify(frmJ);        
          
          
        document.write("<h1>Dados em JSON</h1>");
        document.write(json);	
  
          
  }