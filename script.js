const ACCESS_TOKEN =
  "ya29.a0Aa4xrXOiB2JO4iJNIkE-g8F8P_intVw9UX-d2dNSnErywgprgHdGAMkVxCAlHIlx6B9APmtU2iVKuszkTwJ9DeO036Ucdf1zpfomhllVpqP7E3ZqRSJ6xRhgcRADilbWgP7uwi02ztdvhph4BXIh_SUvchrwaCgYKATASARESFQEjDvL9wn7mAPYsgZfcQLk_fcDisg0163";
 
const SHEET_ID = '1tlJWe-BuVXHvbyO6CzpPMhX53auvy74_9nPdtutyZbk';

//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();


function onRegistrarTarea() {

  window.alert('Tarea registrada');
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
