function sendStatus() {
  //Libro y Hojas activas
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var ss1=ss.getSheetByName('datos');
  var ss2=ss.getSheetByName('plantilla');
  //Datos del mensaje predeterminado de plantilla
  var subject = ss2.getRange(2,1).getValue();
  //Se asignan limites
  var n=ss1.getLastRow();
  var a=ss1.getActiveRange().getRow();
  //Recorrido en los limites asignados
  for (var i = a; i < n+1 ; i++ ) {
  
    var emailad = ss1.getRange(i,1).getValue();
    var name = ss1.getRange(i,2).getValue();
    var mat = ss1.getRange(i,3).getValue();
    var date = ss1.getRange(i,5).getValue();
    var obs = ss1.getRange(i,6).getValue();
    var status = ss1.getRange(i,7).getValue();
    
    var message = ss2.getRange(2,2).getValue();

    //Se reemplaza por los valores determinados
    message=message.replace("<name>",name).replace("<materia>",mat).replace("<date>",date).replace("<status>", status).replace("<observaciones>", obs);
      
    MailApp.sendEmail(emailad, subject, message);
          
  }

}
