cd %~dp0
mxmlc -locale=es_MX -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf" 
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\moveTheBall\locale\es_MX\ 
