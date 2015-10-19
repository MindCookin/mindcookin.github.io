cd %~dp0
mxmlc -locale=it_IT -source-path="." -include-resource-bundles=CarJumper -output "CarJumper.properties.swf" 
copy CarJumper.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\carJumper\locale\it_IT\ 
copy CarJumper.properties.swf "..\..\cognifitSocialFlex - Branch - 06072012\src\media\games\carJumper\locale\it_IT\"
pause