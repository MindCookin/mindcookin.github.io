cd %~dp0
mxmlc -locale=es_ES -source-path="." -include-resource-bundles=CarJumper -output "CarJumper.properties.swf" 
copy CarJumper.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\carJumper\locale\es_ES\ 
copy CarJumper.properties.swf "..\..\cognifitSocialFlex - Branch - 06072012\src\media\games\carJumper\locale\es_ES\"
pause