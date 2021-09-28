function validarEsporte()
{

	var cont=0;
	if( document.getElementById("spo1").checked )	
		cont++;
	if( document.getElementById("spo2").checked )	
		cont++; 
	if( document.getElementById("spo3").checked )	
		cont=cont+1;
	if( document.getElementById("spo4").checked )	
		cont++;
	if( document.getElementById("spo5").checked )	
		cont++;
	if( document.getElementById("spo6").checked )	
		cont++;
	if( document.getElementById("spo7").checked )	
		cont++;
	
	if(cont>=1)
		return true;
	else	
		{	
			alert("Deve escolher um esporte");
			return false;		
		}
		
}

/*function validarData()
{
	var dia= document.getElementById("dia");
	var mes= document.getElementById("mes");
	var ano= document.getElementById("ano");
	
	//alert( dia.value + "-" + mes.value + "-" + ano.value );
	
	if( dia.value > 0 && dia.value <= 31) // >0 ou >=1
	{
			if(mes.value >= 1 && mes.value <=12 )
			{
					if( ano.value >=1900 && ano.value<=2021)
					{
						return true;
					}
					else
						{   alert("Ano Invalido"); return false;   }
			}
			else
				{  alert("Mes Invalido");return false;   }
	}
	else
		{alert("Dia Invalido");	 return false;   }

}*/