cd %~dp0
mxmlc -locale=en_US -source-path="." -include-resource-bundles=CarJumper -output "CarJumper.properties.swf"
copy CarJumper.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\carJumper\locale\en_US\ 
copy CarJumper.properties.swf "..\..\cognifitSocialFlex - Branch - 06072012\src\media\games\carJumper\locale\en_US\"
pause