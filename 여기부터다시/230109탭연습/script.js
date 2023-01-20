function superlist(value) {
  if (value == 'open1') {
    document.getElementById('apple').style.display = 'block' ;
    document.getElementById('orange').style.display = 'none' ;
    document.getElementById('banana').style.display = 'none' ;
  }

  if (value == 'open2') {
    document.getElementById('apple').style.display = 'none' ;
    document.getElementById('orange').style.display = 'block' ;
    document.getElementById('banana').style.display = 'none' ;
  }

  if (value == 'open3') {
    document.getElementById('apple').style.display = 'none' ;
    document.getElementById('orange').style.display = 'none' ;
    document.getElementById('banana').style.display = 'block' ;
  }




}