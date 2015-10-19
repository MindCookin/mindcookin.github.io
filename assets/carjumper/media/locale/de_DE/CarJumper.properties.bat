cd %~dp0
mxmlc -locale=de_DE -source-path="." -include-resource-bundles=CarJumper -output "CarJumper.properties.swf" 
copy CarJumper.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\carJumper\locale\de_DE\
copy CarJumper.properties.swf "..\..\cognifitSocialFlex - Branch - 06072012\src\media\games\carJumper\locale\de_DE\"
pause