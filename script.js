const ACCESS_TOKEN =
  "ya29.a0Aa4xrXOAYp8c8JKNoFsrcexpjz6mPGSJGKe747EVpLOKzq9Bu2kbCa_AZbgmzWFAJSs8dp5ndvaIOeiULkhyQ4zbTvORAYnxyXiSvk6Rs7a87w_eOiuAwHCMKIBkv8CU394mSiUeuUrLeVbCXHhfvKFXXygJaCgYKATASARESFQEjDvL9XM6IrLKpvavJiaO2AMeU6Q0163";
 
const SHEET_ID = '1tlJWe-BuVXHvbyO6CzpPMhX53auvy74_9nPdtutyZbk';

//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();


function onRegistrarTarea() {

  alert("TAREA REGISTRADA");
  //Obtenemos los datos del formulario
  const tarea = document.getElementById('tarea').value;
  const descripcion = document.getElementById('descripcion').value;
  const estado = document.getElementById('estado').value;
  const origen = document.getElementById('origen').value;
  const fecha = document.getElementById('fecha').value;

  //Creamos el JSON que espera nuestra API
  let data = {};
  
  let values = [];
  
  let fila = [tarea, descripcion, estado, origen, fecha];

  values.push(fila);
  
  //Verificar que coincida con el nombre de la hoja de nuestro sheet
  data.range = "hojaTarea";
  
  data.majorDimension = "ROWS";
  data.values = values;

  //Invocamos al método POST de la API
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaTarea:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {

    });
  });

  //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
  document.getElementById('tarea').value = "";
  document.getElementById('descripcion').value = "";
  document.getElementById('fecha').valueAsDate = new Date();
  document.getElementById('origen').value="facu";
  document.getElementById('estado').value="pendiente";
  

};
