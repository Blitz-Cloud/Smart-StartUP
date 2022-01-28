function checkProfile {
  Set-Location ./src/_config
  Get-ChildItem "*.ps1"
}
function runPreset {
  param (
    $cmdNr
  )
  switch ($cmdNr) {
    1 { checkProfile}
  }
}
 