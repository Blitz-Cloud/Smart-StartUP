

function checkProfile {
  cd ../_config
  ls "*.ps1"
}

function runPreset {
  param (
    $cmdNr
  )
  switch ($cmdNr) {
    1 { checkProfile}
  }
}
 