function displayValue(val) {
  const display = document.getElementById("Display");
  if (display.value === 'Please Provide Numbers') {
    display.value = ''; // clear the message first
  }
  display.value += val;
}


document.getElementById("C").onclick=function(){
    document.getElementById("Display").value=''
}
var values=document.getElementById('Display')
var res=document.getElementById('eq')
res.onclick=()=>{
  try {
    values.value = eval(values.value);
  } catch {
    values.value = 'Please Provide Numbers';
  }
};
