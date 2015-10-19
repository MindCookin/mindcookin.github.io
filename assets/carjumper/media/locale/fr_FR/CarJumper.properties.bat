cd %~dp0
mxmlc -locale=fr_FR -source-path="." -include-resource-bundles=CarJumper -output "CarJumper.properties.swf" 
copy CarJumper.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\carJumper\locale\fr_FR\ 
copy CarJumper.properties.swf "..\..\cognifitSocialFlex - Branch - 06072012\src\media\games\carJumper\locale\fr_FR\"
pause